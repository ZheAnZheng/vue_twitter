<template>
  <setting-layout>
    <div class="setting-container">
      <BaseInput
        class="setting-input"
        :form-items="formItems"
        @after-over-name-length="handleOverLength"
      />
      <BaseButton
        @handleClick="updateUserInfo"
        class="setting-button"
        :position="'right'"
        :mode="'action'"
        :isDisabled="isProcessing"
        >儲存</BaseButton
      >
    </div>
  </setting-layout>
</template>

<script>
import SettingLayout from "../components/layouts/SettingLayout.vue";
import BaseInput from "../components/UI/BaseInput.vue";
import BaseButton from "../components/UI/BaseButton.vue";
import userAPI from "../apis/users";
import { toast } from "../utils/helper";
import { mapState } from "vuex";

export default {
  name: "SettingPage",
  components: {
    SettingLayout,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      formItems: [
        {
          id: 0,
          name: "帳號",
          value: "",
          isError: false,
          isBlank: false,
          prefix: "@",
        },
        {
          id: 1,
          name: "名稱",
          value: "",
          isError: false,
        },
        {
          id: 2,
          name: "Email",
          value: "",
          isError: false,
        },
        {
          id: 3,
          name: "密碼",
          type: "password",
          value: "",
          isError: false,
          isBlank: false,
        },
        {
          id: 4,
          name: "密碼確認",
          type: "password",
          value: "",
          isError: false,
          isBlank: false,
        },
      ],
      isAuthenticated: false,
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.setUser();
  },
  methods: {
    // 處理名稱超過50個字的函式
    handleOverLength() {
      this.formItems[1].isError = true;
    },
    // 將currentUser的資料放入input中的函式
    setUser() {
        this.isAuthenticated = true;

        this.formItems[0].value = this.currentUser.account;
        this.formItems[1].value = this.currentUser.name;
        this.formItems[2].value = this.currentUser.email;
    },
    // 透過伺服器更新個人資訊的函式
    async updateUserInfo() {
      try {
        this.isProcessing = true;
        const id = this.currentUser.id;
        const password = this.formItems[3].value;
        const passwordCheck = this.formItems[4].value;
        const formData = new FormData();

        // 當帳號是空白的提示訊息
        if (this.formItems[0].value.length < 1) {
          this.formItems[0].isBlank = true
          return
        } else {
          // 將提示訊息還原
          this.formItems[0].isBlank = false
        }

        // 當密碼輸入不相同時
        if (password !== passwordCheck) {
          this.formItems[3].isError = true;
          this.formItems[4].isError = true;
          return;
        } else {
          // 將提示訊息還原
          this.formItems[3].isError = false;
          this.formItems[4].isError = false;
        }

        // 當名稱字數超過50個時，無法送出表單
        if (this.formItems[1].value.length > 50) return;

        // 將帳號/名稱/email/密碼/自我介紹/個人圖像/背景圖片放入formData中
        formData.append("account", this.formItems[0].value);
        formData.append("name", this.formItems[1].value);
        formData.append("email", this.formItems[2].value);
        formData.append("password", this.formItems[3].value);
        formData.append("introduction", this.currentUser.introduction);
        formData.append("avatar", this.currentUser.avatar);
        formData.append("cover", this.currentUser.cover);

        // 向API傳送更新的資訊
        const { data } = await userAPI.update({
          userId: id,
          formData,
        });

        // 當帳號重覆時
        if (
          data.status === "error" &&
          data.message === "Account should be unique."
        ) {
          console.log(data.message);
          this.formItems[0].isError = true;
          return;
        } else if (
          data.status === "error" &&
          data.message === "Email should be unique."
        ) {
          // 當email重覆時
          console.log(data.message);
          this.formItems[2].isError = true;
          return;
        } else {
          // 更新成功時的訊息
          toast.fireSuccess("更新成功");
          this.$router.push("/main");
        }
      } catch (error) {
        console.log("Error", error);
        toast.fireError("目前無法修改設定，請稍後再試");
      } finally {
        this.isProcessing = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.setting-container {
  margin: 1rem;
  > .setting-link > .setting-button {
    color: var(--white-text-color);
    width: 5rem;
    height: 100%;
    padding: 0.5rem 0;
  }
}
</style>

<template>
  <setting-layout>
    <form class="setting-container" @submit.prevent.stop="updateUserInfo">
      <BaseInput
        class="setting-input"
        :form-items="formItems"
        @after-over-name-length="handleOverLength"
      />
      <BaseButton
        class="setting-button"
        :position="'right'"
        :mode="'action'"
        :isDisabled="isProcessing"
        >儲存</BaseButton
      >
    </form>
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
          inputName: "account",
          value: "",
          isError: false,
          isBlank: false,
          prefix: "@",
        },
        {
          id: 1,
          name: "名稱",
          inputName: "name",
          value: "",
          isError: false,
        },
        {
          id: 2,
          name: "Email",
          inputName: "email",
          value: "",
          isError: false,
        },
        {
          id: 3,
          name: "密碼",
          inputName: "password",
          type: "password",
          value: "",
          isError: false,
          isBlank: false,
        },
        {
          id: 4,
          name: "密碼確認",
          inputName: "passwordCheck",
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
    async updateUserInfo(e) {
      try {
        this.isProcessing = true;
        const id = this.currentUser.id;
        const account = this.formItems[0];
        const name = this.formItems[1];
        const email = this.formItems[2];
        const password = this.formItems[3];
        const passwordCheck = this.formItems[4];

        // 當帳號是空白的提示訊息
        if (account.value.length < 1) {
          account.isBlank = true
          return
        } else {
          // 將提示訊息還原
          account.isBlank = false
        }

        // 當密碼輸入不相同時
        if (password.value !== passwordCheck.value) {
          password.isError = true;
          passwordCheck.isError = true;
          return;
        } else {
          // 將提示訊息還原
          password.isError = false;
          passwordCheck.isError = false;
        }

        // 當名稱字數超過50個時，無法送出表單
        if (name.value.length > 50) return;

        // 將form放入formData中並加入introduction
        const form = e.target
        const formData = new FormData(form)
        formData.append("introduction", this.currentUser.introduction);

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
          account.isError = true;
          return;
        } else if (
          data.status === "error" &&
          data.message === "Email should be unique."
        ) {
          // 當email重覆時
          console.log(data.message);
          email.isError = true;
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

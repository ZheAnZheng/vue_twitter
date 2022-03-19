<template>
  <div class="container">
    <LogoTitle :title="'後台登入'" />
    <BaseInput :formItems="formItems" />
    <div class="button-group">
      <base-button
        :mode="'action'"
        @handleClick="handleClick"
        :isDisabled="isProcessing"
        >登入</base-button
      >
      <base-button :position="'right'">
        <router-link to="/signin">前台登入</router-link>
      </base-button>
    </div>
  </div>
</template>

<script>
import LogoTitle from "../components/UI/LogoTile.vue";
import BaseInput from "../components/UI/BaseInput.vue";
import BaseButton from "../components/UI/BaseButton.vue";
import authorizationAPI from "../apis/authirozation"
import { mapActions } from "vuex";
import { toast } from "../utils/helper";

export default {
  components: {
    LogoTitle,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      formItems: [
        {
          id: 0,
          name: "帳號",
          type: "text",
          value: "",
        },
        {
          id: 1,
          name: "密碼",
          type: "password",
          value: "",
        },
      ],
      isProcessing: false,
    };
  },
  methods: {
    ...mapActions(["setCurrentUser"]),
    // 向伺服器傳遞登入的資訊
    async handleClick() {
      try {
        this.isProcessing = true;
        const account = this.formItems[0].value;
        const password = this.formItems[1].value;

        // 當使用者未輸入帳號或密碼其中一項時的提示訊息
        if (account.length < 1 || password.length < 1) {
          toast.fireWarning("請輸入帳號與密碼");
          return;
        }

        const { data } = await authorizationAPI.signIn({
          account,
          password,
        });

        // 防止前台帳號登入以及當登入的是前台帳號的提示訊息
        if (data.data.user.role !== "admin") {
          toast.fireWarning("非管理帳號無法登入");
          this.isProcessing = false;
          return;
        }

        localStorage.setItem("token", data.data.token);

        this.setCurrentUser(data.data.user);

        toast.fireSuccess('成功登入')

        this.$router.replace("/admin/users");
      } catch (error) {
        console.log("Error", error);
        this.isProcessing = false;
        toast.fireError("帳號或密碼錯誤，請重新輸入");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/extends.scss";
.container {
  @extend %alphitterContainer;
}
.button-group {
  @extend %button-group;
}
</style>

<template>
  <form>
    <div v-for="item in formItems" :key="item.id" class="input-group">
      <label :for="item.name">{{ item.name }}</label>
      <span class="account-prefix">{{ item.prefix }}</span>
      <input v-if="item.prefix"
             :id="item.name" 
             v-model="item.value" 
             :value="item.value" 
             :type="item.type" 
             :class="{ 'error-color': item.isError || item.isBlank }"
             class="setting-account-input" />
      <input v-else
             :id="item.name" 
             v-model="item.value" 
             :value="item.value" 
             :type="item.type" 
             :class="{ 'error-color': item.isError }" />
      <i class="limit-message" v-if="item.name === '名稱'"
        >{{ countNameLength }} / 50</i
      >
      <div
        v-show="item.isError && item.name === '帳號'"
        class="account-alert-message"
      >
        帳號重覆
      </div>
      <div 
        v-show="item.isBlank && item.name === '帳號'" 
        class="account-alert-message"
      >
        帳號不可空白
      </div>
      <div
        v-show="item.isError && item.name === '名稱'"
        class="name-alert-message"
      >
        字數超出上限
      </div>
      <div
        v-show="item.isError && item.name === 'Email'"
        class="email-alert-message"
      >
        Email重覆
      </div>
      <div
        v-show="
          item.isError && (item.name === '密碼' || item.name === '密碼確認')
        "
        class="password-alert-message"
      >
        兩次密碼輸入不相同，請再次確認
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    formItems: {
      type: Array,
      required: true,
    },
  },
  computed: {
    // 計算名稱長度的函式
    countNameLength() {
      const nameLength = this.formItems[1].value.length;
      // 當名稱長度超過50個字時，將事件傳遞至母元件
      if (nameLength > 50) {
        this.$emit("after-over-name-length");
      }

      return nameLength;
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  flex: 2;
  margin-bottom: 40px;
}

.input-group {
  width: 100%;
  margin-bottom: 20px;
  background-color: var(--input-bg-color);
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }

  label {
    display: block;
    font-size: 15px;
    color: var(--mute-color);
  }

  input[type="text"] {
    background: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
  }

  input[type="password"] {
    background: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
    color: var(--primary-text-color);
  }

  input {
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    border-bottom: 2px solid var(--mute-color);
    background: transparent;
    color: var(--primary-text-color);

    // 當游標hover或focus時的顏色
    &:hover,
    &:focus {
      border-bottom: 2px solid var(--input-hover-focus-color);
    }
  }

  // 帳號input的樣式設定
  > .setting-account-input {
    padding-left: 1rem;
  }

  // 名稱字數的樣式設定
  > .limit-message {
    position: absolute;
    bottom: -50%;
    right: 0;
    font-size: 15px;
  }

  // 發生錯誤時的顏色
  > .error-color {
    border-bottom: 2px solid var(--alert-message-color);
  }

  // 提示訊息的樣式設定
  > .account-alert-message,
  .name-alert-message,
  .email-alert-message,
  .password-alert-message {
    color: var(--alert-message-color);
    position: absolute;
    bottom: -50%;
    left: 0;
  }

  // 帳號前方@的樣式設定
  > .account-prefix {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

@media screen and (min-width: 450px) {
  .input-group {
    margin-bottom: 30px;
  }
}
</style>

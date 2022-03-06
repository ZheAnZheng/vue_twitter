<template>
  <button
    :class="[modeStyle, positionStyle, isDisabled ? 'disabled' : '']"
    @click="$emit('handleClick')"
    :disabled="isDisabled"
    type="submit"
  >
    <slot></slot>
  </button>
</template>
<script>
//API說明
//mode     接受action actionOutline 預設default
//position 接受right 預設center
//透過@handleClick觸發事件
//slot則是按鍵文字
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: "default",
    },
    position: {
      type: String,
      required: false,
      default: "center",
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  watch: {
    isDisabled(val) {
      return val;
    },
  },
  computed: {
    modeStyle() {
      if (this.mode === "action") {
        return "action";
      } else if (this.mode === "actionOutline") {
        return "actionOutline";
      } else {
        return "default";
      }
    },
    positionStyle() {
      if (this.position === "right") {
        return "positionRight";
      } else {
        return "";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/extends.scss";
.action {
  @extend %button-style;
  background-color: var(--primary-color);
  color: var(--white-text-color);
  padding: 0 15px;
  transition: all 0.2s ease-in;
  path[fill] {
    fill: var(--white-text-color);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    path[fill] {
      fill: var(--primary-color);
    }
  }
}
.actionOutline {
  @extend %button-style;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0 15px;
  transition: all 0.2s ease-in;
  path[fill] {
    fill: var(--primary-color);
  }
  &:hover {
    background-color: var(--primary-color);
    color: var(--white-text-color);
    path[fill] {
      fill: var(--white-text-color);
    }
  }
}
.default {
  @extend %button-style;
  background-color: rgba(0, 0, 0, 0);
  color: var(--blue-text-color);

  :visited {
    color: var(--blue-text-color);
  }

  :hover {
    color: var(--primary-color);
  }
}
.positionRight {
  display: inline;
  width: max-content;
  float: right;
}
.disabled {
  opacity: 0.6;
  border: unset;
  background: var(--mute-color);
  color: var(--white-text-color);
  cursor: default;
  &:hover {
    background: var(--mute-color);
    color: var(--white-text-color);
    border: unset;
  }
}
</style>

<template>
  <div class="container">
    <ul class="tab-head">
      <li class="tab-item">
        <router-link
          :class="getClass('userTweets')"
          :to="{ name: 'userTweets' }"
          >推文</router-link
        >
      </li>
      <li class="tab-item">
        <router-link
          :class="getClass('replyTweets')"
          :to="{ name: 'replyTweets' }"
          >推文與回覆</router-link
        >
      </li>
      <li class="tab-item">
        <router-link
          :class="getClass('likeTweets')"
          :to="{ name: 'likeTweets' }"
          >喜歡的內容</router-link
        >
      </li>
    </ul>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { activeLinkHandler } from "../utils/mixins.js";
export default {
  mixins: [activeLinkHandler],
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/activeLink.scss";
.container {
  width: 100%;
  height: 100%;
}
.tab-head {
  display: flex;
  width: 100%;
  height: 54px;
  border-left: 1px solid var(--border-stroke-color);
  border-right: 1px solid var(--border-stroke-color);
  .tab-item {
    flex: 1;
  }
}

.slot {
  width: 100%;
  height: 100%;
}
@media screen and (min-width: 865px) {
  .tab-head {
    display: block;
  }
  .tab-item {
    display: inline-block;
    width: 130px;
    height: 100%;
  }
}
</style>

<template>
  <div class="container">
    <BaseSpinner v-if="isLoading" />
    <template v-else>
      <transition name="fade">
        <ReplyModal
          v-show="replyModalSwitch"
          @closeModal="closeModal('reply')"
          :tweet="tweet"
        />
      </transition>
      <div class="tweet-info">
        <div class="user-info">
          <router-link :to="{name:'userTweets',params:{id:tweet.UserId}}">

            <img :src="tweet.userAvatar | imageFilter" />
          </router-link>
          <div class="name-wrapper">
            <div>{{ tweet.userName }}</div>
            <div>@{{ tweet.userAccount }}</div>
          </div>
        </div>
        <div class="content">
          {{ tweet.description }}
        </div>
        <div class="date">{{ tweet.createdAt | fromNow }}</div>
        <div class="tweet-relative">
          <div>{{ tweet.repliedCount }}<span>回覆</span></div>
          <div>{{ tweet.likedCount }}<span>喜歡次數</span></div>
        </div>
        <button class="icon reply-icon" @click="openModal('reply')">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5576 2.80254L12.3726 2.79004H12.3701C6.90262 2.79004 2.62012 7.07379 2.62012 12.5425C2.62012 17.665 6.60262 21.55 11.9514 21.755V26.54C11.9514 26.675 12.0064 26.8975 12.1014 27.0438C12.2789 27.325 12.5814 27.4775 12.8914 27.4775C13.0639 27.4775 13.2376 27.43 13.3939 27.33C13.7239 27.12 21.4851 22.155 23.5039 20.4475C25.8814 18.435 27.3039 15.485 27.3076 12.5575V12.5363C27.3001 7.07754 23.0201 2.80254 17.5576 2.80129V2.80254ZM22.2914 19.0175C20.8739 20.2175 16.2139 23.2738 13.8264 24.8213V20.8375C13.8264 20.32 13.4076 19.9 12.8889 19.9H12.3939C7.81887 19.9 4.49637 16.805 4.49637 12.5425C4.49637 8.12504 7.95637 4.66504 12.3714 4.66504L17.5551 4.67754H17.5576C21.9726 4.67754 25.4326 8.13504 25.4351 12.5475C25.4314 14.935 24.2576 17.3525 22.2926 19.0175H22.2914Z"
              fill="#657786"
            />
          </svg>
        </button>
        <transition name="like" mode="out-in">
          <button
            class="icon fillheart-icon"
            :class="{ active: isProcessing }"
            key="redHeart"
            v-if="tweet.isLiked"
            :disabled="isProcessing"
            @click="deleteLike(tweet.id)"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19.6381H10.986C8.40295 19.5901 0.949951 12.8561 0.949951 6.47812C0.949951 3.41412 3.47495 0.724121 6.35295 0.724121C8.64295 0.724121 10.183 2.30412 10.999 3.45412C11.813 2.30612 13.353 0.724121 15.644 0.724121C18.524 0.724121 21.048 3.41412 21.048 6.47912C21.048 12.8551 13.594 19.5891 11.011 19.6361H11V19.6381Z"
                fill="#E0245E"
              />
            </svg>
          </button>
          <button
            class="icon emptyheart-icon"
            :class="{ active: isProcessing }"
            key="emptyHeart"
            v-else
            @click="addLike(tweet.id)"
            :disabled="isProcessing"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 27.0473H14.9825C11.7537 26.9873 2.4375 18.5698 2.4375 10.5973C2.4375 6.76728 5.59375 3.40479 9.19125 3.40479C12.0537 3.40479 13.9787 5.37979 14.9987 6.81729C16.0162 5.38229 17.9412 3.40479 20.805 3.40479C24.405 3.40479 27.56 6.76729 27.56 10.5985C27.56 18.5685 18.2425 26.986 15.0137 27.0448H15V27.0473ZM9.1925 5.28104C6.5925 5.28104 4.31375 7.76603 4.31375 10.5998C4.31375 17.7748 13.1062 25.0948 15.0012 25.1723C16.8987 25.0948 25.6887 17.776 25.6887 10.5998C25.6887 7.76603 23.41 5.28104 20.81 5.28104C17.65 5.28104 15.885 8.95104 15.87 8.98729C15.5825 9.68979 14.425 9.68979 14.1362 8.98729C14.1187 8.94979 12.355 5.28104 9.19375 5.28104H9.1925Z"
                fill="#657786"
              />
            </svg>
          </button>
        </transition>
      </div>

      <ReplyList :tweetReplies="replies" />
    </template>
  </div>
</template>
<script>
import ReplyModal from "../components/ReplyModal.vue";
import BaseSpinner from "../components/UI/BaseSpinner.vue";
import {
  modalController,
  dateFilter,
  emptyImageFilter,
} from "../utils/mixins.js";
import { toast } from "../utils/helper.js";
import tweetsAPI from "../apis/tweets.js";
import ReplyList from "../components/ReplyList.vue";
export default {
  mixins: [modalController, dateFilter, emptyImageFilter],
  components: {
    ReplyList,
    ReplyModal,
    BaseSpinner,
  },
  watch: {
    $route(to) {
      const { id } = to.params;
      this.isLoading = true;
      this.fetchTweet(id);
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchTweet(id);
  },
  data() {
    return {
      isLike: true,
      tweet: {},
      replies: [],
      isLoading: true,
      isProcessing: false,
    };
  },
  methods: {
    async fetchTweet(tweetId) {
      try {
        const response = await tweetsAPI.get({ tweetId });

        if (response.statusText !== "OK") {
          console.log("this tweet doesnt exist");
          throw new Error(response.data.message);
        }

        const { User: tweetUser, Replies, ...tweet } = response.data;

        this.tweet = {
          userAvatar: tweetUser.avatar,
          userName: tweetUser.name,
          userAccount: tweetUser.account,
          ...tweet,
        };
        this.replies = Replies.map((reply) => {
          const { User: replyOwner, UserId: replyOwnerId } = reply;
          return {
            ...reply,
            tweetOwnerId: tweet.UserId,
            tweetOwnerAvatar: tweetUser.avatar,
            tweetOwnerName: tweetUser.name,
            tweetOwnerAccount: tweetUser.account,
            userName: replyOwner.name,
            userAvatar: replyOwner.avatar,
            userAccount: replyOwner.account,
            userId: replyOwnerId,
          };
        });
        this.isLoading = false;
      } catch (e) {
        console.log(e.message);
        //直接改路由後端可能不到對應編號推文，反回上一頁
        if (e.message === "Request failed with status code 500") {
          this.$router.go(-1);
          toast.fireError("無此貼文");
        }
        this.isLoading = false;
        toast.fireError("讀取不到推文");
      }
    },
    async addLike(tweetId) {
      try {
        this.isProcessing = true;
        const response = await tweetsAPI.addLike({ tweetId });
        if (response.statusText !== "OK") {
          throw Error(response.data.message);
        }
        this.tweet.likedCount++;
        this.tweet.isLiked = true;
      } catch (e) {
        console.log(e);
        toast.fireError("無法加入喜歡");
      } finally {
        this.isProcessing = false;
      }
    },
    async deleteLike(tweetId) {
      try {
        this.isProcessing = true;
        const response = await tweetsAPI.deleteLike({ tweetId });
        if (response.statusText !== "OK") {
          throw Error(response.data.message);
        }
        this.tweet.likedCount--;
        this.tweet.isLiked = false;
      } catch (e) {
        console.log(e);
        toast.fireError("無法加入喜歡");
      } finally {
        this.isProcessing = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/fadeTransition";
.container {
  width: 100%;
  height: 100%;
}
.tweet-info {
  width: 100%;
  height: 100%;
  background-color: var(--input-text-color);
  border: 1px solid var(--border-stroke-color);
  padding: 18px 15px;
  .user-info {
    display: flex;
    flex-direction: row;
    font-size: 15px;

    margin-bottom: 10px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .name-wrapper div {
      &:nth-child(1) {
        color: var(--primary-text-color);
      }
      &:nth-child(2) {
        color: var(--mute-color);
      }
    }
  }
  .content {
    width: 100%;
    font-size: 23px;
    font-weight: 400;
    color: var(--primary-text-color);
    margin-bottom: 15px;
  }
  .date {
    font-size: 15px;
    color: var(--mute-color);
    border-bottom: 1px solid var(--border-stroke-color);
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
  .tweet-relative {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-stroke-color);
    margin-bottom: 15px;
    div {
      font-weight: 500;
      display: inline-block;
      margin-right: 20px;

      span {
        margin-left: 2px;
        color: var(--mute-color);
      }
    }
  }
  .icon {
    display: inline-block;
    margin-right: 100px;
    cursor: pointer;
  }
}
.reply-icon:hover {
  path {
    fill: var(--blue-text-color);
  }
}
.emptyheart-icon:hover {
  path {
    fill: var(--like-color);
  }
}
.fillheart-icon:hover {
  path {
    stroke: var(--mute-color);
    fill: transparent;
  }
}
.emptyheart-icon.active path {
  fill: var(--like-color);
}

.fillheart-icon.active path {
  stroke: var(--mute-color);
  fill: transparent;
}

.like-enter-active {
  animation: heartPomp 0.6s ease-in;
}
.show-enter {
  transform: scale(0) translate(50px, -10px);
  opacity: 0;
}
.show-enter-active {
  transition: all 2s ease;
}
.show-enter-to {
  transform: scale(1) translate(0, 0);
  opacity: 1;
}
@keyframes heartPomp {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  30% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@media screen and (min-width: 865px) {
  .icon {
    display: inline-block;
    margin-right: 150px;
    cursor: pointer;
  }
}
</style>

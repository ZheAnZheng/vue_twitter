(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f12dac8","chunk-43c6cda2"],{"00b4":function(e,t,r){"use strict";r("ac1f");var s=r("23e7"),a=r("da84"),i=r("c65b"),n=r("e330"),o=r("1626"),c=r("861d"),l=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=a.Error,d=n(/./.test);s({target:"RegExp",proto:!0,forced:!l},{test:function(e){var t=this.exec;if(!o(t))return d(this,e);var r=i(t,this,e);if(null!==r&&!c(r))throw new u("RegExp exec method returned something other than an Object or null");return!!r}})},1230:function(e,t,r){"use strict";r("f8f5")},"15fd":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("a4d3"),r("b64b");function s(e,t){if(null==e)return{};var r,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}function a(e,t){if(null==e)return{};var r,a,i=s(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}},2797:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"reply-modal"},[r("div",{staticClass:"close",on:{click:e.closeModal}},[r("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M9.41412 7.99988L15.2071 2.20687C15.5971 1.81687 15.5971 1.18388 15.2071 0.792875C14.8171 0.401875 14.1841 0.402875 13.7931 0.792875L8.00012 6.58588L2.20712 0.792875C1.81712 0.402875 1.18412 0.402875 0.793119 0.792875C0.402119 1.18288 0.403119 1.81587 0.793119 2.20687L6.58612 7.99988L0.793119 13.7929C0.403119 14.1829 0.403119 14.8159 0.793119 15.2069C0.988119 15.4019 1.24312 15.4999 1.50012 15.4999C1.75712 15.4999 2.01212 15.4019 2.20712 15.2069L8.00012 9.41387L13.7931 15.2069C13.9881 15.4019 14.2431 15.4999 14.5001 15.4999C14.7571 15.4999 15.0121 15.4019 15.2071 15.2069C15.5971 14.8169 15.5971 14.1839 15.2071 13.7929L9.41412 7.99988Z",fill:"#FF6600"}})])]),r("div",{staticClass:"tweet-block"},[r("img",{staticClass:"avatar",attrs:{src:e._f("imageFilter")(e.tweet.userAvatar)}}),r("div",{staticClass:"tweet-info"},[r("div",{staticClass:"tweet-owner"},[r("div",[e._v(e._s(e.tweet.userName))]),r("div",[e._v("@"+e._s(e.tweet.userAccount))]),r("div",[e._v("．")]),r("div",[e._v(e._s(e._f("fromNow")(e.tweet.createdAt)))])]),r("div",{staticClass:"tweet-content"},[e._v(" "+e._s(e.tweet.description)+" ")]),r("div",{staticClass:"reply"},[e._v(" 回覆給"),r("span",[e._v("@"+e._s(e.tweet.userAccount))])])])]),r("span",{staticClass:"connect-line"}),r("div",{staticClass:"reply-block"},[r("img",{staticClass:"avatar",attrs:{src:e._f("imageFilter")(e.currentUser.avatar)}}),r("div",{staticClass:"reply-content"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.reply,expression:"reply"}],staticClass:"reply-input",attrs:{id:"reply",rows:"5",cols:"40",placeholder:"推你的回覆"},domProps:{value:e.reply},on:{input:function(t){t.target.composing||(e.reply=t.target.value)}}})])]),r("div",{staticClass:"button-group"},[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.isReplyValid&&e.isChecked,expression:"!isReplyValid && isChecked"}]},[e._v("回覆不可空白")]),r("base-button",{staticClass:"reply-button",attrs:{mode:"action",position:"right",isDisabled:e.isProcessing},on:{handleClick:function(t){return e.submitReply(e.tweet.id)}}},[e._v("回覆")])],1)])])},a=[],i=r("5530"),n=r("1da1"),o=(r("d9e2"),r("498a"),r("96cf"),r("a64c")),c=r("2708"),l=r("c968"),u=r("2f62"),d=r("6783"),f={mixins:[c["c"],c["d"]],components:{BaseButton:o["a"]},data:function(){return{reply:"",isProcessing:!1,isChecked:!1}},props:{tweet:{type:Object,required:!0}},inject:{reload:{from:"reload"},reFetchProfileUser:{from:"reFetchProfileUser",default:function(){return function(){}}}},methods:{submitReply:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,t.isProcessing=!0,t.isReplyValid){r.next=5;break}return t.isChecked=!0,r.abrupt("return");case 5:return r.next=7,t.trySubmitReply(e);case 7:t.$emit("closeModal"),t.reload(),t.reFetchProfileUser(),l["b"].fireSuccess("回覆成功"),r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](0),console.log(r.t0),l["b"].fireError("無法發送回覆");case 17:return r.prev=17,t.isProcessing=!1,r.finish(17);case 20:case"end":return r.stop()}}),r,null,[[0,13,17,20]])})))()},closeModal:function(){this.isChecked=!1,this.reply="",this.$emit("closeModal")},trySubmitReply:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].createReply({tweetId:e,comment:t.reply});case 3:if(s=r.sent,"OK"===s.statusText){r.next=6;break}throw Error(s.data.message);case 6:r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}},computed:Object(i["a"])(Object(i["a"])({},Object(u["c"])(["currentUser"])),{},{isReplyValid:function(){return""!==this.reply.trim()}})},v=f,p=(r("4f26"),r("2877")),w=Object(p["a"])(v,s,a,!1,null,"a2245fea",null);t["a"]=w.exports},2909:function(e,t,r){"use strict";function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}function a(e){if(Array.isArray(e))return s(e)}r.d(t,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function n(e,t){if(e){if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}r("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return a(e)||i(e)||n(e)||o()}},"4df4":function(e,t,r){"use strict";var s=r("da84"),a=r("0366"),i=r("c65b"),n=r("7b0b"),o=r("9bdd"),c=r("e95a"),l=r("68ee"),u=r("07fa"),d=r("8418"),f=r("9a1f"),v=r("35a1"),p=s.Array;e.exports=function(e){var t=n(e),r=l(this),s=arguments.length,w=s>1?arguments[1]:void 0,h=void 0!==w;h&&(w=a(w,s>2?arguments[2]:void 0));var m,b,g,C,y,x,_=v(t),k=0;if(!_||this==p&&c(_))for(m=u(t),b=r?new this(m):p(m);m>k;k++)x=h?w(t[k],k):t[k],d(b,k,x);else for(C=f(t,_),y=C.next,b=r?new this:[];!(g=i(y,C)).done;k++)x=h?o(C,w,[g.value,k],!0):g.value,d(b,k,x);return b.length=k,b}},"4f26":function(e,t,r){"use strict";r("8aa3")},"5e34":function(e,t,r){"use strict";r("b8ae")},7441:function(e,t,r){"use strict";r("84ff")},"7b95":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"spinner"},[r("div",{staticClass:"ball-box"},[r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div")])])}],i=(r("5e34"),r("2877")),n={},o=Object(i["a"])(n,s,a,!1,null,"f131ec16",null);t["a"]=o.exports},"83fa":function(e,t,r){},"84ff":function(e,t,r){},"8aa3":function(e,t,r){},"947a":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("MobileNavbar",{on:{openModal:function(t){return e.openModal("tweet")}}}),r("Navbar",{on:{openModal:function(t){return e.openModal("tweet")}}}),r("Header",{attrs:{isReady:e.isHeaderReady}}),r("PopularList"),r("transition",{attrs:{name:"fade"}},[r("TweetModal",{directives:[{name:"show",rawName:"v-show",value:e.tweetModalSwitch,expression:"tweetModalSwitch"}],staticClass:"modal",attrs:{"is-modal":!0},on:{closeModal:function(t){return e.closeModal("tweet")}}})],1),e.isRouteAlive?r("div",{staticClass:"slot"},[e._t("default")],2):e._e()],1)},a=[],i=r("6ea3"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("ul",{staticClass:"popularList"},[r("li",{staticClass:"list-item head"},[e._v("Popular")]),r("transition-group",{attrs:{name:"list"}},e._l(e.showedUsers,(function(t){return r("li",{key:t.id,staticClass:"list-item"},[r("img",{staticClass:"image",attrs:{src:e._f("imageFilter")(t.avatar)}}),r("router-link",{staticClass:"user-info",attrs:{to:{name:"userTweets",params:{id:t.id}}}},[r("div",{staticClass:"name"},[e._v(e._s(t.name))]),r("div",{staticClass:"account"},[e._v("@"+e._s(t.account))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.id!==e.currentUser.id,expression:"user.id !== currentUser.id"}],staticClass:"button-wrapper"},[t.isFollowed?r("base-button",{key:"followed",staticClass:"popularList-button",attrs:{mode:"action",isDisabled:e.isProcessing&&e.activeId===t.id},on:{handleClick:function(r){return e.setActiveAndDeleteFollow(t.id)}}},[e._v("正在跟隨")]):r("base-button",{key:"follow",staticClass:"popularList-button",attrs:{mode:"actionOutline",isDisabled:e.isProcessing&&e.activeId===t.id},on:{handleClick:function(r){return e.setActiveAndAddFollow(t.id)}}},[e._v("跟隨")])],1)],1)})),0),r("transition",{attrs:{name:"list"},on:{afterEnter:function(t){e.isTailIn=!0},afterLeave:e.showAll}},[r("li",{directives:[{name:"show",rawName:"v-show",value:e.tailShow&&e.notOverSix,expression:"tailShow && notOverSix"}],key:"tail",staticClass:"list-item",class:{tail:!e.isTailIn,"tail-in":e.isTailIn},on:{click:function(t){e.tailShow=!1}}},[e._v(" 顯示更多 ")])])],1)])},o=[],c=r("2909"),l=r("1da1"),u=r("5530"),d=(r("96cf"),r("d81d"),r("d9e2"),r("2708")),f=r("a64c"),v=r("4cce"),p=r("2f62"),w=r("c968"),h={components:{BaseButton:f["a"]},mixins:[d["d"],d["e"]],created:function(){this.fetchTopUser()},data:function(){return{showedUsers:[],users:[],tailShow:!0,isTailIn:!1,activeId:0}},computed:Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(p["c"])(["currentUser"])),Object(p["c"])("follow",["followData"])),{},{notOverSix:function(){return this.users.length>7}}),watch:{followData:function(e){e.userId&&(this.showedUsers=this.showedUsers.map((function(t){return t.id===e.userId?Object(u["a"])(Object(u["a"])({},t),{},{isFollowed:e.isFollowed}):Object(u["a"])({},t)})))}},methods:{fetchTopUser:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v["a"].getTop();case 3:if(r=t.sent,"OK"===r.statusText){t.next=6;break}throw Error(r.data.message);case 6:e.users=Object(c["a"])(r.data),e.showSixUsers(),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0),w["b"].fireError("無法熱門用戶失敗");case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},showSixUsers:function(){for(var e=this.users.length>6?6:this.users.length,t=0;t<e;t++)this.showedUsers.push(this.users[t])},showAll:function(){for(var e=6;e<this.users.length;e++)this.showedUsers.push(this.users[e])},setActive:function(e){this.activeId=e},setActiveAndDeleteFollow:function(e){this.setActive(e),this.deleteFollowing(e,"popular")},setActiveAndAddFollow:function(e){this.setActive(e),this.addFollowing(e,"popular")}}},m=h,b=(r("1230"),r("2877")),g=Object(b["a"])(m,n,o,!1,null,"229135c4",null),C=g.exports,y=r("d178"),x=r("0418"),_=r("4287"),k={mixins:[d["f"]],components:{MobileNavbar:i["a"],Navbar:y["a"],Header:x["a"],PopularList:C,TweetModal:_["a"]},data:function(){return{isRouteAlive:!0,isHeaderReady:!1}},provide:function(){return{reload:this.reload,turnHeaderShow:this.turnHeaderShow}},methods:{reload:function(){var e=this;this.isRouteAlive=!1,this.$nextTick((function(){e.isRouteAlive=!0}))},turnHeaderShow:function(){this.isHeaderReady=!0}}},O=k,A=(r("dc0d"),Object(b["a"])(O,s,a,!1,null,"7f94a262",null));t["a"]=A.exports},9729:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main-layout",[r("TweetStory")],1)},a=[],i=r("947a"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.isLoading?r("BaseSpinner"):[r("transition",{attrs:{name:"fade"}},[r("ReplyModal",{directives:[{name:"show",rawName:"v-show",value:e.replyModalSwitch,expression:"replyModalSwitch"}],attrs:{tweet:e.tweet},on:{closeModal:function(t){return e.closeModal("reply")}}})],1),r("div",{staticClass:"tweet-info"},[r("div",{staticClass:"user-info"},[r("router-link",{attrs:{to:{name:"userTweets",params:{id:e.tweet.UserId}}}},[r("img",{attrs:{src:e._f("imageFilter")(e.tweet.userAvatar)}})]),r("div",{staticClass:"name-wrapper"},[r("div",[e._v(e._s(e.tweet.userName))]),r("div",[e._v("@"+e._s(e.tweet.userAccount))])])],1),r("div",{staticClass:"content"},[e._v(" "+e._s(e.tweet.description)+" ")]),r("div",{staticClass:"date"},[e._v(e._s(e._f("fromNow")(e.tweet.createdAt)))]),r("div",{staticClass:"tweet-relative"},[r("div",[e._v(e._s(e.tweet.repliedCount)),r("span",[e._v("回覆")])]),r("div",[e._v(e._s(e.tweet.likedCount)),r("span",[e._v("喜歡次數")])])]),r("button",{staticClass:"icon reply-icon",on:{click:function(t){return e.openModal("reply")}}},[r("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M17.5576 2.80254L12.3726 2.79004H12.3701C6.90262 2.79004 2.62012 7.07379 2.62012 12.5425C2.62012 17.665 6.60262 21.55 11.9514 21.755V26.54C11.9514 26.675 12.0064 26.8975 12.1014 27.0438C12.2789 27.325 12.5814 27.4775 12.8914 27.4775C13.0639 27.4775 13.2376 27.43 13.3939 27.33C13.7239 27.12 21.4851 22.155 23.5039 20.4475C25.8814 18.435 27.3039 15.485 27.3076 12.5575V12.5363C27.3001 7.07754 23.0201 2.80254 17.5576 2.80129V2.80254ZM22.2914 19.0175C20.8739 20.2175 16.2139 23.2738 13.8264 24.8213V20.8375C13.8264 20.32 13.4076 19.9 12.8889 19.9H12.3939C7.81887 19.9 4.49637 16.805 4.49637 12.5425C4.49637 8.12504 7.95637 4.66504 12.3714 4.66504L17.5551 4.67754H17.5576C21.9726 4.67754 25.4326 8.13504 25.4351 12.5475C25.4314 14.935 24.2576 17.3525 22.2926 19.0175H22.2914Z",fill:"#657786"}})])]),r("transition",{attrs:{name:"like",mode:"out-in"}},[e.tweet.isLiked?r("button",{key:"redHeart",staticClass:"icon fillheart-icon",class:{active:e.isProcessing},attrs:{disabled:e.isProcessing},on:{click:function(t){return e.deleteLike(e.tweet.id)}}},[r("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M11 19.6381H10.986C8.40295 19.5901 0.949951 12.8561 0.949951 6.47812C0.949951 3.41412 3.47495 0.724121 6.35295 0.724121C8.64295 0.724121 10.183 2.30412 10.999 3.45412C11.813 2.30612 13.353 0.724121 15.644 0.724121C18.524 0.724121 21.048 3.41412 21.048 6.47912C21.048 12.8551 13.594 19.5891 11.011 19.6361H11V19.6381Z",fill:"#E0245E"}})])]):r("button",{key:"emptyHeart",staticClass:"icon emptyheart-icon",class:{active:e.isProcessing},attrs:{disabled:e.isProcessing},on:{click:function(t){return e.addLike(e.tweet.id)}}},[r("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M15 27.0473H14.9825C11.7537 26.9873 2.4375 18.5698 2.4375 10.5973C2.4375 6.76728 5.59375 3.40479 9.19125 3.40479C12.0537 3.40479 13.9787 5.37979 14.9987 6.81729C16.0162 5.38229 17.9412 3.40479 20.805 3.40479C24.405 3.40479 27.56 6.76729 27.56 10.5985C27.56 18.5685 18.2425 26.986 15.0137 27.0448H15V27.0473ZM9.1925 5.28104C6.5925 5.28104 4.31375 7.76603 4.31375 10.5998C4.31375 17.7748 13.1062 25.0948 15.0012 25.1723C16.8987 25.0948 25.6887 17.776 25.6887 10.5998C25.6887 7.76603 23.41 5.28104 20.81 5.28104C17.65 5.28104 15.885 8.95104 15.87 8.98729C15.5825 9.68979 14.425 9.68979 14.1362 8.98729C14.1187 8.94979 12.355 5.28104 9.19375 5.28104H9.1925Z",fill:"#657786"}})])])])],1),r("ReplyList",{attrs:{tweetReplies:e.replies}})]],2)},o=[],c=r("5530"),l=r("15fd"),u=r("1da1"),d=(r("96cf"),r("d9e2"),r("b0c0"),r("d81d"),r("2797")),f=r("7b95"),v=r("2708"),p=r("c968"),w=r("6783"),h=r("bfa8"),m=["User","Replies"],b={mixins:[v["f"],v["c"],v["d"]],components:{ReplyList:h["default"],ReplyModal:d["a"],BaseSpinner:f["a"]},watch:{$route:function(e){var t=e.params.id;this.isLoading=!0,this.fetchTweet(t)}},created:function(){var e=this.$route.params.id;this.fetchTweet(e)},data:function(){return{isLike:!0,tweet:{},replies:[],isLoading:!0,isProcessing:!1}},methods:{fetchTweet:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var s,a,i,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,w["a"].get({tweetId:e});case 3:if(s=r.sent,"OK"===s.statusText){r.next=7;break}throw console.log("this tweet doesnt exist"),new Error(s.data.message);case 7:a=s.data,i=a.User,n=a.Replies,o=Object(l["a"])(a,m),t.tweet=Object(c["a"])({userAvatar:i.avatar,userName:i.name,userAccount:i.account},o),t.replies=n.map((function(e){var t=e.User,r=e.UserId;return Object(c["a"])(Object(c["a"])({},e),{},{tweetOwnerId:o.UserId,tweetOwnerAvatar:i.avatar,tweetOwnerName:i.name,tweetOwnerAccount:i.account,userName:t.name,userAvatar:t.avatar,userAccount:t.account,userId:r})})),t.isLoading=!1,r.next=19;break;case 13:r.prev=13,r.t0=r["catch"](0),console.log(r.t0.message),"Request failed with status code 500"===r.t0.message&&(t.$router.go(-1),p["b"].fireError("無此貼文")),t.isLoading=!1,p["b"].fireError("讀取不到推文");case 19:case"end":return r.stop()}}),r,null,[[0,13]])})))()},addLike:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,w["a"].addLike({tweetId:e});case 4:if(s=r.sent,"OK"===s.statusText){r.next=7;break}throw Error(s.data.message);case 7:t.tweet.likedCount++,t.tweet.isLiked=!0,r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log(r.t0),p["b"].fireError("無法加入喜歡");case 15:return r.prev=15,t.isProcessing=!1,r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[0,11,15,18]])})))()},deleteLike:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,w["a"].deleteLike({tweetId:e});case 4:if(s=r.sent,"OK"===s.statusText){r.next=7;break}throw Error(s.data.message);case 7:t.tweet.likedCount--,t.tweet.isLiked=!1,r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log(r.t0),p["b"].fireError("無法加入喜歡");case 15:return r.prev=15,t.isProcessing=!1,r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[0,11,15,18]])})))()}}},g=b,C=(r("7441"),r("2877")),y=Object(C["a"])(g,n,o,!1,null,"5e00e73c",null),x=y.exports,_={components:{MainLayout:i["a"],TweetStory:x}},k=_,O=Object(C["a"])(k,s,a,!1,null,null,null);t["default"]=O.exports},"9bdd":function(e,t,r){var s=r("825a"),a=r("2a62");e.exports=function(e,t,r,i){try{return i?t(s(r)[0],r[1]):t(r)}catch(n){a(e,"throw",n)}}},a630:function(e,t,r){var s=r("23e7"),a=r("4df4"),i=r("1c7e"),n=!i((function(e){Array.from(e)}));s({target:"Array",stat:!0,forced:n},{from:a})},b8ae:function(e,t,r){},bfa8:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"container"},[e.isLoading?r("BaseSpinner"):[e._l(e.replies,(function(t){return r("li",{key:t.id,staticClass:"tweet-item"},[r("router-link",{attrs:{to:{name:"userTweets",params:{id:""+t.userId}}}},[r("img",{staticClass:"image",attrs:{src:e._f("imageFilter")(t.userAvatar)}})]),r("div",{staticClass:"tweet-context"},[r("div",{staticClass:"tweet-info"},[r("div",{staticClass:"name"},[e._v(e._s(t.userName))]),r("div",{staticClass:"account"},[e._v("@"+e._s(t.userAccount))]),r("div",{staticClass:"dot"},[e._v("．")]),r("div",{staticClass:"time"},[e._v(e._s(e._f("fromNow")(t.createdAt)))])]),r("div",{staticClass:"reply-info"},[r("span",{staticClass:"reply-text"},[e._v("回覆")]),r("router-link",{staticClass:"link",attrs:{to:{name:"userTweets",params:{id:t.tweetOwnerId}}}},[e._v("@"+e._s(t.tweetOwnerAccount))])],1),r("div",{staticClass:"tweet-content"},[r("p",[e._v(" "+e._s(t.comment)+" ")])])])],1)})),r("li",{directives:[{name:"show",rawName:"v-show",value:!e.replies.length,expression:"!replies.length"}],staticClass:"tweet-item no-data-item"},[r("div",{staticClass:"no-data-item"},[e._v("暫無回覆資料")])])]],2)},a=[],i=r("5530"),n=r("15fd"),o=r("1da1"),c=r("2909"),l=(r("96cf"),r("b0c0"),r("d9e2"),r("d81d"),r("2708")),u=r("7b95"),d=r("4cce"),f=r("c968"),v=["Tweet"],p={components:{BaseSpinner:u["a"]},mixins:[l["d"],l["c"]],props:{tweetReplies:{type:Array,required:!1}},data:function(){return{replies:[],isLoading:!0}},watch:{tweetReplies:function(e){this.replies=Object(c["a"])(e)}},created:function(){var e=this.$route.params.id,t=this.$route.name;"tweetStory"===t?(this.replies=this.tweetReplies,this.isLoading=!1):this.fetchUserReplied(e)},inject:{profileUser:{from:"profileUser",default:{id:-1}}},methods:{fetchUserReplied:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].getReplied({userId:e});case 3:if(s=r.sent,"OK"===s.statusText){r.next=6;break}throw Error(s.data.message);case 6:t.replies=s.data.map((function(e){var r=e.Tweet,s=Object(n["a"])(e,v),a=r.User;return Object(i["a"])(Object(i["a"])({},s),{},{tweetOwnerId:r.UserId,tweetOwnerAvatar:a.avatar,tweetOwnerName:a.name,tweetOwnerAccount:a.account,userName:t.profileUser.data.name,userAvatar:t.profileUser.data.avatar,userAccount:t.profileUser.data.account,userId:t.profileUser.data.id})})),t.isLoading=!1,r.next=15;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0),f["b"].fireError("讀取用戶回覆貼文失敗"),t.isLoading=!1;case 15:case"end":return r.stop()}}),r,null,[[0,10]])})))()}},filters:{emptyFilter:function(e){return e||0}}},w=p,h=(r("c8b3"),r("2877")),m=Object(h["a"])(w,s,a,!1,null,"a75e8bb2",null);t["default"]=m.exports},c8b3:function(e,t,r){"use strict";r("ee2c")},d28b:function(e,t,r){var s=r("746f");s("iterator")},dc0d:function(e,t,r){"use strict";r("83fa")},ee2c:function(e,t,r){},f8f5:function(e,t,r){},fb6a:function(e,t,r){"use strict";var s=r("23e7"),a=r("da84"),i=r("e8b5"),n=r("68ee"),o=r("861d"),c=r("23cb"),l=r("07fa"),u=r("fc6a"),d=r("8418"),f=r("b622"),v=r("1dde"),p=r("f36a"),w=v("slice"),h=f("species"),m=a.Array,b=Math.max;s({target:"Array",proto:!0,forced:!w},{slice:function(e,t){var r,s,a,f=u(this),v=l(f),w=c(e,v),g=c(void 0===t?v:t,v);if(i(f)&&(r=f.constructor,n(r)&&(r===m||i(r.prototype))?r=void 0:o(r)&&(r=r[h],null===r&&(r=void 0)),r===m||void 0===r))return p(f,w,g);for(s=new(void 0===r?m:r)(b(g-w,0)),a=0;w<g;w++,a++)w in f&&d(s,a,f[w]);return s.length=a,s}})}}]);
//# sourceMappingURL=chunk-1f12dac8.4953dff0.js.map
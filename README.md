# vue_twitter

四人協作專案
前端人員：[Nixon](https://github.com/ZheAnZheng) , [Ehton](https://github.com/ethon92)
後端人員：[Louis](https://github.com/Phiphi0912) , [Richard Widjaya](https://github.com/ricwidjaya)
[DEMO](https://zheanzheng.github.io/vue_twitter/#/signin)

## 畫面展示
![signinPage]("./public/signinPage.png")
![indexPage]("./public/indexPage.png")
![postTweet]("./public/postTweet.png")
![SettingPage]("./public/SettingPage.png")
![ProfilePage]("./public/ProfilePage.png")
![TweetStoryPage]("./public/TweetStoryPage.png")
![theme]("./public/theme.png")
![followListPage]("./public/followListPage.png")
![adminUserPage]("./public/adminUserPage.png")
![adminTweetPage]("./public/adminTweetPage.png")
![rwd-indexPage]("./public/rwd-indexPage.png")
![rwd-menu]("./public/rwd-menu.png")
![rwd-profilePage]("./public/rwd-profilePage.png")
![rwd-rwd-tweetStory]("./public/rwd-tweetStory.png")

## Feature
可以使用預設帳號，也可以自行註冊使用
```
使用者
account:user1
password:12345678

```
```
管理員(管理員無法註冊，若需到後台畫面請使用此帳號)
account:root,
password:12345678

```

功能：
1. 使用者可透過帳號密碼登入前台(不可登入後台)
2. 管理員可透過帳號密碼登入後台(不可登入前台)
3. 使用者可以編輯自己的資料
4. 使用者可以推文,喜歡推文,回覆推文,追蹤其他使用者
5. 使用者可以觀看其他使用者的資料,推文,追蹤或被追蹤的使用者
5. 管理員可以查看所有使用者資料
6. 管理員可以刪除使用者貼文

## Project setup

### 將專案從git複製到本地(複製到terminal執行)
```
git clone https://github.com/ZheAnZheng/vue_twitter.git
```

### 先選進專案資料夾
```
cd vue_twitter
```

### 安裝node_modules
```
npm install
```

### 啟動伺服器
```
npm run serve
```

### 出現網址即成功(複製網址貼到瀏覽器)
```
http://localhost:8080/
```
### 貼心小提醒 
```
若是npm run serve失敗
在運行一次npm install再嘗試看看
```

### 可以直接複製貼到terminal執行
```
git clone https://github.com/ZheAnZheng/vue_twitter.git
cd vue_twitter
npm install
npm run serve
```

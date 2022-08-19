<template>
  <div id="actContentPage" class="w">
    <div id="theActInfo">
      <div id="backPage">
        <router-link to="taskdistribute">返回</router-link>
      </div>
    </div>
    <div id="actContent">
      <div id="actN">{{ $route.query.Name }}</div>
      <div id="actPicture"></div>
      <div id="actRinghtContent">
        <ul id="actTextInfo">
          <li id="stratT">开始时间：&nbsp;&nbsp;{{ $route.query.stratT }}</li>
          <li id="finshT">
            报名结束时间：&nbsp;&nbsp;{{ $route.query.finshT }}
          </li>
          <li id="lastT">活动时长：&nbsp;&nbsp;{{ $route.query.lastT }}</li>
          <li id="hostCommunity">
            活动举办社团：&nbsp;&nbsp;{{ $route.query.hostCommunity }}
          </li>
          <li id="hostPerson">
            活动负责人：&nbsp;&nbsp;{{ $route.query.hostPerson }}
          </li>
          <li id="actPlace">
            活动地点：&nbsp;&nbsp;{{ $route.query.actPlace }}
          </li>
          <li id="hasNum">已报名人数：&nbsp;&nbsp;100人</li>
          <li id="numLimit">
            人数限制：&nbsp;&nbsp;{{ $route.query.numLimit }}人
          </li>
        </ul>
        <button id="signUpBtn">报名</button>
      </div>
    </div>
    <div id="actDescribe">
      <div id="actDetails">活动详情</div>
      <button id="downLoadActDocument">下载相关文件</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskDetailInfo",
};
</script>

<style>
#backPage {
  background-color: #fff;
  height: 60px;
  margin-top: 10px;
  border-radius: 10px;
  line-height: 60px;
  font-size: 20px;
  padding-left: 50px;
}
#backPage a:hover {
  color: rgb(220, 45, 6);
}
/* 活动内容 */
#actContent {
  background-color: #fff;
  height: 600px;
  margin-top: 10px;
  padding-top: 5px;
  border-radius: 10px;
}
#actPicture {
  margin: 10px 75px;
  background-color: aliceblue;
  width: 450px;
  height: 300px;
  border-radius: 10px;
}
/* 活动右侧内容 */
#actRinghtContent {
  padding: 0px 25px;
}
#actN {
  font-size: 20px;
  margin: 10px 75px;
}
#actTextInfo {
  font-size: 16px;
  margin-left: 50px;
  color: rgb(135, 135, 136);
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
#actTextInfo li {
  margin-top: 10px;
  width: 250px;
}
#signUpBtn {
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  padding: 0 40px;
  border-radius: 7px;
  border: 1px solid rgba(220, 45, 6, 0.5);
  color: rgb(220, 45, 6);
  background-color: rgba(220, 45, 6, 0.15);
  margin-top: 30px;
  margin-left: 50px;
}
#signUpBtn:hover {
  background-color: rgb(220, 45, 6);
  color: #fff;
}
#actDescribe {
  height: 300px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 10px;
  padding-left: 50px;
  padding-top: 20px;
  position: relative;
}
#downLoadActDocument {
  position: absolute;
  top: 15px;
  left: 450px;
  line-height: 40px;
  height: 40px;
  padding: 0 20px;
  border-radius: 7px;
  border: 1px solid rgba(84, 84, 83, 0.5);
  color: rgb(110, 110, 110);
  background-color: rgba(84, 84, 83, 0.1);
}

#downLoadActDocument:hover {
  color: #fff;
  background-color: rgb(179, 178, 178);
  border: none;
}
#actDetails {
  font-size: 20px;
}
</style>
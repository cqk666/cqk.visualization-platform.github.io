<!-- 任务发布页面 -->
<template>
  <div id="content-wrapper" class="w">
    <div id="topic">
      任务：
      <el-button type="danger" plain id="sendTask" @click="sendTask"
        >发布任务</el-button
      >
    </div>
    <!-- 活动框 -->
    <div
      class="actbox-wrapper"
      v-for="info in $store.state.allTaskInfo"
      :key="info.index"
      @click="checkTask(info)"
    >
      <div class="actbox">
        <!-- 图片 -->
        <div id="picture"></div>
        <!-- 活动标题 -->
        <div id="act-name">{{ info.tatalName }}</div>
        <!-- 活动状态时间 -->
        <div id="act-info">
          <div id="act-state">
            <i
              class="fa fa-circle"
              aria-hidden="true"
              style="font-size: 5px"
            ></i
            >&nbsp;正在报名
          </div>
          <div id="act-time">
            <i class="fa fa-clock"></i> {{ info.toalStartTMsg }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskDistribute",
  data() {
    return {};
  },
  methods: {
    checkTask(value) {
      this.$router.push({
        path: "/taskdetailinfo",
        query: {
          Name: value.tatalNametoal,
          StartT: value.toalstartTMsg,
          FinshT: value.toalfinshTMsg,
          LastT: value.toallastTMsg,
          HostCommunity: value.toalhostCommunityMsg,
          HostPerson: value.toalhostPersonMsg,
          ActPlace: value.toalactPlaceMsg,
          NumLimit: value.toalnumLimitMsg,
        },
      });
    },
    sendTask() {
      this.$router.push({
        path: "/taskout",
      });
    },
    /* getInfo(cname,ctype) {
            this.baseInfo.push({name:cname,type:ctype})
        } */
  },
  mounted() {
    /* this.$bus.$on('sendTheInfo',this.getInfo) */
  },
  beforeDestroy() {
    /* this.$bus.$off('sendTheInfo') */
  },
};
</script>

<style>
#topic {
  background-color: #fff;
  height: 60px;
  margin-top: 10px;
  border-radius: 10px;
  line-height: 60px;
  font-size: 20px;
  padding-left: 20px;
  width: 600px;
  position: relative;
}
#sendTask {
  position: absolute;
  right: 30px;
  top: 10px;
}
/* 内容区 */
#content-wrapper {
  min-height: 300px;
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
}
.actbox-wrapper {
  width: 300px;
  height: 300px;
  display: flex;
}
.actbox {
  background-color: #fff;
  width: 280px;
  height: 280px;
  margin: auto;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.actbox:hover {
  width: 290px;
  height: 290px;
  transition: all 0.3s;
}
#picture {
  width: 250px;
  height: 180px;
  background-color: #888888;
  margin: 0 auto;
  margin-top: 10px;
  background-size: 270px;
  background-position: center;
}

#act-name {
  margin-left: 15px;
  font-size: 17px;
  margin: auto;
  width: 220px;
  height: 20px;
  line-height: 20px;
}
#act-info {
  margin-left: 15px;
  font-size: 16px;
  margin-top: 20px;
  display: flex;
}
#act-state {
  width: 90px;
  height: 25px;
  line-height: 25px;
  position: absolute;
  bottom: 5px;
  left: 15px;
}
#act-time {
  margin-left: 35px;
  width: 120px;
  height: 25px;
  line-height: 25px;
  position: absolute;
  bottom: 5px;
  right: 5px;
}
</style>
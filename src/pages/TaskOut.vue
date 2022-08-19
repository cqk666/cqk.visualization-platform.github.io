<template>
  <div id="taskOutWrapper">
    <ul id="taskInfo">
      <li id="taskName">
        开始时间<input
          type="text"
          v-model="taskNameMsg"
          placeholder="请输入活动名称"
        />
      </li>
      <li id="startT">
        开始时间<input
          type="text"
          v-model="startTMsg"
          placeholder="请输入开始时间"
        />
      </li>
      <li id="finshT">
        报名结束时<input
          type="text"
          v-model="finshTMsg"
          placeholder="请输入报名结束时间"
        />
      </li>
      <li id="lastT">
        活动时长<input
          type="text"
          v-model="lastTMsg"
          placeholder="请输入活动时长"
        />
      </li>
      <li id="hostCommunity">
        活动举办社团<input
          type="text"
          v-model="hostCommunityMsg"
          placeholder="请输入活动举办社团"
        />
      </li>
      <li id="hostPerson">
        活动负责人<input
          type="text"
          v-model="hostPersonMsg"
          placeholder="请输入活动负责人"
        />
      </li>
      <li id="actPlace">
        活动地点<input
          type="text"
          v-model="actPlaceMsg"
          placeholder="请输入活动地点"
        />
      </li>
      <li id="numLimit">
        人数限制<input
          type="text"
          v-model="numLimitMsg"
          placeholder="人数限制"
        />
      </li>
    </ul>
    <button @click="taskOut">发布</button>
  </div>
</template>

<script>

export default {
  name: "TaskOut",
  data() {
    return {
      taskNameMsg:'',
      startTMsg: "",
      finshTMsg: "",
      lastTMsg: "",
      hostCommunityMsg: "",
      hostPersonMsg: "",
      actPlaceMsg: "",
      numLimitMsg: "",
    };
  },
  computed: {
    totalTaskInfo(){
        return {
          tatalName:this.taskNameMsg,
          toalStartTMsg: this.startTMsg,
          toalFinshTMsg: this.finshTMsg,
          toalLastTMsg: this.lastTMsg,
          toalHostCommunityMsg: this.hostCommunityMsg,
          toalHostPersonMsg: this.hostPersonMsg,
          toalActPlaceMsg: this.actPlaceMsg,
          toalNumLimitMsg: this.numLimitMsg,
        };
    },
  },
  methods: {
    taskOut() {
      this.$store.dispatch("taskOut", this.totalTaskInfo);
      this.$router.push({
        path: "/taskdistribute",
      });
    },
  },
};
</script>

<style>
</style>
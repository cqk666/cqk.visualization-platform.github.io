<!-- 上传审核页面 -->

<template>
  <div id="signWrapper">
    <ul id="signInfo">
      <li id="name">
        获奖人<input
          type="text"
          v-model="nameMsg"
          placeholder="请输入获奖人名称"
        />
      </li>
      <li id="sid">
        获奖人学号<input
          type="text"
          v-model="sidMsg"
          placeholder="请输入获奖时间"
        />
      </li>
      <li id="c_name">
        比赛名称<input
          type="text"
          v-model="cnameMsg"
          placeholder="请输入比赛名称"
        />
      </li>
      <!-- 比赛等级：1，2..... -->
      <li id="c_level">
        比赛等级
        <select id="c_level_select" v-model="clevelSelected">
          <option
            v-for="item in clevelOption"
            v-bind:value="item.name"
            :key="item.name"
          >
            {{ item.level }}
          </option>
        </select>
      </li>
      <!-- 比赛级别：国级.... -->
      <li id="c_grade">
        比赛级别
        <select id="c_grade_select" v-model="cgradeSelected">
          <option
            v-for="item in cgradeOption"
            v-bind:value="item.name"
            :key="item.name"
          >
            {{ item.grade }}
          </option>
        </select>
      </li>
      <!-- 比赛时间 -->
      <li id="c_time">
        比赛时间
        <select id="c_time_select" v-model="ctimeSelected">
          <option
            v-for="item in ctimeOption"
            v-bind:value="item.name"
            :key="item.name"
          >
            {{ item.time }}
          </option>
        </select>
      </li>
      <li id="c_bit">
        位次
        <select id="c_bit_select" v-model="cbitSelected">
          <option
            v-for="item in cbitOption"
            v-bind:value="item.name"
            :key="item.name"
          >
            {{ item.bit }}
          </option>
        </select>
      </li>
      <li id="c_type">
        比赛类型<input
          type="text"
          v-model="ctypeMsg"
          placeholder="请输入比赛类型"
        />
      </li>
    </ul>
    <button @click="sendInfo">上传</button>
  </div>
</template>

<script>
export default {
  name: "SignCheck",
  data() {
    return {
      /* 获奖人 */
      nameMsg: "",
      /* 获奖人学号 */
      sidMsg: "",
      /* 比赛名称 */
      cnameMsg: "",
      /* 比赛等级 */
      clevelSelected: "1", //返回选择的name值，默认为1
      clevelOption: [
        { level: "1级", name: "1" },
        { level: "2级", name: "2" },
        { level: "3级", name: "3" },
      ],
      /* 比赛级别 */
      cgradeSelected: "1", //返回选择的name值，默认为1
      cgradeOption: [
        { grade: "国级", name: "1" },
        { grade: "省级", name: "2" },
        { grade: "校级", name: "3" },
        { grade: "院级", name: "4" },
      ],
      /* 比赛时间 */
      ctimeSelected: "1", //返回选择的name值，默认为2021
      ctimeOption: [
        { time: "2021", name: "1" },
        { time: "2022", name: "2" },
      ],
      /* 位次 */
      cbitSelected: "1", //返回选择的name值，默认为1
      cbitOption: [
        { bit: "1", name: "1" },
        { bit: "2", name: "2" },
        { bit: "3", name: "3" },
      ],
      /* 比赛名称 */
      ctypeMsg: "",
    };
  },
  computed: {
    //新输入的信息总和
    newInfo: {
      get() {
        return { 
          Tname: this.cnameMsg,
          Ttype: this.ctypeMsg ,
          Tlevel: this.clevelOption[this.clevelSelected-1].level,
          Tgrade: this.cgradeOption[this.cgradeSelected-1].grade,
          Ttime: this.ctimeOption[this.ctimeSelected-1].time,
          Tbit:this.cbitOption[this.cbitSelected-1].bit
          };
      },
    },
  },
  methods: {
    //讲信息传给明细流水
    /*  sendInfo(){
        this.$bus.$emit('sendTheInfo',this.cnameMsg,this.typeMsg)
    } */
    sendInfo() {
      this.$store.dispatch("sendInfo", this.newInfo);
      this.$router.push({
        path: "/thoughtdetail",
      });
    },
  },
};
</script>

<style>
#signInfo li{
  margin:20px 0px;
}
</style>
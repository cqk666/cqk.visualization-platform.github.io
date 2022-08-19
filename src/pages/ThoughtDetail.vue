<!-- 明细流水页面 -->
<template>
  <div id="userAct" class="w">
        <div id="topic">明细流水：</div>
        <ul id="userActInfos">
            <li v-for="(info,index) in $store.state.allInfo" :key="index">
                <div id="userActName">比赛名字：{{info.Tname}}</div>
                <div id="userActType">比赛类型：{{info.Ttype}}</div>
                <div id="userActLevel">比赛等级：{{info.Tlevel}}</div>
                <div id="userActGrade">比赛级别：{{info.Tgrade}}</div>
                <div id="userActTime">比赛时间：{{info.Ttime}}</div>
                <div id="userActBit">位次：{{info.Tbit}}</div>
                <button id="userActBack" @click="removeInfo(info)">撤回</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'ThoughtDetail',
    data() {
        return{
            
        }
    },
    methods:{
        removeInfo(info){
            let index = this.$store.state.allInfo.indexOf(info);
            if(index !== -1){
                this.state.allInfo.splice(index,1);
            }
        },
        /* getInfo(cname,ctype) {
            this.baseInfo.push({name:cname,type:ctype})
        } */

    },
    mounted(){
        /* this.$bus.$on('sendTheInfo',this.getInfo) */
    },
    beforeDestroy() {
        /* this.$bus.$off('sendTheInfo') */
    },

}
</script>

<style>
/* 页面标签 */
#topic {
    background-color: #fff;
    height: 60px;
    margin-top: 10px;
    border-radius: 10px;
    line-height: 60px;
    font-size: 20px;
    padding-left: 20px;
}
#userActInfos li {
    background-color: #fff;
    height: 60px;
    line-height: 30px;
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
    position: relative; 
    padding-left: 30px; 
    flex-wrap: wrap;
}
/* 活动名 */
#userActName{
    font-size: 14px;
    width: 250px;
}
/* 活动时间 */
#userActType{
    font-size: 14px;
    width: 250px;
}
#userActLevel{
    width: 125px;
    font-size: 14px;
}
#userActGrade{
     width: 125px;
    font-size: 14px;
}
#userActTime{
     width: 150px;
    font-size: 14px;
}
#userActBit{
     width: 125px;
    font-size: 14px;
}
/* 详情按钮 */
#userActBack{
    font-size: 17px;
    position: absolute;
    line-height: 40px;
    height: 40px;
    padding: 0 20px;
    border-radius: 7px;
    right: 20px;
    top: 10px;
    border: none;
    border: 1px solid rgba(84, 84, 83,.5);
    color: rgb(110, 110, 110);
    background-color:rgba(84, 84, 83,0.1);
}
#userActBack:hover{
    color: #fff;
    background-color:rgb(179, 178, 178);
    border: none;
}

</style>
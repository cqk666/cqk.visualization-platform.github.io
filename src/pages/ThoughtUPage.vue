<!-- 思想宇宙页面 -->
<template>
  <div id="universePage" class="w">
    <div id="pageInfo">
        <div id="pageTitlt">思想小宇宙</div>
        <ul id="pageUserInfo">
            <li id="pageliTitle">个人信息页</li>
            <li>个人形象</li>
            <li>分数：</li>
            <li>排名位次：</li>
        </ul>
    </div>
    <div id="pageDirectory">
        <router-link to="signcheck" id="signCheck">上传审核</router-link>
        <router-link to="taskdistribute" id="publish">任务发布</router-link>
        <router-link to="thoughtdetail" id="detail">明细流水</router-link>
    </div>
    <ul id="pageInteractive">'
        <li id="rule"><a href="#">上传规则</a></li>
        <li id="universeList"><a href="#">查看本宇宙榜单</a></li>
    </ul>
</div>
</template>

<script>
export default {
    name:'ThoughtUPage'
}
</script>

<style scoped>
#pageInfo{
    display: flex;
    justify-content: space-between;
}
#pageTitlt{
    width: 200px;
    height: 200px;
    border-radius: 100px;
    text-align: center;
    line-height: 200px;
    color: white;
    font-size: 25px;
    background-color:  rgb(81, 81, 191);
    margin-top: 30px;
    margin-left: 50px;

}
#pageUserInfo li{
    margin-top: 30px;
    margin-right: 100px;
}
#pageliTitle{
    font-size: 25px;
    padding-top: 10px;
}
#pageDirectory{
    height: 500px;
    position: relative;
}
#signCheck,#publish,#detail{
    text-align: center;
    font-size: 20px;
    background-color:  rgb(81, 81, 191);
    position: absolute;
    color: white;
}
#signCheck{
    width: 160px;
    height: 160px;
    border-radius: 80px;
    line-height: 160px;
    top: 50px;
    left: 100px;
}
#publish{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    line-height: 100px;
    top: 200px;
    left: 350px;
}
#detail{
    width: 130px;
    height: 130px;
    border-radius: 65px;
    line-height: 130px;
    top: 350px;
    left: 200px;
}
#pageInteractive{
    margin-left: 50px;
}
#pageInteractive li{
    margin-top: 20px;
    font-size: 18px;
}

</style>
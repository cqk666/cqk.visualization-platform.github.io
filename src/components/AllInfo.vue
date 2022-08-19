<template>
  <div id="userInfoWrapper" class="w">
        <ul id="userInfo">
            <li id="liTitle">个人信息页</li>
            <li>个人形象</li>
            <li>分数：</li>
            <li>排名位次：</li>
        </ul>
        <div id="userId">个人身份码：&nbsp;
            <a href="#">4732974332</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'AllInfo'
}
</script>

<style scoped>
/* 个人信息 */
#userInfoWrapper{
    display: flex;
    justify-content: space-between;
    font-size: 18px;
}
#userInfo li{
    margin-top: 20px;
}
#liTitle{
    font-size: 25px;
    margin-bottom: 30px;
}
#userId{
    margin-top: 20px;
}
</style>
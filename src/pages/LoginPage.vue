<!-- 登录页面 -->
<template>
  <div id="indexContent" class="w">
    <MainTitleVue></MainTitleVue>
    <LoginWrapper></LoginWrapper>
  </div>
</template>

<script>
import MainTitleVue from "@/components/MainTitle.vue";
import LoginWrapper from "@/components/LoginWrapper";

export default {
  name: "LoginPage",
  components:{
    MainTitleVue,
    LoginWrapper
    }
};
</script>

<style scoped>
</style>
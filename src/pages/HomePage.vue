<!-- 主导航页面 -->

<template>
  <div id="directoryWrapper" class="w">
    <AllInfo></AllInfo>
    <UniverseEnter></UniverseEnter>
    <RankList></RankList>
    <VisitEnter></VisitEnter>
  </div>
</template>

<script>
import AllInfo from "@/components/AllInfo.vue";
import UniverseEnter from "@/components/UniverseEnter.vue";
import RankList from '@/components/RankList.vue'
import VisitEnter from '@/components/VisitEnter.vue'

export default {
  name: "HomePage",
  components: {
    AllInfo,
    UniverseEnter,
    RankList,
    VisitEnter
  },
};
</script>

<style scoped>
</style>
<!-- 封面 -->

<template>
      <div id="indexContent" class="w">
        <MainTitle></MainTitle>
        <MainEnter></MainEnter>
    </div>
</template>

<script>
import MainTitle from '@/components/MainTitle.vue'
import MainEnter from '@/components/MainEnter.vue'

export default {
    name:'CoverPage',
    components:{
        MainTitle,
        MainEnter
        }
}
</script>

<style scoped>

</style>
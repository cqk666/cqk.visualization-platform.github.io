<template>
  <div id="directory" class="w">
    <RadarFigure></RadarFigure>
    <router-link to="/thoughtupage" id="thought">思想小宇宙</router-link>
    <a href="#" id="practice">实践小宇宙</a>
    <a href="#" id="literary">文体小宇宙</a>
    <a href="#" id="acadrmic">学业小宇宙</a>
    <a href="#" id="competition">科研竞赛小宇宙</a>
  </div>
</template>

<script>
import RadarFigure from "@/components/RadarFigure.vue";

export default {
  name: "UniverseEnter",
  components: {
    RadarFigure,
  },
};
</script>

<style scoped>
/* 星球 */
#directory {
  height: 600px;
  width: 600px;
  position: relative;
}
#thought,
#practice,
#acadrmic,
#literary,
#competition {
  font-size: 20px;
  display: block;
  background-color: rgb(81, 81, 191);
  color: white;
  text-align: center;
  position: absolute;
}
#thought,
#literary {
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 60px;
}
#acadrmic,
#practice {
  width: 150px;
  height: 150px;
  line-height: 150px;
  border-radius: 75px;
}
#competition {
  width: 180px;
  height: 180px;
  line-height: 180px;
  border-radius: 90px;
}
#thought {
  top: 40px;
  left: 230px;
}
#practice {
  top: 200px;
}
#literary {
  top: 460px;
  left: 150px;
}
#acadrmic {
  top: 460px;
  left: 400px;
}
#competition {
  top: 80px;
  left: 450px;
}
</style>
<template>
  <div id="radar"></div>
</template>

<script>
export default {
  name: "RadarFigure",
  methods:{
    drawChart(){
      let mCharts = this.$echarts.init(document.getElementById("radar"));
let dataMax = [
  {
    name: "思想",
    max: 100,
  },
  {
    name: "实践",
    max: 100,
  },
  {
    name: "文体",
    max: 100,
  },
  {
    name: "学业",
    max: 100,
  },
  {
    name: "科研",
    max: 100,
  },
];
let option = {
  radar: {
    indicator: dataMax, //配置各个维度的最大值
  },
  series: [
    {
      type: "radar",
      label: {
        show: true,
      },
      areaStyle: {},
      data: [
        {
          name: "华为手机",
          value: [50, 90, 10, 82, 90],
        },
      ],
    },
  ],
};
mCharts.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  },
};

</script>

<style scoped>
/* 雷达图 */
#radar {
  position: absolute;
  width: 350px;
  height: 350px;
  top: 150px;
  left: 160px;
}
</style>
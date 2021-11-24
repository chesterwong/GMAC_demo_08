<template>
  <div id="ChartDoublePie">
    <div :id=msgid class="chartdoubleMain"></div>
  </div>
</template>

<script>

import { defineComponent ,inject, onMounted } from 'vue'

export default defineComponent({
  name: 'ChartDoublePie',
  props: {
    msgid: String
  },
  setup (props) {
    let _echarts = inject("ec");//引入

    onMounted(() => {//需要获取到element,所以是onMounted的Hook
      let myChart = _echarts.init(document.getElementById(props.msgid));
      // 绘制图表
      let option = {
            series: [
              {
                name: 'Access From',
                type: 'pie',
                selectedMode: 'single',
                radius: ['20%', '30%'],
                label: {
                  show:false,
                  position: 'inner',
                  fontSize: 14
                },
                labelLine: {
                  show: false
                },
                data: [
                  { value: 1548, name: 'Search Engine' },
                  { value: 775, name: 'Direct' },
                  { value: 679, name: 'Marketing'}
                ]
              },
              {
                name: 'Access From',
                type: 'pie',
                radius: ['45%', '60%'],
                labelLine: {
                  length: 30
                },
                data: [
                  { value: 1048, name: 'Baidu' },
                  { value: 335, name: 'Direct' },
                  { value: 310, name: 'Email' },
                  { value: 251, name: 'Google' },
                  { value: 234, name: 'Union Ads' },
                  { value: 147, name: 'Bing' },
                  { value: 135, name: 'Video Ads' },
                  { value: 102, name: 'Others' }
                ]
              }
            ]
          };

      myChart.setOption(option);
      window.onresize = function () {//自适应大小
        myChart.resize();
      };
    });

  },
  mounted() {
    //this.$root => app
    // let myChart = this.$echarts.init(
    //   document.getElementById("chartdoubleMain")
    // );

    // let option = {
    //   series: [
    //     {
    //       name: 'Access From',
    //       type: 'pie',
    //       selectedMode: 'single',
    //       radius: ['20%', '30%'],
    //       label: {
    //         show:false,
    //         position: 'inner',
    //         fontSize: 14
    //       },
    //       labelLine: {
    //         show: false
    //       },
    //       data: [
    //         { value: 1548, name: 'Search Engine' },
    //         { value: 775, name: 'Direct' },
    //         { value: 679, name: 'Marketing'}
    //       ]
    //     },
    //     {
    //       name: 'Access From',
    //       type: 'pie',
    //       radius: ['45%', '60%'],
    //       labelLine: {
    //         length: 30
    //       },
    //       data: [
    //         { value: 1048, name: 'Baidu' },
    //         { value: 335, name: 'Direct' },
    //         { value: 310, name: 'Email' },
    //         { value: 251, name: 'Google' },
    //         { value: 234, name: 'Union Ads' },
    //         { value: 147, name: 'Bing' },
    //         { value: 135, name: 'Video Ads' },
    //         { value: 102, name: 'Others' }
    //       ]
    //     }
    //   ]
    // };
    // // 绘制图表
    // myChart.setOption(option);
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chartdoubleMain{
  height: 200px;
  width: 100%;
  background-color: white;
}
</style>

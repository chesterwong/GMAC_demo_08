<template>
  <div id="ChartBar">
    <div :id=msgid class="chartbarMain"></div>
  </div>
</template>

<script>
import { defineComponent ,inject, onMounted } from 'vue'

export default defineComponent({
  name: 'ChartBar',
  props: {
    msgid: String
  },
  setup (props) {
    let _echarts = inject("ec");//引入


    onMounted(() => {//需要获取到element,所以是onMounted的Hook
      let myChart = _echarts.init(document.getElementById(props.msgid));
      // 绘制图表
      let option = {
      tooltip: {},
      legend: {
        top:'2%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        data: ['合同', '申请']
      },
      grid: {
        top:'20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
      },
      yAxis: {},
      series: [
        {
          name: "合同",
          type: "line",
          smooth: true,
          data: [5, 20, 36, 10, 10, 20],
        },
        {
          name: "申请",
          type: "line",
          smooth: true,
          data: [15, 30, 16, 13, 33, 7],
        },
      ],
    };

      myChart.setOption(option);
      window.onresize = function () {//自适应大小
        myChart.resize();
      };
    });
  },
  mounted() {
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chartbarMain{
  height: 200px;
  width: 100%;
  background-color: white;
}
</style>

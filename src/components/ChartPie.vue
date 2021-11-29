<template>
  <div id="ChartPie">
    <el-progress type="dashboard" :percentage=msgobj.percentage :width="100">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span><br>
        <span class="percentage-label">{{ msgobj.content}}</span>
      </template>
    </el-progress>
    <!-- <div :id=msgid class="chartpieMain"></div> -->
  </div>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChartDoublePie',
  props: {
    msgid: String,
    msgobj: Object
  },
  setup () {
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chartpieMain{
  height: 200px;
  width: 100%;
  background-color: white;
}
</style>

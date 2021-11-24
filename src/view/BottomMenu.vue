<template>
  <div id="BottomMenu">
      <el-row>
        <el-col :span="12">
            <div>
                <span class="iconfont iconMenu iconDefault">&#xe75e;</span><br>
                <span class="iconTitle iconDefault">业绩总览</span>
            </div>
        </el-col>
        <el-col :span="12">
            <div>
                <span class="iconfont iconMenu iconSelect">&#xe75e;</span><br>
                <span class="iconTitle iconSelect">经销商业绩</span>
            </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'BottomMenu',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconMenu {
    line-height: 1.4em;
    font-size: 30px;;
}
.iconTitle{
    font-family:'TxMedium';
    color: rgb(255, 255, 255);
}
.iconSelect {
    color: rgb(255, 255, 255);
}
.iconDefault {
    color: rgb(168, 168, 168);
}
</style>

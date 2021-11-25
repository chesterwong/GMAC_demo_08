<template>
  <div id="BottomMenu">
      <el-row>
        <el-col :span="12">
            <div @click="changeselect('group')">
                <span :class='(seletedname == "group") ? "iconfont iconMenu iconSelect" : "iconfont iconMenu iconDefault" '>&#xe75e;</span><br>
                <span :class='(seletedname == "group") ? "iconTitle iconSelect" : "iconTitle iconDefault" '>业绩总览</span>
            </div>
        </el-col>
        <el-col :span="12">
            <div @click="changeselect('distributor')">
                <span :class='(seletedname == "distributor") ? "iconfont iconMenu iconSelect" : "iconfont iconMenu iconDefault" '>&#xe75e;</span><br>
                <span :class='(seletedname == "distributor") ? "iconTitle iconSelect" : "iconTitle iconDefault" '>经销商业绩</span>
            </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { defineComponent ,toRefs } from "vue"

export default defineComponent({
  name: 'BottomMenu',
  props:{
      seletedname : String
  },
  setup(props){
      const title = toRefs(props)
      const router = useRouter();
      const changeselect = (n) => {
        title.seletedname = n
        router.push({
            name:n
        });
      }
      return {
          changeselect
      }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconMenu {
    line-height: 1.4em;
    font-size: 30px;
    font-family:'TxMedium';
}
.iconTitle{
    font-family:'TxMedium';
    color: rgb(255, 255, 255);
}
.iconSelect {
    font-family:'TxMedium';
    color: rgb(255, 255, 255);
}
.iconDefault {
    color: rgb(168, 168, 168);
}
</style>

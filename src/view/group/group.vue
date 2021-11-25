<template>
  <div id="group">
      <el-row>
          group
      </el-row>
      <div class="bottom_Menu">
        <BottomMenu :seletedname='"group"'/>
      </div>
  </div>
</template>

<script>
import BottomMenu from '../BottomMenu.vue'
export default {
  name: 'group',
  setup(){
    return {
      BottomMenu
    }
  },
  components:{
    BottomMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom_Menu{
  position: fixed;
  bottom: 0px;
  background: #6E7483;
  width: 100%;
  padding-bottom: 10px;
}
</style>

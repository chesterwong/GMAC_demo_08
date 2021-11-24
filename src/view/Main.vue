<template>
  <div id="Main">
    <el-row :span="24" style="padding:8px;">
      <el-input v-model="input2" placeholder="请输入您需要找的经销商名称或编号">
        <template #prefix>
          <el-icon class="el-input__icon">
            <Search />
          </el-icon>
        </template>
      </el-input>
    </el-row>

    <el-row :span="24" style="padding:8px;">
      <el-col :span="12" style="text-align:left;">
        <span class="p_2">2021Q3</span>
      </el-col>
      <el-col :span="12" style="text-align:right;">
        <span class="p_3">数据截止日期：2021-06-16</span> <span class="iconfont">&#xe666;</span>
      </el-col>
    </el-row>

    <el-row :span="24" style="padding:8px 8px 0 8px;">
      <el-col>
        <el-progress :percentage="percentage" :color="customColor" />
      </el-col>
    </el-row>

    <el-row :span="24" style="padding:0 8px 8px 8px;">
      <el-col>
        <el-tabs v-model="activeName">
          <el-tab-pane label="我的经销商" name="distributor">
            <Distributor/>
          </el-tab-pane>
          <el-tab-pane label="我的集团" name="group">
            <Group/>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <el-row class="bottom_Menu">
      <el-col>
        <BottomMenu/>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import BottomMenu from './BottomMenu.vue'
import Distributor from './distributor/distributor'
import Group from './group/group.vue'

import {defineComponent ,ref,onMounted  } from "vue";
import { Search } from '@element-plus/icons'

export default defineComponent({
  name: 'Main',
  
  setup() {
    onMounted(() => {
    })
    return {
      input2:ref(''),
      activeName:ref('distributor'),
      percentage:ref(80),
      customColor:ref('#1989fa'),
    }
  },
  components:{
    BottomMenu,
    Search,
    Distributor,
    Group,
  },
})

</script>

<style scope>
.bottom_Menu{
  position: fixed;
  bottom: 0px;
  background: #6E7483;
  width: 100%;
  padding-bottom: 10px;
}

.el-tabs__header{
  margin-bottom:5px;
}
.green{
  color:#198a44;
}
.red{
  color:#ff383d;
}
.yellow{
  color:#ffe7a1;
}
.white{
  color: #ffffff;
}

.show {
  display: block;
}

.none {
  display: none;
}
</style>
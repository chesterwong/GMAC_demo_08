<template>
  <div id="distributor">
      <el-row :span="24" style="background-color:#EEF6FF">
        <el-col :span="6">
          <el-button type="text" @click="dialogVisible = true">
            省份
            <span class="iconfont">&#xe670;</span>
          </el-button>
          <el-dialog v-model="dialogVisible" title="请选择您筛选的省份" width="85%">
            <span>北京</span>
            <span>上海</span>
            <span>广州</span>
            <span>深圳</span>
          </el-dialog>
        </el-col>
        <el-col :span="6">
          <el-button type="text" @click="dialogVisible1 = true">
            城市
            <span class="iconfont">&#xe670;</span>
          </el-button>
          <el-dialog v-model="dialogVisible1" title="请选择您筛选的城市" width="85%">
            <span>城市1</span>
            <span>城市2</span>
            <span>城市3</span>
            <span>城市4</span>
          </el-dialog>
        </el-col>
      </el-row>

      <el-row :span="24" style="border-top:2px solid #c7efff;">
        <el-col :span="8">
          <el-button type="text">
            按合同量
            <span class="iconfont">&#xe670;</span>
          </el-button>
        </el-col>
        <el-col :span="8">
          <el-button type="text">
            按完成率
            <span class="iconfont">&#xe670;</span>
          </el-button>
        </el-col>
        <el-col :span="8">
          <el-button type="text">
            按渗透率
            <span class="iconfont">&#xe670;</span>
          </el-button>
        </el-col>
      </el-row>

      <el-row :span="24">
        <el-col>
          <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
            <li v-for="i in count" :key="i" class="infinite-list-item" @click="storelink($event,i);">
              <div style="width:70%;">
                <ul>
                  <li style="text-align:left;" class="p_1 subtitle">贵州佰驹之驿汽车销售有限公司</li>
                </ul>
                <ul>
                  <li style="text-align:left;" class="p_3 bhsubtitle">编号ID: 1003105</li>
                </ul>
                <ul style="padding:0 8px;">
                  <li style="flex:1;position: relative;float: left;" class="p_3 subcontent">目标: 0</li>
                  <li style="flex:1;position: relative;float: left;" class="p_3 subcontent">季度完成率: 173.9%</li>
                </ul>
                <ul style="padding:0 8px;">
                  <li style="flex:1;position: relative;float: left;" class="p_3 subcontent">上月渗透率: 0%</li>
                  <li style="flex:1;position: relative;float: left;" class="p_3 subcontent">前一日合同量: 32</li>
                </ul>
              </div>
              <div style="width:30%;">
                <ul>
                  <li class="p_3 subcontent content_ct" style="width:100%;padding-top:4px;">本月合同量</li>
                  <li class="d_1 green yhtl">883</li>
                </ul>
              </div>
            </li>
          </ul>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'


export default {
  name: 'distributor',
  setup () {
    const route = useRoute();
    const router = useRouter();
    
    const dialogVisible = ref(false);
    const dialogVisible1 = ref(false);
    const count = ref(0);

    
    console.log(route)
    console.log(router)

    const load = () => {
      count.value += 2
    }

    const handleClose = () => {
      
    }
    const storelink = (obj, Number) =>  {
      console.log(obj);
      console.log(Number);
      console.log(router);
      router.push({
          name:'storelink'
      });
    }
    return {
      dialogVisible,
      dialogVisible1,
      handleClose,
      count,
      load,
      storelink
    }
  },
  methods: {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.infinite-list {
  height: 420px;
  padding: 0;
  margin: 0;
  list-style: none;

  .infinite-list-item {
    display: flex;
    height: 100px;
    background: var(--el-color-primary-light-9);
    margin: 10px 0px;
    & + .list-item {
      margin-top: 10px;
    }
  }
}
.subtitle{
  font-weight: 700;
  padding: 6px 8px;
}
.bhsubtitle{
  padding: 2px 8px;
}
.subcontent{
  padding: 2px 0px;
  width: 50%;
  text-align: left;
}
.content_ct{
  text-align: center;
}
.yhtl{
  line-height: 2em;
}
</style>

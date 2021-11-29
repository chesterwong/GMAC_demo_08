<template>
  <div id="group">
      <el-row class="groupheader">
          <el-col :span="4">
            <div class="block">
              <el-avatar :size="50" src="https://img1.baidu.com/it/u=2801452733,902202346&fm=26&fmt=auto"></el-avatar>
            </div>
          </el-col>
          <el-col :span="14" class="headercontent">
            <span>Chester</span><br>
            <span>角色：AM</span>
          </el-col>
          <el-col :span="6">
            <span class="headerselectfont selected_yellow">业绩</span>
            <span class="headerselectfont">管理</span>
          </el-col>
      </el-row>

      <el-row>
        <el-col class="bannerarea">
          <el-card class="box-card">
            <div>
              <ul>
                <li>
                  <div>
                    <ul>
                      <li class="bannercontenttitle">
                        <span class="iconfont ifontcolor_green">&#xe637;</span>
                        完成率
                      </li>
                    </ul>
                    <ul>
                      <li class="bannercontentcontent">
                        25<span class="fontavg">%</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <ul>
                      <li class="bannercontenttitle">
                        <span class="iconfont ifontcolor_blue">&#xe686;</span>
                        渗透率
                      </li>
                    </ul>
                    <ul>
                      <li class="bannercontentcontent">
                        78<span class="fontavg">%</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <ul>
                      <li class="bannercontenttitle">
                        <span class="iconfont ifontcolor_yellow">&#xe639;</span>
                        排名
                      </li>
                    </ul>
                    <ul>
                      <li class="bannercontentcontent">31</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row class="modelarea">
        <el-col :span="12" class="stl_title">
          常规指标
        </el-col>
        <el-col :span="12" class="stl_xl p_2">
          全品牌 全车系
        </el-col>
      </el-row>

      <el-row class="modelarea">
        <el-col :span="24">
          <div class="stl_area">
            <ul>
              <li class="stl_area_lr">
                <div class="stl_sub_area">
                  <ul>
                    <li class="stl_sub_title">
                      <div class="stl_icon_bg_blue"><span class="iconfont stl_icon">&#xe63b;</span></div>
                      <span class="stl_icon_title">合同数</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="stl_sub_title2">日合同</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="ocn d_3">25</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="stl_sub_title2">月合同</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="ocn d_3">303</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="d_5">同比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">16%</span>
                    </li>
                    <li class="stl_sub_content">
                      <span class="d_5">环比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">140%</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="stl_sub_title2">年合同</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="ocn d_3">4,709</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="d_5">同比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">16%</span>
                    </li>
                    <li class="stl_sub_content">
                      <span class="d_5">环比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">140%</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="stl_area_ll">
                <div class="stl_sub_area">
                  <ul>
                    <li class="stl_sub_title">
                      <div class="stl_icon_bg_yellow"><span class="iconfont stl_icon">&#xe641;</span></div>
                      <span class="stl_icon_title">申请数</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="stl_sub_title2">日申请</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="ocn d_3">25</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="stl_sub_title2">月申请</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="ocn d_3">303</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="d_5">同比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">16%</span>
                    </li>
                    <li class="stl_sub_content">
                      <span class="d_5">环比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">140%</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="stl_sub_title2">年申请</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="ocn d_3">4,709</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="d_5">同比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">16%</span>
                    </li>
                    <li class="stl_sub_content">
                      <span class="d_5">环比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">140%</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <el-divider></el-divider>
            <ul>
              <li class="stl_area_cr">
                <div class="stl_sub_area">
                  <ul>
                    <li class="stl_sub_title">
                      <div class="stl_icon_bg_blue"><span class="iconfont stl_icon">&#xe650;</span></div>
                      <span class="stl_icon_title">合同/申请30日走势图</span>
                    </li>
                  </ul>
                </div>
                <ChartBar :msgid='"l1"'/>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>

      <el-row class="modelarea">
        <el-col class="stl_area" :span="24">
          <div class="stl_sub_area">
            <ul>
              <li class="stl_sub_title">
                <span class="stl_icon_title1 selected">完成率</span>
                <span class="stl_icon_title">渗透率</span>
              </li>
            </ul>
            <ul>
              <li class="stl_area_lr">
                <ChartDoublePie :msgid='"a1"'/>
              </li>
              <li class="stl_area_ll">
                <ChartDoublePie :msgid='"a2"'/>
              </li>
            </ul>

          </div>
        </el-col>
      </el-row>

      <el-row class="modelarea">
        <el-col :span="12" class="stl_title">
          关注类指标
        </el-col>
        <el-col :span="12" class="stl_xl p_2">
          全品牌 全车系
        </el-col>
      </el-row>

      <el-row class="modelarea">
        <el-col class="stl_area" :span="24">
          <div class="stl_area">
            <ul>
              <li class="stl_area_lr">
                <div class="stl_sub_area">
                  <ul>
                    <li class="stl_sub_title">
                      <div class="stl_icon_bg_yellow"><span class="iconfont stl_icon">&#xe644;</span></div>
                      <span class="stl_icon_title">长期限</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="stl_sub_title2">日合同量</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="ocn d_3">91.9%</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="d_5">同比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">-</span>
                    </li>
                    <li class="stl_sub_content">
                      <span class="d_5">环比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">0%</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="stl_sub_title2">季合同量</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="ocn d_3">96.2%</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="d_5">同比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">0%</span>
                    </li>
                    <li class="stl_sub_content">
                      <span class="d_5">环比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">-</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="stl_area_ll">
                <div class="stl_sub_area">
                  <ul>
                    <li class="stl_sub_title">
                      <span class="stl_icon_title"></span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="stl_sub_title2">月合同量</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="ocn d_3">91.9%</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="d_5">同比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">-</span>
                    </li>
                    <li class="stl_sub_content">
                      <span class="d_5">环比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">19%</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="stl_sub_title2">年合同量</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="ocn d_3">96.2%</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="d_5">同比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">0%</span>
                    </li>
                    <li class="stl_sub_content">
                      <span class="d_5">环比：</span>
                    </li>
                    <li class="stl_sub_content1">
                      <span class="d_4 green">-</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>

      <el-row class="modelarea">
        <el-col :span="12" class="stl_title">
          业绩排名
        </el-col>
        <el-col :span="12" class="stl_xl p_2">
        </el-col>
      </el-row>

      <el-row class="modelarea medelarealast">
        <el-col class="stl_area" :span="24">
          <div class="stl_area">
            <ul>
              <li class="stl_sub_title">
                <div class="stl_icon_bg_yellow"><span class="iconfont stl_icon">&#xe639;</span></div>
                <span class="stl_icon_title">渠道个人排名榜</span>
              </li>
            </ul>
            <ul>
              <li class="stl_area_cr">
                <el-table :data="tableData" style="width: 100%" height="250" >
                  <el-table-column prop="date" label="Date" width="150" />
                  <el-table-column prop="name" label="Name" width="120" />
                  <el-table-column prop="state" label="State" width="120" />
                  <el-table-column prop="city" label="City" width="320" />
                  <el-table-column prop="address" label="Address" width="600" />
                  <el-table-column prop="zip" label="Zip" width="120" />
                </el-table>
              </li>
            </ul>
            <el-divider></el-divider>
            <ul>
              <li class="stl_area_cr">
                <div class="stl_sub_area">
                  <ul>
                    <li class="stl_sub_title">
                      <div class="stl_icon_bg_blue"><span class="iconfont stl_icon">&#xe650;</span></div>
                      <span class="stl_icon_title">个人30日排名趋势</span>
                    </li>
                  </ul>
                </div>
                <ChartBar :msgid='"l2"'/>
              </li>
            </ul>
            <el-divider></el-divider>
            <ul>
              <li class="stl_area_lr">
                <div class="stl_sub_area">
                  <ul>
                    <li class="stl_sub_content">
                      <span class="stl_sub_title2">个人 / 区域</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="ocn d_3">312 / 2901</span>
                    </li>
                  </ul>
                  <el-table :data="tableData" style="width: 100%" height="150" >
                    <el-table-column prop="date" label="Date" width="150" />
                    <el-table-column prop="name" label="Name" width="120" />
                    <el-table-column prop="state" label="State" width="120" />
                    <el-table-column prop="city" label="City" width="320" />
                    <el-table-column prop="address" label="Address" width="600" />
                    <el-table-column prop="zip" label="Zip" width="120" />
                  </el-table>
                </div>
              </li>
              <li class="stl_area_ll">
                <div class="stl_sub_area">
                  <ul>
                    <li class="stl_sub_content">
                      <span class="stl_sub_title2">个人 / 区域</span>
                    </li>
                  </ul>
                  <ul>
                    <li class="stl_sub_content">
                      <span class="ocn d_3">312 / 2901</span>
                    </li>
                  </ul>
                  <el-table :data="tableData" style="width: 100%" height="150" >
                    <el-table-column prop="date" label="Date" width="150" />
                    <el-table-column prop="name" label="Name" width="120" />
                    <el-table-column prop="state" label="State" width="120" />
                    <el-table-column prop="city" label="City" width="320" />
                    <el-table-column prop="address" label="Address" width="600" />
                    <el-table-column prop="zip" label="Zip" width="120" />
                  </el-table>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>

      <div class="bottom_Menu">
        <BottomMenu :seletedname='"group"'/>
      </div>
  </div>
</template>

<script>
import BottomMenu from '../BottomMenu.vue'

import ChartBar from '../../../src/components/ChartBar.vue'
//import ChartPie from '../../../src/components/ChartPie.vue'
import ChartDoublePie from '../../../src/components/ChartDoublePie.vue'


export default {
  name: 'group',
  setup(){
    return {
      BottomMenu,
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
      ]
    }
  },
  components:{
    BottomMenu,
    ChartBar,
    //ChartPie,
    ChartDoublePie,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#group{
  height: 100%;
  background-color: #EEF6FF;
  margin-bottom:74px;
}

.modelarea{
  padding:8px 8px 0 8px;
}
.medelarealast{
  padding-bottom:8px;
}

.stl_title{
  font-family:'TxMedium';
  text-align: left;
  font-size: 14px;
  line-height: 1.7em;
}
.stl_xl{
  text-align: right;
  font-size: 14px;
}

.bottom_Menu{
  position: fixed;
  bottom: 0px;
  background: #6E7483;
  width: 100%;
  padding-bottom: 10px;
  z-index: 1;
}
.groupheader{
  height: 100px;
  background-color: #425CFB;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-top:20px;
}
.headercontent{
  text-align: left;
  color: #ffffff;
}
.headerselectfont{
  font-size: 12px;
  color:#DFDFDF;
  margin-right: 10px;
}
.selected_yellow {
  color: #ffffff;
  border-bottom: 2px solid #FCCA0F;
}
.bannerarea{
  padding: 0px 7px;
  margin-top: -20px;
}
.box-card {
  border-radius: 7px;
}
.box-card ul{
  display: flex;
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-content: center;
  align-content: flex-start;
}
.box-card li {
  flex:1;
  width: 100%;
}
.bannercontenttitle{
  font-style: italic;
  font-size: 12px;
  color: #A8A8A8;
}
.bannercontentcontent{
  font-size: 32px;
  font-weight: 600;
  font-family: 'TxMedium';
  color: #A8A8A8;
  padding-top: 5px;
}
.fontavg{
  font-size:14px;
}
.ifontcolor_green{
  background-color: #198a44;
  padding: 4px 4px 4px 4px;
  border-radius: 15px;
  display: initial;
  color: white;
}
.ifontcolor_yellow{
  background-color: #FCCA0F;
  padding: 4px 4px 4px 4px;
  border-radius: 15px;
  display: initial;
  color: white;
}
.ifontcolor_blue{
  background-color: #425CFB;
  padding: 4px 4px 4px 4px;
  border-radius: 15px;
  display: initial;
  color: white;
}

.stl_sub_title{
  text-align: left;
  padding: 7px 0 7px 14px;
  color:#8E8E8E;
  font-size: 14px;
  font-family:'TxMedium';
}
.stl_sub_title2{
  color:#838383;
  font-family:'TxMedium';
  font-size: 12px;
  font-style: italic;
  line-height: 1.7rem;
}
.stl_sub_content{
  text-align: left;
  padding: 4px 0 0 14px;
  font-size: 0.4rem;
}
.stl_sub_content1{
  text-align: left;
}
.stl_sub_content .ocn{
}

.stl_icon_bg_blue{
  background-color: #425CFB;
  padding: 5px 4px 5px 4px;
  border-radius: 15px;
  display: initial;
}
.stl_icon_bg_yellow{
  background-color: #FCCA0F;
  padding: 5px 4px 5px 4px;
  border-radius: 15px;
  display: initial;
}
.stl_icon_bg_red{
  background-color: #fc460f;
  padding: 5px 4px 5px 4px;
  border-radius: 15px;
  display: initial;
}
.stl_icon{
  font-size: 16px;
  color: #ffffff;
}

.stl_area{
  padding: 8px 0px;
  border-radius: 7px;
  background-color: #ffffff;
}
.stl_area ul{
  display: -webkit-box;
}
.stl_area_lr,.stl_area_ll{
  width:50%;float:left;
}
.stl_area_cr{
  width:100%;float:left;
}
.stl_area_rr{
  width:33%;float:left;
}

.stl_icon_title{
  padding-left: 10px;
  color:#b8b8b8;

}

.stl_icon_title1{
  padding-bottom: 8px;
}
.stl_sub_title2{
  color:#838383;
  font-family:'TxMedium';
  font-size: 12px;
  font-style: italic;
  line-height: 1.7rem;
}

.selected{
  color: #838383;
  border-bottom: 2px solid #425CFB;
}

</style>

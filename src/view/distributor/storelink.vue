<template>
    <div id="storelink">
        <el-affix :offset="-1">
            <el-row>
                <el-col :span="24" class="goback">
                    <el-page-header content="贵州佰驹之驿汽车销售有限公司" @back="goBack" />
                </el-col>
            </el-row>
        </el-affix>

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
                                        <icon class="stl_icon_bg_blue"><span class="iconfont stl_icon">&#xe63b;</span></icon>
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
                                        <icon class="stl_icon_bg_yellow"><span class="iconfont stl_icon">&#xe641;</span></icon>
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
                                        <icon class="stl_icon_bg_blue"><span class="iconfont stl_icon">&#xe650;</span></icon>
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
            <el-col class="stl_area" :span="24">
                <div class="stl_sub_area">
                    <ul>
                        <li class="stl_sub_title bm_4">
                            <span class="stl_icon_title1 selected">产品衍生类</span>
                            <span class="stl_icon_title">产品类指标</span>
                        </li>
                    </ul>
                    <ul>
                        <li class="stl_area_lr">
                            <div class="stl_sub_area">
                                <ul>
                                    <li class="stl_sub_title">
                                        <icon class="stl_icon_bg_blue"><span class="iconfont stl_icon">&#xe63b;</span></icon>
                                        <span class="stl_icon_title">衍射合同量</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li class="stl_sub_content">
                                        <span class="stl_sub_title2">日合同</span>
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
                                        <span class="stl_sub_title2">季合同</span>
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
                                        <span class="stl_icon_title"></span>
                                    </li>
                                </ul>
                                <ul>
                                    <li class="stl_sub_content">
                                        <span class="stl_sub_title2">日合同</span>
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
                                        <span class="stl_sub_title2">季合同</span>
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
                                        <icon class="stl_icon_bg_blue"><span class="iconfont stl_icon">&#xe650;</span></icon>
                                        <span class="stl_icon_title">30日趋势图</span>
                                    </li>
                                </ul>
                            </div>
                            <ChartBar :msgid='"l2"'/>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import { useRouter } from 'vue-router'
import ChartBar from '../../../src/components/ChartBar.vue'
import ChartDoublePie from '../../../src/components/ChartDoublePie.vue'

export default defineComponent( {
    name:'storelink',
    setup() {
        const router = useRouter();
        const goBack = () => {
        router.go(-1);
        }

        return {
        goBack,
        }
    },
    components:{
        ChartBar,
        ChartDoublePie
    }
})
</script>

<style scoped>
#storelink{
    height: 100%;
    background-color: #EEF6FF;
}
.modelarea{
    padding:8px 8px 0 8px;
}
.goback{
    padding: 1rem;
    margin: 0.5px;
    background-color: white;
    border-bottom: 1px solid #b8b8b8;
}
.el-page-header__content{
    font-size: 14px;
}
.stl_title{
    font-family:'TxMedium';
    text-align: left;
    font-size: 14px;
}
.stl_xl{
    text-align: right;
    font-size: 14px;
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

.stl_sub_area ul {
    width: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: center;
    align-content: flex-start;
    
}
.stl_sub_area li {
    flex:1;
    width: 100%;
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
    padding: 0px 0 0 14px;
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
}
.stl_icon_bg_yellow{
    background-color: #FCCA0F;
    padding: 5px 4px 5px 4px;
    border-radius: 15px;
}
.stl_icon{
    font-size: 16px;
    color: #ffffff;
    
}
.stl_icon_title{
    padding-left: 10px;
    color:#b8b8b8;
    
}

.stl_icon_title1{
    padding-bottom: 8px;
}

.selected{
    color: #838383;
    border-bottom: 2px solid #425CFB;
}

.bm_4{
    padding-bottom: 14px;
}
</style>
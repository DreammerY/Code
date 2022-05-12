<template>
    <div class="changeface">
        <div class="top">
            <div class="top_left">
                <div class="top_left_list">
                    <el-button>分割结果导入</el-button>
                    <el-upload
                        action=""
                        multiple
                        list-type="picture"
                        :show-file-list="false"
                        :auto-upload="false"
                        style="margin:0 20px"
                        :limit="3">
                        <el-button>上传图片</el-button>
                    </el-upload>
                    <div class="input">
                        <span>身高：</span>
                        <el-input
                            v-model="input"
                            clearable
                            class="input_input">
                        </el-input>
                    </div>
                </div>
                <imgListVue></imgListVue>
            </div>
            <div class="top_right">
                 <div class="top_right_btn">
                    <el-button>自动生成</el-button>
                    <el-button style="margin:0 20px">多图下载</el-button>
                    <el-button>打包下载</el-button>
                </div>
                <imgListVue></imgListVue>
            </div>
        </div>
        <div class="bottom">
            <div class="chooseCollect">
                <div class="chooseCollect_top">
                    收藏脸选择
                </div>
                <div class=""><imgListVue :havecheckbox="true"></imgListVue></div>
            </div>
        </div>
    </div>
</template>
<script>
import imgListVue from '@/components/imgList.vue'
export default {
    data(){
        return {
            input: ""
        }
    },
    components:{
        imgListVue,
    }
}
</script>
<style scoped>
.changeface{
    display: flex;
    flex-direction: column;
}
.changeface .top{
     display: flex;
}
.changeface .top_left {
    margin-right: 5px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    flex:1;
}
.changeface .top_left_list,.top_right_btn{
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
.changeface .top_left_list .input{
    display: flex;
    align-items: center;
}
.changeface .top_left_list .input .input_input {
    width: 80px;
}
.changeface .top_right {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    flex:1;
}
/*  */
.changeface .bottom .chooseCollect_top{
    background-color: rgb(62, 61, 61);
    color: #fff;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    padding-left: 10px;
    font-size: 14px;
}
</style>
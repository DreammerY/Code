<template>
    <div class="addbackground">
        <div class="top">
            <div class="top_left">
                <div class="upload">
                    <el-upload
                        action=""
                        multiple
                        list-type="picture"
                        :show-file-list="false"
                        :auto-upload="false"
                        :limit="3">
                        <el-button size="small" type="primary">上传背景</el-button>
                    </el-upload>
                </div>
                <div class="showImg">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
                </div>
            </div>
            <div class="top_right">
                 <div class="upload">
                    <el-upload
                        action=""
                        multiple
                        list-type="picture"
                        :show-file-list="false"
                        :auto-upload="false"
                        :limit="3">
                        <el-button size="small" type="primary">上传参考</el-button>
                    </el-upload>
                </div>
                <div class="showImg">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
                </div>
            </div>
        </div>
        <div class="bottom">
            <el-row :gutter="20" >
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">名称 </span>
                        <el-input
                            v-model="row1_1" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">镜头高度 </span>
                        <el-input
                            v-model="row1_2" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">人物大小：X </span>
                        <el-input
                            v-model="row1_3" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">Y</span>
                        <el-input
                            v-model="row1_4" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">人机距离 </span>
                        <el-input
                            v-model="row2_1" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">竖直角度 </span>
                        <el-input
                            v-model="row2_2" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">人物坐标：X </span>
                        <el-input
                            v-model="row2_3" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">Y</span>
                        <el-input
                            v-model="row2_4" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">SEC </span>
                        <el-input
                            v-model="row3_1" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">水平角度 </span>
                        <el-input
                            v-model="row3_2" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">人物身高</span>
                        <el-input
                            v-model="row3_3" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6" style="text-align:center">
                    <el-button >提交</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">ISO </span>
                        <el-input
                            v-model="row4_1" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">F </span>
                        <el-input
                            v-model="row4_2" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            row1_1: "",
            row1_2: "",
            row1_3: "",
            row1_4: "",
            row2_1: "",
            row2_2: "",
            row2_3: "",
            row2_4: "",
            row3_1: "",
            row3_2: "",
            row3_3: "",
            row4_1: "",
            row4_2: "",
        }
    }
}
</script>
<style scoped>
.addbackground{

}
.addbackground .top{
    display: flex;

}
.addbackground .top .top_left,.top_right{
   flex: 1;
}
.addbackground .top .top_left,.top_right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px
}
.addbackground .top  .showImg{
    width: 80%;
    margin-top: 20px;
}
.addbackground .top  .showImg img{
    width: 100%;
}
/*  */
.addbackground .bottom{
    margin: 0 10%;
}
.addbackground .bottom .el-row {
    margin-bottom: 20px;
  }
.addbackground .bottom .el-row:first-child {
    margin-top: 20px;
}
.addbackground .bottom  .col_text{
    width: 100px;
    display: inline-block;
    text-align: center;
} 

</style>
<template>
    <div class="createface">
        <div class="top">
            <div class="top_model">
                <span>选择类型：</span>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
             </div>
             <div class="input input1">
                <span>seends_start1：</span>
                <el-input
                    v-model.number="input1"
                    clearable
                    class="input_input">
                </el-input>
             </div>
             <div class="input">
                <span>seends_start2：</span>
                <el-input
                    v-model.number="input2"
                    clearable
                    class="input_input">
                </el-input>
             </div>
             <el-button type="primary" class="submit" @click="submit" v-loading.fullscreen.lock="fullscreenLoading">提交</el-button>
        </div>
        <!-- <img  :src="require('../../../results/00063-generate-images/seed0005.png')" alt=""> -->
        <imgListVue :imgList="imgList"></imgListVue>
        <paginationVue></paginationVue>
    </div>
</template>
<script>
import paginationVue from '@/components/pagination.vue';
import imgListVue from '../../components/imgList.vue';
export default {
    data(){
        return {
            input1: "",
            input2: "",
            options: [],
            value: '',
            fullscreenLoading: false,
            imgList:[],
        }
    },
    methods:{
        handleTypesChange(val){
            console.log(val);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        submit(){
            if(this.input1 >= this.input2 || this.value=='' || typeof this.input1 != "number" || typeof this.input2 != "number") {
                this.$message.error('输入有误');
                return
            }
            this.getImgList()
        },
        // 获取模型下拉内容
        getModelList(){
            this.axios.get("/test/api/v1/index").then((res) => {
                if(res && res.data){
                    this.options = res.data.pkl_list.map(item => {
                        return {value:item,label:item}
                    });
                 }
            }).catch(() => {
                this.$message.error('模型列表获取失败');
            })
        },
        // 获取图片列表
        getImgList(){
            this.fullscreenLoading = true
            var params = {
                pkl:this.value,
                start:this.input1,
                end:this.input2
            }
            this.axios.post("/test/api/v1/index",params).then((res) => {
                if(res && res.data){
                    this.fullscreenLoading = false
                   this.getImgList2()
                }
            }).catch(() => {
                this.fullscreenLoading = false
                this.$message.error('图片列表获取失败');
            })
        },
        getImgList2(){
            this.axios.get("/test/api/v1/image").then((res) => {
                if(res && res.data.select_image_list){
                    this.imgList =  res.data.select_image_list.map(item => {
                        var imgname = item.substring(item.lastIndexOf("/")+1,item.length).split('.')[0]
                        var imgurl = require('../../../results/'+item)
                        return {
                            img_name: imgname,
                            url: imgurl,
                        };
                    })
                    console.log(this.imgList);
                }
            }).catch(() => {
                this.$message.error('人脸图片列表获取失败');
            })
        }
    },
    components:{
        imgListVue,
        paginationVue,
    },
    mounted(){
        this.getModelList()
    }
}
</script>
<style scoped>
.top{
    display: flex;
    justify-content: flex-start;
}
.top .top_model{
    margin-left: 20px;
}
.top .input{
   margin-left: 20px;
}
.top .input1 {
    margin-left: 60px;
}
.top .input .input_input{
    width: 80px;
}
.top .submit{
    margin-left: 50px;
}


</style>

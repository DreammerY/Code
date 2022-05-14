<template>
    <div class="cutperson">
        <div class="cutperson_top">
            <div class="top">
                <!-- <el-upload
                        action=""
                        multiple
                        list-type="picture"
                        :show-file-list="false"
                        :auto-upload="false"
                        :limit="3">
                        <el-button>上传图片</el-button>
                </el-upload> -->
                <input type="file" value="上传图片" multiple @change="selfhandleChange" id="upload" style="width:0;height:0">
                <el-button @click="uploadImgs">上传图片</el-button>
                <el-button class="margin">开始生成</el-button>
                <paginationVue style="margin-top:0"></paginationVue>
            </div>
            <div class="bottom">
                <imgListVue></imgListVue>
            </div>
        </div>
        <div class="diver"></div>
        <div class="cutperson_bottom">
             <div class="top">
                <el-button>保存结果</el-button>
                <el-button class="margin">多图下载</el-button>
                <el-button>打包下载</el-button>
                <paginationVue style="margin-top:0" class="margin"></paginationVue>
            </div>
            <div class="bottom">
                <imgListVue :havecheckbox="true"></imgListVue>
            </div>
        </div>
    </div>
</template>
<script>
import imgListVue from "@/components/imgList.vue"
import paginationVue from '@/components/pagination.vue'
export default {
    methods:{
        selfhandleChange(e){
            // let formdata = new FormData()
            // Array.from(e.target.files).map(item => {
            //     formdata.append("file", item)  //将每一个文件图片都加进formdata
            //     // formdata.append('name',"sbdoubao")
            // })
            // this.axios.post("/test/api/v1/dfl", formdata)
            // .then(res => { 
            //     console.log(res) 
            // }).catch(() => {
            //     this.$message("图片上传失败")
            // })
        },
        uploadImgs(){
            document.getElementById('upload').click();
        },
    },
    components:{
        imgListVue,
        paginationVue,
    }
}
</script>
<style  scoped>

.top{
    display: flex;
    justify-content: center;
    align-items: center;
}
.margin{
    margin: 0 20px;
}
.diver{
    height: 20px;
    background-color: rgb(62, 61, 61);
    margin: 10px 0;
}
</style>>
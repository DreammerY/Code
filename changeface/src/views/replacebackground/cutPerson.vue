<template>
    <div class="cutperson">
        <div class="cutperson_top">
            <div class="top">
                <input type="file" value="上传图片" @change="handleUpload1Change" id="upload1" style="width:0;height:0">
                <input type="file" value="上传图片" multiple @change="handleUpload2Change" id="upload2" style="width:0;height:0">
                <el-button @click="uploadImgs1">上传图片1</el-button>
                <el-button @click="uploadImgs2">上传图片2</el-button>
                <el-button class="margin" @click="generateImgs">开始生成</el-button>
                <paginationVue style="margin-top:0" :total="uploadList.length"  @currentPageChange="uploadPageChange" 
                @pageSizeChange="uploadPageSizeChange"></paginationVue>
            </div>
            <div class="bottom">
                <imgListVue :imgList="uploadImgList"></imgListVue>
            </div>
        </div>
        <div class="diver"></div>
        <div class="cutperson_bottom">
             <div class="top">
                <!-- <el-button>保存结果</el-button>
                <el-button class="margin">多图下载</el-button> -->
                <el-button>打包下载</el-button>
                <paginationVue style="margin-top:0" class="margin" :total="generateList.length" @currentPageChange="generatePageChange" 
                @pageSizeChange="generatePageSizeChange"></paginationVue>
            </div>
            <div class="bottom">
                <imgListVue :imgList="generateImgList"></imgListVue>
            </div>
        </div>
    </div>
</template>
<script>
import imgListVue from "@/components/imgList.vue"
import paginationVue from '@/components/pagination.vue'
export default {
    data(){
        return {
            totalGenetate:0,
            generateList:[],
            totalGenerate:0,
            uploadList:[],
            totalUpload: 0,
            generateImgList:[],
            formdata:new FormData(),
            upload1Flag:false, //判断1是否上传
            uploadCurrentPage:1, // 第一次默认页数页码 需与分页一致
            uploadPageSize:10,
            genetateCurrentPage:1, // 第一次默认页数页码 需与分页一致
            genetatePageSize:10,
        }
    },
    methods:{
        handleUpload1Change(e){
            console.log(e);
            if(!e.target.files){
                return;
            }
            let files = e.target.files
            Array.from(files).map(item => {
                this.formdata.append("file", item)  //将每一个文件图片都加进formdata
                this.upload1Flag = true
                // formdata.append('name',"sbdoubao")
            })
            var newLoadImgs = Array.from(files).map(item => {
                return {
                    url: URL.createObjectURL(item),
                    img_name: item.name
                }
            })
            console.log(newLoadImgs);
            this.uploadList = newLoadImgs
            this.totalUpload = this.uploadList.length
        },
        uploadImgs1(){
            document.getElementById('upload1').click();
        },
         handleUpload2Change(e){
            if(!this.upload1Flag){
                this.$message.info('请先上传图片1')
                return;
            }
            if(!e.target.files){
                return;
            }
            let files = e.target.files
            Array.from(files).map(item => {
                this.formdata.append("file", item)  //将每一个文件图片都加进formdata
            })
            var newLoadImgs = Array.from(files).map(item => {
                return {
                    url: URL.createObjectURL(item),
                    img_name: item.name
                }
            })
            this.uploadList = [...this.uploadList,...newLoadImgs]
            this.totalUpload += this.uploadList.length
        },
        uploadImgs2(){
            document.getElementById('upload2').click();
        },
        generateImgs(){
            console.log("this.formdata",this.formdata);
            this.axios.get("/test/api/v1/result/face",this.formdata).then((res) => {
                if(res){
                    console.log("res",res);
                    if(!res || !res.data) return
                    this.generateList = res.data.select_image_list.map(item => {
                        return {
                            img_name: item,
                            url: this.myip+res.results_path+item
                        }
                   })
                   this.totalGenerate = this.generateList.length
                   console.log(this.generateList );
                }
            })
            .catch(() => {
                this.$message.error('查询人脸结果失败');
            })
        },
        uploadPageChange(newVal){
            this.uploadCurrentPage = newVal
        },
        uploadPageSizeChange(newVal){
            this.uploadPageSize = newVal
        },
        generatePageChange(newVal){
            this.generateCurrentPage = newVal
        },
        generatePageSizeChange(newVal){
            this.generatePageSize = newVal
        },
    },
    components:{
        imgListVue,
        paginationVue,
    },
    computed:{
        uploadImgList(){
            if(this.totalUpload <= this.uploadPageSize){
                return this.uploadList
            }else{ // 分页
                return this.uploadList.slice((this.uploadCurrentPage-1)*this.uploadPageSize,this.uploadCurrentPage*this.uploadPageSize)
            }
        },
        generateImgList(){
            if(this.totalGenerate <= this.generatePageSize){
                return this.generateList
            }else{ // 分页
                return this.generateList.slice((this.generateCurrentPage-1)*this.generatePageSize,this.generateCurrentPage*this.generatePageSize)
            }
        },
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
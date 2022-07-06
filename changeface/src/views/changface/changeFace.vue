<template>
    <div class="changeface" v-loading.fullscreen.lock="fullscreenLoading">
        <div class="top">
            <div class="top_left">
                <div class="top_left_btn">
                    <input type="file" value="上传图片" multiple @change="selfhandleChange" id="upload">
                    <el-button @click="uploadImgs">上传图片</el-button>
                </div>
                <imgListVue :imgList="uploadImgList"></imgListVue>
                <paginationVue :total="uploadList.length"  @currentPageChange="uploadPageChange" @pageSizeChange="uploadPageSizeChange"></paginationVue>
            </div>
            <div class="top_right">
                 <div class="top_right_btn">
                    <el-button @click="generateImgs">开始生成</el-button>
                    <el-button>多图下载</el-button>
                    <!-- <el-button @click="packDownload">打包下载</el-button> -->
                    <el-link :href="myip+'api/v1/result/face/download'" class="download" :underline="false">打包下载</el-link>
                </div>
                <imgListVue :imgList="generateImgList" ref="generateList"></imgListVue>
                <paginationVue :total="generateList.length" @currentPageChange="generatePageChange" @pageSizeChange="generatePageSizeChange"></paginationVue>
            </div>
        </div>
        <div class="bottom">
            <div class="chooseCollect">
                <div class="chooseCollect_top">
                    收藏脸选择
                </div>
                <div class="">
                    <imgListVue :havecheckbox="true" :imgList="collectImgList" @checkedChange="checkedChange"></imgListVue>
                    <paginationVue  @currentPageChange="collectPageChange" @pageSizeChange="collectPageSizeChange" :total="totalCollect"></paginationVue>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import imgListVue from '@/components/imgList.vue'
import paginationVue from '@/components/pagination.vue'
export default {
    data(){
        return {
            uploadList: [],  // 上传图片列表
            collectedList: [], // 收藏图片列表
            generateList: [], // 生成图片列表
            fullscreenLoading: false,
            clickUpload:false,
            checked:false,
            collectCurrentPage:1, // 第一次默认页数页码 需与分页一致
            collectPageSize:10,
            totalCollect:0,
            uploadCurrentPage:1, // 第一次默认页数页码 需与分页一致
            uploadPageSize:10,
            totalUpload:0,
            generateCurrentPage:1, // 第一次默认页数页码 需与分页一致
            generatePageSize:10,
            totalGenetate:0,
        }
    },
    methods:{
        selfhandleChange(e){
            if(!e.target.files){
                return;
            }
            let files = e.target.files
            console.log(files);
            let formdata = new FormData()
            Array.from(e.target.files).map(item => {
                formdata.append("file", item)  //将每一个文件图片都加进formdata
                // formdata.append('name',"sbdoubao")
            })
            console.log(formdata.get('file'));
            this.axios.post("/test/api/v1/dfl", formdata)
            .then(() => { 
               var newLoadImgs = Array.from(files).map(item => {
                    return {
                        url: URL.createObjectURL(item),
                        img_name: item.name
                    }
                })
                this.uploadList = newLoadImgs
                this.totalUpload = this.uploadList.length

            }).catch(() => {
                this.$message("图片上传失败")
            })
        },
        uploadImgs(){
            document.getElementById('upload').click();
        },
        // 生成图片
        generateImgs(){
            if(this.uploadList.length == 0 || !this.checked){
                this.$message({
                    type:"warning",
                    message:"请先上传图片并选择收藏照片",
                })
                return
            }
            this.fullscreenLoading = true
            this.axios.post("/test/api/v1/dfl",{submit_cut_photo:"True"}).then((res) => {
                if(res && res.data.code==0){
                    this.fullscreenLoading = false
                    this.queryFaceResult()
                }
            }).catch(() => {
                this.fullscreenLoading = false
                this.$message.error('生成图片失败');
            })
        },
        // 查询人脸结果
        queryFaceResult(){
            this.axios.get("/test/api/v1/result/face").then((res) => {
                if(res){
                    if(!res || !res.data) return
                    this.generateList = res.data.select_image_list.map(item => {
                        if(this.myenv == "win"){
                             return {
                                img_name: item,
                                url: this.myip+'workspace/data_dst/results/'+item
                            }
                        }else{
                            return {
                                img_name: item,
                                url: this.myip+'workspace\\data_dst\\results\\'+item
                            }
                        }
                        //  return {
                        //     img_name: item,
                        //     url: this.myip+res.results_path+item
                        // }
                   })
                   this.totalGenerate = this.generateList.length
                   console.log(this.generateList );
                }
            })
            .catch(() => {
                this.$message.error('查询人脸结果失败');
            })
        },
        // 获取收藏图片列表
        getCollectedImgs(){
            this.axios.get("/test/api/v1/select_image").then((res) => {
                if(res && res.data){
                    var imgname = ""
                    var imgurl = ""
                    this.collectedList = res.data.pkl_list.map(item => {
                        if(this.myenv == "win"){
                            imgname = item.substring(item.lastIndexOf("/")+1,item.length).split('.')[0]
                            imgurl = this.myip +'results/results/'+item
                        }else{
                            imgname = item.substring(item.lastIndexOf("\\")+1,item.length).split('.')[0]
                            imgurl = this.myip +'results\\results\\'+item
                        }
                        return {
                            img_name: imgname,
                            url: imgurl,
                            url2: item,
                        }
                   })
                   this.totalCollect = this.collectedList.length
                }
            })
            .catch(() => {
                this.$message.error('获取收藏图片列表失败');
            })
        },
        // 打包下载失败
        packDownload(){
            if(this.generateList.length == 0){
                this.$message.info("请先生成图片")
                return
            }
            this.axios({
                method: "get",
                url:"/test/api/v1/result/face/download",
                responseType:"blob",
            }).then((res) => {
                if(res){
                    // const content = res.data;
                    // const blob = new Blob([content], { type: "application/zip" });
                    // const fileName = "generateresult.zip";
                    // const elink = document.createElement("a");
                    // elink.download = fileName;
                    // elink.style.display = "none";
                    // elink.href = URL.createObjectURL(blob);
                    // document.body.appendChild(elink);
                    // elink.click();
                    // URL.revokeObjectURL(elink.href); // 释放URL 对象
                    // document.body.removeChild(elink);
                }
            }).catch(() => {
                this.$message.error("打包下载失败")
            })
        },
        checkedChange(val){
            this.checked = val
        },
        // 
        collectPageChange(newVal){
            this.collectCurrentPage = newVal
        },
        collectPageSizeChange(newVal){
            this.collectPageSize = newVal
        },
        // 
        uploadPageChange(newVal){
            this.uploadCurrentPage = newVal
        },
        uploadPageSizeChange(newVal){
            this.uploadPageSize = newVal
        },
        // 
        generatePageChange(newVal){
            this.generateCurrentPage = newVal
        },
        generatePageSizeChange(newVal){
            this.generatePageSize = newVal
        },
    },
    created(){
        this.getCollectedImgs()
    },
    computed:{
        //
        collectImgList(){
            if(this.totalCollect <= this.collectPageSize){
                return this.collectedList
            }else{ // 分页
                return this.collectedList.slice((this.collectCurrentPage-1)*this.collectPageSize,this.collectCurrentPage*this.collectPageSize)
            }
        },
        //
        uploadImgList(){
            if(this.totalUpload <= this.uploadPageSize){
                return this.uploadList
            }else{ // 分页
                return this.uploadList.slice((this.uploadCurrentPage-1)*this.uploadPageSize,this.uploadCurrentPage*this.uploadPageSize)
            }
        },
        //
        generateImgList(){
            if(this.totalGenerate <= this.generatePageSize){
                return this.generateList
            }else{ // 分页
                return this.generateList.slice((this.generateCurrentPage-1)*this.generatePageSize,this.generateCurrentPage*this.generatePageSize)
            }
        },

    },
    components:{
        imgListVue,
        paginationVue,
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
.changeface .top_left #upload{
    height: 0;
    width: 0;
}
.changeface .top_left_btn,.top_right_btn{
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
.changeface .top_right_btn .download {
    display: inline-block;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    margin-left: 10px;
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
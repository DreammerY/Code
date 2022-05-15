<template>
    <div class="changeface" v-loading.fullscreen.lock="fullscreenLoading">
        <div class="top">
            <div class="top_left">
                <div class="top_left_btn">
                    <!-- <el-upload
                        action="/test/api/v1/dfl"
                        multiple
                        :auto-upload="false"
                        list-type="picture"
                        :show-file-list="false"
                        :on-error="hangleError"
                        :on-change="handleChange"
                        :on-success="handleSuccess">
                        <el-button>上传图片</el-button>
                    </el-upload> -->
                    <input type="file" value="上传图片" multiple @change="selfhandleChange" id="upload">
                    <el-button @click="uploadImgs">上传图片</el-button>
                </div>
                <imgListVue :imgList="uploadList"></imgListVue>
                <paginationVue></paginationVue>
            </div>
            <div class="top_right">
                 <div class="top_right_btn">
                    <el-button @click="generateImgs">开始生成</el-button>
                    <el-button>多图下载</el-button>
                    <el-button>打包下载</el-button>
                </div>
                <imgListVue :imgList="generateList" ref="generateList"></imgListVue>
                <paginationVue></paginationVue>
            </div>
        </div>
        <div class="bottom">
            <div class="chooseCollect">
                <div class="chooseCollect_top">
                    收藏脸选择
                </div>
                <div class="">
                    <imgListVue :havecheckbox="true" :imgList="collectedList" @checkedChange="checkedChange"></imgListVue>
                    <paginationVue></paginationVue>
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
           uploadList: [],
           collectedList: [],
           generateList: [],
           fullscreenLoading: false,
           clickUpload:false,
           checked:false,
        }
    },
    methods:{
        selfhandleChange(e){
            if(!e.target.files){
                return;
            }
            let files = e.target.files
            let formdata = new FormData()
            Array.from(e.target.files).map(item => {
                formdata.append("file", item)  //将每一个文件图片都加进formdata
                // formdata.append('name',"sbdoubao")
            })
            this.axios.post("/test/api/v1/dfl", formdata)
            .then(() => { 
               var newLoadImgs = Array.from(files).map(item => {
                    return {
                        url: URL.createObjectURL(item),
                        img_name: item.name
                    }
                })
                this.uploadList = newLoadImgs
            }).catch(() => {
                this.$message("图片上传失败")
            })
        },
        uploadImgs(){
            document.getElementById('upload').click();
        },
        // handleChange(file){
        //     console.log(file);
        // },
        // handleSuccess(response, file){
        //     if(response.code == 0){
        //         var newLoadImgs = {
        //             url: file.url,
        //             img_name: file.name
        //         }
        //         this.collectedList = [newLoadImgs,...this.collectedList]
        //     }
        // },
        // hangleError(){
        //     this.$message("图片上传失败")
        // },
        // 生成图片
        generateImgs(){
            if(this.uploadList.length == 0 || !this.checked){
                this.$message({
                    type:"warning",
                    message:"请先上传图片并选择收藏照片",
                })
                return
            }
            this.axios.post("/test/api/v1/dfl",{submit_cut_photo:true}).then((res) => {
                if(res && res.data.code==0){
                    this.queryFaceResult()
                }
            }).catch(() => {
                this.$message.error('生成图片失败');
            })
        },
        // 查询人脸结果
        queryFaceResult(){
            this.fullscreenLoading = true
            this.axios.get("/test/api/v1/result/face").then((res) => {
                if(res){
                    if(!res || !res.data) return
                    console.log(res);
                    this.fullscreenLoading = false
                    this.generateList = res.data.select_image_list.map(item => {
                        if(this.myenv == "win"){
                             return {
                                img_name: item,
                                url: require('../../../workspace/data_dst/results/' + item)
                            }
                        }else{
                            return {
                                img_name: item,
                                url: require('..\\..\\..\\workspace\\data_dst\\results\\' + item)
                            }
                        }
                        
                   })
                   console.log(this.generateList );
                }
            })
            .catch(() => {
                this.fullscreenLoading = false
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
                            imgurl = require('../../../results/results/'+item)
                        }else{
                            imgname = item.substring(item.lastIndexOf("\\")+1,item.length).split('.')[0]
                            imgurl = require('..\\..\\..\\results\\results\\'+item)
                        }
                        return {
                            img_name: imgname,
                            url: imgurl,
                            url2: item,
                        }
                   })
                   console.log(this.collectedList);
                }
            })
            // .catch(() => {
            //     this.$message.error('获取收藏图片列表失败');
            // })
        },
        checkedChange(val){
            this.checked = val
        }
    },
    created(){
        this.getCollectedImgs()
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
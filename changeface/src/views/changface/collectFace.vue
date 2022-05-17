<template>
    <div class="collectface">
        <div class="top">
            <div class="top_checkbox">
                <el-checkbox class="check_box">全选</el-checkbox>
            </div>
            <el-button type="primary" class="cancel_collect">取消收藏</el-button>
        </div>
        <imgListVue :imgList="showImgList" :havecheckbox="true"></imgListVue>
        <paginationVue @currentPageChange="collectPageChange" @pageSizeChange="collectPageSize" :total="total"></paginationVue>
    </div>
</template>
<script>
import paginationVue from '@/components/pagination.vue'
import imgListVue from '../../components/imgList.vue'
export default {
    data(){
        return {
            collectedList:[],
            currentPage:1, // 第一次默认页数页码 需与分页一致
            pageSize:10,
            total:0,
        }
    },
    methods:{
        // 获取图片收藏列表
        getCollectedImgs(){
            this.axios.get("/test/api/v1/select_image").then((res) => {
                if(res && res.data){
                    var imgname = ""
                    var imgurl = ""
                    this.collectedList = res.data.pkl_list.map(item => {
                        if(this.myenv == "win"){
                            imgname = item.substring(item.lastIndexOf("/")+1,item.length).split('.')[0]
                            imgurl = this.myip+'results/results/'+item
                        }else{
                            imgname = item.substring(item.lastIndexOf("\\")+1,item.length).split('.')[0]
                            imgurl = this.myip+'results\\results\\'+item
                        }
                        return {
                            img_name: imgname,
                            url: imgurl,
                            url2:item
                        }
                   })
                   this.total = this.collectedList.length
                //    this.currentPage = 1
                //    this.pageSize = 10
                }
            })
            .catch(() => {
                this.$message.error('获取图片收藏列表失败');
            })
        },
        collectPageChange(newVal){
            this.currentPage = newVal
        },
        collectPageSize(newVal){
            this.pageSize = newVal
        },
    },
    computed:{
        showImgList(){
            if(this.total <= this.pageSize){
                return this.collectedList
            }else{ // 分页
                return this.collectedList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
            }
        }
    },
    mounted(){
        this.getCollectedImgs()
    },
    components:{
        imgListVue,
        paginationVue,paginationVue
    }
}
</script>
<style scoped>
.collectface .top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
}

</style>
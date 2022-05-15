<template>
    <div class="collectface">
        <div class="top">
            <div class="top_checkbox">
                <el-checkbox class="check_box">全选</el-checkbox>
            </div>
            <el-button type="primary" class="cancel_collect">取消收藏</el-button>
        </div>
        <imgListVue :imgList="collectedList" :havecheckbox="true"></imgListVue>
        <paginationVue ref="pagination"></paginationVue>
    </div>
</template>
<script>
import paginationVue from '@/components/pagination.vue'
import imgListVue from '../../components/imgList.vue'
export default {
    data(){
        return {
            collectedList:[],
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
                            imgurl = require('../../../results/results/'+item)
                        }else{
                            imgname = item.substring(item.lastIndexOf("\\")+1,item.length).split('.')[0]
                            imgurl = require('..\\..\\..\\results\\results\\'+item)
                        }
                        return {
                            img_name: imgname,
                            url: imgurl,
                            url2:item
                        }
                   })
                   console.log(this.collectedList);
                }
            }).catch(() => {
                this.$message.error('获取图片收藏列表失败');
            })
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
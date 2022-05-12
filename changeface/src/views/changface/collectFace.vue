<template>
    <div class="collectface">
        <div class="top">
            <div class="top_checkbox">
                <el-checkbox class="check_box">全选</el-checkbox>
            </div>
            <el-button type="primary" class="cancel_collect">取消收藏</el-button>
        </div>
        <imgListVue :havecheckbox="true"></imgListVue>
        <paginationVue></paginationVue>
    </div>
</template>
<script>
import paginationVue from '@/components/pagination.vue'
import imgListVue from '../../components/imgList.vue'
export default {
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
<template>
    <div class="collectface">
        <div class="top">
            <div class="top_checkbox">
                <el-checkbox class="check_box">全选</el-checkbox>
                <el-checkbox class="check_box">反选</el-checkbox>
            </div>
            <el-button type="primary" class="cancel_collect">取消收藏</el-button>
        </div>
        <imgListVue></imgListVue>
    </div>
</template>
<script>
import imgListVue from './imgList.vue'
export default {
    components:{
        imgListVue,
    }
}
</script>
<style>
.collectface .top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
}

</style>
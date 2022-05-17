<template>
    <div class="pagination">
         <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="1"
                layout="total, prev, pager, next,sizes"
                :page-sizes="[5,10,15,20,30]"
                :pager-count="5"
                :page-size="10"
                :total="total">
        </el-pagination>
    </div>
</template>
<script>
export default {
    props:{
        total:{
            default:100
        },    
    },
    data(){
        return {
            // currentPage:1,
            // pageSize:10,
        }
    },
    methods:{
        handleSizeChange(val) {
            this.$emit("pageSizeChange",val)
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
        this.$emit("currentPageChange",val)
            console.log(`当前页: ${val}`);
        }
    },
}
</script>
<style>
.pagination{
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
</style>
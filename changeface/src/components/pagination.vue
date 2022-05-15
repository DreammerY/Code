<template>
    <div class="pagination">
         <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                layout="total, prev, pager, next,sizes"
                :page-sizes="[1,2,3,4,5]"
                :pager-count="5"
                :page-size="pageSize"
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
            currentPage:1,
            pageSize:10,
        }
    },
    methods:{
        handleSizeChange(val) {
            this.pageSize = val
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
           this.currentPage = val
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
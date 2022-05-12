<template>
    <div class="pagination">
         <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                layout="total, prev, pager, next, jumper"
                :total="100">
        </el-pagination>
    </div>
</template>
<script>
export default {
    data(){
        return {
            currentPage: 1,
        }
    },
    methods:{
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
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
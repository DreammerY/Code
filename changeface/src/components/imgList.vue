<template>
    <div class="createface">
        <div class="main">
            <div class="image_lists" v-for="fit in fits" :key="fit.key">
                <el-image
                style="width: 200px; height: 100px"
                :src="url"
                :fit="fit"></el-image>
                <div class="img_desc">
                    <span>{{ fit }}</span>
                    <el-checkbox class="check_box"></el-checkbox>
                </div>
            </div>
            <div class="main_bottom">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 50]"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            fits: ['fill', 'contewqeqewwain', 'cover', 'none', 'scale-down', 'scale-down', 'scale-down','scale-down', 'scale-down', 'scale-down','scale-down', 'scale-down', 'scale-down', 'scale-down', 'scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            currentPage: 1,
        }
    },
    methods:{
        handleTypesChange(val){
            console.log(val);
        },
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

.main{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
}
.main .image_lists{
    width: 20%;
    text-align: center;
}
.main .image_lists .check_box{
    margin-left: 10px;
}
.main_bottom{
    margin-top: 20px;
}

</style>

<template>
    <div class="createface">
        <div class="main">
            <div class="image_lists">
                <div class="image_list" v-for="(fit,index) in fits" :key="fit.key">
                    <el-image
                    style="width: 120px; height: 50px"
                    :src="url"
                    :preview-src-list="[url]"
                    :fit="fit"></el-image>
                    <div class="img_desc">
                        <span>{{ fit }}</span>
                        <el-checkbox class="check_box" ref="img_check_box" v-if="havecheckbox" @change="handleCheckBox(index)"></el-checkbox>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        havecheckbox:{
            default:false,
            Type:Boolean
        },
    },
    data(){
        return {
            fits: ['fill', 'cover', 'none', 'scale-down', 'scale-down', 'scale-down', 'scale-down', 'scale-down','scale-down', 'scale-down', 'scale-down', 'scale-down', 'scale-down'],
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
        },
        handleCheckBox(index){
            console.log(index);
            const list = this.$refs.img_check_box
            if(list[index].ischecked == true){
               console.log(list);
               list.forEach((item,i) => {
                  if(i!=index){
                       item.ischecked = false
                  }
               })
            }
        }
    },
}
</script>
<style scoped>

.main{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
.main .image_lists{
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    width: 100%;
}
.main .image_list{
    text-align: center;
    margin-bottom: 10px;
    margin: 10px;
    padding: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.main .image_list .check_box{
    margin-left: 10px;
}

</style>

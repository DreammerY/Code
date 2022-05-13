<template>
    <div class="createface">
        <div class="main">
            <div class="image_lists">
                <!-- <img :src="require('')" alt=""> -->
                <div class="image_list" v-for="(item,index) in imgList" :key="item.key">
                    <el-image
                    style="width: 80px; height: 120px"
                    :src="require(item.url)"
                    :preview-src-list='[item.url]'
                    fit="cover"></el-image>
                    <div class="img_desc">
                        <span>{{ item.img_name }}</span>
                        <input type="checkbox" ref="img_check_box" v-if="havecheckbox" @change="handleCheckBox(index)">
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
        imgList:{
            default:() => {
                return [
                    // {img_name:"123",url: require('../../results/00063-generate-images/seed0005.png')},
                    // {img_name:"123",url: require('../../results/00063-generate-images/seed0005.png')},
                    // {img_name:"123",url: require('../../results/00063-generate-images/seed0005.png')},
                    // {img_name:"123",url: require('../../results/00063-generate-images/seed0005.png')},
                    // {img_name:"123",url: require('../../results/00063-generate-images/seed0005.png')},
                    // {img_name:"123",url: require('../../results/00063-generate-images/seed0005.png')},
                    // {img_name:"123",url: require('../../results/00063-generate-images/seed0005.png')},
                    // {img_name:"123",url: require('../../results/00063-generate-images/seed0005.png')},
                ]
            },
        }
    },
    data(){
        return {
            currentPage: 1,
            publicPath: '../../'
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
            const list = this.$refs.img_check_box
            if(list[index].checked == true){
               list.forEach((item,i) => {
                  if(i!=index){
                       item.checked = false
                  }
               })
            }
        }
    },
    watch:{
        imgList(){
            console.log(this.imgList);
        }
    }
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

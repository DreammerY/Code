<template>
    <div class="imglist">
        <div class="main">
            <div class="image_lists">
                <div class="image_list" v-for="(item,index) in imgList" :key="item.key">
                    <el-image
                    style="width: 80px; height: 120px"
                    :src="item.url"
                    :preview-src-list='[item.url]'
                    fit="cover"></el-image>
                    <div class="img_desc"  style="width: 80px;">
                        <span>{{ item.img_name }}</span>
                        <!-- 收藏 -->
                        <input type="checkbox" ref="img_check_box" v-if="havecheckbox && collection" @change="handleCheckBox1(index,item.url2)">
                        <!-- 单选 -->
                        <input type="checkbox" ref="img_check_box" v-if="havecheckbox && !collection" @change="handleCheckBox2(index,item.url2)">
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
        collection:{
            default:false,
            Type:Boolean
        },
        imgList:{
            default:() => {
                return []
            },
            Type:Array,
        }
    },
    data(){
        return {
            currentPage: 1,
            checked:false,
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
        // 收藏复选框
        handleCheckBox1(index,url2){
            const list = this.$refs.img_check_box
            if(list[index].checked == true){
                this.$confirm('收藏该照片, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'info'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '收藏成功!'
                    });
                    list.forEach((item,i) => {
                        if(i!=index){
                            item.checked = false
                        }
                    })
                    this.collectImg(url2)
                }).catch(() => {
                    this.$message({
                    type: 'info',                
                    message: '已取消收藏'
                });
                list.forEach((item,i) => {
                    item.checked = false
                })       
            });
            }
        },
        // 单选复选框
        handleCheckBox2(index,url2){
            const list = this.$refs.img_check_box
            if(list[index].checked == true){
                this.$confirm('选择该人脸, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'info'
                }).then(() => {
                    list.forEach((item,i) => {
                        if(i!=index){
                            item.checked = false
                        }
                    })
                    this.chooseCollectedFace(url2)
                }).catch(() => {
                    this.$message({
                    type: 'info',                
                    message: '已取消'
                });
                list.forEach((item,i) => {
                    item.checked = false
                })       
            });
            } else{
                this.checked = false
                this.$emit("checkedChange",this.checked)
            }
        },
        // 收藏图片
        collectImg(url2){
            var param = {
                filename:url2
            }
            this.axios.post("/test/api/v1/image",param).then((res) => {
                if(res && res.data.code == 0){
                   this.$router.push({name:'collectface'})
                 }
            }).catch(() => {
                this.$message.error('图片收藏失败');
            })
        },
        // 选中收藏人脸时
        chooseCollectedFace(url){
            var param = {select_image:url}
            this.axios.post("/test/api/v1/select_image",param).then((res) => {
                if(res && res.data.code == 0){
                    this.checked = true
                    this.$emit("checkedChange",this.checked)
                 }
            }).catch(() => {
                this.$message.error('选中收藏人脸时失败');
            })
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
.main .image_list .img_desc{
  display: flex;
  justify-content: space-between;
}
.main .image_list .img_desc input{
    width: 15px;    
}
.main .image_list .img_desc span{
    flex:1;
    /* display: inline-block; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    
}

</style>

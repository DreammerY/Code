<template>
    <div class="createface">
        <div class="top">
            <div class="top_model">
                <!-- <el-radio-group v-model="select_model_type" @change="handleTypesChange" v-for="item in model_types" :key="item.id">
                    <el-radio-button :label="item"></el-radio-button>
                </el-radio-group> -->
                <span>选择类型：</span>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
             </div>
             <div class="input input1">
                <span>seends_start1：</span>
                <el-input
                    v-model="input1"
                    clearable
                    class="input_input">
                </el-input>
             </div>
             <div class="input">
                <span>seends_start2：</span>
                <el-input
                    v-model="input2"
                    clearable
                    class="input_input">
                </el-input>
             </div>
             <el-button type="primary" class="submit">提交</el-button>
        </div>
        <!-- main -->
        <!-- <div class="main">
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
        </div> -->
        <imgListVue></imgListVue>
    </div>
</template>
<script>
import imgListVue from './imgList.vue';
export default {
    data(){
        return {
            select_model_type: "上海",
            model_types: ["上海","北京","广州","深圳"],
            input1: "",
            input2: "",
            fits: ['fill', 'contewqeqewwain', 'cover', 'none', 'scale-down', 'scale-down', 'scale-down','scale-down', 'scale-down', 'scale-down','scale-down', 'scale-down', 'scale-down', 'scale-down', 'scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            currentPage: 1,
             options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
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
    components:{
        imgListVue,
    }
}
</script>
<style>
.top{
    display: flex;
    justify-content: flex-start;
}
.top .top_model{
    margin-left: 20px;
}
.top .input{
   margin-left: 20px;
}
.top .input1 {
    margin-left: 60px;
}
.top .input .input_input{
    width: 80px;
}
.top .submit{
    margin-left: 50px;
}
/* main */
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

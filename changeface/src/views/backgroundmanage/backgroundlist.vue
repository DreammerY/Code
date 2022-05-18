<template>
    <div class="backgroundlist">
        <div class="top">
            <div class="left">
                <div class="input">
                        <span style="margin-right:3em">身高：</span>
                        <el-input
                            v-model="input_height"
                            clearable
                            class="input_input">
                        </el-input>
                </div>
                <div class="input">
                        <span>人机距离：</span>
                        <el-input
                            v-model="input_distance"
                            clearable
                            class="input_input">
                        </el-input>
                </div>
            </div>
            <div class="middle left">
                <div class="input">
                        <span>镜头高度：</span>
                        <el-input
                            v-model="input_start1"
                            clearable
                            class="input_input">
                        </el-input>
                </div>
                <div class="input">
                        <span>竖直角度：</span>
                        <el-input
                            v-model="input_start2"
                            clearable
                            class="input_input">
                        </el-input>
                </div>
            </div>
            <div class="right">
                <el-button>开始搜索</el-button>
                <el-button>新增背景</el-button>
            </div>
        </div>
        <!--  -->
        <div class="bottom">
            <el-table
                :data="tableData"
                border>
                <el-table-column
                label="日期"
                width="120"
                >
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                label="名称"
                width="120">
                    <template slot-scope="scope">
                        {{ scope.row.name }}
                    </template>
                </el-table-column>
                <el-table-column
                label="图片"
                >
                    <template slot-scope="scope">
                        <img :src="scope.row.background_path?myip+scope.row.background_path:''" style="height:150px" />
                    </template>
                </el-table-column>
                <el-table-column
                label="人机距离"
                >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.rj_dist }}</span>
                    </template>
                </el-table-column>
                                <el-table-column
                label="镜头高度"
                >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.jt_height }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                label="竖直角度"
                >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.v_angle }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="80%">
            <addbackgroundVue  :inputList="inputList" :ifEdit="true"></addbackgroundVue>
        </el-dialog>
    </div>
</template>
<script>
import addbackgroundVue from './addbackground.vue';
export default {
    data(){
        return {
            input_height:"",
            input_distance: "",
            input_start1: "",
            input_start2: "",
            dialogVisible: false,
            inputList: [],
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    imgurl:"http://47.97.25.111:8088/upload/back/1651114887(1)_e7ed3ebc.jpg",
                    distance:'qw',
                    height: 'qw',
                    angle: 'qw',
                }, 
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    imgurl:"http://47.97.25.111:8088/upload/back/424a53b3-f0ab-4d98-a738-4909f74026e7_c46425fa.jpg",
                    distance:'qw',
                    height: 'qw',
                    angle: 'qw',
                }, 
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    imgurl:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    distance:'qw',
                    height: 'qw',
                    angle: 'qw',
                }, 
            ]
        }
    },
    methods: {
        handleEdit(index, row) {
            this.inputList = row
            this.dialogVisible = true
            console.log(index,row);
        },
        handleDelete(index, row) {
            this.$confirm('删除改条数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.deleteRow(row.id,index)
                }).catch(() => {
                    this.$message({
                    type: 'info',                
                    message: '已取消'
                });
            });
        },
        // 删除数据
        deleteRow(id,index){
            this.axios.delete('/test/api/v2/manage',{data:{id: id }})
            .then((res) => {
                this.tableData.splice(index,1)
                console.log(res);
            })
            .catch(()=>{
                this.$message.error("删除失败");
            })
        },
        // 获取表格内容   
        getTableData(){
            this.axios.get('/test/api/v2/manage').then((res) => {
                if(res && res.data){
                    console.log(res);
                    this.tableData = res.data.data.data
                    console.log(this.tableData);
                }
            })
            .catch(() => {
                this.$message.error("背景列表内容获取失败")
            })
        },
    },
    mounted(){
        this.getTableData()
    },
    components:{
        addbackgroundVue,
    }
}
</script>
<style scoped>
.backgroundlist .top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
}
.backgroundlist .top .left .input{
    display: flex;
    align-items: center;
    margin: 10px;
}
.backgroundlist .top .left .input span{
   margin-right: 1em;
}
.backgroundlist .top .left .input .input_input{
    width: 120px;
}
</style>
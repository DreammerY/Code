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
                <el-button>自动生成</el-button>
                <el-button>自动生成</el-button>
            </div>
        </div>
        <!--  -->
        <div class="bottom">
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                label="日期"
                >
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                label="名称"
                width="180">
                    <template slot-scope="scope">
                        {{ scope.row.name }}
                    </template>
                </el-table-column>
                <el-table-column
                label="图片"
                >
                    <template slot-scope="scope">
                        <img :src="scope.row.imgurl" style="height:100px" />
                    </template>
                </el-table-column>
                <el-table-column
                label="人机距离"
                >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                                <el-table-column
                label="镜头高度"
                >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                label="竖直角度"
                >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
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
    </div>
</template>
<script>
export default {
    data(){
        return {
            input_height:"",
            input_distance: "",
            input_start1: "",
            input_start2: "",
             tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                imgurl:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
                }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
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
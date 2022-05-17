<template>
    <div class="addbackground" id="body">
        <div class="top">
            <div class="top_left">
                <div class="upload">
                    <el-upload
                        action=""
                        list-type="picture"
                        :show-file-list="false"
                        :auto-upload="false"
                        :on-change="handleLeftChange">
                        <el-button size="small" type="primary">上传背景</el-button>
                    </el-upload>
                </div>
                <div class="showImg">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="" ref="leftImg">
                </div>
            </div>
            <div class="top_right">
                 <div class="upload">
                    <el-upload
                        action=""
                        list-type="picture"
                        :show-file-list="false"
                        :auto-upload="false"
                        :on-change="handleRightChange">
                        <el-button size="small" type="primary">上传参考</el-button>
                    </el-upload>
                </div>
                <div class="showImg" id="showImg">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="" ref="rightImg">
                    <div class="redReact" id="redReact"></div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <el-row :gutter="20" >
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">名称 </span>
                        <el-input
                            v-model="row1_1" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">镜头高度 </span>
                        <el-input
                            v-model="row1_2" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">人物大小：H </span>
                        <el-input
                            v-model="row1_3" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">人机距离 </span>
                        <el-input
                            v-model="row2_1" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">竖直角度 </span>
                        <el-input
                            v-model="row2_2" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">人物坐标：X </span>
                        <el-input
                            v-model="row2_3" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">Y</span>
                        <el-input
                            v-model="row2_4" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">SEC </span>
                        <el-input
                            v-model="row3_1" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">水平角度 </span>
                        <el-input
                            v-model="row3_2" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">人物身高</span>
                        <el-input
                            v-model="row3_3" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6" style="text-align:center">
                    <el-button type="primary" @click="submit">提交</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">ISO </span>
                        <el-input
                            v-model="row4_1" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">F </span>
                        <el-input
                            v-model="row4_2" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            row1_1: "",
            row1_2: "",
            row1_3: "", // h
            row2_1: "",
            row2_2: "",
            row2_3: "", // x
            row2_4: "", // y
            row3_1: "",
            row3_2: "",
            row3_3: "",
            row4_1: "",
            row4_2: "",
            leftImg: "",
            rightImg: "",
            imgWidth:'', // 图片原始宽高
            imgHeight:'',
        }
    },
    methods:{
        handleLeftChange(file){
            console.log(file);
            this.leftImg = file
            this.$refs.leftImg.src = file.url
        },
        handleRightChange(file){
            this.rightImg = file
            this.$refs.rightImg.src = file.url
            let reader = new FileReader()
            reader.readAsDataURL(file.raw)
            reader.onload = e => {
                const img = e.target.result;
                const image = new Image()
                image.src=img
                
                image.onload = () =>{
                    this.imgWidth = image.width
                    this.imgHeight= image.height
                }
            }
        },
        submit(){
            // if(
            //     this.row1_1=="" || this.row1_2=="" || this.row1_3==""   ||
            //     this.row2_1=="" || this.row2_2=="" || this.row2_3==""   || this.row2_4==""||
            //     this.row3_1=="" || this.row3_2=="" || this.row3_3==""   ||
            //     this.row4_1=="" || this.row4_2=="" || this.leftImg== "" || this.rightImg==""
            // ){
            //     this.$message.info("存在未填选项")
            //     return
            // }
            var formData  = new FormData();
            formData.append('file', this.leftImg.raw);
            formData.append('file', this.rightImg.raw);
            console.log(this.leftImg.raw,this.rightImg.raw);
            this.addNewBackground(formData)
        },
        // 新增背景
        addNewBackground(formData ){
            var param = {
                file: formData ,
                name: this.row1_1, // 名称
                rj_dist: this.row2_1, // 人际距离
                jt_height: this.row1_2, // 镜头高度
                v_angle: this.row2_2, // 竖直角度 
                w_angle: this.row3_2, // 水平角度
                f: this.row4_2, // 名称
                sec: this.row3_1, // 名称
                iso: this.row4_1, // 名称
                person_height: this.row3_3, // 人物身高
                person_x: this.row2_3, // 人物左边X
                person_y: this.row2_4, // 人物左边Y
                person_h: this.row1_3, // 人物大小
            }
            console.log(param.file.get('file'));
            this.axios.post('/test/api/v2/manage',param).then((res) => {
                if(res && res.data){
                    console.log(res);
                }
            }).catch(() => {
                this.$message.error("新增背景失败")
            })
        },
        // 添加移动
        addMove(){
            var box = document.getElementById("redReact");
            const that = this
            document.oncontextmenu = (e) => {
                e.preventDefault()
            }
            box.onmousedown = function(event){
                if(event.button != 2) return  // 只有点击右键可继续操作
                var dx = event.clientX - box.offsetLeft; // offsetLeft为触发物left
                var dy = event.clientY - box.offsetTop;

                document.onmousemove = function(event){
                    if(box.offsetLeft<0 || box.offsetTop<0){
                        box.style.left = 0  +"px";
                        box.style.top = 0 +"px";
                        that.$message.info("不能超出图片外部")
                        document.onmousemove = null;
                        document.onmouseup = null;
                        return
                    }
                    event = event || window.event;
                    var left = event.clientX; // 鼠标移动相对于浏览器的坐标
                    var top = event.clientY;
                    box.style.left = left - dx  +"px";  // 鼠标偏移量
                    box.style.top = top - dy +"px";

                    document.onmouseup = function(){
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                };
            };
        },
        // 添加放大缩小事件
        setReactEvent(){
            var that = this
            //需要调整尺寸的div
            let c = document.getElementById('redReact')
            // body监听移动事件
            document.getElementById('showImg').addEventListener('mousemove', move)
            // 鼠标按下事件
            c.addEventListener('mousedown', down)
            // 鼠标松开事件
            document.getElementById('body').addEventListener('mouseup', up)

            // 是否开启尺寸修改
            let resizeable = false
            // 鼠标按下时的坐标，并在修改尺寸时保存上一个鼠标的位置
            let clientX, clientY
            // div可修改的最小宽高
            let minW = 8, minH = 8
            // 鼠标按下时的位置，使用n、s、w、e表示
            let direc = ''
            
            // 鼠标松开时结束尺寸修改
            function up() {
            resizeable = false
            }
            
            // 鼠标按下时开启尺寸修改
            function down(e) {
            let d = getDirection(e)
            // 当位置为四个边和四个角时才开启尺寸修改
            if (d !== '') {
            resizeable = true
            direc = d
            clientX = e.clientX
            clientY = e.clientY
            }
            }
            
            // 鼠标移动事件
            function move(e) {
            let d = getDirection(e)
            let cursor
            if (d === '') cursor = 'default';
            else cursor = d + '-resize';
            // 修改鼠标显示效果
            c.style.cursor = cursor;
            // 当开启尺寸修改时，鼠标移动会修改div尺寸
            if (resizeable) {
            // 鼠标按下的位置在右边，修改宽度
            if (direc.indexOf('e') !== -1) {
                c.style.width = Math.max(minW, c.offsetWidth + (e.clientX - clientX)) + 'px'
                clientX = e.clientX
            }
            
            // 鼠标按下的位置在上部，修改高度
            if (direc.indexOf('n') !== -1) {
                c.style.height = Math.max(minH, c.offsetHeight + (clientY - e.clientY)) + 'px'
                clientY = e.clientY
            }
            // 鼠标按下的位置在底部，修改高度
            if (direc.indexOf('s') !== -1) {
                c.style.height = Math.max(minH, c.offsetHeight + (e.clientY - clientY)) + 'px'
                clientY = e.clientY
            }
            
            // 鼠标按下的位置在左边，修改宽度
            if (direc.indexOf('w') !== -1) {
                c.style.width = Math.max(minW, c.offsetWidth + (clientX - e.clientX)) + 'px'
                clientX = e.clientX
            }
            
            }
            var h = parseInt(c.style.height) || 100
            var w = parseInt(c.style.width)  || 50
            var l = c.offsetLeft
            var t = c.offsetTop
            that.row2_3 = l + w/2
            that.row2_4 = t + h/2
            that.row1_3 = h
            }
            
            // 获取鼠标所在div的位置
            function getDirection(ev) {
            let xP, yP, offset, dir;
            dir = '';
            
            xP = ev.offsetX;
            yP = ev.offsetY;
            offset = 10;
            
            if (yP < offset) dir += 'n';
            else if (yP > c.offsetHeight - offset) dir += 's';
            if (xP < offset) dir += 'w';
            else if (xP > c.offsetWidth - offset) dir += 'e';
            return dir;
            }
           
        },
    },
    mounted(){
        this.addMove()
        this.setReactEvent()
    }
}
</script>
<style scoped>
.addbackground{

}
.addbackground .top{
    display: flex;

}
.addbackground .top .top_left,.top_right{
   flex: 1;
}
.addbackground .top .top_left,.top_right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px
}
.addbackground .top  .showImg{
    /* width: 80%; */
    height: 300px;
    margin-top: 20px;
    position: relative;
}
.addbackground .top  .showImg .redReact{
    box-sizing: border-box;
    position: absolute;
    /* padding: 10px; */
    height: 100px;
    width: 50px;
    border: 2px solid red;
    top: 0;
    left: 0;
}
.addbackground .top  .showImg img{
    /* width: 100%; */
    height: 100%;
}
/*  */
.addbackground .bottom{
    margin: 0 10%;
}
.addbackground .bottom .el-row {
    margin-bottom: 20px;
  }
.addbackground .bottom .el-row:first-child {
    margin-top: 20px;
}
.addbackground .bottom  .col_text{
    width: 100px;
    display: inline-block;
    text-align: center;
} 

</style>
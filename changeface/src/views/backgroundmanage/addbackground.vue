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
                    <img src="" alt="" ref="leftImg">
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
                    <img src="" alt="" ref="rightImg" ondragstart="return false;">
                    <div class="redReact" id="redReact" v-show="rightImg"></div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <el-row :gutter="20" >
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">名称 </span>
                        <el-input
                            v-model="name" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">镜头高度 </span>
                        <el-input
                            v-model="jt_height" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">人物大小：H </span>
                        <el-input
                            v-model="person_h" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">人机距离 </span>
                        <el-input
                            v-model="rj_dist" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">竖直角度 </span>
                        <el-input
                            v-model="v_angle" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">人物坐标：X </span>
                        <el-input
                            v-model="person_x" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">Y</span>
                        <el-input
                            v-model="person_y" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">SEC </span>
                        <el-input
                            v-model="sec" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">水平角度 </span>
                        <el-input
                            v-model="w_angle" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">人物身高</span>
                        <el-input
                            v-model="person_height" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6" style="text-align:center">
                    <el-button type="primary" @click="edit" v-if="ifEdit">修改</el-button>
                    <el-button type="primary" @click="submit" v-if="!ifEdit">提交</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">ISO </span>
                        <el-input
                            v-model="iso" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span class="col_text">F </span>
                        <el-input
                            v-model="f" clearable style="width:100px" class="input_input">
                        </el-input>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        ifEdit:{
            default:false
        },
        inputList:{
            default:""
        }
    },
    data(){
        return {
            name: "",
            jt_height: "",
            person_h: "", // 像素高 人物大小
            rj_dist: "",
            v_angle: "",
            person_x: "",
            person_y: "",
            sec: "",
            w_angle: "",
            person_height: "",
            iso: "",
            f: "",
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
            this.addMove()
            this.setReactEvent()
        },
        submit(){
            if(
                this.name=="" || this.rj_dist=="" || this.jt_height==""   ||
                this.v_angle=="" || this.w_angle=="" || this.f==""   || this.sec==""||
                this.iso=="" || this.person_height=="" || this.person_x==""   ||
                this.person_y=="" || this.person_h=="" || this.leftImg== "" || this.rightImg==""
            ){
                this.$message.info("存在未填选项")
                return
            }
            var formData  = new FormData();
            formData.append('file', this.leftImg.raw);
            formData.append('file', this.rightImg.raw);
            formData.append('name', this.name);
            formData.append('rj_dist', this.rj_dist);
            formData.append('jt_height', this.jt_height);
            formData.append('v_angle', this.v_angle);
            formData.append('w_angle', this.w_angle);
            formData.append('f', this.f);
            formData.append('sec', this.sec);
            formData.append('iso', this.iso);
            formData.append('person_height', this.person_height);
            formData.append('person_x', this.person_x);
            formData.append('person_y', this.person_y);
            formData.append('person_h', this.person_h);
            this.addNewBackground(formData)
        },
        // 编辑修改接口
        edit(){
            var formData  = new FormData();
            formData.append('file', this.leftImg.raw);
            formData.append('file', this.rightImg.raw);
            var param = {
                type: "all", // background_path  refer_path all
                id: this.inputList.id,
                // file: formData,
                name: this.name, // 名称
                rj_dist: this.rj_dist, // 人际距离
                jt_height: this.jt_height, // 镜头高度
                v_angle: this.v_angle, // 竖直角度 
                w_angle: this.w_angle, // 水平角度
                f: this.f, // 名称
                sec: this.sec, // 名称
                iso: this.iso, // 名称
                person_height: this.person_height, // 人物身高
                person_x: this.person_x, // 人物左边X
                person_y: this.person_y, // 人物左边Y
                person_h: this.person_h, // 人物大小
            }
            this.axios.put('/test/api/v2/manage',param).then((res) => {
                console.log(res);
            })
            .catch(()=>{
                this.$message.error("编辑失败");
            })
        },
        // 新增背景
        addNewBackground(formData){
            this.axios.post('/test/api/v2/manage',formData).then((res) => {
                if(res && res.data){
                    console.log(res);
                    if(res.data.errcode == 0){
                        this.$message.success("新增成功")
                        // this.$router.go(0)
                    }
                }
            }).catch(() => {
                this.$message.error("新增背景失败")
            })
        },
        // 添加移动
        addMove(){
            var box = document.getElementById("redReact");
            var container = document.getElementById("showImg");
            const that = this
            container.oncontextmenu = (e) => {
                e.preventDefault()
            }
            box.onmousedown = function(event){
                if(event.button != 2) return  // 只有点击右键可继续操作
                var dx = event.clientX - box.offsetLeft; // offsetLeft为触发物left
                var dy = event.clientY - box.offsetTop;

                container.onmousemove = function(event){
                    // if(box.offsetLeft<0 || box.offsetTop<0){
                    //     box.style.left = 0  +"px";
                    //     box.style.top = 0 +"px";
                    //     that.$message.info("不能超出图片外部")
                    //     document.onmousemove = null;
                    //     document.onmouseup = null;
                    //     return
                    // }
                    event = event || window.event;
                    var left = event.clientX; // 鼠标移动相对于浏览器的坐标
                    var top = event.clientY;
                    box.style.left = left - dx  +"px";  // 鼠标偏移量
                    box.style.top = top - dy +"px";

                    container.onmouseup = function(){
                        container.onmousemove = null;
                        container.onmouseup = null;
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
            that.person_x = l + w/2
            that.person_y = t + h/2
            that.person_h = h
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
        if(this.inputList == "" || !this.inputList){
            return
        }
        this.$refs.leftImg.src = this.myip+this.inputList.background_path
        this.name = this.inputList.name
        this.jt_height = this.inputList.jt_height
        this.person_h = this.inputList.person_h // 像素高 // 像素高
        this.rj_dist = this.inputList.rj_dist
        this.v_angle = this.inputList.v_angle
        this.person_x = this.inputList.person_x
        this.person_y = this.inputList.person_y
        this.sec = this.inputList.sec
        this.w_angle = this.inputList. w_angle
        this.person_height = this.inputList.person_height
        this.iso = this.inputList.iso
        this.f = this.inputList.f
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
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding-top: 10px;
}
.addbackground .top .top_left,.top_right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
    max-width: 100%;
    height: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
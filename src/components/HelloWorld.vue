<template>
  <div class="img_ground">
    <div class="left">
      <div class="original">
        <p class="desc">原图</p>
        <div class="img">
          <img src="" alt="" ref="orininal_img" class="orininal_img"  @mouseover="handleOriginalOver">
        </div>
        <el-upload
          class="upload-img"
          action=""
          list-type="picture"
          :show-file-list="false"
          :auto-upload=false
          :on-change=handleChange1
          :on-success=handleSuccess
          >
          <el-button size="small" type="primary" class="upload_btn">上传原图</el-button>
        </el-upload>
      </div>
      <div class="background">
        <p class="desc">背景图</p>
        <div class="img"  @dragover="e=>e.preventDefault()" @drop="handleDrag">
          <img src="" alt="" ref="background_img">
          <img src="" alt="" class="drapedImg" ref="drapedImg" id="img" >
        </div>
        <el-upload
          class="upload-img"
          action=""
          list-type="picture"
          :show-file-list="false"
          :auto-upload=false
          :on-change=handleChange2
          :on-success=handleSuccess
          >
          <el-button size="small" type="primary" class="upload_btn">背景图</el-button>
        </el-upload>
      </div>
      <el-button size="small" type="primary" class="download_btn">下载效果图</el-button>
    </div>
    <div class="right">er</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      x:0,
      y:0,
    }
  },
  methods: {
    handleChange1(file){
      this.$refs.orininal_img.src = file.url
    },
    handleChange2(file){
      this.$refs.background_img.src = file.url
    },
    handleSuccess(file){
      console.log(file);
    },
    handleDrag() {
      const originalImg = this.$refs.orininal_img
      const drapedImg = this.$refs.drapedImg
      drapedImg.src = originalImg.src
      drapedImg.height = originalImg.height
      drapedImg.width = originalImg.width
    },
    hangleclick(){
    },
    handleOriginalOver(){
      this.$refs.orininal_img.addEventListener('mousewheel',this.handleMouseWheel)
    },
    handleMouseWheel(e){
      const originalImg = this.$refs.orininal_img
      if(e.wheelDelta<0){ // 鼠标滚轮后滚
        originalImg.height = originalImg.height -10 
        originalImg.width = originalImg.width -5
      }else if(e.wheelDelta>0){
        originalImg.height = originalImg.height +10 
        originalImg.width = originalImg.width +5
      }
    },
  },
  mounted(){
    var box = document.getElementById("img");
    box.onmousedown = function(event){
        var dx = event.clientX - box.offsetLeft; // 鼠标点击时候鼠标偏移量 即鼠标相对于图左上角距离
        var dy = event.clientY - box.offsetTop;

        document.onmousemove = function(event){
            event = event || window.event;
            var left = event.clientX; // 鼠标移动相对于浏览器的坐标
            var top = event.clientY;
            console.log(dx,dy,left,top);
            console.log(event);
            box.style.left = left - dx  +"px";  // 鼠标偏移量
            box.style.top = top - dy +"px";

            document.onmouseup = function(){
                document.onmousemove = null;
                document.onmouseup = null;
                
                if(left - dx < 0 || top - dy < 0){
                  alert("不允许")
                  box.style.left = 0  +"px";  // 鼠标偏移量
                  box.style.top = 0 +"px";
                  return
                }
            };
        };
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img_ground{
  display: flex;
}
.img_ground .left{
  min-width: 150px;
  width: 23%;
}
.left .original {
  margin-bottom: 10px;
}
.left .original,.background{
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed;

}
.left  .desc{
  margin: 5px 0;
}
.left  .upload_img{
  margin: 5px 0;
}
.left  .img{
  padding: 5px;
  min-width: 80%;
  max-width: 100%;
  min-height: 150px;
  max-height: 250px;
  background-color: #eee;
}
.left  .img img{
  max-width: 100%;
  min-width: 10%;
  max-height: 250px;
  min-height: 30px;
  /* min-height: 150px; */
}
.left .upload_btn{
  margin: 5px 0;
}

.background .img {
  position: relative;
}
.drapedImg{
  position: absolute;
  top: 0;
  left: 1px;
}

/*  */
.img_ground .right{
  flex: 1;
  margin-left: 20px;
  border: 1px dashed;
}
</style>

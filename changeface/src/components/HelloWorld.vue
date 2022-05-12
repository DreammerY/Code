<template>
  <div class="hello">
    <div class="left" ref="left">
      <div class="left_top">图像处理</div>
      <div>
      <el-menu 
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        :router="true"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>换脸</span>
          </template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="createface">人脸生成</el-menu-item>
            <el-menu-item index="collectface">人脸收藏</el-menu-item>
            <el-menu-item index="changeface">机器换脸</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
         <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>背景替换</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="cutperson">人物分割</el-menu-item>
            <el-menu-item index="replacebackground">背景替换</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>背景管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="backgroundlist">背景列表</el-menu-item>
            <el-menu-item index="addbackground">新增背景</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      </div>
    </div>
    <div class="close" v-if="closeShow">
      <i class="el-icon-caret-left" @click="handleClose"></i>
    </div>
    <div class="open" v-if="openShow">
      <i class="el-icon-caret-right" @click="handleOpen"></i>
    </div>
    <!-- right -->
    <div class="right">
      <div class="right_top">
        <el-menu :default-active="activeIndex" mode="horizontal"  background-color="#545c64"
          text-color="#fff" active-text-color="#ffd04b"  :router="true">
            <el-menu-item index="1" class="right_top_item">处理中心</el-menu-item>
            <el-menu-item index="2">处理中心</el-menu-item>
        </el-menu>
      </div>
      <div class="right_bottom">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        closeShow: true,
        openShow: false,
        right_top_items:["首页","收藏"],
        activeIndex: '1',
      };
    },
    methods: {
      handleClose(){
        this.$refs.left.style.display = "none"
        // this.leftShow = false
        this.closeShow = false
        this.openShow = true
      },
       handleOpen(){
        // this.leftShow = true
        this.$refs.left.style.display = "block"
        this.closeShow = true
        this.openShow = false
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.hello{
  display: flex;
  position: relative;
}
.hello .left{
  position: relative;
  width: 200px;
}
.hello .left .left_top{
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: rgb(62, 61, 61);
  color: rgba(247, 245, 245, 1);
  font-weight: 400;
  font-size: 20px;
  font-style: normal;
  letter-spacing: 0px;
  font-family: SourceHanSansSC;
  margin-bottom: 20px;
}
/* 右侧*/
.hello .right{
  flex: 1;
  margin-left: 20px;

}
.hello .right .right_top{
  height: 60px;
  margin-bottom: 20px;
}
.hello .right .right_top .right_top_item{
  padding-right: 10px;
}
.hello .right .right_top:hover .right_top_item::after{
  font-family:"element-icons";
  content: "";
  color: #ccc;
  padding-left: 10px;
  font-size: 12px;
}
.hello .right .right_bottom{
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
/* 开启关闭图标 */
.hello .close{
  position: absolute;
  display: inline-block;
  left: 200px;
  top: 200px;
  height: 0;
  width: 0;
  border:15px solid transparent;
  border-left-color:rgb(84, 92, 100);
}
.hello .el-icon-caret-left{
   position: absolute;
   top: -7px;
   left: -19px;
   color: #ccc;
}
.hello .open{
  position: absolute;
  display: inline-block;
  left: 0;
  top: 200px;
  height: 0;
  width: 0;
  border:15px solid transparent;
  border-left-color:rgb(84, 92, 100);
}
.hello .el-icon-caret-right{
   position: absolute;
   top: -7px;
   left: -19px;
   color: #ccc;
}
.hello .el-icon-caret-right:hover{
   color: #fff;
}
</style>

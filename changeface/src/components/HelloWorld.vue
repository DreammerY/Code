<template>
  <div class="hello">
    <div class="left">
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
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </div>
    <i class="el-icon-caret-left"></i>
    <!-- right -->
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      
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
.hello .el-icon-caret-left {
  position: absolute;
  display: inline-block;
  left: 200px;
  top: 200px;
  height: 0;
  width: 0;
  padding: 0px;
  background: rgb(84, 92, 100);
  color: red;
  border:7.5px solid transparent;
}
/* .hello .el-icon-caret-left::before{
  content: "";
  position: absolute;
  top: -15px;
  left: 0;
  display: inline-block;
  width: 0;
  height: 0;
  border:7.5px solid transparent;
  border-bottom-color:rgb(84, 92, 100);
  border-left-color:rgb(84, 92, 100);
}
.hello .el-icon-caret-left::after{
  content: "";
  position: absolute;
  bottom: -15px;
  left: 0;
  display: inline-block;
  width: 0;
  height: 0;
  border:7.5px solid transparent;
  border-top-color:rgb(84, 92, 100);
  border-left-color:rgb(84, 92, 100);
} */
.hello .right{
  flex: 1;
  margin-left: 20px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>

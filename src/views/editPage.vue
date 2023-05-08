<template>
  <div style="background-color: rgb(238,241,248);width: 100%; height: 100%;position:fixed;z-index: -9999"></div>
  <el-container>
    <el-header>
      <app-title-box class="app-title"></app-title-box>
      <header-box></header-box>
      <person-login class="person-login"></person-login>
      <div class="head-navigation-box">
        <div><a style="color: white; text-decoration:none" href="http://localhost:8080/#/homePage">首页</a></div>
        <div>热门榜单</div>
        <div>等你分享</div>
        <div>最新推荐</div>
      </div>
    </el-header>
    <div class="main-content-box" >
      <el-container class="infinite-list">
        <el-aside>
          <div class="aside-box">
            <div>
              <el-icon class="icons" size="16"><House /></el-icon>
              <span style="font-size: 14px">首页</span>
            </div>
            <div>
              <el-icon class="icons" size="16"><Files /></el-icon>
              <span style="font-size: 14px">发布文章</span>
            </div>
            <div>
              <el-icon class="icons" size="16"><Memo /></el-icon>
              <span>动态管理</span>
            </div>
          </div>
        </el-aside>
        <el-main>

        </el-main>
        <div class="main-box">
          <iframe class="iframe-box" src="http://localhost:8080/#/editPart">
            <edit-page></edit-page>
          </iframe>
        </div>
      </el-container>
    </div>

  </el-container>
</template>

<script>
import AppTitleBox from "@/components/AppTitleBox";
import HeaderBox from "@/components/headerBox";
import PersonLogin from "@/components/personLogin";
import Test from "@/components/test";
export default {
  name: "editPage",
  components: {Test, PersonLogin, HeaderBox, AppTitleBox}
}
</script>
<style scoped>
.head-navigation-box{
  width: 400px;
  height: 50px;
  display: flex;
  position: absolute;
  left: 200px;
  top: 40px;
}

.head-navigation-box div{
  color: white;
  flex: 1;
  justify-content: center;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  /*border: 1px solid black;*/
}
.person-login{
  float: right;
  margin-top: -50px;
}
.app-title{
  float: left;
}
.el-header{
  position: fixed;
  top:0;
  width: 100%;
  height: 120px;
  z-index: 10000;
  background-color: rgb(80,44,108);
  margin-top: -8px;
}
.main-content-box{
  width: 220px;
  height: 300px;
  margin-top: 130px;
  background-color: white;
  border-radius: 7px;
}
.aside-box{
  overflow: hidden;
  background-color: white;
  width: 220px;
  height: 610px;
}

.aside-box div{
  height: 50px;
  width: 220px;
  text-align: center;
  line-height: 50px;
  border-bottom: 1px solid rgb(238,241,248);

}
.aside-box div:hover{
  color: #0fb1ff;
}
.main-box{
  width: 1150px;
  height: 610px;
  position: relative;
  z-index: 10;
  left: -80px;
}
.icons{
  left: -5px;
  top: 2px;
  position: relative;
}
.iframe-box{
  width: 1150px;
  height: 610px;
  background-color: white;
  border-radius: 7px;
}
</style>

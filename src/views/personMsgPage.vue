<template style="background-color: rgb(246,246,246)">
  <el-header>
    <app-title-box id="titleBox"></app-title-box>
    <header-box ></header-box>
    <person-login id="loginmsg"></person-login>
  </el-header>

  <div style="height: 10px"></div>

  <div style="width: 100%;height: 100%; z-index: -999;position:fixed;
  background-size:100% 100%; background-color: rgb(231,228,228)"></div>

  <PictureUpload class="upbox"></PictureUpload>

  <person-share-box :trendsPageList="trendsPageList" class="bottombox"></person-share-box>
  <div class="creat-box">
      <div>分享中心</div>
      <div>快来分享你最喜欢的图书吧</div>
      <el-button>即刻分享</el-button>
  </div>
</template>

<script>

import PictureUpload from "@/components/PictureUpload";
import PersonShareBox from "@/components/PersonShareBox";
import AppTitleBox from "@/components/AppTitleBox";
import HeaderBox from "@/components/headerBox";
import PersonLogin from "@/components/personLogin";
import {GetPersonMsgResources} from "@/api/api";

export default {
  name: "personMsgPage",
  components: {PersonLogin, HeaderBox, PersonShareBox, PictureUpload,AppTitleBox},
  data(){
    return{
      trendsPageList:Array()
    }
  },
  mounted() {
    // GetPersonMsgResources(this.$store.state("userInfo").id).then((res) =>{
    //       this.trendsPageList = res.data.extend.trendsPageList;
    // })
    this.trendsPageList[0] = {
      title:"为什么强烈推荐这本三国",
      num:10020,
      context:"绝对可以，鄙人就是acm铜牌选手，去年进的腾讯。铜牌选手应对腾讯的算法轮毫无问题。 当然，能不能过终面，那就看造化了。 但我告诫各位：除非是真的热爱，千万不要碰ACM这玩意！单纯在LintCode上刷点简单题（对于ACM选手来说，LC上的题目都算是小儿科）不香吗？？？ 我身边的同事吧，有和我一样很早就玩ACM的，也有L",
      id:1
    }
    this.trendsPageList[1] = {
      title:"强烈推荐这本小说太耐斯了",
      num:12020,
      context:"绝对可以，鄙人就是acm铜牌选手，去年进的腾讯。铜牌选手应对腾讯的算法轮毫无问题。 当然，能不能过终面，那就看造化了。 但我告诫各位：除非是真的热爱，千万不要碰ACM这玩意！单纯在LintCode上刷点简单题（对于ACM选手来说，LC上的题目都算是小儿科）不香吗？？？ 我身边的同事吧，有和我一样很早就玩ACM的，也有L",
      id:2
    }
  },
  methods:{

  }
}

</script>

<style scoped>

html{
  background-color: rgb(246,246,246);
}
.creat-box {
  position: absolute;
  width: 290px;
  height: 300px;
  left: 910px;
  top: 395px;
  background-color: white;
  border-radius: 7px;
}
#loginmsg{
  float: right;
  margin-top: -50px;
}
#titleBox{
  float: left;
}
.el-header{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 10000;
  background-color: rgb(255,255,255);
}
.upbox{
  margin-left: 250px;
  background-color: white;

}
.bottombox{
  margin-left: 250px;
  background-color: white;
}
</style>

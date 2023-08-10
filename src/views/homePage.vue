<template style="background-color: rgb(249,249,249);">
  <el-container>
    <el-header>
      <app-title-box id="titleBox"></app-title-box>
      <header-box></header-box>
      <person-login id="loginmsg"></person-login>
      <div class="head-navigation-box">
        <div><a style="color: white; text-decoration:none" href="http://localhost:8080/#/homePage">首页</a></div>
        <div>热门榜单</div>
        <div>等你分享</div>
        <div>最新推荐</div>
      </div>
    </el-header>
  </el-container>
  <div class="common-layout" >
    <el-container class="infinite-list">
        <el-aside><MainPageAside  @GetArticles = "GetArticles"  style="background-color: rgb(255,255,255)"></MainPageAside></el-aside>
        <el-main id="mainBox">
            <tabs class="tabs" @TagGetArticleList="TagGetArticleList"></tabs>
            <RecommendationBookCard :RecommendArticleList="RecommendArticleList" ></RecommendationBookCard>
            <book-card :ArticleList="this.ArticleList" :nums = this.nums></book-card>
        </el-main>
    </el-container>
  </div>
  <el-backtop :bottom="100">
    <div
        style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;"
    >UP
    </div>
    </el-backtop>
</template>

<script>

import BookCard from "@/components/bookCard";
import BookCordDetail from "@/components/bookCordDetail";
import test from "@/components/test";
import MainPageAside from "@/components/MainPageAside";
import Tabs from "@/components/tabs";
import HeaderBox from "@/components/headerBox";
import AppTitleBox from "@/components/AppTitleBox";
import PersonLogin from "@/components/personLogin";
import RecommendationBookCard from "@/components/RecommendationBookCard";
import BookCardList from "@/components/bookCardList";
import {getAllArticlesByLager_clazz} from '@/api/api'
import {getArticleList}  from '@/api/api';
export default {
  name: "homePage",
  data(){
    return{
      ArticleList:Array(),
      RecommendArticleList:Array(),
      nums:20
    }
  },

  components: {
    BookCardList,
    RecommendationBookCard,
    PersonLogin, AppTitleBox, HeaderBox, Tabs, MainPageAside, BookCordDetail, BookCard,test},
  methods:{
    GetArticles(articleList){
       this.ArticleList = articleList;
       console.log(this.ArticleList);
    },
    TagGetArticleList(tagArticleList){
      this.ArticleList = tagArticleList;
    }
  },

  mounted() {
    const that = this;
    this.$nextTick(()=>{
      $(document).ready(function() {
        $ (window).scroll(function() {
          //判断滚动条是否到顶部
          if ($(document ).scrollTop()<=0){
          }
          //判断滚动条是否到底部
          if (Math.ceil($(document).scrollTop()) >= $( document).height()-$(window).height()) {
            that.nums = that.nums + 8;
          }
        });
      });
    })
  },
  // beforeDestroy() {
  //   $(window).removeEventListener('scroll', this.handleScroll)
  // },
  created() {
    // getArticleList().then(res=>{
    //   this.ArticleList = res.data.data
    // })
  }
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
  /*border: 1px solid black;*/
}
el-backtop{
  offset: 100px;
}
.tabs{
  margin-left: -20px;
  margin-top: -20px;
}
#loginmsg{
  float: right;
  margin-top: -50px;
}
#titleBox{
  float: left;
}

.infinite-list{
  position: relative;
  margin-top: 120px;
}

.el-aside{
  position: fixed;
  left: 0;
  top:120px;
  width: 200px;
  background-color: rgb(249,249,249);
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

.el-main{
  position: absolute;
  left: 200px;
  right: 0;
  background-color: white;
}
header-box{

}
</style>

<template>
  <h2 class="" style="font-size: 18px;margin-left: 20px;margin-top: 30px">发布笔记</h2>
   <div></div>
   <div style="width: 300px;height: 50px;margin-left: 20px;margin-top: 30px">
     <span style="float: left">图片编辑</span>
     <input @change="SubmitArticleImg(this)" type="file" id="files"
            multiple="multiple" style="width: 150px;position: relative; margin-left: -50px;z-index: 99;border: black 1px solid;opacity: 0" >
     <span style="float: left;margin-left: 10px;font-size: 13px;margin-top: 3px;color: rgb(64,158,255)"><el-icon><Plus /></el-icon>上传图片</span>
   </div>
<!--  图片展示-->
  <div style="height: 60px;margin-left: 0px" id="imgBox">
<!--    <img :src="this.imgSrc" style="width: 130px;height: 60px;margin-left: 20px"><br>-->
  </div>

<!--  文章内容-->
  <el-input class="InputTitle" v-model="InputTitle" placeholder="请输入标题"  />
  <el-input class="InputBriefIntroduction" v-model="InputBriefIntroduction" placeholder="请输入简介" />
  <el-input class="textarea" v-model="textarea" :rows="5" type="textarea" placeholder="请输入文章正文"/>
  <h2 style="font-size: 18px;margin-left: 20px;margin-top: 10px">文章类别设置</h2>
  <span style="margin-left: 20px">添加类别</span>
  <select id="categories" style="margin-left: 20px;width: 100px;text-align: center" @change="GetSmallCategories">
    <option value="xiaoshuo" selected="selected">小说</option>
    <option value="keji" selected="selected">科技</option >
    <option value="history" selected="selected">历史</option >
    <option >传记</option >
    <option >散文</option >
    <option >流行</option >
    <option >文化</option >
    <option >生活</option >
    <option >随笔</option >
    <option >经管</option >
    <option >建筑</option >
    <option >诗词</option >
    <option >教育</option >
    <option >美食</option >
    <option >健康</option >
  </select><br><br>
  <span style="margin-left: 20px">添加分类</span>
  <select id="litlecategories" style="margin-left: 20px;width: 100px;text-align: center">
    <option v-for="item in SmallCategoriesList" :key="item">{{item}}</option>
  </select><br><br>
<!--  <span>权限设置</span><br>-->
<!--  <span>发布时间</span><br>-->
  <el-button @click="this.SubmitArticle()" style="background-color: rgb(80,44,108);color: white;width: 100px;margin-left: 20px">发布</el-button>
  <el-button style="color: black;width: 100px">取消</el-button>
</template>

<script>
import {putEssay} from '@/api/api'
import {putEssayImg} from "@/api/api";

export default {
  name: "editPart",
  data(){
    return{
      InputTitle:"",
      textarea:"",
      InputPlace:"",
      InputBriefIntroduction:"",
      SmallCategoriesList:[],
      NovelCategoriesList:["玄幻","科幻","悬疑","青春校园","武侠","都市"],
      HistoryClass:["秦汉三国","两晋隋唐","两宋元明","清历民国","外国历史","架空历史"],
      ScientificCategories:["科普","互联网","编程","算法","通信"],
      imgSrc:""
    }
  },
  mounted() {
    let title = document.getElementById('categories');
    var index=title.selectedIndex ;
    this.SmallCategoriesList = this.NovelCategoriesList;
    if (title.options[index].text === '小说'){
      this.SmallCategoriesList = this.NovelCategoriesList;
    }else if (title.options[index].text === '历史'){
      this.SmallCategoriesList = this.HistoryClass;
    } else if (title.options[index].text === '科技'){
      this.SmallCategoriesList = this.ScientificCategories;
    }
  },
  methods:{
    GetSmallCategories(){
     let title = document.getElementById('categories');
      var index=title.selectedIndex ;
      if (title.options[index].text === '小说'){
        this.SmallCategoriesList = this.NovelCategoriesList;
      }else if (title.options[index].text === '历史'){
        this.SmallCategoriesList = this.HistoryClass;
      } else if (title.options[index].text === '科技'){
        this.SmallCategoriesList = this.ScientificCategories;
      }
    },
    SubmitArticleImg(){
      const imgBox = document.getElementById('imgBox');
      const fileList = document.getElementById('files').files;
      for (let i = 0; i < fileList.length; i++){
        let img = document.createElement('img');
        img.className = 'imgs';
        img.style.width = '130px';
        img.style.height = '60px';
        img.style.marginLeft = '20px';
        const reader = new FileReader();
        reader.onload = (e)=>{
          img.src = e.target.result;
        }
        reader.readAsDataURL(fileList[i]);
        imgBox.append(img)
      }

    },
    upHeadImg(){
      const fileList = document.getElementById('files').files;
      var fd = new FormData();
      fd.append('files',fileList);
      putEssayImg(fd).then((res)=> {
        console.log(res)
        return res.data;
      })
      return null;
    },
    SubmitArticle(){
      const fileList = document.getElementById('files').files;
      var fd = new FormData();
      console.log(fileList)
      for (let i = 0 ; i < fileList.length; i++){
        fd.append('files',fileList[i]);
      }
      putEssayImg(fd).then((res)=> {
        console.log(res)
        const listURL =JSON.stringify(res.data.data);
        console.log(listURL)
        const article = {
          uid:0,
          title:"",
          articleContext:"",
          imgListId:listURL,
          likedQuantity:0,
          collectionVolume:0,
          largeClazz:"",
          subcategory:"",
          articleIntroduction:"",
        }

        article["title"] = this.InputTitle;
        article["articleIntroduction"] = this.InputBriefIntroduction;
        article["articleContext"] = this.textarea;
        article["largeClazz"] = $('#categories option:selected').text();
        article["subcategory"] = $('#litlecategories option:selected').text();
        console.log(article);
        putEssay(article,this.$store.state.token).then((res)=>{
          alert("上传成功");
          console.log(res);
        }).catch(reason => {
          alert("上传失败");
        })
      })
    }
}

}
</script>

<style scoped>
.InputTitle{
  margin-top: 20px;
  margin-left: 20px;
  width: 800px;
}

.InputBriefIntroduction{
  margin-top: 20px;
  margin-left: 20px;
  width: 800px;
}

.textarea{
  margin-top: 20px;
  margin-left: 20px;
  width: 1000px;
}
</style>

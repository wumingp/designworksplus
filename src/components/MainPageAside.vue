<template>
      <el-scrollbar height="700px" width="200px">
        <a class="scrollbar-demo-item" ><div>传记</div></a>
        <a class="scrollbar-demo-item" ><div>散文</div></a>
        <a class="scrollbar-demo-item" ><div>流行</div></a>
        <a class="scrollbar-demo-item" ><div>文化</div></a>
        <a class="scrollbar-demo-item" ><div>生活</div></a>
        <a class="scrollbar-demo-item" ><div>随笔</div></a>
        <a class="scrollbar-demo-item" ><div>经管</div></a>
        <a class="scrollbar-demo-item" ><div>建筑</div></a>
        <a class="scrollbar-demo-item" ><div>诗词</div></a>
        <a class="scrollbar-demo-item" ><div>教育</div></a>
        <a class="scrollbar-demo-item" ><div>美食</div></a>
        <a class="scrollbar-demo-item" ><div>健康</div></a>
        <a class="scrollbar-demo-item" ><div @click="getType($event)" >科技</div></a>
        <a class="scrollbar-demo-item" ><div @click="getType($event)">历史</div></a>
        <a class="scrollbar-demo-item" ><div @click="getType($event)">小说</div></a>
      </el-scrollbar>
</template>

<script>
import {GetResources} from "@/api/api";

export default {
  name: "MainPageAside",
  data(){
    return{
      articleList:Array()
    }
  },
  methods:{
      getType(e){
          this.$store.state.tagType = e.target.innerHTML;
          console.log(this.$store.state.tagType)
          this.articleList[0] = {name:"栽种请直视我"}
          this.$emit('GetArticles',this.articleList);
          // GetResources(this.$store.state.tagType).then((res)=>{
          //     this.$emit('GetArticle',res.data.extend.articleList);
          // })
      }
  },
  props:{

  }
}
</script>

<style scoped>
a{
  text-decoration:none;
  cursor: pointer;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: white;
  color: black;
  transform: rotate(-180deg);
}
.scrollbar-demo-item:hover{
  color: #409EFF;

}
.el-scrollbar {
  transform: rotate(180deg);
}

</style>

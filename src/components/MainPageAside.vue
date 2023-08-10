<template>
      <el-scrollbar height="700px" width="200px">
        <a class="scrollbar-demo-item" ><div>排序算法</div></a>
        <a class="scrollbar-demo-item" ><div>变治法</div></a>
        <a class="scrollbar-demo-item" ><div>蛮力法</div></a>
        <a class="scrollbar-demo-item" ><div>图论</div></a>
        <a class="scrollbar-demo-item" ><div>二叉树</div></a>
        <a class="scrollbar-demo-item" ><div>数组排序</div></a>
        <a class="scrollbar-demo-item" ><div>递归回溯</div></a>
        <a class="scrollbar-demo-item" ><div>动态规划</div></a>
        <a class="scrollbar-demo-item" ><div @click="getType($event)" >科技</div></a>
        <a class="scrollbar-demo-item" ><div @click="getType($event)">历史</div></a>
        <a class="scrollbar-demo-item" ><div @click="getType($event)">随笔</div></a>
      </el-scrollbar>
</template>

<script>
import {getAllArticlesByLager_clazz} from "@/api/api";

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
          getAllArticlesByLager_clazz(this.$store.state.tagType).then((res)=>{
              this.$emit('GetArticle',res);
              console.log(res)
          })
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

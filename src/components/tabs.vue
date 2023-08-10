<template>
  <div class="tabs_flexbox">
    <div class="tabs_flexbox-item" @click="getTag($event)" v-for="item in CategoryList" :key="item" > {{item}} </div>
  </div>
</template>

<script>
import {getAllArticlesBySubcategory} from "@/api/api";

export default {
  name: "tabs",
  data(){
    return{
      CategoryMap:{},
      type:"小说",
      NovelCategoriesList:["玄幻","科幻","悬疑","青春校园","武侠","都市"],
      HistoryClass:["秦汉三国","两晋隋唐","两宋元明","清历民国","外国历史","架空历史"],
      ScientificCategories:["科普","互联网","编程","算法","通信"],
      List:Array()
    }
  },
  created() {
    this.CategoryMap = new Map();
    this.CategoryMap.set("小说", this.NovelCategoriesList );
    this.CategoryMap.set("历史", this.HistoryClass );
    this.CategoryMap.set("科技", this.ScientificCategories );
  },
  methods:{
    getTag(e){
      this.List[0] = {name:e.target.innerHTML}
      this.$emit('TagGetArticleList',this.List);
      getAllArticlesBySubcategory(e.target.innerHTML,this.$store.state.tagType).then((res)=>{
        this.$emit('TagGetArticleList',res);
        console.log(res)
      })
    }
  },
  computed:{
    CategoryList(){
      return this.CategoryMap.get(this.$store.state.tagType);
    }
  }
}

</script>

<style scoped>
    .tabs_flexbox{
      display: flex;
    }
    .tabs_flexbox-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      width: 120px;
      margin: 20px;
      text-align: center;
      border-radius: 20px;
      background-color:rgb(80,44,108) ;
      color: white;
    }
</style>

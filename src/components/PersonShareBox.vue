<template>
  <div class="OutermostBox">
    <div style="height: 10px"></div>
    <div class="subheadingBox">
      <ul id="list">
        <li>
          <div class="list-one"  tabindex="0" role="button" @click="">动态</div>
        </li>
        <li>
          <div class="list-two" tabindex="0" role="button" @click="">收藏</div>
        </li>
        <li>
          <div class="list-three" tabindex="0" role="button" @click="">点赞</div>
        </li>
        <li>
          <div class="list-four" tabindex="0" role="button" @click="">关注</div>
        </li>
      </ul>
    </div>
    <div class="showSubheading"><span>我的动态</span></div>

    <div class="list">
      <div class="listitem" v-for="itme in trendsPageList" :key="itme.id">
            <h2 style="font-size: 25px;margin-top: 20px">{{itme.title}}}</h2>
            <div><el-avatar
                src=".//public/img/QQ图片20230226174858.jpg"
                class="headimg"/>
            </div>
            <div style="color: rgb(166,174,190);margin-top: 10px">{{itme.num}}</div>
            <div style="margin-top: 15px;font-size: 14px">{{itme.context}}</div>

           <div id="operateBox">
             <div><el-button>已赞同</el-button></div>
             <div><el-button>收藏量</el-button></div>
             <div><el-button>喜欢</el-button></div>
             <div><el-button>分享</el-button></div>
           </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonShareBox",
  data(){
    return{
        likeList:Array(),
        collectList:Array(),
        followList:Array()
    }
  },
  props:{
    trendsPageList:{
      type:Array,
      require:true
    }
  },
  mounted() {

  },
  methods:{
    getLikeList(){

    }
  }
}
</script>

<style scoped>
  .OutermostBox{
    width: 650px;
    border-radius: 7px;
    position: relative;
    top: -7px;
  }
  .subheadingBox{

  }
  .showSubheading{
    margin-left: 20px;
    margin-top: -10px;
    font-size: 15px;
    font-weight:bolder;
  }
  .listitem{
    margin-left: 20px;
  }
  #list{
    display: flex;
    width: 300px;
    list-style-type:none;
    margin-left: -10px;
    margin-top: 20px;
  }
  #list li{
    height: 40px;
    flex: 1;
  }
  #list li el-button{

    outline: none;
  }
  #operateBox{
    width: 300px;
    display: flex;
    margin-left: -5px;
    margin-top: 15px;
  }

  #operateBox div{
    flex: 1;
    height: 50px;
  }
</style>

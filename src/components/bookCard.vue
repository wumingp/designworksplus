<template>
  <div class="infinite-list-container" ref="container">
      <div class="HotTitle"><h2 style="color: black">热门推荐</h2></div>
        <el-row :gutter="24" class="infinite-list-phantom">
          <el-col
              v-for="(o, index) in this.nums"
              :key="o"
              :span="6"
              class="infinite-list"
          >
            <el-card  :body-style="{ padding: '0px'}" @click="JumpToarticle" >
              <img
                  data-src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
              />
              <div style="padding: 14px" >

                <span>三国演义</span>
                <div>
                 <span style="font-size: 8px;color: rgb(161,161,161)">
                  成语填空！评论区来几个正经的成语
                  </span>
                </div>
                <div class="box">
                  <div class="demo-type">
                    <el-avatar
                        src=".//public/img/QQ图片20230226174858.jpg"
                        class="imgs"
                    />
                    <span id="ID">理塘王</span>
                  </div>

                  <!--          用户名加点赞量-->
                  <div class="goodBox">
                    <el-icon><StarFilled /></el-icon>
                    <span>100+</span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
  </div>
</template>

<script>


export default {
  name: "bookCard",
  data(){
    return{
      article:{
        title:'毛批三国你值得拥有',
        text:''
      }
    }
  },
  mounted() {
    // var container = document.getElementsByClassName("infinite-list-container")[0];
    // console.log(container.scrollTop);

    function imgonload() {
      //把伪数组转化为真数组
      let images = document.getElementsByClassName('image');
      for(let i=0; i<images.length; i++) {
        if(images[i].getBoundingClientRect().top < window.innerHeight) {
          //图片一旦有src就会加载出来，所以图片的路径不会放在src中，而是一个自定义的属性data-src中
          images[i].src = images[i].dataset.src;
        }
      }
    }
    window.onload = imgonload;
    //设置防抖函数
    // function debounce(fn, delay){
    //   let timerId = null
    //   return function(){
    //     const that = this
    //     if( timerId ) window.clearTimeout(timerId)
    //     timerId = setTimeout(()=>{
    //       fn.apply(that, arguments)
    //       timerId = null
    //     },delay)
    //   }
    // }
    //设置节流函数
    function throttle(fn,delay){
        let flag = true;
        return function (){
            if (flag){
              fn(this,arguments);
              flag = false;
              setTimeout(()=>{
                flag = true;
              },delay)
            }
        }
    }
    //监听滚轮事件，
    window.addEventListener('scroll',throttle(imgonload,200))
  },
  props:{
    nums:{
      type:Number,
      require:true
    },
    ArticleList:{
      type:Array,
      require:true,
      default:"letgo!!!"
    },
  },
  methods:{
    JumpToarticle(){
      this.$router.push({
        name:'essayPage',
        params: {
          id:'1'
        }
      })
    }
  }
}

</script>

<style scoped>

.el-col {
  margin-top: 20px;
}

.el-card{
  border: none;
  background-color:white;
  color: black;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.goodBox{
  float: left;
  margin-left: 100px;
  margin-top: 20px;
  margin-bottom: 10px;

}

.imgs{
  float: left;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}

#ID{
  font-size: 6px;
  float: left;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.box{

}
.demo-type{
  float: left;
}
</style>

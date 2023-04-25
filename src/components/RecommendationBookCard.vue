<template>
  <div>
      <div><h2 style="color: black">本周精选</h2></div>
      <div>
        <el-row :gutter="24">
          <el-col
              v-for="(o, index) in 4"
              :key="o"
              :span="6"
              class="infinite-list"
          >
            <el-card :body-style="{ padding: '0px'}">
              <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="reimage"
              />

              <div style="padding: 14px">
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
                    <span id="ID">礼堂王</span>
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
  </div>
  <br><br>
</template>

<script>
export default {
  name: "RecommendationBookCard",
  props:{
    img_src_list:{
        type:Array,
        default:[],
        require:true
    }
  },
  created() {

  }
}
</script>

<style scoped>

.el-col {
  margin-top: 20px;
}
.el-card{
  border: none;
  background-color:rgb(255,255,255);
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

.reimage {
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

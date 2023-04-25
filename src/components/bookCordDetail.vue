<template>
  <div id="marginBox">
    <div class="box">
      <el-carousel indicator-position="outside" height="600px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              style="width: 500px;height: 800px"
          />
        </el-carousel-item>
      </el-carousel>

      <div class="common-layout">
        <el-container>
          <el-header id="head">Header</el-header>
          <el-main id="mainBody">
            <el-scrollbar max-height="400px">

              <div></div>
            </el-scrollbar>
          </el-main>
          <el-footer id="foot">
            <div id="input">
              <el-input v-model="input" placeholder="Please input" />
            </div>
          </el-footer>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookCordDetail",
  data(){
    return{
      input:""
    }
  }
}
</script>

<style scoped>

#marginBox{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color:black;
}
.box{
  position: absolute;
  margin-top: 70px;
  margin-left: 250px;
  width: 500px;
  height: 800px;

}

.el-carousel{
  width: 500px;
  height: 800px;
  border-bottom-left-radius:100px;
  border-top-left-radius:20px;
  /*border-radius: 20px;*/
}

.common-layout{
  position: absolute;
  background-color: #d3dce6;
  width: 500px;
  height: 600px;
  margin-left: 500px;
  margin-top: -800px;
  border-top-right-radius:20px;
  border-bottom-right-radius:20px;
}

.el-carousel__item:nth-child(2n) {
  background-color: black;
  width: 500px;
  height: 600px;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: black;
  width: 500px;
  height: 600px;
}


#head{
  height: 100px;
}

#mainBody{
  height: 350px;
}

#foot{
  float: bottom;
  /*margin-top: 245px;*/
  height: 150px;
  background-color: aliceblue;
}
</style>

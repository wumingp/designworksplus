<template>
  <div>
      <span><el-icon :size="30"><ChatDotRound /></el-icon></span>
      <span><el-icon size="30"><Refrigerator /></el-icon></span>
      <span><el-icon size="30"><Stopwatch /></el-icon></span>
      <div style="display:inline-block;">
        <a href="http://localhost:8080/#/personMsgPage">
          <el-avatar
              :src="imgSrc"
              class="imgs"
          />
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "personLogin",
  data(){
    return{
      imgSrc:this.$store.state.path+"/"+this.$store.state.userInfo.userHeadImg
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.el-icon{
  color: rgb(162,162,162);
}
span{
  margin-right: 20px;
}
</style>

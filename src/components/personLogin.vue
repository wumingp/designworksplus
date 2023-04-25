<template>
  <div>
      <span><el-icon :size="30"><ChatDotRound /></el-icon></span>
      <span><el-icon size="30"><Refrigerator /></el-icon></span>
      <span><el-icon size="30"><Stopwatch /></el-icon></span>
      <div style="display:inline-block;">
        <a href="http://localhost:8080/#/login">
          <el-avatar
              src=".//public/img/QQ图片20230226174858.jpg"
              class="imgs"
          />
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "personLogin"
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

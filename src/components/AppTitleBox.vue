<template>
  <div>
    <el-avatar
        src=".//public/img/img.png"
        class="img"
    />
    <div id="words">心享</div>

  </div>
</template>

<script>
export default {
  name: "appTitleBox"
}
</script>

<style scoped>
#words{
  color: white;
  font-size: 20px;
  font-style: oblique;
  float: left;
  margin-top: 50px;
}
.img{
  width: 45px;
  height: 45px;
  float: left;
  margin-top: 40px;
}
</style>

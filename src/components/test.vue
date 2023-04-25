<template>
  <el-button type="primary" @click="tclick"> primary </el-button>

</template>

<script>
export default {
  name: "test",
  data(){
    return({
      db:["我是1","我是2","我是3"],

    })
  },
  methods:{
    tclick(){
      // 点击按钮进行一些操作，然后保存数据
      this.$store.commit('saveCurrDbSource',this.db);
      // this.$store.commit('saveCurrDbSource',this.ab);
      // this.$store.commit('saveCurrDbSource',this.av);
    }
  }
}
</script>

<style scoped>

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  height: 600px;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  height: 600px;
}
</style>

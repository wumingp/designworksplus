<template>
  <h2>发布笔记</h2>
  <span>图片编辑</span> <div><input type="file"></div>
  <img style="width: 200px;height: 150px">
  <el-input v-model="InputTitle" placeholder="Please input" />
  <el-input v-model="InputTitle" placeholder="Please input" />
  <el-input v-model="textarea" :rows="2" type="textarea" placeholder="Please input textarea"/>

</template>

<script>
export default {
  name: "EditPart",
  data(){
    return{
      InputTitle:"",
      textarea:""
    }
  }
}
</script>

<style scoped>

</style>

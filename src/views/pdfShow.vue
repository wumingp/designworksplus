<template>
  <div class="box"></div>
  <pdf :src="src"></pdf>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: "pdfShow",
  components:{pdf},
  data(){
    return{
      src:'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'
    }
  }
}
</script>

<style scoped>

</style>

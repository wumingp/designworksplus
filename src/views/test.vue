<template>
<!--  <button @click="getFile">获取文件</button>-->
<!--  <div class="pdf">-->
<!--    <pdf :src="url" ref="pdf"></pdf>-->
<!--  </div>-->

</template>

<script>
import pdf from 'vue-pdf'
export default {
  components:{
    pdf
  },
  data(){
    return {
      url:"",
    }
  },
  methods:{
    getFile(){
      console.log('sdsa')
      $.ajax({
        type:'POST',
        url:'http://127.0.0.1:80/api/file/pdfFile',
        responseType: 'blob',
        success:function (res) {
          const binaryData = []
          binaryData.push(res)  //res就是pdf流文件
          //获取blob链接
          let path = window.URL.createObjectURL(new Blob(binaryData, { type: 'application/pdf' }));
          // this.src = pdf.createLoadingTask(path);
          console.log(this.src)
          }
      })
    },
  },
  mounted() {
  }

}
</script>

<style scoped>

</style>

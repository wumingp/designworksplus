<template>
<input type="file" id="file" @change="getChunks"/>
<button @click="upFile">上传</button>
</template>

<script>
import SparkMD5 from "spark-md5";
import {InquireHash} from "@/api/api";
export default {
  name: "FileUpdate",
  data(){
    return{

    }
  },
  methods:{
    getChunks(){
      const file = document.getElementById('file').files[0];
      let fileChunks = [];
      let size = 10*1024*1024;
      if (file.size>100*1024*1024){
          for (let i = 0; i < file.size; i += size){
            fileChunks.push(file.slice(i,i+size));
          }
      }
      return fileChunks;
    },
    getHash(chunks){
      var spark = new SparkMD5();
      function _read(i) {
        if (i >= chunks.length){
          return;
        }
        const blob = chunks[i];
        const reader = new FileReader();
        reader.onload = (e) =>{
          const result = e.target.result;
          spark.append(result);
          _read(i+1);
        }
        reader.readAsArrayBuffer(blob);
      }
      _read(0);
      return spark.end();
    },
    upFile() {
      const chunks = this.getChunks();
      const hash = this.getHash(chunks)
      console.log(hash);

      InquireHash({hash:hash}).then((res)=>{
          console.log(res);
      });
    }
  }
}
</script>

<style scoped>

</style>

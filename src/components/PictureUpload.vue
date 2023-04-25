<template>
  <div class="person-msg-box" >
    <div class="is-background-box">
      <img class="is-background-img" :src="backgroundImgSrc">

    </div>
    <div class="avatar-uploader">
      <input type="file" id="uploadbox" @change="imgshow(this)"  multiple>
      <el-icon size="40" class="avatar-uploader-icon"><Plus /></el-icon>
      <img class="imgs" :src="imgSrc">
    </div>

    <div class="username"><span id="username">{{personMsg.name}}</span></div>
    <div class="male-icon"><el-icon size="21"><Male /></el-icon></div>
    <el-button class="msgbtn" type="primary">编辑个人资料</el-button>
    <el-button class="is-background-btn" @click="showbackgroundimg">
      <input type="file" id="is-background-input" @change="setbackground">
      编辑封面图片
    </el-button>
  </div>
  <div style="height: 20px"></div>
</template>

<script>
import {upload} from "@/api/api";
import {GetBackgroundImg} from "@/api/api";
import SparkMD5 from "spark-md5";
import drag1 from './../assets/img/背景2.jpg'
export default {
  name: "PictureUpload",
  data(){
    return{
      imgSrc:drag1,
      backgroundImgSrc:"",
      personMsg:{}
    }
  },
  mounted() {
    // this.personMsg = this.$store.state("userInfo");
    this.personMsg = {
      name:"晨曦"
    }

  },
  props:{

  },
  methods:{
    //上传头像
    imgshow(){
      var fileList = document.getElementById('uploadbox').files;
      var reader = new FileReader();
      reader.onload =  (e)=>{
        this.imgSrc = e.target.result;
      }
       reader.readAsDataURL(fileList[0]);
        upload(fileList[0]).then((res)=>{
        console.log(res);
        alert("上传成功")
      }).catch((res)=>{
          alert("上传失败")
        })
    },
    showbackgroundimg(){
      var inputfile = document.getElementById('is-background-input');
      inputfile.click();
    },
    setbackground(){
        var file = document.getElementById('is-background-input').files;
        var reader = new FileReader();
        reader.onload = (e)=>{
          this.backgroundImgSrc = e.target.result;
        }
        reader.readAsDataURL(file[0]);
      // GetBackgroundImg(file).then((res)=>{
      //   console.log(res);
      //   alert("上传成功")
      // }).catch((res)=>{
      //   alert("上传失败")
      // })
    },
    getFile(){
      var fileList = document.getElementById('uploadbox').files;
      if (!fileList.length) {   //如果文件为空，触发它
        alert('请选择文件');
        return;
      }
      var file = new FormData();
      for (let i = 0; i< fileList.length; i++){
        file.append('file',fileList[i]);
      }

      for (var value of file.values()){
        console.log(value);
      }

      upload(file).then((res)=>{
          console.log(res);
          alert("上传成功")
      })

    },
    async sendBigFile() {
      const file = document.getElementById('uploadbox').files[0];
      // console.log(file);

      const chunks = createChunks(file, 512 * 1024);
      //console.log(chunks);
      var spark = new SparkMD5();
      const result = await hash(chunks);
      console.log(result);
      function hash(chunks) {
        return new Promise(resolve => {
          function _read(i) {
            if (i >= chunks.length) {
              resolve(spark.end());
              return;
            }
            const blob = chunks[i];
            const reader = new FileReader();
            reader.onload = e => {
              const bytes = e.target.result;
              spark.append(bytes);
              _read(i + 1)
            }
            reader.readAsArrayBuffer(blob);
          }

          _read(0);
        })
      }

      function createChunks(file, chunksSize) {
        const result = [];
        for (let i = 0; i < file.size; i += chunksSize) {
          result.push(file.slice(i, chunksSize + i));
        }
        return result;
      }

    }
  }
}
</script>

<style scoped>
.is-background-img{
width: 950px;
height: 150px;
}
#is-background-input{
  width: 1px;
  height: 1px;
  z-index: 1;
}
.is-background-box{
  position: relative;
  width: 950px;
  height: 150px;
  z-index: 2;
  background-color: #b1bbc4;
}
#btn-submit{

}

.male-icon{
  position: absolute;
  left: 190px;
  top:200px;
  color: rgb(133,144,166);
}

.username{
  position: absolute;
  left: 190px;
  font-size: 25px;
  top: 150px;
  z-index: 10;
}
.msgbtn{
  position: absolute;
  left: 780px;
  top: 180px;
}
.person-msg-box{
  width: 950px;
  height: 250px;
  margin-top: 120px;
  margin-left: 250px;
  position: relative;
  background-color: white;
  z-index: 1;
  border-radius: 7px;
}

.avatar-uploader{
  width: 150px;
  height: 150px;
  border: 1px solid black;
  border-radius: 6px;
  position: relative;
  top: -70px;
  left: 20px;
  z-index: 10;
}

#uploadbox{
  width: 150px;
  height: 150px;
  cursor: pointer;
  z-index: 20;
  opacity:0;
}

.avatar-uploader-icon{
    position: absolute;
    size: 100px;
    z-index: -5;
    left: 55px;
    top: 60px;
}

.imgs{
  position: absolute;
  width: 150px;
  height: 150px;
  z-index: -5;
  left: 0;
  top: 0;
}
.is-background-btn{
  position: absolute;
  top: 20px;
  z-index: 30;
  left: 770px;
  opacity: 0.5;
}
</style>

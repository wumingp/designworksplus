<template>
  <div>
    <form class="formBox">
      <div class="inputsBox">
        <input id="te" class="inputBox" v-model="input" placeholder="全网热搜" @focus="CancelWords" @blur="getWords" />
      </div>

      <button type="submit" class="btn">
        <span id="iconBox" >
          <el-icon :size="22" color=rgb(198,192,191)><Search /></el-icon>
        </span>

        <div class="hiddenBox" >
          <el-icon :size="22" color="white"><Search /></el-icon>
          <div id="titleBox" style="color: white">全网搜</div>
        </div>

      </button>
    </form>

  </div>

</template>

<script>


export default {
  name: "headerBox",
  data(){
    return({
      input:''
    })
  },
  methods:{
    CancelWords(){
      var input = document.getElementById("te");
      input.placeholder = "";
    },
    getWords(){
      var input = document.getElementById("te");
      input.placeholder = "全网热搜";
    },
    getHiddenBox(){
      var box = document.getElementsByClassName("hiddenBox")[0];
      box.style.display = "block";
      var iconBox = document.getElementById("iconBox");
      iconBox.style.display="none"
    }

  }

}

</script>

<style scoped>

.inputBox{
  background-color: rgb(246,246,246);
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  float: left;
  width: 400px;
  height: 50px;
  margin-left: 580px;
  margin-top: 35px;
  font-size: 15px;
  border: 0;
  color: black;
  outline: none;
  padding-left: 25px;
}


el-icon{
}
.btn{
  margin-top: 35px;
  height:50px;
  width: 100px;
  background-color: rgb(246,246,246);
  margin-left: -10px;
  border: none;
  border-bottom-right-radius:20px ;
  border-top-right-radius: 20px;
}
.btn:hover{
  background-color: rgb(56,56,56);
}
.formBox :hover .hiddenBox{
  display:flex ;
}
.formBox :hover #iconBox{
  display: none;
}
.hiddenBox{
  display: none;
  width: 150px;
}

</style>

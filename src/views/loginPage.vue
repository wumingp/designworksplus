<template style="background-color: black">
  <div id="building"></div>

  <div class="loginBox">

      <div style="position: relative">
        <img src="~@/assets/img/背景2.jpg" style="width: 300px; height: 500px">
      </div>

      <div class="inputBox">
          <div class="Password_login1"  tabindex="0" role="button" @click="switchStateSign">密码登录</div>
          <div class="Password_login2" tabindex="0" role="button" @click="switchStateLogin">账号注册</div>
          <br>
<!--        登录表单-->
        <form id="signform">
          <el-input v-model="this.loginForm.account" placeholder="Please input" id="accountBox"/><br><br>
          <el-input
              v-model="this.loginForm.password"
              type="password"
              placeholder="Please input password"
              show-password
              id="passwordBox"
          /><br><br>
          <el-button class="loginBtn" type="summit" @click="login">登录</el-button>
        </form>
<!--        注册表单-->
        <form id="loginform">
          <el-input v-model="this.register.account" placeholder="Please input account" id="accountBox"/><br><br>
          <el-input
              v-model="this.register.password"
              type="password"
              placeholder="Please input password"
              show-password
              id="passwordBox"
          /><br><br>
          <el-input v-model="this.register.mail" placeholder="Please input e-mile" id="accountBox"/><br><br>
          <el-input v-model="this.register.password" placeholder="Please enter the verification code" id="accountBox"/><br><br>
          <el-button class="loginBtn" type="summit" @click="login()">注册</el-button>
        </form>
    </div>
  </div>

</template>

<script>
import {login} from '@/api/api'  //引入页面
import {registered} from "@/api/api";

export default {
  name: "loginPage",
  data(){
    return({
      loginForm: {
        account: "",
        password: "",
      },
      register:{
        account: "",
        password: "",
        mail:""
      },
    })
  },
  methods:{
    //调用接口
    login() {
      let user;	//定义变量，记录用户
      console.log("sdadas")
      if (this.loginForm.account === "" || this.loginForm.password === "") {
        Toast("请输入用户名或密码");
      } else {
        login(this.loginForm).then((res) => {
          if (res.data.code === 200) {	//后端给的成功的响应状态码为200
            alert("登录成功")
            console.log(res.data.data)
            user = res.data.data.user;
            this.$store.dispatch("recordUser",user);
            localStorage.setItem("userInfo",user);
            localStorage.setItem("token", res.data.data.token);
            // 将后端传给的token保存下来，然后保存到Vuex中
            this.$store.dispatch("setToken", res.data.data.token);
            // 请求成功后跳转到指定路由界面
            this.$router.replace("/homePage");
          } else {
            this.loading = false;
          }
          console.log(res.data)
        });
      }
    },
    registered(){
      if (this.register.account === "" || this.register.password === "") {
        Toast("请输入用户名或密码");
      } else {
        login(this.register).then((res) => {
          if (res.data.code === 100) {	//后端给的成功的响应状态码为200

          }
        });
      }
    },
    login1(){
      let data = {
        account:this.account,
        password:this.password
      }
      login(data).then((res) =>{
        console.log(res.data)
        this.$router.push({name:'homePage'})
        this.$store.commit('saveCurrDbSource',res.data);
      })
    },
    switchStateLogin(){
      $(".Password_login1").css('border-bottom','none');
      $(".Password_login2").css('border-bottom','5px #409EFF solid')
      $("#signform").css('display','none')
      $("#loginform").css('display','inline')
    },
    switchStateSign(){
      $(".Password_login1").css('border-bottom','5px #409EFF solid')
      $(".Password_login2").css('border-bottom','none');
      $("#signform").css('display','inline')
      $("#loginform").css('display','none')
    }
  }
}
</script>

<style scoped>
#loginform{
  display: none
}
#building{
  background:url("/src/assets/img/背景4.jpg");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
}
.loginBox{
  position: absolute;
  background-color: white;
  width: 700px;
  height: 500px;
  left: 400px;
  top: 150px;
}
.inputBox{
  position: relative;
  left: 320px;
  top: -400px;
}
.Password_login1{
  float: left;
  height: 35px;
  margin-left: 20px;
  margin-top: -70px;
  border-bottom:5px #409EFF solid;
}
.Password_login2{
  float: left;
  margin-left: 110px;
  margin-top: -70px

}
.el-input{
  width: 350px;
  position: relative;
  left: 10px;
  top: -20px;
}
.loginBtn{
  position: relative;
  left: 10px;
  width: 350px;
  background-color: #409EFF;
  color: white;
}
</style>

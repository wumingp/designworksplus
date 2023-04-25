<template>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <title>Mundana Template by WowThemesNet</title>
  <link rel="stylesheet" href="~@/assets/scss/1-frameworks/bootstrap/bootstrap-user-variables.scss">
  <link rel="stylesheet" href="~@/assets/scss/main.scss">
  <!--  &lt;!&ndash; Bootstrap 的 CSS 文件 &ndash;&gt;-->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  <!-- Google Font -->
<!--  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Source+Sans+Pro:400,700" rel="stylesheet">-->
  <!-- Font Awesome Icons -->
<!--  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">-->
<!--  <link rel="apple-touch-icon" sizes="76x76" href="~@/assets/img/favicon.ico">-->
<!--  <link rel="icon" type="image/png" href="~@/assets/img/favicon.ico">-->
  <!--------------------------------------
  NAVBAR
  --------------------------------------->
  <nav class="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div class="container">
      <a class="navbar-brand" href="./index.html"><strong>Mundana</strong></a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarColor02" style="">
        <ul class="navbar-nav mr-auto d-flex align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="./index.html">Intro <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./article.html">Culture</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./article.html">Tech</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./article.html">Politics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./article.html">Health</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./article.html">Collections</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./docs.html">Template <span class="badge badge-secondary">docs</span></a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto d-flex align-items-center">
          <li class="nav-item highlight">
            <a class="nav-link" href="https://www.wowthemes.net/mundana-free-html-bootstrap-template/">Get this Theme</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { box2 } from '@/assets/js/vendor/jquery.min.js'
import { box3 } from '@/assets/js/vendor/popper.min.js'
import { box4 } from '@/assets/js/functions.js'
import { box5 } from '@/assets/js/vendor/bootstrap.min.js'

export default {
  name: "TopNavigationBar",
  mounted() {
    box2()
    box3()
    box4()
    box5()
    document.write(new Date().getFullYear())
  }
}
</script>

<style scoped>

</style>

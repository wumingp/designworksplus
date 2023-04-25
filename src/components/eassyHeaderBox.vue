<template>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <title>Mundana Template by WowThemesNet</title>
  <link rel="stylesheet" href="~@/assets/scss/1-frameworks/bootstrap/bootstrap-user-variables.scss">
  <link rel="stylesheet" href="~@/assets/scss/main.scss">
  <!--  &lt;!&ndash; Bootstrap 的 CSS 文件 &ndash;&gt;-->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  <!--   Google Font -->
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Source+Sans+Pro:400,700" rel="stylesheet">
  <!--   Font Awesome Icons -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
  <link rel="apple-touch-icon" sizes="76x76" href="~@/assets/img/favicon.ico">
  <link rel="icon" type="image/png" href="~@/assets/img/favicon.ico">
  <!--------------------------------------
  HEADER
  --------------------------------------->
  <div class="container">
    <div class="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
      <div class="h-100 tofront">
        <div class="row justify-content-between">
          <div class="col-md-6 pt-6 pb-6 pr-6 align-self-center">
            <p class="text-uppercase font-weight-bold">
              <a class="text-danger" href="./category.html">Stories</a>
            </p>
            <h1 class="display-4 secondfont mb-3 font-weight-bold">Sterling could jump 8% if Brexit deal gets approved by UK Parliament</h1>
            <p class="mb-3">
              Analysts told CNBC that the currency could hit anywhere between $1.35-$1.40 if the deal gets passed through the U.K. parliament.
            </p>
            <div class="d-flex align-items-center">
              <img class="rounded-circle" src="~@/assets/img/demo/avatar2.jpg" width="70">
              <small class="ml-2">Jane Seymour <span class="text-muted d-block">A few hours ago &middot; 5 min. read</span>
              </small>
            </div>
          </div>
          <div class="col-md-6 pr-0">
            <img src="~@/assets/img/demo/intro.jpg" style="width: 500px;height: 650px">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Header -->
</template>

<script>
import {box2} from "@/assets/js/vendor/jquery.min";
import {box3} from "@/assets/js/vendor/popper.min";
import {box4} from "@/assets/js/functions";
import {box5} from "@/assets/js/vendor/bootstrap.min";

export default {
  name: "eassyHeaderBox",
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

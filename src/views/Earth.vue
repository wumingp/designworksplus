<template>
  <div class="box"></div>
</template>
<script>
export default {

}
</script>
<style>
@keyframes loop {
  0% { background-position : 0 0; }
  100% { background-position : 900px 0;}
}

.box {
  background: url('../assets/img/earth.png') repeat-x 0 0; /* 背景图片在水平方向复制*/
  /*下面的属性可使地球位于浏览器窗口垂直水平居中国*/
  height: 450px;
  left: 50%;
  margin: -225px 0 0 -225px;
  position: absolute;
  top: 45%;
  width: 450px;

  /*在earth中添加以下属性样式*/
  border: 1px solid rgba(26,18,101,0.3); /*形成圆边效果，视觉效果更好，不用也行*/
  border-radius: 225px; /*使地球形成圆形效果*/
  box-shadow: -8px 0 25px rgba(256,256,256,0.3), -1px -2px 14px rgba(256,256,256,0.5) inset;
  /*形成圆形外面的模糊月晕效果*/
  animation: loop 20s linear infinite; /* 这的时间是可以设置的，如果你想地球转快一点的话，时间改小点就行了，比如10s*/
}

.box:before{
  content: "";
  border-radius: 225px;
  box-shadow: -150px -6px 25px rgba(0,0,0,0.7) inset;/*弧形阴影，形成白天黑夜效果*/
  left: 0;
  position:absolute;
  top: 0;
  height: 450px;
  width: 450px;
}
</style>

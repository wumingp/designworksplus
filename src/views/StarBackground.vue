<template>
  <div class="body">
    <h1>贪吃蛇</h1>
    <earth v-if="isShow"></earth>
    <snake-game v-else></snake-game>
    <button @click="start" class="btn">{{startcut}}</button>
    <div class="stars" ref="starsRef">
      <div class="star" v-for="(item, index) in starsCount" :key="index"></div>
    </div>
  </div>
</template>

<script lang="js">
import { onMounted, ref } from 'vue'
import Earth from '@/views/Earth'
import SnakeGame from '../views/SnakeGame.vue'
export default {
  data () {
    return {
      isShow: true
    }
  },
  setup () {
    const startcut = ref('开始')
    const starsRef = ref(null)

    const starsCount = 800 // 星星数量
    const distance = 900 // 间距

    onMounted(() => {
      const starNodes = Array.from(starsRef.value.children)
      starNodes.forEach((item) => {
        const speed = 0.2 + Math.random() * 1
        const thisDistance = distance + Math.random() * 300
        item.style.transformOrigin = `0 0 ${thisDistance}px`
        item.style.transform = `
        translate3d(0,0,-${thisDistance}px)
        rotateY(${Math.random() * 360}deg)
        rotateX(${Math.random() * -50}deg)
        scale(${speed},${speed})`
      })
    })

    return {
      starsRef,
      starsCount,
      startcut
    }
  },
  components: {
    Earth,
    SnakeGame
  },
  methods: {
    start () {
      this.isShow = !this.isShow
      this.startcut = this.startcut === '开始' ? '关闭' : '开始'
    }
  }
}
</script>

<style lang="css" scoped>
.body {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: radial-gradient(
    200% 100% at bottom center,
    #f7f7b6,
    #e96f92,
    #1b2947
  );
  background: radial-gradient(
    200% 105% at top center,
    #1b2947 10%,
    #75517d 40%,
    #e96f92 65%,
    #f7f7b6
  );
  background-attachment: fixed;
  overflow: hidden;
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
}

.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 45%;
  animation: rotate 90s infinite linear;
  bottom: 0;
}
.star {
  width: 2px;
  height: 2px;
  background: #f7f7b6;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
}

.btn {
  position: absolute;
  bottom: 100px;
  left: 50%;
  margin-left: -40px;
  width: 80px;
  height: 40px;
  line-height: 36px;
  border: 1px solid rgb(235, 132, 118);
  border-radius: 10px;
  background-color: rgba(239,171,162);
  text-align: center;
  box-sizing: border-box;
}
.btn:hover{
  background-color: rgb(170, 49, 49);
  border: 1px solid rgb(248, 248, 248);
  color: aliceblue;
}
.noactive{
  display: none;
}
</style>

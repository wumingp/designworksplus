<template>
  <div class="snake">
    <!-- 嵌套的写法 -->
      <div v-for="i in state.size" :key="i">
        <!-- ref动态存储元素结点 -->
        <span v-for="j in state.size" :key="j" :ref="setItemRef"></span>
      </div>
  </div>
<!-- 语法块 -->
  <div style="width: 480px; height: 300px;border: black 1px solid; position: fixed;right: 20px;top: 110px"></div>
<!--  输入块-->
  <div style="position: relative; right: 0">
    <el-input
        v-model="textarea2"
        :autosize="{ minRows: 4, maxRows: 8 }"
        type="textarea"
        placeholder="Please input"
        style="position: absolute; right: 20px;top: 400px;width: 480px; opacity:0.5;"

    />
    <el-button style="position: absolute; right: 0;top: 600px">确认提交</el-button>
  </div>

  <div>
    <div v-for="i in 5" style="height: 70px;color: white">任务一:判断当前语法</div>
  </div>
</template>
<script>
import { onMounted,ref, reactive } from 'vue'
const textarea2 = ref('');
// 判断数组里面是否有相同对象(很重要)
import {GetBarrier} from "@/api/api";
var isContain = (arr, obj) => {
  for (var o of arr) {
    if (o.x === obj.x && o.y === obj.y) {
      return true
    }
  }
  return false
}
export default {
  setup () {
    // vue3循环数组里获取元素的方法
    const itemRefs = []
    const setItemRef = el => {
      // 将获得的每一个元素都存储在数组中，这样每个元素的索引值就是y * size + x
      itemRefs.push(el)
    }
    // 将对象变成响应式的
    const state = reactive({
      size: 30,
      length: 4,
      snakeList: []
    })
    // 生成头部随机坐标,将边上的4行4列除外
    // 两个区间内包含的随机整数的生成的方法，这里减去5以及最小值取4是为了不让头结点生成在边上
    const x = Math.floor(Math.random() * (state.size - 5 - 4 + 1)) + 4
    const y = Math.floor(Math.random() * (state.size - 5 - 4 + 1)) + 4
    // 生成随机方向 0,1,2,3 => 表示 上，下，左，右
    var forword = Math.floor(Math.random() * (3 - 0 + 1))
    // 渲染生成蛇身
    const render = () => {
      for (const body of state.snakeList) {
        // 注意：数组越界将找不到元素也就找不到classList属性
        itemRefs[body.y * state.size + body.x].classList.add('cover')
      }
    }
    // 生成食物
    var foodx = null
    var foody = null
    const createfood = () => {
      foodx = Math.floor(Math.random() * (state.size - 5 - 4 + 1)) + 4
      foody = Math.floor(Math.random() * (state.size - 5 - 4 + 1)) + 4
      if (isContain(state.snakeList, { x: foodx, y: foody })) {
        foodx += 1
        foody += 1
      }
      itemRefs[foody * state.size + foodx].classList.add('food')
    }
    // 速度,初始为300秒
    var speed = 150
    // 用计时器刷新页面
    const start = () => {
      var headerXY = null
      // 创建计时器，注意这个是计时器的标识，并不是表示一个函数
      var timestart = setInterval(() => {
        switch (forword) {
          case 0: {
            headerXY = { x: state.snakeList[0].x, y: state.snakeList[0].y - 1 }
            break
          }
          case 1: {
            headerXY = { x: state.snakeList[0].x, y: state.snakeList[0].y + 1 }
            break
          }
          case 2: {
            headerXY = { x: state.snakeList[0].x - 1, y: state.snakeList[0].y }
            break
          }
          case 3: {
            headerXY = { x: state.snakeList[0].x + 1, y: state.snakeList[0].y }
            break
          }
        }
        // 碰撞检测
        if (headerXY.x < 0 ||
        headerXY.x >= state.size ||
        headerXY.y < 0 ||
        headerXY.y >= state.size ||
        isContain(state.snakeList, headerXY)) {
          // 如果蛇超过界限或者咬到自己则 取消计时器 让画面停止，游戏失败
          window.clearInterval(timestart)
        } else {
          console.log(isContain(state.snakeList, headerXY))
          // 将移动的头部结点插入数组
          state.snakeList.splice(0, 0, headerXY)
          if (headerXY.x === foodx && headerXY.y === foody) {
          // 移除样式food
            itemRefs[foody * state.size + foodx].classList.remove('food')
            itemRefs[foody * state.size + foodx].classList.add('cover')
            speed = speed - 20 < 50 ? 50 : speed - 20
            // console.log(speed)
            // 重新生成食物
            createfood()
          } else {
            var tail = state.snakeList.pop()
            itemRefs[tail.y * state.size + tail.x].classList.remove('cover')
          }
          render()
        }
      }, speed)
    }
    onMounted(() => {
      // 判断方向，并依次生成四个方块的坐标
      for (let i = 0; i < state.length; i++) {
        if (forword === 0) {
          state.snakeList.push({ x: x, y: y + i })
        } else if (forword === 1) {
          state.snakeList.push({ x: x, y: y - i })
        } else if (forword === 2) {
          state.snakeList.push({ x: x + i, y: y })
        } else {
          state.snakeList.push({ x: x - i, y: y })
        }
      }
      // 遍历数组并渲染颜色
      render()
      // 生成食物
      createfood()
      // 等待更新
      start()
      // 用键盘控制方向
      window.addEventListener('keydown', (e) => {
        // console.log(e)
        switch (e.key) {
          case 'ArrowUp': {
            if (forword !== 1) {
              forword = 0
            }
            break
          }
          case 'ArrowDown': {
            if (forword !== 0) {
              forword = 1
            }
            break
          }
          case 'ArrowLeft': {
            if (forword !== 3) {
              forword = 2
            }
            break
          }
          case 'ArrowRight': {
            if (forword !== 2) {
              forword = 3
            }
            break
          }
        }
      })
    })
    return {
      state,
      setItemRef,
      textarea2
    }
  }
}
</script>
<style lang="css">
.snake{
  height: 450px;
  left: 50%;
  margin: -225px 0 0 -225px;
  position: absolute;
  top: 45%;
  width: 450px;
}
.snake>div{
  width: 450px;
  height: 15px;
  box-sizing: border-box;
}
.snake span{
  display: inline-block;
  width: 15px;
  height: 15px;
  line-height: 15px;
  border: 1px solid rgb(175, 175, 175);
  box-sizing: border-box;
}
.cover{
  /* 全身的颜色 */
  background-color: coral;
}
.food{
  /* 食物方块的颜色 */
  background-color: brown;
}
</style>

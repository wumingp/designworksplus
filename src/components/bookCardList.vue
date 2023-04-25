<template>
  <div class="virtual-list" ref="virtualList">
    <div class="virtual-list__phantom" :style="{ height: totalHeight + 'px' }"></div>
    <div class="virtual-list__container" :style="{ transform: 'translateY(' + scrollTop + 'px)' }">
      <div v-for="(item, index) in visibleData" :key="index" class="virtual-list__item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookCardList',
  props: {
    data: {
      type: Array,
      required: true
    },
    visibleCount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      scrollTop: 0,
      totalHeight: 0,
      visibleData: [],
      itemHeight:200
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.totalHeight = this.data.length * this.itemHeight
      this.visibleData = this.data.slice(0, this.visibleCount)
      this.$refs.virtualList.addEventListener('scroll', this.handleScroll)
    })
  },
  beforeDestroy() {
    this.$refs.virtualList.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollTop = this.$refs.virtualList.scrollTop
      const start = Math.floor(this.scrollTop / this.itemHeight)
      const end = start + this.visibleCount
      this.visibleData = this.data.slice(start, end)
    }
  }
}
</script>

<style>
.virtual-list {
  overflow-y: auto;
  position: relative;
  /*height: 100%;*/
}

.virtual-list__phantom {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.virtual-list__container {
  position: relative;
}

.virtual-list__item {
  height: 200px;
}
/*.virtual-list::-webkit-scrollbar {*/
/*  display: none;*/
/*}*/
</style>

<template>
<TopNavigationBar></TopNavigationBar>
  <eassy-header-box></eassy-header-box>
<MainBox></MainBox>
</template>

<script>
import TopNavigationBar from "@/components/TopNavigationBar";
import MainBox from "@/components/MainBox";
import EassyHeaderBox from "@/components/eassyHeaderBox";
export default {
  name: "essayPage",
  components: {EassyHeaderBox, MainBox, TopNavigationBar},
  created() {
    const obj = this.$route.params.id;
    console.log("传过来了")
    console.log(obj)
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>

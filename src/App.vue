<template>
  <div id="app">
    <Header/>
    <main>

      <Home-page-main/>
    </main>
<!--    <Footer />-->
  </div>
</template>
<script>
// import Footer from '@/components/Organisms/Footer.vue'



import Header from "@/components/Organisms/Header.vue";
import HomePageMain from "@/pages/HomePageMain.vue";

export default {
  name: 'App',
  components: {
    Header,
    HomePageMain,

    // Footer,
  },
}
</script>

<style>
/* APPLY GLOBAL STYLES HERE */
</style>
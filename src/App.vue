<template>
  <div id="app">
    <Header/>
    <main>

      <router-view />
    </main>
<!--    <Footer />-->
  </div>
</template>
<script>
// import Footer from '@/components/Organisms/Footer.vue'



import Header from "@/components/Organisms/Header.vue";

export default {
  name: 'App',
  components: {
    Header,
    // Footer,
  },
}
</script>

<style>
/* APPLY GLOBAL STYLES HERE */
</style>
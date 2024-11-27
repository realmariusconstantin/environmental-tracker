<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
<!--    <Footer />-->
  </div>
</template>
<script>
// import Footer from '@/components/Organisms/Footer.vue'
import Navbar from '@/components/Organisms/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    // Footer,
  },
}
</script>

<style>
/* APPLY GLOBAL STYLES HERE */
</style>
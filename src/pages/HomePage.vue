
<template>


  <body>

  <Header2/>
  <HomeMain/>
  <Footer/>
  </body>

</template>

<script>

import Header2 from "@/components/Organisms/Header2.vue";
import HomeMain from "@/components/Organisms/HomeMain.vue";
import Footer from "@/components/Organisms/Footer.vue";



export default {
  name: "HomePage",
  components: {
    Header2,
    HomeMain,
    Footer,
  },
}
</script>

<style>
/* APPLY GLOBAL STYLES HERE */
</style>
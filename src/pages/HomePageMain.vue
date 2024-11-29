<script>

import HomeMain from "@/components/Organisms/HomeMain.vue";
import Footer from "@/components/Organisms/Footer.vue";
import Header from "@/components/Organisms/Header.vue";
export default {
  name: "HomePageMain",
  components: {
    Header,
    HomeMain,
    Footer,
  },
}
</script>

<template>
  <body>

  <Header />
  <HomeMain/>
  <Footer/>
  </body>
</template>

<style >

</style>
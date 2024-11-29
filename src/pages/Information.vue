/* eslint-disable vue/multi-word-component-names */
<template>
  <body>

  <Header />
  <InfoMain />
  <Footer/>
  </body>


</template>
<script>
import Footer from "@/components/Organisms/Footer.vue";
import Header from "@/components/Organisms/Header.vue";
import InfoMain from "@/components/Organisms/InfoMain.vue";

export default {
  name: "Information",
  components: {
    Header,
    InfoMain,
    Footer,
  },
}
</script>
<style>

</style>




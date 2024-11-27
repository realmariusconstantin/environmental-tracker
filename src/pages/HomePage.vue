
<template>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Home Page</title>
  </head>
  <body>
  <Navbar />
  <h1>Welcome to the Home Page</h1>
  </body>
  </html>
</template>

<script>
import Navbar from '@/components/Organisms/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>

<style>
/* APPLY GLOBAL STYLES HERE */
</style>
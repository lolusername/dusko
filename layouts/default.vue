<template>
  <main>
    <Menu />
    <Nuxt />
    <Footer />
  </main>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  components: { Footer },
}
</script>

<style>
html {
  @apply bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 text-red-50;
}
</style>
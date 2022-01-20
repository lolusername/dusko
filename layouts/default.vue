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
  @apply bg-black text-red-50;
}
</style>
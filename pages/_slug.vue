<template>
  <main>test</main>
</template>

<script>
export default {
  async asyncData({ params, $sanity }) {
    console.log(params) // { slug: "heros-only" }
  },
}
</script>

<style>
</style>
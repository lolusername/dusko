<template>
  <nav
    class="
      bottom-0
      transition
      duration-500
      transition-colors
      py-3
      border-red-50
      z-50
      px-1
      border-t
    "
    ref="navBar"
  >
    <div class="container mx-auto text-center font-heading">
      <p>DUSKO created by Dakota Blue</p>
      <p>DUSKO copyright 2021. All rights reserved.</p>
      <a
        class="underline text-yellow-200"
        target="_BLANK"
        href="https://discord.gg/TfHF28Wa"
        >join the discord</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style>
</style>
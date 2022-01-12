<template>
  <nav
    class="
      sticky
      top-0
      transition
      duration-500
      transition-colors
      group
      hover:bg-red-50
      py-3
      border-b border-red-50
      z-50
      px-3
    "
    :class="{ 'bg-red-50': scrolled }"
    ref="navBar"
  >
    <div
      class="container mx-auto group-hover:text-gray-400 flex justify-between"
    >
      <Logo :class="{ 'text-gray-400 glitch': scrolled }" />
      <section>
        <ul class="social flex space-x-2">
          <li>
            <a href="https://twitter.com/duskoworld" target="_BLANK"
              ><Twitter
            /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/duskoworld/" target="_BLANK"
              ><Instagram
            /></a>
          </li>
        </ul>
      </section>
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
  methods: {
    trackScroll(e) {
      const vueApp = this
      window.addEventListener('scroll', (e) => {
        requestAnimationFrame(() => {
          const scrollPos = window.scrollY
          vueApp.scrolled = scrollPos > 10
        })
      })
    },
  },
  mounted() {
    this.trackScroll()
  },
}
</script>

<style>
@keyframes glitch {
  from {
    @apply text-green-400;
  }
  to {
    @apply text-blue-400;
  }
}
.glitch {
  animation: glitch 350ms linear infinite;
}
</style>
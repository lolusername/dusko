<template>
  <nav
    class="
      sticky
      top-0
      transition-colors
      group
      hover:bg-red-50
      py-3
      border-b border-red-50
    "
  >
    <div
      class="container mx-auto group-hover:text-gray-400 flex justify-between"
    >
      <Logo />
      <section>
        <ul class="social flex space-x-2">
          <li><Twitter /></li>
          <li><Instagram /></li>
        </ul>
      </section>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
</style>
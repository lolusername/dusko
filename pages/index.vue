<template>
  <main>
    <pre>
      <div v-for="(c,i) in characters" :key="i">{{c}}</div>
    </pre>
  </main>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  async asyncData({ $sanity }) {
    console.log()
    const query = groq`*[]`
    const characters = await $sanity.fetch(query)
    return { characters }
  },
}
</script>

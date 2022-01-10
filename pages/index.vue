<template>
  <main class="dark container mx-auto">
    <section class="flex justify-between space-x-16 pt-24">
      <img
        :src="$urlFor(globalInfo.welcomeImage)"
        alt="Artwork representing the collection"
        loading="lazy"
        class="max-w-lg border-8"
      />
      <div class="text-3xl">
        <h1 class="font-heading text-6xl font-bold mb-3">Welcome</h1>
        <article class="font-bold border-b pb-12 welcome-text">
          <SanityContent :blocks="globalInfo.welcomeText" />
        </article>
      </div>
    </section>
    <section class="max-w-6xl mx-auto mb-24">
      <h3
        class="font-heading text-center text-5xl font-bold mt-12 text-green-300"
      >
        VOL.2 Character NFTs:
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 p-4 border">
        <article v-for="character in characters" :key="character._id">
          <a class="inline" href="">
            <img
              :src="$urlFor(character.charImage)"
              :alt="character.description"
              loading="lazy"
              class=""
            />
            <p
              class="
                text-yellow-300
                capitalize
                text-3xl text-center
                pt-2
                font-heading
              "
            >
              {{ character.name }}
            </p>
          </a>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  name: 'home',
  async asyncData({ $sanity }) {
    console.log()
    const characterQuery = groq`*[_type == "character"]`
    const aboutQuery = groq`*[_id == "about"][0]`
    const characters = await $sanity.fetch(characterQuery)
    const globalInfo = await $sanity.fetch(aboutQuery)
    return { characters, globalInfo }
  },
}
</script>
<style  >
.welcome-text p {
  @apply mb-6;
}
</style>

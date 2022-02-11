<template>
  <div class="container mx-auto">
    <main class="flex gap-4 justify-center py-24">
      <img
        :src="$urlFor(character.charImage)"
        :alt="character.description"
        class="
          object-cover
          align-center
          rounded-sm
          border
          img-set
          transition
          max-w-md
        "
      />
    </main>
    <div
      class="
        w-full
        text-5xl
        md:text-7xl
        font-heading
        w-50
        text-center
        z-10
        jusitify-self-end
        font-bold
        align-middle
        break-all
        capitalize
      "
    >
      {{ character.name }}
    </div>
    <div
      class="
        max-w-3xl
        my-6
        mx-auto
        transition transition-colors
        text-xl text-pink-600
        bg-yellow-300
        md:rounded-xl
        p-3
        flex
      "
    >
      <h3 class="inline-block mr-6 font-heading mt-1 uppercase">Tags:</h3>
      <div class="flex gap-3 inline-block">
        <span
          class="font-bold hover:text-gray-800"
          v-for="(tag, i) in character.tags"
          :key="i"
          >|{{ tag.tags }}|</span
        >
      </div>
    </div>
    <SanityContent
      class="max-w-3xl my-12 mx-auto text-xl md:text-4xl p-3 md:p-0"
      :blocks="character.description"
    />
    <div
      class="
        max-w-3xl
        py-3
        my-12
        mx-auto
        text-4xl
        border-t-2
        text-4xl text-center
        gap-12
        flex
        justify-center
        flex-col
        md:flex-row
      "
    >
      <a
        class="text-red-400 font-bold underline hover:bg-blue-200"
        :href="character.openseaLink"
        >OpenSea Link</a
      >
      <a
        class="text-red-400 font-bold underline hover:bg-blue-200"
        :href="character.ipfsLink"
        >IPFS Link</a
      >
      <a
        class="text-red-400 font-bold underline hover:bg-blue-200"
        :href="character.etherscanLink"
        >Etherscan Link</a
      >
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  name: 'item',
  async asyncData({ params, $sanity }) {
    console.log(params) // { slug: "heros-only" }
    const characterQuery = groq`*[_type == "character" && slug.current == "${params.slug}"]{
                                  name,
                                  _id,
                                  slug,
                                  charImage,
                                  description,
                                  openseaLink,
                                  ipfsLink,
                                  etherscanLink,
                                  tags[]->{tags}
                                }[0]`
    const character = await $sanity.fetch(characterQuery)
    return { character }
  },
}
</script>

<style>
.img-set:hover {
  transform: scale(1.34) skew(0) !important;
  opacity: 1 !important;
}
</style>
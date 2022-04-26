<template>
  <main class="dark container mx-auto">
    <section
      class="flex flex-col md:flex-row justify-between md:space-x-16 md:pt-24"
      ref="content"
      :class="{ 'bg-pink-400': scrolled }"
    >
      <img
        :src="$urlFor(globalInfo.welcomeImage)"
        alt="Artwork representing the collection"
        loading="lazy"
        class="max-w-full md:max-w-md border-8 object-cover"
      />
      <div class="text-xl md:text-3xl p-3">
        <h1 class="font-heading text-6xl font-bold text-red-500 mb-3">
          Welcome
        </h1>
        <article class="font-bold border-b pb-12 welcome-text">
          <SanityContent :blocks="globalInfo.welcomeText" />
        </article>
        <article class="border-b py-2">
          <span class="font-heading">DUSKO VOLUMES:</span>
          <NuxtLink
            :to="`collection/${collection.collectionSlug.current}`"
            v-for="collection in collections"
            :key="collection._id"
            class="underline mx-3 hover:no-underline"
          >
            {{ collection.collectionTitle }}</NuxtLink
          >
        </article>
      </div>
    </section>
    <iframe
      id="mint"
      class="w-full border-t border-b my-12 px-3 md:px-0"
      src="https://mintdusko.world"
    ></iframe>
    <section class="grid grid-cols-3 my-6 md:my-24 gap-12">
      <CollectionListing
        :truncate="9"
        :truncateLink="chars.collectionSlug.current"
        :collection="chars"
      />

      <div class="col-span-3 md:col-span-1">
        <h3
          class="
            font-heading
            text-4xl
            md:text-5xl
            text-center
            md:text-right
            font-bold
            md:text-opacity-90
            mb-3
            text-red-500
          "
          v-if="comingSoon.visible"
        >
          Coming Soon:
        </h3>
        <div
          v-if="comingSoon.visible"
          class="gap-4 p-4 -bottom-4 md:border md:border-red-500 mb-6"
        >
          <article>
            <img
              :src="$urlFor(comingSoon.comingSoonImage)"
              loading="lazy"
              class="max-w-full mx-auto my-3 filter"
            />
            <SanityContent :blocks="comingSoon.content" class="" />
            <div v-if="comingSoon.mintLink">
              <a
                class="
                  rounded-3xl
                  bg-white
                  text-center text-black
                  p-2
                  w-full
                  block
                  my-3
                  font-heading
                  text-2xl
                  hover:bg-red-500
                "
                :href="comingSoon.mintLink"
                >Mint The Characters</a
              >
            </div>
          </article>
        </div>

        <h3
          class="
            font-heading
            text-4xl
            md:text-5xl
            text-center
            md:text-right
            font-bold
            md:text-opacity-90
            mb-3
          "
        >
          Comic Issues:
        </h3>
        <div class="gap-4 p-4 -bottom-4 md:bg-red-50 md:border">
          <article
            class="md:text-gray-800 block mb-6"
            v-for="issue in collections"
            :key="issue._id"
          >
            <h1 class="font-bold uppercase text-2xl text-center">
              {{ issue.collectionTitle }}
            </h1>
            <img
              :src="$urlFor(issue.coverImage)"
              alt="Comic Issues in PDF format"
              loading="lazy"
              class="max-w-xs mx-auto my-2 filter"
            />
            <a
              :href="`${issue.url}?dl=`"
              class="
                mx-auto
                block
                text-2xl
                font-heading
                my-3
                px-4
                py-1
                max-w-xs
                text-center
                rounded-3xl
                border-4 border-black
                hover:bg-black hover:text-white
              "
            >
              Read {{ issue.collectionTitle }}
            </a>
            <div>
              <i
                class="
                  block
                  text-center text-red-50 text-4xl text-align-center
                  -mt-3
                  align-text-top
                  text-heading
                "
                >...</i
              >
            </div>
          </article>
        </div>
      </div>
      <div></div>
    </section>
  </main>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  name: 'home',
  data() {
    return {
      scrolled: false,
    }
  },
  async asyncData({ $sanity }) {
    const globalQuery = groq`*[_id == "about"][0]`
    const globalInfo = await $sanity.fetch(globalQuery)

    const collectionQuery = groq`*[_type == "collection"] | order(order desc) {
      ...,
      "url": issuePDF.asset->url
    }`
    const collections = await $sanity.fetch(collectionQuery)

    const charQuery = groq`*[_type == "collection" && featured== true][0]{
      ...,
      collection[]->,
    }`
    const chars = await $sanity.fetch(charQuery)

    const comingSoonQuery = groq`*[_id == "comingSoon"][0]`
    const comingSoon = await $sanity.fetch(comingSoonQuery)

    return {
      globalInfo,

      collections,
      chars,
      comingSoon,
    }
  },
}
</script>
<style  >
.welcome-text p {
  @apply mb-6;
}
.char-name {
  text-shadow: 1px 2px 1px #7f1d1d;
}
.issues {
  text-shadow: 1px -2px 1px #e5e7eb;
}
#mint {
  height: 666px;
}
</style>

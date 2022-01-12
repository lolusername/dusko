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
        class="max-w-lg border-8"
      />
      <div class="text-xl md:text-3xl p-3">
        <h1 class="font-heading text-6xl font-bold mb-3">Welcome</h1>
        <article class="font-bold border-b pb-12 welcome-text">
          <SanityContent :blocks="globalInfo.welcomeText" />
        </article>
      </div>
    </section>
    <section class="grid grid-cols-3 my-6 md:my-24 gap-12">
      <div class="col-span-3 md:col-span-2">
        <h3
          class="
            font-heading
            text-4xl
            md:text-5xl
            text-center
            md:text-left
            font-bold
            text-red-200
            -mb-3
            char-name
          "
        >
          VOL.2 Character NFTs:
        </h3>
        <div
          class="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 -bottom-4 bg-red-200"
        >
          <article v-for="character in characters" :key="character._id">
            <NuxtLink class="inline group" :to="character.slug.current">
              <img
                :src="$urlFor(character.charImage)"
                :alt="character.description"
                loading="lazy"
                class=""
              />
              <p
                class="
                  text-gray-800
                  capitalize
                  text-xl
                  md:text-3xl
                  text-center
                  group-hover:underline
                  pt-2
                  font-heading
                "
              >
                {{ character.name }}
              </p>
            </NuxtLink>
          </article>
        </div>
      </div>
      <div class="col-span-3 md:col-span-1">
        <h3
          class="
            font-heading
            text-4xl
            md:text-5xl
            text-center
            md:text-right
            font-bold
            text-gray-800
            -mb-3
            issues
            text-opacity-10
            md:text-opacity-90
          "
        >
          Comic Issues
        </h3>
        <div
          class="gap-4 p-4 -bottom-4 md:bg-gray-200 md:bg-opacity-10 md:border"
        >
          <article
            class="text-gray-800 block mb-6"
            v-for="issue in issues"
            :key="issue._id"
          >
            <h1 class="font-bold uppercase text-2xl text-gray-300 text-center">
              {{ issue.title }}
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
                bg-blue-400
                mx-auto
                block
                text-2xl
                font-heading
                text-gray-200
                my-3
                px-4
                py-1
                max-w-xs
                text-center
                rounded-3xl
                bg-gradient-to-r
                from-blue-500
                hover:to-blue-600
                to-blue-500
              "
            >
              Read {{ issue.title }}
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
    console.log()
    const characterQuery = groq`*[_type == "character"]{
                                  name,
                                  _id,
                                  slug,
                                  charImage
                                }`
    const issueQuery = groq`*[_type == "issue"]{
                              ...,
                              "url": issue.asset->url
                            }`
    const aboutQuery = groq`*[_id == "about"][0]`
    const characters = await $sanity.fetch(characterQuery)
    const issues = await $sanity.fetch(issueQuery)
    const globalInfo = await $sanity.fetch(aboutQuery)
    return { characters, globalInfo, issues }
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
</style>

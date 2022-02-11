<template>
  <div class="container mx-auto">
    <CollectionListing
      :collection="collection"
      :columns="5"
      :showDescription="true"
      class="py-24"
    />
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  async asyncData({ params, $sanity }) {
    const collectionQuery = groq`*[_type == "collection" && collectionSlug.current == "${params.collection}"][0] {
      ...,
      collection[]->
    }`
    const collection = await $sanity.fetch(collectionQuery)
    return { collection }
  },
}
</script>

<style>
</style>
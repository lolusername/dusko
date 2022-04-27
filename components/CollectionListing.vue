<template>
  <div class="col-span-3 md:col-span-2">
    <span v-for="(x, i) in collection.collection" :key="i">
      <p v-if="!x.slug">{{ x.name }}</p>
    </span>
    <h3
      class="
        font-heading
        text-4xl
        md:text-5xl
        text-center
        md:text-left
        font-bold
      "
    >
      {{ collection.collectionTitle }}
    </h3>
    <div v-if="collection.description && showDescription">
      {{ collection.description }}
    </div>
    <div
      :class="`grid grid-cols-3 md:grid-cols-${columns} gap-4 -bottom-4 py-3`"
    >
      <article
        v-for="character in characters"
        v-if="character.slug"
        :key="character._id"
      >
        <NuxtLink
          class="inline group"
          v-if="character.slug"
          :to="`/${character.slug.current}`"
        >
          {{ character.text }}
          <img
            :src="$urlFor(character.charImage)"
            v-if="character.charImage"
            loading="lazy"
            class="w-full"
          />

          <p
            class="
              text-red-50
              capitalize
              text-xl
              md:text-3xl
              transition transition-colors
              text-center
              group-hover:bg-red-50 group-hover:text-red-500
              py-2
              font-heading
            "
          >
            {{ character.name }}
          </p>
        </NuxtLink>
      </article>
    </div>
    <NuxtLink
      v-if="truncate"
      class="
        text-3xl
        font-bold
        text-center
        font-heading
        w-full
        block
        underline
        hover:no-underline
      "
      :to="`/collection/${truncateLink}`"
      >View All</NuxtLink
    >
  </div>
</template>

<script>
export default {
  props: {
    collection: { type: Object },
    columns: { type: Number, default: 3 },
    showDescription: { type: Boolean, default: false },
    truncate: { default: false },
    truncateLink: { type: String, default: '' },
  },
  computed: {
    characters() {
      if (this.truncate) {
        return this.collection.collection.slice(0, this.truncate)
      } else {
        return this.collection.collection
      }
    },
  },
}
</script>

<style>
</style>
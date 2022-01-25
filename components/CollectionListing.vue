<template>
  <div class="col-span-3 md:col-span-2">
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
      {{ collection.collectionTitle }} collection:
    </h3>
    <div v-if="collection.description && showDescription">
      {{ collection.description }}
    </div>
    <div
      :class="`grid grid-cols-2 md:grid-cols-${columns} gap-4 -bottom-4 py-3`"
    >
      <article v-for="character in collection.collection" :key="character._id">
        <NuxtLink class="inline group" :to="`/${character.slug.current}`">
          <img
            :src="$urlFor(character.charImage)"
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
  </div>
</template>

<script>
export default {
  props: {
    collection: { type: Object },
    columns: { type: Number, default: 3 },
    showDescription: { type: Boolean, default: false },
  },
}
</script>

<style>
</style>
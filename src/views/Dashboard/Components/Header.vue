<script setup>
import {ref} from "vue";
import {ArrowRightIcon} from "@heroicons/vue/24/outline/index.js";
import brand_1 from '/src/assets/brand_1.png'
import brand_2 from '/src/assets/brand_2.png'
import brand_3 from '/src/assets/brand_3.png'
import brand_4 from '/src/assets/brand_4.png'

const images = ref([
  brand_1, brand_2,
  brand_3, brand_4,
])
</script>

<template>
  <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-7xl">Discover the world's best short-form
    content</h2>
  <p class="mx-auto mt-2 max-w-xl text-gray-600">
    Hand-selected videos from the finest brands and creators to inspire your organic social strategy.
  </p>
  <div class="mt-6 flex items-center justify-center gap-x-6">
    <button type="button"
            class="inline-flex items-center gap-x-2 rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-125 ease-in-out duration-300 delay-150">
      <ArrowRightIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
      Subscribe
    </button>
  </div>
  <p class="mx-auto max-w-xl text-xs leading-8 text-gray-600 mt-2">
    141 did today
  </p>
  <div class="relative mt-6 mb-6">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300"/>
    </div>
  </div>
  <h2 class="text-center text-lg font-semibold leading-8 text-gray-900 mt-6 mb-6">Trusted by marketers at</h2>
  <div class="grid grid-cols-2 sm:grid-cols-4 place-items-center">
    <img class="h-32 w-32 bg-white text-gray-300 sm:w-32 hover:scale-125 ease-in-out duration-300 delay-150 "
        v-for="image in images" :src="image" :alt="image.alt" />
  </div>
</template>

<style scoped>

</style>

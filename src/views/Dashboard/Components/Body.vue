<script setup>
import {ref} from "vue";
import {ArrowTurnRightUpIcon} from "@heroicons/vue/24/outline/index.js";
import video_1 from "/src/assets/videos/video_1.mp4"
import video_2 from "/src/assets/videos/video_2.mp4"
import video_3 from "/src/assets/videos/video_3.mp4"
import video_4 from "/src/assets/videos/video_4.mp4"
import video_5 from "/src/assets/videos/video_5.mp4"
import video_6 from "/src/assets/videos/video_6.mp4"
import video_7 from "/src/assets/videos/video_7.mp4"
import video_8 from "/src/assets/videos/video_8.mp4"

const navigations = ref([
  {name: 'All', href: '#', current: true},
  {name: 'Funny', href: '#', current: false},
  {name: 'Random', href: '#', current: false},
  {name: 'Science', href: '#', current: false},
  {name: 'Interview', href: '#', current: false},
])

const videos = ref([
  {
    id: 1,
    author: '@austenalexander',
    category: 'funny',
    link: video_1,
  },
  {
    id: 2,
    author: '@carefullypicked',
    category: 'random',
    link: video_2,
  },
  {
    id: 3,
    author: '@gptfund',
    category: 'fund',
    link: video_3,
  },
  {
    id: 4,
    author: '@sunkenblimp',
    category: 'random',
    link: video_4,
  },
  {
    id: 5,
    author: '@scibodytherapy',
    category: 'science',
    link: video_5,
  },
  {
    id: 6,
    author: '@lowertax',
    category: 'fund',
    link: video_6,
  },
  {
    id: 7,
    author: '@gentlyinterviews',
    category: 'interview',
    link: video_7,
  },
  {
    id: 8,
    author: '@genesinewyork',
    category: 'interview',
    link: video_8,
  },
  // More videos...
])

const filteredVideos = ref([...videos.value]);

function filterVideo(name){
  navigations.value.forEach(navigation => {
    navigation.current = navigation.name === name;

  });

  if (name === "All") {
    filteredVideos.value = [...videos.value];
  } else {
    filteredVideos.value = videos.value.filter(
        (video) => video.category.toLowerCase() === name.toLowerCase()
    );
  }
}

</script>

<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
    <div class="overflow-x-auto flex mt-4 space-x-4 border-b py-3">
      <button v-for="navigation in navigations"
              :key="navigation.name"
              :class="navigation.current === true ? 'bg-black text-white' : 'bg-gray-50 text-gray-600'"
              @click="filterVideo(navigation.name)"
            class="inline-flex items-center rounded-full bg-gray-50 px-10 py-2 font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 cursor-pointer">
        {{ navigation.name }}
      </button>
    </div>

    <div class="mx-auto max-w-2xl lg:max-w-7xl ">
      <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <div v-for="video in filteredVideos" :key="video.id" class="group relative">
          <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-0 pt-30 text-white flex items-end">
            <div>
              <div class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transform transition duration-300 ease-in-out">
                <div class="inline-flex items-center font-bold" >
                  <p class="bg-white text-black rounded-full px-4">{{ video.author }}</p>
                  <ArrowTurnRightUpIcon class="ml-0.5 h-7 w-7" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div class="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-500 ">
            <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 opacity-50" />
            <video autoplay muted loop class="object-cover object-center ">
              <source :src="video.link" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<!-- src/components/PortfolioCard.vue -->
<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
  >
    <img
      :src="project.image"
      alt="Project Image"
      class="w-full h-48 object-cover"
      loading="lazy"
    />
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {{ project.title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        {{ project.description }}
      </p>
      <div class="flex justify-between items-center">
        <a
          :href="project.link"
          target="_blank"
          class="text-accent hover:underline flex items-center"
        >
          <ArrowTopRightOnSquareIcon class="h-5 w-5 mr-1" />
          View Project
        </a>
        <a
          :href="project.github"
          target="_blank"
          class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white"
        >
          <GitHubIcon class="h-6 w-6" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import GitHubIcon from "./GitHubIcon.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

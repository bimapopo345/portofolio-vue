<!-- src/components/CertificationCard.vue -->
<template>
  <div
    class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
      {{ certification.title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-400">
      {{ certification.institution }}, {{ certification.location }}
    </p>
    <span class="text-sm text-gray-500 dark:text-gray-400">{{
      certification.date
    }}</span>
    <p class="text-gray-700 dark:text-gray-300 mt-4">
      {{ certification.description }}
    </p>
    <a
      :href="certification.certificateLink"
      target="_blank"
      class="text-accent hover:underline flex items-center mt-2"
    >
      <ArrowTopRightOnSquareIcon class="h-5 w-5 mr-1" />
      View Certificate
    </a>
  </div>
</template>

<script setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

defineProps({
  certification: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

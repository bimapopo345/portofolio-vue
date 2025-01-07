<!-- src/components/ExperienceCard.vue -->
<template>
  <div
    class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:shadow-lg transition-shadow duration-300"
    data-aos="fade-up"
  >
    <h3 class="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
      {{ experience.title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-400">{{ experience.company }}</p>
    <span class="text-sm text-gray-500 dark:text-gray-400">
      {{ experience.date }}
    </span>
    <ul class="list-disc ml-5 mt-4 text-gray-700 dark:text-gray-300">
      <li v-for="(bullet, index) in experience.bullets" :key="index">
        {{ bullet }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

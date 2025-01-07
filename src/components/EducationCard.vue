<!-- src/components/EducationCard.vue -->
<template>
  <div
    class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:shadow-lg transition-shadow duration-300 mt-4"
  >
    <h4 class="text-xl font-semibold text-gray-800 dark:text-white">
      {{ education.university }}
    </h4>
    <p class="text-gray-600 dark:text-gray-400">{{ education.year }}</p>
    <p class="text-gray-700 dark:text-gray-300 mt-2">
      {{ education.degree }}, {{ education.gpa }}
    </p>

    <!-- detail array -->
    <ul class="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
      <li v-for="(detail, idx) in education.details" :key="idx">
        {{ detail }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  education: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

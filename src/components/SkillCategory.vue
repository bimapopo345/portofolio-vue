<!-- src/components/SkillCategory.vue -->
<template>
  <div
    class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:shadow-lg transition-shadow duration-300"
  >
    <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
      {{ skillCategory.title }}
    </h3>
    <ul class="list-disc ml-5 text-gray-700 dark:text-gray-300">
      <li v-for="(skill, index) in skillCategory.skills" :key="index">
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  skillCategory: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

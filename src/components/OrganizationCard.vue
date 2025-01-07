<!-- src/components/OrganizationCard.vue -->
<template>
  <div
    class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:shadow-lg transition-shadow duration-300 mt-4"
  >
    <h4 class="text-xl font-semibold text-gray-800 dark:text-white">
      {{ organization.role }}
    </h4>
    <p class="text-gray-600 dark:text-gray-400">
      {{ organization.orgName }}, {{ organization.location }}
    </p>
    <span class="text-sm text-gray-500 dark:text-gray-400">
      {{ organization.date }}
    </span>

    <ul class="list-disc ml-5 mt-4 text-gray-700 dark:text-gray-300">
      <li v-for="(bullet, idx) in organization.bullets" :key="idx">
        {{ bullet }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  organization: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

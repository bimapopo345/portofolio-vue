<!-- src/components/Footer.vue -->
<template>
  <footer class="bg-gray-800 dark:bg-gray-900 text-white py-6 mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm">
          &copy; 2025 Bima Prawang Saputra. All rights reserved.
        </p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://linkedin.com/in/bimaprawangsaputra"
            target="_blank"
            class="hover:text-accent transition-colors duration-300"
          >
            <LinkedInIcon class="h-6 w-6" />
          </a>
          <a
            href="https://github.com/bimapopo345"
            target="_blank"
            class="hover:text-accent transition-colors duration-300"
          >
            <GitHubIcon class="h-6 w-6" />
          </a>
          <!-- Tambahkan ikon sosial lain jika diperlukan -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LinkedInIcon from "./LinkedInIcon.vue"; // Path harus sesuai dengan struktur proyek Anda
import GitHubIcon from "./GitHubIcon.vue"; // Path harus sesuai dengan struktur proyek Anda
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

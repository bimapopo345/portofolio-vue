<!-- src/views/Home.vue -->
<template>
  <section
    id="home"
    class="bg-cover bg-center h-screen flex items-center justify-center"
    :class="{ 'dark:bg-gray-900': isDark }"
    :style="{ backgroundImage: 'url(/images/hero-bg.jpg)' }"
  >
    <div class="bg-black bg-opacity-60 p-10 rounded-lg text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
        Bima Prawang Saputra
      </h1>
      <p class="text-xl md:text-2xl text-gray-300 mb-6">FULLSTACK DEVELOPER</p>
      <router-link
        to="/portfolio"
        class="bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
      >
        View Portfolio
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

onMounted(() => {
  isDark.value = document.documentElement.classList.contains("dark");
});
</script>

<style scoped>
/* Pastikan gambar hero-bg.jpg ada di folder public/images */
</style>

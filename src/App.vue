<!-- src/App.vue -->
<template>
  <div
    class="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300"
  >
    <Navbar />
    <main class="flex-grow mt-16">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
/* Tambahkan global styles jika diperlukan */
body {
  scroll-behavior: smooth; /* Untuk smooth scroll */
}
</style>

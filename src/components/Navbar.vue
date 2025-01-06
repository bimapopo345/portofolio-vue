<!-- src/components/Navbar.vue -->
<template>
  <nav
    class="fixed top-0 w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md z-50 h-16"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center"
    >
      <div class="flex-shrink-0">
        <router-link to="/" class="text-xl font-bold"
          >Bima Portfolio</router-link
        >
      </div>
      <div class="hidden md:flex space-x-4 items-center">
        <router-link
          to="/"
          class="hover:bg-primary dark:hover:bg-secondary px-3 py-2 rounded-md transition-colors duration-300"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="hover:bg-primary dark:hover:bg-secondary px-3 py-2 rounded-md transition-colors duration-300"
          >About</router-link
        >
        <router-link
          to="/portfolio"
          class="hover:bg-primary dark:hover:bg-secondary px-3 py-2 rounded-md transition-colors duration-300"
          >Portfolio</router-link
        >
        <router-link
          to="/experience"
          class="hover:bg-primary dark:hover:bg-secondary px-3 py-2 rounded-md transition-colors duration-300"
          >Experience</router-link
        >
        <router-link
          to="/certifications"
          class="hover:bg-primary dark:hover:bg-secondary px-3 py-2 rounded-md transition-colors duration-300"
          >Certifications</router-link
        >
        <!-- Toggle Dark Mode -->
        <button @click="toggleDarkMode" class="ml-4 focus:outline-none">
          <svg
            v-if="!isDark"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 
                12.66h-1m15.364-6.364l-.707.707M6.343 
                17.657l-.707.707m12.02-12.02l-.707.707M6.343 
                6.343l-.707.707M12 5a7 7 0 000 14a7 7 0 000-14z"
            />
          </svg>
          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
            />
          </svg>
        </button>
      </div>
      <!-- Mobile Menu Button -->
      <div class="flex items-center md:hidden">
        <button
          @click="isOpen = !isOpen"
          class="text-gray-300 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white focus:outline-none"
        >
          <svg
            v-if="!isOpen"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-gray-700 dark:bg-gray-900">
      <router-link
        to="/"
        class="block px-4 py-2 hover:bg-primary dark:hover:bg-secondary transition-colors duration-300"
        >Home</router-link
      >
      <router-link
        to="/about"
        class="block px-4 py-2 hover:bg-primary dark:hover:bg-secondary transition-colors duration-300"
        >About</router-link
      >
      <router-link
        to="/portfolio"
        class="block px-4 py-2 hover:bg-primary dark:hover:bg-secondary transition-colors duration-300"
        >Portfolio</router-link
      >
      <router-link
        to="/experience"
        class="block px-4 py-2 hover:bg-primary dark:hover:bg-secondary transition-colors duration-300"
        >Experience</router-link
      >
      <router-link
        to="/certifications"
        class="block px-4 py-2 hover:bg-primary dark:hover:bg-secondary transition-colors duration-300"
        >Certifications</router-link
      >
      <!-- Toggle Dark Mode di Mobile -->
      <button
        @click="toggleDarkMode"
        class="mt-4 w-full flex justify-center items-center"
      >
        <span class="mr-2">{{ isDark ? "Light Mode" : "Dark Mode" }}</span>
        <svg
          v-if="!isDark"
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 
              12.66h-1m15.364-6.364l-.707.707M6.343 
              17.657l-.707.707m12.02-12.02l-.707.707M6.343 
              6.343l-.707.707M12 5a7 7 0 000 14a7 7 0 000-14z"
          />
        </svg>
        <svg
          v-else
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

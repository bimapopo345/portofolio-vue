<!-- src/views/Portfolio.vue -->
<template>
  <section
    id="portfolio"
    class="py-12 bg-white dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
      >
        My Portfolio
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <PortfolioCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import PortfolioCard from "../components/PortfolioCard.vue";
import { ref } from "vue";

const projects = ref([
  {
    id: 1,
    title: "ZenithCare - Comprehensive Health Monitoring App",
    description:
      "Developed a mobile application for comprehensive health monitoring, including BMI calculator, mental health assessments, and emergency services locator. Utilized Kotlin for backend development and Figma for UI/UX design. Integrated Sirkemkes API for emergency services and implemented data visualization features.",
    image: "/images/zenithcare.jpg",
    link: "https://zenithcare.app",
    github: "https://github.com/bimaprawangsaputra/zenithcare",
  },
  {
    id: 2,
    title: "Harisenin.com - Food Company Website",
    description:
      "Designed and developed a website for a food company using React.js and Bootstrap within two months. Final Project: Successfully completed the “Staycation Yuk Website” under the guidance of instructor Avip Syaifulloh.",
    image: "/images/harisenin.jpg",
    link: "https://harisenin.com",
    github: "https://github.com/bimaprawangsaputra/harisenin",
  },
  {
    id: 3,
    title: "Dynamic Web Application for Local Business",
    description:
      "Developed a dynamic web application for a local business, utilizing React.js and Node.js to enhance user interaction and backend efficiency.",
    image: "/images/project.jpg",
    link: "#",
    github: "#",
  },
  // Tambahkan proyek lain sesuai kebutuhan
]);
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

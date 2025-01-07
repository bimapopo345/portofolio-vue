<!-- src/views/Experience.vue -->
<template>
  <section
    id="experience"
    class="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
      >
        Work Experiences
      </h2>

      <div class="space-y-8">
        <!-- Looping semua experience -->
        <ExperienceCard
          v-for="(exp, index) in experiences"
          :key="index"
          :experience="exp"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ExperienceCard from "@/components/ExperienceCard.vue";

const experiences = ref([
  {
    title: "Assistant Lecturer | Routing & Switching Technology",
    company: "Institut Pertanian Bogor (IPB), Bogor, West Java, Indonesia",
    date: "Aug, 2024 - Present · 6 months",
    bullets: [
      "Assist in delivering lectures and practical sessions on Routing & Switching.",
      "Instruct students in configuring Cisco devices, including Routers and Switches.",
      "Guide students in using Cisco Packet Tracer and IOS for network simulations.",
      "Support students in troubleshooting and resolving network issues.",
      "Collaborate with lead lecturer to evaluate student performance and develop instructional materials.",
    ],
  },
  // Jika ada pengalaman lain, tambahkan di sini
]);
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

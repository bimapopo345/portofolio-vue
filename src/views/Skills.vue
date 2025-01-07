<!-- src/views/Skills.vue -->
<template>
  <section
    id="skills"
    class="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
      >
        Skills
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Looping per kategori -->
        <SkillCategory
          v-for="(category, idx) in skillCategories"
          :key="idx"
          :skillCategory="category"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import SkillCategory from "@/components/SkillCategory.vue";

const skillCategories = ref([
  {
    title: "Technical Skills",
    skills: [
      "HTML, CSS, JavaScript",
      "Tailwind CSS, Bootstrap",
      "React.js, Next.js, Node.js",
      "PHP, Laravel, CodeIgniter",
      "PostgreSQL, MySQL, MongoDB",
      "Python, Golang",
      "GIT, Figma",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem Solving",
      "Time Management",
      "Orientation to Detail",
      "Analytical Thinking",
      "Teamwork",
    ],
  },
  {
    title: "Languages",
    skills: [
      "Indonesian (Native)",
      "English (Intermediate)",
      "Japanese (Beginner)",
    ],
  },
  // Tambahkan kategori lain jika perlu
]);
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

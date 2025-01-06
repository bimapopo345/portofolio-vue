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
        <!-- Technical Skills -->
        <div
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:shadow-lg transition-shadow duration-300"
        >
          <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Technical Skills
          </h3>
          <ul class="list-disc ml-5 text-gray-700 dark:text-gray-300">
            <li>HTML, CSS, JavaScript</li>
            <li>Tailwind CSS, Bootstrap</li>
            <li>React.js, Next.js, Node.js</li>
            <li>PHP, Laravel, CodeIgniter</li>
            <li>PostgreSQL, MySQL, MongoDB</li>
            <li>Python, Golang</li>
            <li>GIT, Figma</li>
          </ul>
        </div>
        <!-- Soft Skills -->
        <div
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:shadow-lg transition-shadow duration-300"
        >
          <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Soft Skills
          </h3>
          <ul class="list-disc ml-5 text-gray-700 dark:text-gray-300">
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Orientation to Detail</li>
            <li>Analytical Thinking</li>
            <li>Teamwork</li>
          </ul>
        </div>
        <!-- Languages -->
        <div
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:shadow-lg transition-shadow duration-300"
        >
          <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Languages
          </h3>
          <ul class="list-disc ml-5 text-gray-700 dark:text-gray-300">
            <li>Indonesian (Native)</li>
            <li>English (Intermediate)</li>
            <li>Japanese (Beginner)</li>
          </ul>
        </div>
        <!-- Add more skill categories if needed -->
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

<!-- src/views/About.vue -->
<template>
  <section
    id="about"
    class="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
      >
        About Me
      </h2>
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/3">
          <img
            src="/images/profile.jpg"
            alt="Bima Prawang Saputra"
            class="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div class="md:w-2/3 md:pl-12 mt-8 md:mt-0">
          <p class="text-lg mb-4 text-gray-700 dark:text-gray-300">
            I am a sixth-semester Computer Engineering student at the College of
            Vocational Studies, IPB University with a GPA of 3.89/4.00 (Cum
            Laude). I have experience as a Full-Stack Web Developer, skilled in
            various technologies including HTML, CSS, Tailwind, Bootstrap,
            JavaScript, AJAX, SASS, PHP, Laravel, CodeIgniter, React.js,
            Next.js, Node.js, and RESTful API.
          </p>
          <p class="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Currently, I am participating in a Full-Stack Web Developer bootcamp
            program to deepen my web development skills. I am a detail-oriented
            individual who is eager to secure a full-time opportunity as a
            Full-Stack Web Developer.
          </p>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Additionally, I am active in various organizations and have
            participated in numerous trainings and obtained certifications in QA
            Engineering, DevOps Engineering, Cloud Computing, and more.
          </p>
          <!-- Pendidikan -->
          <div class="mt-6">
            <h3
              class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white"
            >
              Education
            </h3>
            <div
              class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:shadow-lg transition-shadow duration-300"
            >
              <h4 class="text-xl font-semibold text-gray-800 dark:text-white">
                IPB University - Bogor, Indonesia
              </h4>
              <p class="text-gray-600 dark:text-gray-400">2022 - 2026</p>
              <p class="text-gray-700 dark:text-gray-300 mt-2">
                Bachelor Degree of Computer Engineering, 3.89/4.00 (Cum Laude)
              </p>
              <p class="text-gray-700 dark:text-gray-300 mt-2">
                Relevant Coursework: Database Management, Web Development,
                System Architecture, HTML, JavaScript.
              </p>
              <p class="text-gray-700 dark:text-gray-300 mt-2">
                Thesis: A Sustainable Project-based Learning Methodology for Web
                Programming.
              </p>
              <p class="text-gray-700 dark:text-gray-300 mt-2">
                Additional Project: Developed a dynamic web application for a
                local business, utilizing React.js and Node.js to enhance user
                interaction and backend efficiency.
              </p>
            </div>
          </div>
          <!-- Organization Experiences -->
          <div class="mt-6">
            <h3
              class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white"
            >
              Organization Experiences
            </h3>
            <div
              class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:shadow-lg transition-shadow duration-300"
            >
              <h4 class="text-xl font-semibold text-gray-800 dark:text-white">
                Member | Himavo Micro IT
              </h4>
              <p class="text-gray-600 dark:text-gray-400">
                Himpunan Mahasiswa Vokasi Sekolah Vokasi IPB, Bogor, Indonesia
              </p>
              <span class="text-sm text-gray-500 dark:text-gray-400"
                >Jan, 2023 - Present · 23 months</span
              >
              <ul class="list-disc ml-5 mt-4 text-gray-700 dark:text-gray-300">
                <li>
                  Participate actively in the student association comprising
                  three study programs: Communication, Informatics Management,
                  and Computer Engineering.
                </li>
                <li>
                  Contribute to organizing workshops, seminars, and technical
                  training sessions to enhance members' skills and knowledge.
                </li>
                <li>
                  Collaborate with team members to plan and execute initiatives
                  that support the academic and professional development of the
                  student body.
                </li>
                <li>
                  Engage in community outreach programs to promote technology
                  and innovation within the local community.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

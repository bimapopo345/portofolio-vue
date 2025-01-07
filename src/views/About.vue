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
        <!-- Bagian foto -->
        <div class="md:w-1/3">
          <img
            src="/images/profile.jpg"
            alt="Bima Prawang Saputra"
            class="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <!-- Bagian deskripsi -->
        <div class="md:w-2/3 md:pl-12 mt-8 md:mt-0">
          <!-- Paragraf 'about me' -->
          <p
            v-for="(par, idx) in aboutParagraphs"
            :key="idx"
            class="text-lg mb-4 text-gray-700 dark:text-gray-300"
          >
            {{ par }}
          </p>

          <!-- Education -->
          <div class="mt-6">
            <h3
              class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white"
            >
              Education
            </h3>
            <EducationCard
              v-for="(edu, idx) in educations"
              :key="idx"
              :education="edu"
            />
          </div>

          <!-- Organization Experiences -->
          <div class="mt-6">
            <h3
              class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white"
            >
              Organization Experiences
            </h3>
            <OrganizationCard
              v-for="(org, idx) in organizations"
              :key="idx"
              :organization="org"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import EducationCard from "@/components/EducationCard.vue";
import OrganizationCard from "@/components/OrganizationCard.vue";

// Contoh paragraf 'About Me'
const aboutParagraphs = ref([
  `I am a sixth-semester Computer Engineering student at the College of Vocational Studies, IPB University with a GPA of 3.89/4.00 (Cum Laude). I have experience as a Full-Stack Web Developer, skilled in various technologies including HTML, CSS, Tailwind, Bootstrap, JavaScript, AJAX, SASS, PHP, Laravel, CodeIgniter, React.js, Next.js, Node.js, and RESTful API.`,
  `Currently, I am participating in a Full-Stack Web Developer bootcamp program to deepen my web development skills. I am a detail-oriented individual who is eager to secure a full-time opportunity as a Full-Stack Web Developer.`,
  `Additionally, I am active in various organizations and have participated in numerous trainings and obtained certifications in QA Engineering, DevOps Engineering, Cloud Computing, and more.`,
]);

const educations = ref([
  {
    university: "IPB University - Bogor, Indonesia",
    year: "2022 - 2026",
    gpa: "3.89/4.00 (Cum Laude)",
    degree: "Bachelor Degree of Computer Engineering",
    details: [
      "Relevant Coursework: Database Management, Web Development, System Architecture, HTML, JavaScript.",
      "Thesis: A Sustainable Project-based Learning Methodology for Web Programming.",
      "Additional Project: Developed a dynamic web application for a local business, utilizing React.js and Node.js to enhance user interaction and backend efficiency.",
    ],
  },
]);

const organizations = ref([
  {
    role: "Member | Himavo Micro IT",
    orgName: "Himpunan Mahasiswa Vokasi Sekolah Vokasi IPB",
    location: "Bogor, Indonesia",
    date: "Jan, 2023 - Present · 23 months",
    bullets: [
      "Participate actively in the student association comprising three study programs: Communication, Informatics Management, and Computer Engineering.",
      "Contribute to organizing workshops, seminars, and technical training sessions to enhance members' skills and knowledge.",
      "Collaborate with team members to plan and execute initiatives that support the academic and professional development of the student body.",
      "Engage in community outreach programs to promote technology and innovation within the local community.",
    ],
  },
]);
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

<!-- src/views/Certifications.vue -->
<template>
  <section
    id="certifications"
    class="py-12 bg-white dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
      >
        Courses, Training and Certifications
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <CertificationCard
          v-for="cert in certifications"
          :key="cert.id"
          :certification="cert"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CertificationCard from "../components/CertificationCard.vue";
import { ref } from "vue";

const certifications = ref([
  {
    id: 1,
    title: "Mini Bootcamp: QA Engineer",
    institution: "Digital Skola",
    location: "Bogor, Indonesia",
    date: "September, 2024",
    description:
      "Completed an intensive QA Bootcamp focusing on Quality Assurance Fundamentals, Testing & Bug Management, Programming Fundamentals and Advanced Programming, GIT, API Testing and Automation, Load Testing, Web UI Automation, and project implementation. Graduated with an “Excellent” rating and a final score of 93.7.",
    certificateLink:
      "https://drive.google.com/drive/folders/1zaGQXiSgh2M2qPdUw8_bMp4wjJoqiz-a?hl=id",
  },
  {
    id: 2,
    title: "Mini Bootcamp: DevOps Engineer",
    institution: "Digital Skola",
    location: "Bogor, Indonesia",
    date: "September, 2024",
    description:
      "Completed a comprehensive DevOps Bootcamp focusing on Linux/Unix Administration, Docker, Kubernetes, CI/CD with Jenkins, Bash Scripting, Git & GitHub, Networking Fundamentals, and Ansible. Graduated with an “Excellent” rating and a final score of 98.3.",
    certificateLink:
      "https://s3-bucket-public.sgp1.digitaloceanspaces.com/certificates/MB/DOE/003-MB-CPN-DOE-IX-2024.png",
  },
  {
    id: 3,
    title: "Full Stack Programming Training",
    institution: "Alkademi",
    location: "Bogor, Indonesia",
    date: "March, 2024",
    description:
      "Completed an intensive training on full stack development with Jabar Digital Academy, Alkademi, and AWS InCommunities.",
    certificateLink: "https://sidebar.jabarprov.go.id/v/B820BC3DAC",
  },
  {
    id: 4,
    title: "Cloud (Talent Scouting Academy)",
    institution: "Digital Talent Scholarship",
    location: "Bogor, Indonesia",
    date: "March, 2024",
    description:
      "Completed AWS Cloud Engineer training under the Talent Scouting Academy Digital Talent Scholarship 2024 by Pusbang Proserti.",
    certificateLink:
      "https://s3-bucket-public.sgp1.digitaloceanspaces.com/certificates/MB/DOE/003-MB-CPN-DOE-IX-2024.png",
  },
  {
    id: 5,
    title: "Backend Developer",
    institution: "SMKDEV",
    location: "Bogor, Indonesia",
    date: "December, 2023",
    description:
      "Completed an intensive backend development course focusing on Golang through SMKDEV Bootcamp Scholarship. Gained hands-on experience and advanced programming skills in Go (Programming Language) and Back-End Web Development.",
    certificateLink:
      "https://drive.google.com/drive/folders/1C2snLuYudPFXVhq0YRBn9rlEp2Djfyjn?hl=id",
  },
  {
    id: 6,
    title: "Certified Ethical Hacker & IT Countermeasures Specialist",
    institution: "Course-Net Indonesia",
    location: "Bogor, Indonesia",
    date: "October, 2023",
    description:
      "Completed a 15-hour training in Ethical Hacking and IT Countermeasures from Course-Net, accredited by Prakerja. Acquired advanced skills for Cyber Security, Pentesting, and White Hat Hacking, with a focus on critical SOC competencies as per SKKNI No. 391 of 2020.",
    certificateLink:
      "https://drive.google.com/drive/folders/1Fo9WOU5T87Zcaw2paHmF-TbkWVmHZy3z?hl=id",
  },
  {
    id: 7,
    title: "Top Participant Award - Quality Assurance Class Batch 10",
    institution: "Talenthub Indonesia",
    location: "Bogor, Indonesia",
    date: "October, 2023",
    description:
      "Certified Top Participant in Quality Assurance Class - Talent Class Batch 10 by Talenthub, Ministry of Manpower of the Republic of Indonesia. Excelled in Quality Assurance, Testing, Software Quality Assurance, Postman API, Software Development Life Cycle (SDLC), Scrum, Agile Methodologies, and Report Writing.",
    certificateLink:
      "https://drive.google.com/drive/folders/1IBXQZ-NIeQnazxUq00GWW-rtYYnc4uur?hl=id",
  },
  {
    id: 8,
    title: "Quality Assurance Automation",
    institution: "SanberCode",
    location: "Bogor, Indonesia",
    date: "October, 2023",
    description:
      "Successfully completed a comprehensive Quality Assurance Automation course with Sanbercode, enhancing skills in test automation, API testing, and more.",
    certificateLink:
      "https://sanbercode.com/certificate/em/de734b23-cc42-4e64-b997-cabf84ad98fe",
  },
  {
    id: 9,
    title: "Web Pentest & Bug Bounty",
    institution: "SanberCode",
    location: "Bogor, Indonesia",
    date: "October, 2023",
    description:
      "Successfully completed an intensive Web Pentest & Bug Bounty program at Sanbercode, mastering advanced cybersecurity techniques and tools.",
    certificateLink:
      "https://sanbercode.com/certificate/in/1ad0d0ff-fa4d-4ad9-a243-ab3e15443789",
  },
  {
    id: 10,
    title: "Python Data Science Top Performer Award",
    institution: "SanberCode",
    location: "Bogor, Indonesia",
    date: "September, 2023",
    description:
      "Recipient of the Python Data Science Excellence Award as the top graduate of SanberCode's intensive Data Science Bootcamp. Demonstrated superior mastery in Python and data analysis, including data manipulation with Pandas, machine learning with Scikit-Learn, and data visualization using Matplotlib and Seaborn. Excelled in model performance evaluation, exploratory data analysis, and advanced data transformation techniques.",
    certificateLink:
      "https://sanbercode.com/certificate/in/c71e8955-f2ea-45cd-8218-9583b51e212a",
  },
  {
    id: 11,
    title: "Quality Assurance Engineer",
    institution: "PINTAR",
    location: "Bogor, Indonesia",
    date: "September, 2023",
    description:
      "Successfully completed an intensive 113-day online Quality Assurance course, certified by Certificate Organizing Body, and verified by Pintar and Prakerja. Enhanced ability to implement and evaluate robust software testing protocols, ensuring the highest quality in software development.",
    certificateLink:
      "https://drive.google.com/drive/folders/1iffWjlnh81VXoROLYgeDbfmemTVcGdZZ?hl=id",
  },
  {
    id: 12,
    title: "Front End Developer",
    institution: "Harisenin.com",
    location: "Bogor, Indonesia",
    date: "Februari, 2023",
    description:
      "Received a Certificate of Excellence in Front End Developer, honing my skills in HTML, CSS, JavaScript, Git, GitHub, and React JS. Successfully completed the “Staycation Yuk Website” project under the guidance of instructor Avip Syaifulloh. Credential ID: HSPC/FE/001/20240225009.",
    certificateLink:
      "https://drive.google.com/drive/folders/1MQF9nG9orzrz1KRm0Ac2Vb2RyzIxlUga?hl=id",
  },
  // Tambahkan sertifikasi lain sesuai kebutuhan
]);
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

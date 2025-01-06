<!-- src/views/Contact.vue -->
<template>
  <section
    id="contact"
    class="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
      >
        Contact Me
      </h2>
      <form
        @submit.prevent="handleSubmit"
        class="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            for="name"
          >
            Name
          </label>
          <input
            v-model="form.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            v-model="form.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            for="message"
          >
            Message
          </label>
          <textarea
            v-model="form.message"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 transform hover:scale-105"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
      <p v-if="submitted" class="text-green-500 text-center">
        Thank you for your message!
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitted = ref(false);

const handleSubmit = () => {
  // Anda bisa menghubungkan ini dengan backend atau layanan email
  console.log(form.value);
  submitted.value = true;
  // Reset form setelah submit
  form.value = { name: "", email: "", message: "" };
};
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>

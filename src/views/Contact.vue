<template>
  <div class="container w-1/2 mx-auto  p-8  bg-gray-100 rounded-md shadow-md">
    <h2 class="text-4xl font-semibold mb-4 text-center font-m my-4">Contact</h2>
    <form action="#" method="post">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-600">Your Name</label>
          <input type="text" id="name" name="name"
                 class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-600">Your Email</label>
          <input type="email" id="email" name="email"
                 class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500">
        </div>
      </div>
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-600">Your Message</label>
        <textarea id="message" name="message" rows="4"
                  class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"></textarea>
      </div>
      <button type="submit"
              class="mt-6 bg-gray-500 hover:bg-gray-300 hover:text-gray-800  transition duration-200 text-white py-2 px-4 rounded-md">
        Send Message
      </button>
    </form>


  </div>
  <div class="text-center flex justify-center space-x-2 mt-4">
    <div class="inline-flex space-x-8">
      <!-- <span class="text-center flex mt-4 justify-center">+989124431480</span> -->
      <!-- <p class="text-gray-400 text-xl">“</p> -->
      <a href="#" class="text-gray-400 hover:text-gray-500"
      ><i class="fab fa-facebook-f"></i
      ></a>
      <a href="#" class="text-gray-400 hover:text-gray-500"
      ><i class="fab fa-twitter"></i
      ></a>
      <a href="#" class="text-gray-400 hover:text-gray-500"
      ><i class="fab fa-instagram"></i
      ></a>
      <!-- Add more social media icons as needed -->
      <!-- <p class="text-gray-400 text-xl">“</p> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
  components: {},
};
</script>
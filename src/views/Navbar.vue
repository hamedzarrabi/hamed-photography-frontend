<template>
  <div class="bg-gray-200">
    <nav class="p-4 container mx-auto">
      <div class="flex items-center justify-center mt-2">
        <!-- Navigation Links (Large Screens) -->
        <div class="hidden lg:flex space-x-4">
          <router-link class="font-m text-xl hover:text-gray-500" to="/"
            >Home</router-link
          >
          <router-link class="font-m text-xl hover:text-gray-500" to="/gallery"
            >Gallery</router-link
          >
        </div>

        <!-- Centered Text -->
        <router-link
          to="/"
          class="font-logo text-6xl flex text-center mx-16 hover:text-gray-400"
          >Hamed Zarrabi</router-link
        >

        <!-- Navigation Links (Large Screens) -->
        <div class="hidden lg:flex space-x-4">
          <router-link class="font-m text-xl hover:text-gray-500" to="/contact"
            >Contact</router-link
          >
          <router-link class="font-m text-xl hover:text-gray-500" to="/about"
            >About</router-link
          >
        </div>

        <!-- Responsive Navigation Menu (Mobile) -->
        <div class="lg:hidden flex items-center">
          <button
            @click="toggleMobileMenu"
            class=" hover:text-gray-300 focus:outline-none focus:text-gray-800"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          <!-- Responsive Navigation Links (Mobile) -->
          <div v-if="isMobileMenuOpen" class="lg:hidden space-y-2">
            <router-link
              @click="toggleMobileMenu"
              class="block px-4 py-2 "
              to="/"
            >
              Home
            </router-link>
            <router-link
              @click="toggleMobileMenu"
              class="block px-4 py-2 "
              to="/gallery"
            >
              Gallery
            </router-link>
            <router-link
              @click="toggleMobileMenu"
              class="block px-4 py-2 "
              to="/contact"
            >
              Contact
            </router-link>
            <router-link
              @click="toggleMobileMenu"
              class="block px-4 py-2"
              to="/about"
            >
              About
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
    
    <script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>
    
    <style scoped>
/* Add custom styles if needed */
</style>
    
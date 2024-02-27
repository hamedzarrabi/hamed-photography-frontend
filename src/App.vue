<template>
<div class="">
  <navbar/>
  <router-view/>
</div>
</template>

<script>
import Navbar from '@/views/Navbar.vue';

export default {
  components: {Navbar},
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

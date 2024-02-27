<script setup>

</script>

<template>
  <div class="container mx-auto p-4  bg-gray-00">

    <h1 class="text-3xl font-semibold mb-6 font-ab">Photo Gallery</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">

      <!-- Sample Image 1 -->
      <div class="overflow-hidden rounded-lg shadow-lg">
        <img class="w-full" src="@/../public/images/colton-sturgeon-C2uzaHcTRBU-unsplash.jpg" alt="Image 1">
        <div class="px-6 py-4">
          <p class="font-bold text-xl mb-2">Photo Title 1</p>
          <p class="text-gray-700 text-base">Description for photo 1.</p>
        </div>
      </div>

      <!-- Sample Image 2 -->
      <div class="overflow-hidden rounded-lg shadow-lg">
        <img class="w-full" src="../../public/images/neom-33g2yfhLBLU-unsplash.jpg" alt="Image 2">
        <div class="px-6 py-4">
          <p class="font-bold text-xl mb-2">Photo Title 2</p>
          <p class="text-gray-700 text-base">Description for photo 2.</p>
        </div>
      </div>

      <!-- Add more images as needed -->

    </div>

  </div>
</template>

<style scoped>

</style>
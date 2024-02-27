<template>
  <div
    class="p-16 container mx-auto  grid grid-cols-2 bg-gray-500 rounded overflow-hidden"
  >
    <div class="flex ml-auto"></div>
    <div class="flex relative ml-auto">
      <img
        src="@/../public/images/colton-sturgeon-C2uzaHcTRBU-unsplash.jpg"
        class="w-[500px] h-[720px]"
        alt="shoes"
      />
      <img
        class="absolute -inset-x-[1050px]"
        src="@/../public/images/frame.png"
      />
      <p
        class="font-h text-gray-100 text-6xl items-center absolute inset-y-[340px] -inset-x-[250px]"
      >
        Hamed Zarrabi
      </p>
      <p
        class="text-xl font-extralight indent-8 absolute inset-y-[420px] -inset-x-[250px] text-gray-100"
      >
        "Where moments become art in frames, <br />
        and time transforms into our most cherished tales.<br />
        In every day and every moment, photos weave a story, narrating the
        hidden<br />
        beauties and unparalleled moments."
      </p>
    </div>
    <div class="text-center flex justify-center space-x-2">
      <div class="inline-flex space-x-8">
        <!-- <p class="text-gray-400 text-xl">“</p> -->
        <a href="#" class="text-gray-200 hover:text-gray-400"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a href="#" class="text-gray-200 hover:text-gray-400"
          ><i class="fab fa-twitter"></i
        ></a>
        <a href="#" class="text-gray-200 hover:text-gray-400"
          ><i class="fab fa-instagram"></i
        ></a>
        <!-- Add more social media icons as needed -->
        <!-- <p class="text-gray-400 text-xl">“</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>


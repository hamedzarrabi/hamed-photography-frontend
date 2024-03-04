<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full bg-gray-500 p-8 rounded shadow-md">
      <h2 class="text-4xl mb-8 text-gray-800 text-center font-m">Add Photo</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="title" class="block text-gray-100 text-sm font-bold font-ab mb-2">Title:</label>
          <input v-model="img.title" type="text" id="title" name="title"
                 class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
        </div>
        <div class="mb-4">
          <label for="description" class="block text-gray-100 text-sm font-ab font-bold mb-2">Description:</label>
          <textarea v-model="img.description" id="description" name="description" rows="4"
                    class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none"
                    required></textarea>
        </div>
        <div class="mb-4">
          <label for="image" class="block text-gray-100 text-sm font-ab font-bold mb-2">Image:</label>
          <input @change="handleImageChange" type="file" id="image" name="image"
                 class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" accept="image/*"
                 required>
        </div>
        <div class="flex items-center justify-center">
          <img v-if="img.image" :src="imagePreview" alt="Selected Image" class="mb-4 rounded-lg max-h-40 object-cover">
        </div>
        <button type="submit"
                class="w-full bg-gray-300 px-4 py-2 transition duration-200 rounded-md hover:bg-gray-400 mt-8 focus:outline-none focus:bg-gray-300">
          Add Photo
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import {useToast} from "vue-toastification";
import {photo_service} from "@/service/photo-service";

export default {
  data() {
    return {

      img: {
        title: '',
        description: '',
        image: null,
      }



    };
  },
  computed: {
    imagePreview() {
      return this.img.image ? URL.createObjectURL(this.image) : null;
    },
  },
  methods: {
    async submitForm() {
      const toast = useToast();
      // Implement your logic to handle the form submission
      console.log('Title:', this.img.title);
      console.log('Description:', this.img.description);
      console.log('Image:', this.img.image);

      const formData = new FormData();
      formData.append("title", this.img.title);
      formData.append("description", this.img.description);
      formData.append("image", this.img.image);

      let photo = photo_service.createPhoto(formData);
      await photo;

      try {
        if (photo) {
          toast.success("Successfully add picture.")
        } else {
          toast.error("Unsuccessfully upload picture.")
        }
      } catch (e) {
        toast.error("error picture upload.")
      }

      // Reset the form after submission if needed
      this.title = '';
      this.description = '';
      this.image = null;
    },
    handleImageChange(event) {
      this.image = event.target.files[0];
    },
  },
};
</script>

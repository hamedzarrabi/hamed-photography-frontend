<template>
  <div class="min-h-screen flex items-center justify-center">

    <div class="max-w-md w-full bg-gray-500  p-8 rounded  shadow">
      <h2 class="text-4xl font-m mb-8 text-gray-800 text-center">Login</h2>
      <form @submit.prevent="login" action="">
        <div class="mb-4">
          <label for="username" class="block text-gray-100  text-sm font-bold font-ab mb-2">Username:</label>
          <input v-model="signIn.email" type="text" id="username" name="username"
                 class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-500" required>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-100  text-sm font-ab font-bold mb-2">Password:</label>
          <input v-model="signIn.password" type="password" id="password" name="password"
                 class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-gray-500" required>
        </div>
        <button type="submit"
                class="w-full mt-8 bg-gray-300 text-black transition duration-200 hover:text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          Login
        </button>
      </form>

      <div class="text-center flex justify-center space-x-2 mt-4">
        <div class="inline-flex space-x-8">
          <!-- <span class="text-center flex mt-4 justify-center">+989124431480</span> -->
          <!-- <p class="text-gray-400 text-xl">“</p> -->
          <a href="#" class="text-gray-100 hover:text-gray-300"
          ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="#" class="text-gray-100 hover:text-gray-300"
          ><i class="fab fa-twitter"></i
          ></a>
          <a href="#" class="text-gray-100 hover:text-gray-300"
          ><i class="fab fa-instagram"></i
          ></a>
          <!-- Add more social media icons as needed -->
          <!-- <p class="text-gray-400 text-xl">“</p> -->
        </div>
      </div>

    </div>

  </div>

</template>

<script>
import {POSITION, useToast} from "vue-toastification";
import {mapActions, mapState} from "vuex";
import {user_service as UserService, user_service} from "@/service/user-service";


export default {
  name: "SignupLogin",
  components: {

  },
  data() {
    return {
      change: false,

      // Login
      signIn: {
        email: "",
        password: "",
      },

      //   Register
      register: {
        name: '',
        phoneNumber: Number,
        email: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapActions(['loginUser', 'setIsLoggedIn']),
    ...mapState(['isLoggedIn']),

    switchLoginRegister() {
      this.change = !this.change;
    },

    async login() {
      const toast = useToast();
      const success = await this.loginUser(this.signIn);

      if (success) {
        console.log('Successfully Login.');
        toast.success("Successfully Login.");
        this.setIsLoggedIn(true);
        console.log(localStorage.getItem('token'))
        return this.$router.push("/");

      } else {
        toast.error("Login Failed!");
        console.log('Unsuccessfully');
        return this.$router.push("/login");
      }
    },


    async registerUser(values) {
      // console.log(JSON.stringify(values, null, 2));

      const toast = useToast();

      try {
        const register = UserService.register(values);
        if (register) {
          toast.success("Register is Successfully!");
          return this.$router.push("/");
        } else  {
          toast.error("Register is failed!");
          return this.$router.push("/login");
        }
      } catch (error) {
        toast.error("This email has already been registered!");
        console.log(error);
      }
    },


    // VALIDATION FORM
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    },

    validateName(value) {
      if (!value) {
        return 'This field is required';
      }
      const min = 5;
      if (value.length < min) {
        return 'This field must be bigger 5 character';
      }
      return true;
    },

    validatePhone(value) {
      if (!value) {
        return 'This field is required';
      }
      const min = 11;
      const max = 15;
      if (value.length > max || value.length < min) {
        return 'This field must be between 11 and 15 number';
      }
      return true;
    },
    validatePassword(value) {
      if (!value) {
        return 'This field is required';
      }
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid password';
      }
      return true;
    },
    validateLogin(value) {
      if (!value) {
        return 'This field is required';
      }
      return true;
    }

  },
  computed: {}

};
</script>

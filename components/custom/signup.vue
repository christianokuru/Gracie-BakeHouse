<script setup>
import { reactive } from "vue";

const formData = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

const errors = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

const validateForm = () => {
  let isValid = true;

  // Clear previous errors
  errors.email = "";
  errors.password = "";
  errors.confirmPassword = "";

  // Email Validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!formData.email) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(formData.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  // Password Validation
  if (!formData.password) {
    errors.password = "Password is required";
    isValid = false;
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
    isValid = false;
  }

  // Confirm Password Validation
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
    isValid = false;
  }

  return isValid;
};

const onSubmit = async (event) => {
  event.preventDefault();

  if (validateForm()) {
    console.log("Form submitted:", formData);

    // Send form data to backend
    try {
      const response = await $fetch("/api/users/signup", {
        method: "POST",
        body: formData,
      });
      if (response.success) {
        // Handle success (redirect to login page, show message, etc.)
        console.log("User created successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    console.log("Form has errors");
  }
};
</script>

<template>
  <h1 class="text-3xl font-poppings text-[#391603] font-poppins text-center my-7">Create an Account</h1>
  <form @submit="onSubmit" class="space-y-6">
    <!-- Email Field -->
    <div class="form-item">
      <label for="email" class="text-[#391603]">Email</label>
      <input
        v-model="formData.email"
        type="email"
        id="email"
        placeholder="youremail@gmail.com"
        class="w-full p-2 border rounded-md"
      />
      <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
    </div>

    <!-- Password Field -->
    <div class="form-item">
      <label for="password" class="text-[#391603]">Password</label>
      <input
        v-model="formData.password"
        type="password"
        id="password"
        placeholder="**********"
        class="w-full p-2 border rounded-md"
      />
      <p v-if="errors.password" class="text-red-500 text-sm">
        {{ errors.password }}
      </p>
    </div>

    <!-- Confirm Password Field -->
    <div class="form-item">
      <label for="confirmPassword" class="text-[#391603]"
        >Confirm Password</label
      >
      <input
        v-model="formData.confirmPassword"
        type="password"
        id="confirmPassword"
        placeholder="**********"
        class="w-full p-2 border rounded-md"
      />
      <p v-if="errors.confirmPassword" class="text-red-500 text-sm">
        {{ errors.confirmPassword }}
      </p>
    </div>

    <button
      type="submit"
      class="w-full bg-[#391603] text-white py-2 rounded-md"
    >
      Sign Up
    </button>
  </form>
</template>

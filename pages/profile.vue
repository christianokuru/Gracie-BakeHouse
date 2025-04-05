<script setup>
import { reactive } from 'vue'
import heroImag from '@/public/images/cakes/1.jpg'

const formData = reactive({
  email: '',
  password: ''
})

const errors = reactive({
  email: '',
  password: ''
})

const validateForm = () => {
  let isValid = true

  // Clear previous errors
  errors.email = ''
  errors.password = ''

  // Email Validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  if (!formData.email) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!emailPattern.test(formData.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  // Password Validation
  if (!formData.password) {
    errors.password = 'Password is required'
    isValid = false
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long'
    isValid = false
  }

  return isValid
}

const onSubmit = (event) => {
  event.preventDefault()

  if (validateForm()) {
    console.log('Form submitted:', formData)

    // You can proceed with your backend API submission here
    // Example: axios.post('/api/login', formData)
  } else {
    console.log('Form has errors')
  }
}
</script>

<template>
  <div class="flex h-screen">
    <!-- Left Side Image -->
    <div class="w-1/2">
      <img :src="heroImag" alt="Hero Cake" class="w-full h-full object-cover rounded-l-xl" />
    </div>

    <!-- Right Side Form -->
    <div class="w-1/2 flex justify-center items-center bg-white p-8">
      <div class="w-full max-w-md">
        <h1 class="text-5xl font-poppings text-[#391603] font-poppins text-center mb-6">Please log in</h1>
        <form @submit="onSubmit" class="space-y-6">
          <!-- Email Field -->
          <div class="form-item">
            <label for="email" class="text-[#391603] font-poppings">Email</label>
            <div class="mt-2">
              <input
                v-model="formData.email"
                type="email" 
                id="email"
                placeholder="youremail@gmail.com"
                class="w-full p-2 border border-[#39160393] rounded-md"
              />
            </div>
            <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
          </div>

          <!-- Password Field -->
          <div class="form-item">
            <label for="password" class="text-[#391603] font-poppings">Password</label>
            <div class="mt-2">
              <input
                v-model="formData.password"
                type="password"
                id="password"
                placeholder="**********"
                class="w-full p-2 border border-[#39160393] rounded-md"
              />
            </div>
            <p v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</p>
          </div>

          <button
            type="submit"
            class="w-full bg-[#391603] text-white py-2 font-poppins rounded-md hover:bg-[#7e513adc]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

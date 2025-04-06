<script setup>
import { reactive } from 'vue'
import { useRouter }  from 'vue-router'
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

const onSubmit = async (event) => {
  event.preventDefault()

  if (validateForm()) {
    try {
      const response = await $fetch('users/login', {
        method: 'POST',
        body: formData
      })

      console.log('Server Response:', response)

      if (response.success) {
        alert('🎉 Login Successful')
        // redirect or do something
        router.push({ name: 'profile' }) // this should naviagte to the authenticated page
      } else {
        alert(`🚫 ${response.message}`)
      }
    } catch (error) {
      console.error('Error sending login request:', error)
      alert('⚠️ Something went wrong.')
    }
  } else {
    console.log('Form has errors')
  }
}

</script>

<template>
        <h1 class="text-3xl font-poppings text-[#391603] font-poppins text-center my-7">Please log in</h1>
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
            Login
          </button>
        </form>
</template>

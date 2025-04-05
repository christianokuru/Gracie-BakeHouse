<script setup lang="ts">
import heroImag from '@/public/images/cakes/1.jpg'
</script>

<template>
    <section class="grid md:grid-cols-2 grid-cols-1 items-center px-6 md:px-16 py-12 gap-8">
  <!-- Text Content -->
  <div class="text-center md:text-left space-y-6">
    <h1 class="text-4xl md:text-6xl font-poppins font-bold text-[#AD7FAD] leading-tight">
      Freshly Baked Goodness <br /> Straight from Our Oven
    </h1>
    <p class="text-lg text-gray-700 font-poppins">
      From rich banana breads to gooey cinnamon rolls and soft cakes — each bite is homemade with love.
    </p>
    <div class="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
      <button class="bg-[#AD7FAD] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#d1a4d1] transition duration-300">
        Order Now
      </button>
      <button class="border border-[#AD7FAD] text-[#AD7FAD] font-medium px-6 py-3 rounded-lg hover:bg-[#f6edf6] transition duration-300">
        View Products
      </button>
    </div>
  </div>

  <!-- Image -->
  <div>
    <img :src="heroImag" alt="Hero Cake" class="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg" />
  </div>
</section>

</template>

<!-- style="background-image: url('/images/cakes/1.jpg')" -->
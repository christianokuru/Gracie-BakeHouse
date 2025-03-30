<script setup lang="ts">
import { useCounterStore } from "@/stores/counter.js"; // Adjust the path as needed

const counterStore = useCounterStore(); // Get the store instance

// 

// Destructure state and actions directly from the store
// const { counter, increment, decrement } = counterStore;

useSeoMeta({
  title: "Gracie's Bakehouse",
  description: "Get your fresh breads and Pastries",
  ogTitle: "Gracie's Bakehouse",
  ogDescription: "Get your fresh breads and Pastries on time",
  ogImage: "/images/cakes/1.jpg",
  ogUrl: "www.graciebakhouse.bread",
  twitterTitle: "Gracie's Bakehouse",
  twitterDescription: "Get your fresh breads and Pastries on time",
  twitterImage: "/images/cakes/1.jpg",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>

<template>
  <div>
    <h1>Gracie's Bakehouse</h1>
    <p>
      Welcome to Gracie's Bakehouse, where we specialize in making your bread
      and pastries fresh and delicious.
    </p>
    <!-- <img src="/images/cakes/1.jpgg" alt="Gracie's Bakehouse bread" /> -->

    <h2>Our Counter</h2>
    <div class="flex items-center space-x-4">
      <p>Counter: {{ counterStore.counter }}</p>
      <button class="p-2 bg-stone-500 text-white rounded-lg hover:bg-stone-400" @click="counterStore.increment">
        Increment
      </button>
      <button class="p-2 bg-stone-500 text-white rounded-lg hover:bg-stone-400" @click="counterStore.decrement">
        Decrement
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart.js";
import ProductCardComponent from "@/components/custom/ProductCardComponent.vue";
import HeroSectionComponent from "~/components/custom/HeroSectionComponent.vue";

const cartStore = useCartStore();

async function submit() {
    const { body } = await $fetch('/api/users/submitcreds', {
        method: 'post',
        body: {text: 123}
    })
}

// Mock data for products
const products = [
  {
    id: 1,
    image: "/images/banana-bread/2.jpg",
    name: "Product 1",
    price: 29.99,
  },
  {
    id: 2,
    image: "/images/banana-bread/1.jpg",
    name: "Product 2",
    price: 39.99,
  },
  {
    id: 3,
    image: "/images/banana-bread/1.jpg",
    name: "Product 3",
    price: 49.99,
  },
];

// Function to handle add to cart
const addToCart = (product) => {
  console.log(product);
  cartStore.addToCart(product);
};

// SEO Metadata
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

// Head Metadata
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
    <main>
      <hero-section-component />
      <div class="px-[60px]">
        <h1 class="text-2xl font-poppins">Our Products</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          <ProductCardComponent
            v-for="product in products"
            :key="product.id"
            :image="product.image"
            :name="product.name"
            :price="product.price"
            :onAddToCart="() => addToCart(product)"
          />
        </div>
      </div>
      <div>
        <button class="border p-4 bg-black text-white rounded-e-md" @click="submit">click me</button>
    </div>
    </main>
  </div>
</template>

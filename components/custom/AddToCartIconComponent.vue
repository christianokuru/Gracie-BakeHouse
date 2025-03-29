<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import cart from "@/assets/icons/cart.svg";
import { ref } from "vue";

const cartCount = ref<number>(12);

const openCart = () => {
  console.log("open cart");
};
</script>

<template>
  <div>
    <div class="relative hover:cursor-pointer" @click="openCart">
      <img :src="cart" width="24" height="24" />
      <Badge
        v-if="cartCount > 0"
        class="absolute -top-2 -right-3 w-[50%] rounded-full text-[9px] flex items-center justify-center"
        >{{ cartCount }}</Badge
      >
    </div>
  </div>
</template>

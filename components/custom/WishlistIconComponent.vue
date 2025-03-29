<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import love from "@/assets/icons/love.svg";
import { ref } from "vue";

const wishlistCount = ref<number>(2);

const openWishlist = () => {
  console.log("open cart");
};
</script>

<template>
  <div>
    <div class="relative hover:cursor-pointer" @click="openWishlist">
      <img :src="love" width="24" height="24" />
      <Badge
        v-if="wishlistCount > 0"
        class="absolute -top-2 -right-3 w-[50%] rounded-full text-[9px] flex items-center justify-center"
        >{{ wishlistCount }}</Badge
      >
    </div>
  </div>
</template>

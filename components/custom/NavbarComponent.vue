<script setup lang="ts">
import { ref } from "vue";
import LogoComponent from "@/components/custom/LogoComponent.vue";
import CartTooltipComponent from "@/components/custom/CartTooltipComponent.vue";
import WishlistTooltipComponent from "@/components/custom/WishlistTooltipComponent.vue";
import ProfileIconComponent from "@/components/custom/ProfileIconComponent.vue";
import SearchComponent from "@/components/custom/SearchComponent.vue";

const searchQuery = ref<string>("");

const performSearch = (query: string) => {
  console.log("Searching for:", query);
  // You can replace this with actual search logic
};
</script>

<template>
  <div
    class="absolute z-10 flex items-center justify-between w-full px-[60px] backdrop-blur-lg"
  >
    <!-- <div class="flex items-center gap-x-2">
      <Icon name="humbleicons:phone-call" style="color: brown" size="25px" />
      <p class="font-poppings text-primary-foreground">+234 707 720 7559</p>
    </div> -->
    <div>
      <logo-component />
    </div>
    <div class="flex flex-col items-center gap-4 p-10">
      <search-component
        v-model="searchQuery"
        placeholder="Search for items..."
        @search="performSearch"
      />
    </div>
    <div class="flex items-center gap-x-5 hover:cursor-pointer">
      <div>
        <cart-tooltip-component />
      </div>
      <div>
        <wishlist-tooltip-component />
      </div>
      <div>
        <profile-icon-component />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

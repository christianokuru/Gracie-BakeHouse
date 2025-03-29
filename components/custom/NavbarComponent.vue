<script setup lang="ts">
import LogoComponent from "@/components/custom/LogoComponent.vue";
import CartTooltipComponent from "@/components/custom/CartTooltipComponent.vue";
import WishlistTooltipComponent from "@/components/custom/WishlistTooltipComponent.vue";
import ProfileIconComponent from "@/components/custom/ProfileIconComponent.vue";


</script>

<template>
  <div class="flex items-center justify-between border border-red-500">
    <div class="flex items-center gap-x-2">
      <Icon name="humbleicons:phone-call" style="color: brown" size="25px" />
      <p class="font-Mont">+234 707 720 7559</p>
    </div>
    <div>
      <logo-component />
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

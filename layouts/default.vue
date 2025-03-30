<script setup>
// import Toaster from '@/components/ui/toast/Toaster.vue'

// import {ToastProvider} from '~/components/ui/toast/ToastProvider.vue';
import NavbarComponent from "@/components/custom/NavbarComponent.vue";
import FooterComponent from "@/components/custom/FooterComponent.vue";
</script>

<template>
  <main class="max-w-[1120px] mx-auto">
    <navbar-component />
    <nuxt-page />
    <footer-component />
  </main>
</template>
<style lang="scss" scoped></style>

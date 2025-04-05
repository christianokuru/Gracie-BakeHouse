<script setup lang="ts">
import profile from "@/assets/icons/profile.svg";
import { useRouter } from 'vue-router'

const router = useRouter()

const openProfile = () => {
  router.push({ name: 'profile' })
};
</script>

<template>
  <div @click="openProfile"><img :src="profile" width="24" height="24" /></div>
</template>

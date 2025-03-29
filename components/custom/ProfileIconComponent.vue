<script setup lang="ts">
import profile from "@/assets/icons/profile.svg";

const openProfile = () => {
  console.log("open profile");
};
</script>

<template>
  <div @click="openProfile"><img :src="profile" width="24" height="24" /></div>
</template>

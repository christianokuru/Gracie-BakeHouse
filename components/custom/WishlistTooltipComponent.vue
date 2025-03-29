<script setup lang="ts">
import WishlistIconComponent from "@/components/custom/WishlistIconComponent.vue";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <wishlist-icon-component />
      </TooltipTrigger>
      <TooltipContent>
        <p>Click to see your wishlist</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

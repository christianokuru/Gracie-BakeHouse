<script setup lang="ts">
import AddToCartIconComponent from '@/components/custom/AddToCartIconComponent.vue';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
</script>

<template>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
            <add-to-cart-icon-component />
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to open cart</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </template>
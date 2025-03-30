<script setup>
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";
import cartIcon from "@/assets/icons/cart.svg";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cartStore = useCartStore();

// Calculate total items in cart
const cartCount = computed(() =>
  cartStore.cart.reduce((total, item) => total + item.quantity, 0)
);

// Calculate subtotal
const subtotal = computed(() =>
  cartStore.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
);

// Increase item quantity
const increaseQuantity = (productId) => {
  cartStore.increaseQuantity(productId);
};

// Decrease item quantity
const decreaseQuantity = (productId) => {
  cartStore.decreaseQuantity(productId);
};
</script>

<template>
  <div>
    <Sheet>
      <SheetTrigger as-child>
        <div class="relative hover:cursor-pointer">
          <img :src="cartIcon" width="24" height="24" />
          <Badge
            v-if="cartCount > 0"
            class="absolute -top-2 -right-3 w-[50%] rounded-full text-[9px] flex items-center justify-center"
          >
            {{ cartCount }}
          </Badge>
        </div>
      </SheetTrigger>
      <SheetContent class="w-80">
        <h2 class="text-xl font-semibold">Your Cart</h2>

        <div v-if="cartStore.cart.length > 0" class="mt-4">
          <div 
            v-for="item in cartStore.cart" 
            :key="item.id" 
            class="flex justify-between items-center border-b py-2"
          >
            <img :src="item.image" alt="Product Image" class="w-12 h-12 object-cover">
            <div class="flex-1 ml-2">
              <p class="text-sm font-medium">{{ item.name }}</p>
              <p class="text-sm text-gray-600">${{ item.price }} × {{ item.quantity }}</p>
            </div>
            
            <!-- Quantity Controls -->
            <div class="flex items-center space-x-2">
              <button @click="decreaseQuantity(item.id)" class="px-2 py-1 bg-gray-300 rounded">-</button>
              <span class="text-sm font-medium">{{ item.quantity }}</span>
              <button @click="increaseQuantity(item.id)" class="px-2 py-1 bg-gray-300 rounded">+</button>
            </div>
          </div>

          <!-- Subtotal Section -->
          <div class="mt-4 p-2 border-t flex justify-between items-center">
            <p class="text-lg font-semibold">Subtotal:</p>
            <p class="text-lg font-bold">${{ subtotal }}</p>
          </div>

          <Button class="w-full mt-4 bg-stone-500 hover:bg-stone-400 text-white">
            Proceed to Checkout
          </Button>
        </div>

        <p v-else class="text-center text-gray-500 mt-4">Your cart is empty.</p>
        <nuxt-link to="/products" class="text-center underline text-amber-700 text-sm flex justify-center mt-10">Go to Products page</nuxt-link>
      </SheetContent>
    </Sheet>
  </div>
</template>

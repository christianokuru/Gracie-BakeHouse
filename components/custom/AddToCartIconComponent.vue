<script setup>
import { computed, ref } from "vue";
import { useCartStore } from "@/stores/cart";
import cartIcon from "@/assets/icons/cart.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cartStore = useCartStore();
const isLoading = ref(false);

// Calculate total items in cart
const cartCount = computed(() =>
  cartStore.cart.reduce((total, item) => total + item.quantity, 0)
);

// Calculate subtotal
const subtotal = computed(() =>
  cartStore.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
);

// Apply discount if subtotal exceeds a certain amount
const discount = computed(() => (subtotal.value >= 100 ? 10 : 0));
const discountedTotal = computed(() => (subtotal.value - (subtotal.value * discount.value) / 100).toFixed(2));

// Increase item quantity
const increaseQuantity = (productId) => {
  cartStore.increaseQuantity(productId);
};

// Decrease item quantity
const decreaseQuantity = (productId) => {
  cartStore.decreaseQuantity(productId);
};

// Remove item from cart
const removeItem = (productId) => {
  cartStore.removeFromCart(productId);
};

// Simulate checkout process
const proceedToCheckout = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    alert("Proceeding to checkout...");
  }, 1500);
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
            class="absolute -top-2 -right-3 w-[50%] rounded-full text-[9px] flex items-center justify-center bg-yellow-200 text-black"
          >
            {{ cartCount }}
          </Badge>
        </div>
      </SheetTrigger>
      <SheetContent class="w-80 bg-yellow-100">
        <h2 class="text-xl font-semibold text-yellow-900">Your Cart</h2>

        <div v-if="cartStore.cart.length > 0" class="mt-4">
          <div 
            v-for="item in cartStore.cart" 
            :key="item.id" 
            class="flex justify-between items-center border-b border-yellow-300 py-2"
          >
            <img :src="item.image" alt="Product Image" class="w-12 h-12 object-cover rounded">
            <div class="flex-1 ml-2">
              <p class="text-sm font-medium text-yellow-900 truncate w-28">{{ item.name }}</p>
              <p class="text-sm text-yellow-700">${{ item.price }} × {{ item.quantity }}</p>
            </div>
            
            <!-- Quantity Controls -->
            <div class="flex items-center space-x-2">
              <button @click="decreaseQuantity(item.id)" class="px-2 py-1 bg-orange-300 text-yellow-900 rounded">-</button>
              <span class="text-sm font-medium text-yellow-900">{{ item.quantity }}</span>
              <button @click="increaseQuantity(item.id)" class="px-2 py-1 bg-orange-300 text-yellow-900 rounded">+</button>
            </div>

            <!-- Remove Button -->
            <button @click="removeItem(item.id)" class="text-red-500 text-xs ml-2">Remove</button>
          </div>

          <!-- Subtotal Section -->
          <div class="mt-4 p-2 border-t border-yellow-300 flex justify-between items-center">
            <p class="text-lg font-semibold text-yellow-900">Subtotal:</p>
            <p class="text-lg font-bold text-yellow-900">${{ subtotal }}</p>
          </div>

          <!-- Discount Section -->
          <div v-if="discount > 0" class="mt-2 text-orange-600 text-sm">
            🎉 You've unlocked a {{ discount }}% discount!
          </div>

          <div class="flex justify-between items-center mt-2">
            <p class="text-lg font-semibold text-orange-800">Total After Discount:</p>
            <p class="text-lg font-bold text-orange-900">${{ discountedTotal }}</p>
          </div>

          <!-- Proceed to Checkout -->
          <Button 
            class="w-full mt-4 bg-orange-700 hover:bg-orange-600 text-white"
            @click="proceedToCheckout"
            :disabled="isLoading"
          >
            {{ isLoading ? "Processing..." : "Proceed to Checkout" }}
          </Button>
        </div>

        <p v-else class="text-center text-yellow-800 mt-4">Your cart is empty.</p>
        <nuxt-link to="/products" class="text-center underline text-orange-700 text-sm flex justify-center mt-10">
          Go to Products page
        </nuxt-link>
      </SheetContent>
    </Sheet>
  </div>
</template>

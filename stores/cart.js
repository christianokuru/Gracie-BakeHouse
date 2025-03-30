import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    const cart = ref([]);

    // Add item to cart
    const addToCart = (product) => {
      const existingItem = cart.value.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.value.push({ ...product, quantity: 1 });
      }
    };

    // Increase quantity
    const increaseQuantity = (productId) => {
      const item = cart.value.find((item) => item.id === productId);
      if (item) {
        item.quantity++;
      }
    };

    // Decrease quantity
    const decreaseQuantity = (productId) => {
      const item = cart.value.find((item) => item.id === productId);
      if (item) {
        item.quantity--;
        if (item.quantity <= 0) {
          cart.value = cart.value.filter((item) => item.id !== productId);
        }
      }
    };

    // Remove item completely
    const removeFromCart = (productId) => {
      cart.value = cart.value.filter((item) => item.id !== productId);
    };

    // Calculate subtotal
    const cartTotal = () => {
      return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    return { cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, cartTotal };
  },
  {
    persist: true, // Enables persistence
  }
);

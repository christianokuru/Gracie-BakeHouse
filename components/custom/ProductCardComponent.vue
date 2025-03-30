<script setup>
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  onAddToCart: {
    type: Function,
    required: true,
  },
});

const handleAddToCart = () => {
  props.onAddToCart();
  toast({
    title: 'Item Added to Cart',
    description:`${props.name} has been added to your cart.`,
  });
};
</script>
<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-stone-100 border border-stone-500 ">
    <img :src="image" alt="Product Image" class="w-[400px] h-[200px] object-cover mb-4 rounded">
    <h2 class="text-xl font-semibold mb-2">{{ name }}</h2>
    <p class="text-lg text-gray-700 mb-4">${{ price }}</p>
    <Button @click="handleAddToCart" class="w-full bg-stone-500 text-white hover:bg-stone-400">
      Add to Cart
    </Button>
  </div>
</template>
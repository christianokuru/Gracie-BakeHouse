<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import cart from "@/assets/icons/cart.svg";
import { ref } from "vue";

const cartCount = ref<number>(12);

const openCart = () => {
  console.log("open cart");
};
</script>

<template>
  <div>
    <Sheet>
      <SheetTrigger as-child>
        <div class="relative hover:cursor-pointer" @click="openCart">
          <img :src="cart" width="24" height="24" />
          <Badge
            v-if="cartCount > 0"
            class="absolute -top-2 -right-3 w-[50%] rounded-full text-[9px] flex items-center justify-center"
            >{{ cartCount }}</Badge
          >
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle class="text-2xl">Your Cart 🛒</SheetTitle>
          <SheetDescription>
            You can add or remove items from the cart. Click Checkout when
            you're done.
          </SheetDescription>
        </SheetHeader>
        Remember to use pinia to get the state of the cart and put it here
        <SheetFooter>
          <SheetClose as-child>
            <Button type="submit"> Checkout </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
</template>

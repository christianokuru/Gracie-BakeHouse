<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from '~/components/custom/login.vue'; 
import Signup from '~/components/custom/signup.vue'; 
import heroImag from "@/public/images/cakes/1.jpg";
</script>

<template>
  <div class="flex h-screen">
    <!-- Left Side Image -->
    <div class="w-1/2">
      <img
        :src="heroImag"
        alt="Hero Cake"
        class="w-full h-full object-cover rounded-l-xl"
      />
    </div>

    <!-- Right Side Form -->
    <div class="w-1/2 flex justify-center items-center bg-white p-8">
      <div class="w-full max-w-md">
        <!-- tabs component here -->
        <Tabs default-value="account" class="w-[400px]">
          <TabsList class="w-full">
            <TabsTrigger value="login" class="w-1/2"> Login </TabsTrigger>
            <TabsTrigger value="signup" class="w-1/2"> sign-up </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Login /> <!-- Changed to PascalCase -->
          </TabsContent>
          <TabsContent value="signup">
            <Signup /> <!-- Changed to PascalCase -->
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </div>
</template>

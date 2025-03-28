<script setup lang="ts">
import LogoComponent from '@/components/custom/LogoComponent.vue';
import cart from '@/assets/icons/cart.svg'
import love from '@/assets/icons/love.svg'
import profile from '@/assets/icons/profile.svg'
</script>

<template>
    <div class="flex items-center justify-between border border-red-500">
        <div class="flex items-center gap-x-2">
            <Icon name="humbleicons:phone-call" style="color: brown" size="25px" />
            <p>+234 707 720 7559</p>
        </div>
        <div>
            <logo-component />
        </div>
        <div class="flex items-center gap-x-3 hover:cursor-pointer">
            <nuxt-img :src="cart" width="24" height="24" preload/>
            <nuxt-img :src="love" width="24" height="24" preload/>
            <nuxt-img :src="profile" width="24" height="24" preload/>
            
        </div>
    </div>
</template>



<style lang="scss" scoped>

</style>
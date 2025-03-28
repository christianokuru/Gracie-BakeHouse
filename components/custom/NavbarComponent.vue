<script setup lang="ts">

import LogoComponent from '@/components/custom/LogoComponent.vue';
import AddToCartIconComponent from '@/components/custom/AddToCartIconComponent.vue';
import WishlistIconComponent from '@/components/custom/WishlistIconComponent.vue';
import ProfileIconComponent from '@/components/custom/ProfileIconComponent.vue';






const openProfile = () => {
    console.log('open profile')
}
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
        <div class="flex items-center gap-x-5 hover:cursor-pointer" >
           <div>
            <add-to-cart-icon-component />
           </div>
            <div>
               <wishlist-icon-component /> 
            </div>
            <div>
                <profile-icon-component />
            </div>
            
        </div>
    </div>
</template>



<style lang="scss" scoped>

</style>
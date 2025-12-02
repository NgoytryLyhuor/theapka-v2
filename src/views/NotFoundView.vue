<script setup>
import { useRoute } from 'vue-router'
import { weddingConfig } from '../config/guests'

const route = useRoute()
const invalidSlug = route.params.guestSlug || route.path
</script>

<template>
  <div class="flex flex-wrap max-w-xl mx-auto">
    <!-- Cover with 404 message -->
    <div 
      id="theapka-cover" 
      class="w-full h-[650px] relative bg-center bg-cover bg-no-repeat"
      :style="{ backgroundImage: `url('${weddingConfig.coverImage}')` }"
    >
      <div class="absolute inset-0 opacity-60 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <!-- Wedding Title -->
        <div class="mb-8 text-2xl drop-shadow-xl font-moulpali">
          {{ weddingConfig.title }}
        </div>
        
        <!-- 404 Error Box -->
        <div class="px-8 py-6 mx-4 rounded-2xl" style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);">
          <div class="mb-4 text-6xl">🙏</div>
          <div class="mb-2 text-3xl font-dangrek">រកមិនឃើញ</div>
          <div class="mb-4 text-lg font-kantumruy">Page Not Found</div>
          <div class="px-4 py-2 mb-4 text-sm rounded-lg bg-white/20 font-kantumruy">
            <span class="opacity-70">Link:</span> 
            <span class="font-bold">{{ invalidSlug }}</span>
          </div>
          <div class="text-sm leading-6 font-kantumruy opacity-80">
            សូមពិនិត្យមើលតំណភ្ជាប់របស់អ្នកម្តងទៀត<br>
            Please check your invitation link
          </div>
        </div>

        <!-- Couple Names -->
        <div class="mt-10 text-2xl text-white font-dangrek">
          <div>{{ weddingConfig.groomName }}</div>
          <img 
            src="https://theapka.com/storage/templates/chhay/images/2hearts.gif" 
            alt="hearts" 
            class="h-10 mx-auto my-2"
          >
          <div>{{ weddingConfig.brideName }}</div>
        </div>

        <!-- Back to home link -->
        <router-link 
          to="/" 
          class="px-6 py-3 mt-8 text-white transition-all rounded-full font-kantumruy bg-pink-500/80 hover:bg-pink-600"
        >
          ទំព័រដើម / Home
        </router-link>
      </div>
    </div>
  </div>
</template>


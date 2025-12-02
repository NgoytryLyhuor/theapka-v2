<script setup>
import { weddingConfig } from '../config/guests'

const props = defineProps({
  backgroundImage: { type: String, default: '' }
})
</script>

<template>
  <div class="relative w-full py-20 overflow-hidden">
    <!-- Background -->
    <div 
      class="absolute inset-0 bg-center bg-cover"
      :style="{ backgroundImage: `url('${props.backgroundImage || weddingConfig.thankYouBackground}')` }"
    ></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
    
    <!-- Content -->
    <div class="relative z-10 max-w-md px-6 mx-auto text-center text-white">
      
      <!-- Thank you icon -->
      <div class="mb-6 text-6xl animate-pulse">🙏</div>
      
      <!-- Title -->
      <h2 class="mb-4 text-3xl font-dangrek">សូមអរគុណ</h2>
      <p class="mb-8 text-lg text-white/80 font-kantumruy">Thank You</p>
      
      <!-- Message card -->
      <div class="p-6 mb-8 thank-you-card rounded-3xl">
        <p class="leading-8 text-white/90 font-kantumruy">
          វត្តមានរបស់អ្នកជាកិត្តិយសដ៏ឧត្តុង្គឧត្តម ចំពោះគ្រួសាររបស់យើងខ្ញុំ។
          សូមអរគុណដែលបានចូលរួមក្នុងថ្ងៃពិសេសរបស់យើង។
        </p>
      </div>
      
      <!-- Couple names -->
      <div class="mb-8">
        <p class="text-white/60 font-kantumruy">With Love,</p>
        <p class="mt-2 text-2xl font-dangrek">
          {{ weddingConfig.groomName }} & {{ weddingConfig.brideName }}
        </p>
      </div>
      
      <!-- Decorative flowers -->
      <div class="flex justify-center gap-4">
        <span class="text-3xl">🌸</span>
        <span class="text-3xl">💕</span>
        <span class="text-3xl">🌸</span>
      </div>
      
      <!-- Footer -->
      <div class="pt-8 mt-8 border-t border-white/20">
        <p class="text-sm text-white/40 font-kantumruy">
          Made with ❤️ by TheapKa.com
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thank-you-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>

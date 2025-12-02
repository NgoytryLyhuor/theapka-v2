<script setup>
import { weddingConfig } from '../config/guests'

const props = defineProps({
  backgroundImage: {
    type: String,
    default: 'https://theapka.com/storage/01J4TYXR517E73RV2PRB75Y5ME.jpg'
  }
})
</script>

<template>
  <div class="w-full min-h-[600px] relative bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url('${props.backgroundImage}')` }">
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60"></div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-[600px] px-6 py-16 text-center text-white">
      
      <!-- Thank You Card -->
      <div class="w-full max-w-sm">
        <div class="p-8 border thank-you-card rounded-3xl border-white/20">
          
          <!-- Icon -->
          <div class="mb-6 text-5xl">🙏</div>

          <!-- Title -->
          <h2 class="mb-2 text-3xl font-bold text-amber-300 font-dangrek">
            សូមអរគុណ
          </h2>
          <p class="mb-6 text-lg text-white/70 font-kantumruy">
            Thank You
          </p>

          <!-- Message -->
          <p class="mb-6 text-base leading-8 text-white/80 font-kantumruy">
            វត្តមានឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា 
            ជាកិត្តិយសដ៏ឧត្តុង្គឧត្តម ចំពោះគ្រួសាររបស់យើងខ្ញុំ។
          </p>

          <!-- Divider with hearts -->
          <div class="flex items-center justify-center gap-2 mb-6">
            <div class="w-8 h-px bg-white/30"></div>
            <span class="text-xl">💕</span>
            <div class="w-8 h-px bg-white/30"></div>
          </div>

          <!-- Couple Names -->
          <div class="text-lg text-white/90 font-dangrek">
            <span>{{ weddingConfig.groomName }}</span>
            <span class="mx-2 text-amber-300">&</span>
            <span>{{ weddingConfig.brideName }}</span>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-8">
          <div class="flex items-center justify-center gap-3 mb-4">
            <span class="text-2xl">💐</span>
            <span class="text-2xl">💒</span>
            <span class="text-2xl">💐</span>
          </div>
          <p class="text-xs text-white/40 font-kantumruy">
            Made with ❤️ by TheapKa.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thank-you-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  backdrop-filter: blur(20px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}
</style>

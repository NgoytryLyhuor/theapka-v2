<script setup>
import { useRoute } from 'vue-router'
import { weddingConfig } from '../config/guests'

const route = useRoute()
const invalidSlug = route.params.guestSlug || route.path
</script>

<template>
  <div class="flex flex-wrap max-w-xl mx-auto">
    <!-- Beautiful 404 Page with Wedding Design -->
    <div 
      class="w-full min-h-screen relative bg-center bg-cover bg-no-repeat"
      :style="{ backgroundImage: `url('${weddingConfig.coverImage}')` }"
    >
      <!-- Overlay with gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
      
      <!-- Floating particles effect -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="floating-heart" style="left: 10%; animation-delay: 0s;">💕</div>
        <div class="floating-heart" style="left: 25%; animation-delay: 1s;">✨</div>
        <div class="floating-heart" style="left: 50%; animation-delay: 2s;">💕</div>
        <div class="floating-heart" style="left: 75%; animation-delay: 0.5s;">✨</div>
        <div class="floating-heart" style="left: 90%; animation-delay: 1.5s;">💕</div>
      </div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center text-white">
        
        <!-- Top decoration -->
        <img 
          src="https://theapka.com/storage/templates/chhay/images/header_3.png" 
          class="h-8 mb-6 opacity-80" 
          alt="decoration"
        >

        <!-- Wedding Title -->
        <div class="mb-6 text-2xl drop-shadow-xl font-moulpali">
          {{ weddingConfig.title }}
        </div>

        <!-- Couple Names -->
        <div class="mb-8 text-xl text-white/90 font-dangrek">
          <span>{{ weddingConfig.groomName }}</span>
          <span class="mx-2 text-pink-300">&</span>
          <span>{{ weddingConfig.brideName }}</span>
        </div>

        <!-- 404 Card -->
        <div class="w-full max-w-sm mx-auto">
          <div class="relative p-8 border not-found-card rounded-3xl border-white/20">
            
            <!-- Decorative corners -->
            <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-3xl border-pink-400/50"></div>
            <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-3xl border-pink-400/50"></div>
            <div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-3xl border-pink-400/50"></div>
            <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-3xl border-pink-400/50"></div>

            <!-- Sad face icon -->
            <div class="mb-4 text-5xl opacity-80">😢</div>
            
            <!-- Error text -->
            <div class="mb-2 text-3xl font-bold text-pink-300 font-dangrek">
              រកមិនឃើញ
            </div>
            <div class="mb-6 text-lg text-white/70 font-kantumruy">
              Invitation Not Found
            </div>

            <!-- Invalid link display -->
            <div class="px-4 py-3 mb-6 rounded-xl bg-white/10">
              <div class="mb-1 text-xs text-white/50 font-kantumruy">តំណភ្ជាប់មិនត្រឹមត្រូវ</div>
              <div class="text-sm font-bold text-pink-200 break-all font-kantumruy">
                /{{ invalidSlug }}
              </div>
            </div>

            <!-- Message -->
            <div class="mb-6 text-sm leading-7 text-white/60 font-kantumruy">
              សូមពិនិត្យមើលតំណភ្ជាប់<br>ដែលអ្នកបានទទួល ម្តងទៀត
            </div>

            <!-- Divider -->
            <div class="flex items-center justify-center mb-6">
              <div class="w-12 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent"></div>
              <img 
                src="https://theapka.com/storage/templates/chhay/images/2hearts.gif" 
                alt="hearts" 
                class="h-6 mx-3"
              >
              <div class="w-12 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent"></div>
            </div>

            <!-- Back button -->
            <router-link 
              to="/" 
              class="inline-flex items-center gap-2 px-8 py-3 text-white transition-all duration-300 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 hover:scale-105 font-kantumruy"
            >
              <span>🏠</span>
              <span>ត្រឡប់ទំព័រដើម</span>
            </router-link>
          </div>
        </div>

        <!-- Bottom decoration -->
        <img 
          src="https://theapka.com/storage/templates/chhay/images/header_4.png" 
          class="h-8 mt-8 opacity-80" 
          alt="decoration"
        >

        <!-- Footer -->
        <div class="mt-6 text-xs text-white/40 font-kantumruy">
          Powered by TheapKa.com
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  backdrop-filter: blur(20px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.floating-heart {
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.3;
  animation: float-up 8s ease-in-out infinite;
}

@keyframes float-up {
  0%, 100% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-20vh) rotate(360deg);
    opacity: 0;
  }
}
</style>

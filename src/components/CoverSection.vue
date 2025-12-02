<script setup>
import { useDateFormatter } from '../composables/useDateFormatter'
import { weddingConfig } from '../config/guests'
import 'add-to-calendar-button'

const props = defineProps({
  guestName: {
    type: String,
    default: ''
  }
})

const { formattedDate } = useDateFormatter(weddingConfig.eventDate, true)
</script>

<template>
  <div class="relative w-full min-h-screen overflow-hidden">
    <!-- Background with parallax effect -->
    <div 
      class="absolute inset-0 bg-center bg-cover"
      :style="{ backgroundImage: `url('${weddingConfig.coverImage}')` }"
    ></div>
    
    <!-- Animated overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-rose-900/30 via-black/50 to-black/70"></div>
    
    <!-- Floating decorations -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="floating-element" style="left: 5%; top: 20%;">🌸</div>
      <div class="floating-element" style="left: 90%; top: 30%; animation-delay: 1s;">🌺</div>
      <div class="floating-element" style="left: 15%; top: 70%; animation-delay: 2s;">💐</div>
      <div class="floating-element" style="left: 85%; top: 80%; animation-delay: 0.5s;">🌷</div>
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16 text-white">
      
      <!-- Top ornament -->
      <div class="mb-8 ornament-line">
        <span class="text-2xl">✦</span>
      </div>

      <!-- Wedding Title with animation -->
      <div class="mb-4 text-lg tracking-widest uppercase opacity-80 font-kantumruy animate-fade-in">
        Wedding Invitation
      </div>
      
      <h1 class="mb-8 text-2xl text-center md:text-3xl font-moulpali animate-fade-in-up">
        {{ weddingConfig.title }}
      </h1>

      <!-- Couple Names - Modern Split Design -->
      <div class="flex flex-col items-center mb-10 couple-names">
        <div class="text-4xl md:text-5xl font-dangrek animate-slide-right">
          {{ weddingConfig.groomName }}
        </div>
        
        <div class="my-4 ampersand">
          <div class="relative">
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 blur-xl opacity-50"></div>
            <div class="relative flex items-center justify-center w-16 h-16 text-2xl border-2 rounded-full border-white/30 bg-white/10 backdrop-blur-sm">
              &
            </div>
          </div>
        </div>
        
        <div class="text-4xl md:text-5xl font-dangrek animate-slide-left">
          {{ weddingConfig.brideName }}
        </div>
      </div>

      <!-- Guest Name Card -->
      <div v-if="props.guestName" class="w-full max-w-sm mb-10 animate-fade-in-up">
        <div class="guest-card">
          <div class="mb-2 text-sm tracking-wider uppercase opacity-70 font-kantumruy">
            សូមគោរពអញ្ជើញ
          </div>
          <div class="text-2xl font-bold text-transparent font-dangrek bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text">
            {{ props.guestName }}
          </div>
        </div>
      </div>

      <!-- Date & Location Card -->
      <div class="w-full max-w-sm mb-8 event-card animate-fade-in-up">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-12 h-px bg-gradient-to-r from-transparent to-pink-400/50"></div>
          <span class="text-pink-300">📅</span>
          <div class="w-12 h-px bg-gradient-to-l from-transparent to-pink-400/50"></div>
        </div>
        
        <div class="mb-3 text-xl font-dangrek">
          {{ formattedDate }}
        </div>
        
        <div class="flex items-center justify-center gap-2 text-white/70 font-kantumruy">
          <span>📍</span>
          <span>{{ weddingConfig.location }}</span>
        </div>
      </div>

      <!-- Add to Calendar -->
      <div class="mb-8 animate-fade-in">
        <add-to-calendar-button 
          size="1" 
          :name="`${weddingConfig.groomName} & ${weddingConfig.brideName}'s Wedding`"
          :startDate="weddingConfig.startDate" 
          :startTime="weddingConfig.startTime" 
          :endDate="weddingConfig.endDate" 
          :endTime="weddingConfig.endTime" 
          timeZone="Asia/Phnom_Penh" 
          :location="weddingConfig.mapUrl"
          options="'Apple','Google','iCal','Outlook.com'" 
          organizer="TheapKa.com|admin@theapka.com" 
          :description="`${weddingConfig.location}. Powered by https://theapka.com`"
        />
      </div>

      <!-- Scroll indicator -->
      <div class="absolute transform -translate-x-1/2 bottom-8 left-1/2 scroll-indicator">
        <div class="flex flex-col items-center gap-2 text-white/50">
          <span class="text-xs font-kantumruy">Scroll Down</span>
          <div class="scroll-arrow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.floating-element {
  position: absolute;
  font-size: 2rem;
  opacity: 0.4;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

.ornament-line {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.ornament-line::before,
.ornament-line::after {
  content: '';
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
}

.couple-names {
  text-shadow: 0 4px 30px rgba(0,0,0,0.5);
}

.guest-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 20px;
  padding: 1.5rem 2rem;
  text-align: center;
}

.event-card {
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(8px); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.animate-slide-right {
  animation: slideRight 1s ease-out forwards;
}

.animate-slide-left {
  animation: slideLeft 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideRight {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideLeft {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}
</style>

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
  <div class="w-full min-h-screen relative bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url('${weddingConfig.coverImage}')` }">
    
    <!-- Elegant overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70"></div>
    
    <!-- Decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-rose-900/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 flex flex-col items-center justify-between min-h-screen px-6 py-12 text-white">
      
      <!-- Top Section -->
      <div class="text-center">
        <!-- Decorative line -->
        <div class="flex items-center justify-center gap-4 mb-6">
          <div class="w-16 h-px bg-gradient-to-r from-transparent to-amber-300/60"></div>
          <div class="text-2xl text-amber-300">❧</div>
          <div class="w-16 h-px bg-gradient-to-l from-transparent to-amber-300/60"></div>
        </div>
        
        <!-- Wedding Title -->
        <h1 class="mb-2 text-lg tracking-widest uppercase text-amber-200/80 font-kantumruy">
          Wedding Invitation
        </h1>
        <h2 class="text-2xl font-moulpali text-white/90 drop-shadow-lg">
          {{ weddingConfig.title }}
        </h2>
      </div>

      <!-- Center Section - Couple Names -->
      <div class="text-center">
        <!-- Groom -->
        <div class="mb-4">
          <p class="mb-1 text-sm tracking-wider uppercase text-amber-200/60 font-kantumruy">The Groom</p>
          <h3 class="text-4xl font-bold text-white font-dangrek drop-shadow-lg couple-name">
            {{ weddingConfig.groomName }}
          </h3>
        </div>

        <!-- Ampersand with animation -->
        <div class="my-6">
          <div class="inline-block px-6 py-3 border rounded-full border-amber-300/30 bg-white/5 backdrop-blur-sm">
            <span class="text-4xl font-serif text-amber-300">&</span>
          </div>
        </div>

        <!-- Bride -->
        <div class="mt-4">
          <p class="mb-1 text-sm tracking-wider uppercase text-amber-200/60 font-kantumruy">The Bride</p>
          <h3 class="text-4xl font-bold text-white font-dangrek drop-shadow-lg couple-name">
            {{ weddingConfig.brideName }}
          </h3>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="w-full max-w-md text-center">
        
        <!-- Guest Name Card -->
        <div v-if="props.guestName" class="mb-8">
          <div class="guest-card">
            <p class="mb-2 text-sm text-amber-200/70 font-kantumruy">សូមគោរពអញ្ជើញ</p>
            <p class="text-2xl font-bold text-amber-300 font-dangrek guest-name-glow">
              {{ props.guestName }}
            </p>
          </div>
        </div>

        <!-- Date & Location -->
        <div class="p-6 mb-6 border rounded-2xl border-white/10 bg-black/30 backdrop-blur-md">
          <div class="flex items-center justify-center gap-2 mb-3">
            <span class="text-xl">📅</span>
            <p class="text-lg text-white font-dangrek">{{ formattedDate }}</p>
          </div>
          <div class="flex items-center justify-center gap-2">
            <span class="text-xl">📍</span>
            <p class="text-lg text-white/80 font-kantumruy">{{ weddingConfig.location }}</p>
          </div>
        </div>

        <!-- Add to Calendar -->
        <div class="flex justify-center mb-6">
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
            class="add-to-calendar atcb-light"
          />
        </div>

        <!-- Scroll indicator -->
        <div class="flex flex-col items-center animate-bounce">
          <span class="mb-2 text-xs text-white/50 font-kantumruy">Scroll Down</span>
          <div class="w-6 h-10 border-2 rounded-full border-white/30">
            <div class="w-1.5 h-3 mx-auto mt-2 rounded-full bg-white/50 animate-scroll-down"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.couple-name {
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.guest-card {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  backdrop-filter: blur(10px);
}

@keyframes scroll-down {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(8px); opacity: 0.3; }
}

.animate-scroll-down {
  animation: scroll-down 1.5s ease-in-out infinite;
}
</style>

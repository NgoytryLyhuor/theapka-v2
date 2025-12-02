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
  <div class="w-full min-h-screen relative bg-center bg-cover bg-no-repeat overflow-hidden"
    :style="{ backgroundImage: `url('${weddingConfig.coverImage}')` }">
    
    <!-- Elegant overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-rose-900/30 via-black/50 to-black/70"></div>
    
    <!-- Decorative elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-rose-300/30 m-4"></div>
      <div class="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-rose-300/30 m-4"></div>
      <div class="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-rose-300/30 m-4"></div>
      <div class="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-rose-300/30 m-4"></div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16 text-white">
      
      <!-- Top ornament -->
      <div class="mb-6 text-rose-300/80 text-3xl">✦</div>
      
      <!-- Wedding type label -->
      <div class="px-6 py-2 mb-8 text-sm tracking-widest uppercase border rounded-full border-rose-300/40 text-rose-200 font-kantumruy">
        Wedding Invitation
      </div>

      <!-- Couple Names - Main Focus -->
      <div class="mb-8 text-center">
        <h1 class="text-4xl md:text-5xl font-dangrek text-white mb-4 tracking-wide couple-name-glow">
          {{ weddingConfig.groomName }}
        </h1>
        <div class="flex items-center justify-center gap-4 my-4">
          <div class="w-16 h-px bg-gradient-to-r from-transparent to-rose-400"></div>
          <span class="text-3xl text-rose-300">♥</span>
          <div class="w-16 h-px bg-gradient-to-l from-transparent to-rose-400"></div>
        </div>
        <h1 class="text-4xl md:text-5xl font-dangrek text-white tracking-wide couple-name-glow">
          {{ weddingConfig.brideName }}
        </h1>
      </div>

      <!-- Khmer Title -->
      <div class="mb-10 text-xl text-rose-200/90 font-moulpali">
        {{ weddingConfig.title }}
      </div>

      <!-- Guest Name Card - Elegant Glass Design -->
      <div v-if="props.guestName" class="w-full max-w-sm mb-10">
        <div class="guest-card p-6 rounded-2xl text-center">
          <div class="text-sm text-rose-200/70 mb-2 font-kantumruy">ការអញ្ជើញជូន</div>
          <div class="text-2xl font-dangrek font-bold guest-name-glow">
            {{ props.guestName }}
          </div>
        </div>
      </div>

      <!-- Date & Location Card -->
      <div class="w-full max-w-sm mb-8">
        <div class="date-card p-6 rounded-2xl text-center">
          <div class="flex items-center justify-center gap-2 mb-3">
            <span class="text-rose-300">📅</span>
            <span class="text-lg font-dangrek text-white">{{ formattedDate }}</span>
          </div>
          <div class="flex items-center justify-center gap-2 text-rose-200/80">
            <span>📍</span>
            <span class="font-kantumruy">{{ weddingConfig.location }}</span>
          </div>
        </div>
      </div>

      <!-- Add to Calendar -->
      <div class="mb-8">
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
          class="add-to-calendar"
        />
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="flex flex-col items-center text-rose-200/60">
          <span class="text-xs font-kantumruy mb-2">រំកិលចុះក្រោម</span>
          <span class="text-2xl">↓</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.couple-name-glow {
  text-shadow: 
    0 0 20px rgba(251, 113, 133, 0.5),
    0 0 40px rgba(251, 113, 133, 0.3);
}

.guest-card {
  background: linear-gradient(135deg, rgba(251, 113, 133, 0.2), rgba(251, 113, 133, 0.1));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(251, 113, 133, 0.3);
}

.date-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>

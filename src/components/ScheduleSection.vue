<script setup>
import { weddingConfig } from '../config/guests'

const props = defineProps({
  backgroundImage: { type: String, default: '' },
  location: { type: String, default: 'ភ្នំពេញ' },
  mapUrl: { type: String, default: '' }
})

// Schedule items
const scheduleItems = [
  { time: '១៦:០០', event: 'ទទួលភ្ញៀវ', icon: '🎊' },
  { time: '១៧:០០', event: 'ពិធីមង្គលការ', icon: '💒' },
  { time: '១៨:៣០', event: 'ពិធីជប់លៀង', icon: '🍽️' },
  { time: '២១:០០', event: 'បញ្ចប់កម្មវិធី', icon: '🎉' }
]
</script>

<template>
  <div class="w-full py-16 bg-gradient-to-b from-white to-rose-50">
    <div class="max-w-md px-6 mx-auto">
      
      <!-- Title -->
      <div class="mb-10 text-center">
        <span class="text-4xl">📋</span>
        <h2 class="mt-4 text-2xl text-rose-800 font-moulpali">
          កម្មវិធីមង្គលការ
        </h2>
        <p class="mt-2 text-gray-500 font-kantumruy">Wedding Schedule</p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute w-1 h-full transform -translate-x-1/2 bg-gradient-to-b from-pink-200 via-rose-300 to-pink-200 left-8 rounded-full"></div>
        
        <!-- Schedule items -->
        <div class="space-y-8">
          <div 
            v-for="(item, index) in scheduleItems" 
            :key="index"
            class="relative flex items-center gap-6 pl-4"
          >
            <!-- Circle -->
            <div class="relative z-10 flex items-center justify-center w-8 h-8 text-lg bg-white border-4 border-pink-400 rounded-full shadow-lg">
              {{ item.icon }}
            </div>
            
            <!-- Content -->
            <div class="flex-1 p-4 transition-all bg-white shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1">
              <div class="text-lg font-bold text-rose-600 font-dangrek">{{ item.time }}</div>
              <div class="text-gray-700 font-kantumruy">{{ item.event }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Location -->
      <div class="p-6 mt-10 text-center bg-white shadow-lg rounded-3xl">
        <span class="text-3xl">📍</span>
        <h3 class="mt-3 text-xl font-bold text-gray-800 font-dangrek">{{ props.location }}</h3>
        <a 
          :href="props.mapUrl" 
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-2 mt-4 text-white transition-all rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 font-kantumruy"
        >
          <span>🗺️</span>
          <span>មើលផែនទី</span>
        </a>
      </div>
    </div>
  </div>
</template>

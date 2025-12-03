<script setup>
import { useDateFormatter } from '../composables/useDateFormatter'
import { weddingConfig } from '../config/guests'
import 'add-to-calendar-button'

// Accept guest name as prop
const props = defineProps({
  guestName: {
    type: String,
    default: ''
  }
})

// Format date with time
const { formattedDate } = useDateFormatter(weddingConfig.eventDate, true)
</script>

<template>
  <div 
    id="theapka-cover" 
    class="w-full h-[650px] relative overflow-hidden"
  >
    <!-- Background Image as img tag for PDF support -->
    <img 
      :src="weddingConfig.coverImage" 
      alt="cover" 
      class="absolute inset-0 object-cover object-center w-full h-full"
      crossorigin="anonymous"
    />
    <div class="absolute inset-0 opacity-50 bg-gradient-to-b from-gray-500 to-transparent"></div>
    <div class="absolute inset-0 flex flex-col pt-12 text-2xl text-center text-white font-moulpali">
      <div class="drop-shadow-xl">{{ weddingConfig.title }}</div>
      <div class="mt-10 text-3xl text-white font-dangrek">
        <div>{{ weddingConfig.groomName }}</div>
        <img 
          src="https://theapka.com/storage/templates/chhay/images/2hearts.gif" 
          alt="hearts" 
          class="h-12 mx-auto"
        >
        <div class="flex flex-row items-end justify-center mx-auto">
          <span>{{ weddingConfig.brideName }}</span>
        </div>
      </div>
      <div class="flex-1"></div>
      
      <!-- Guest Name Section -->
      <div class="w-full max-w-sm mx-auto mb-16 text-base">
        <span>សូមគោរពអញ្ជើញ</span>
        <div class="mt-2">
          <img 
            src="https://theapka.com/storage/templates/chhay/images/frame_1.png" 
            class="w-full h-[50px] max-w-xl mx-auto"
          >
          <!-- Display Guest Name Here -->
          <div 
            v-if="props.guestName"
            class="-mt-[36px] text-xl font-dangrek font-bold"
            style="color: #FFD700; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);"
          >
            {{ props.guestName }}
          </div>
        </div>
      </div>
      
      <div class="pb-3 text-base text-center font-dangrek bg-gradient-to-t from-gray-900 to-transparent">
        <div class="pb-1">
          <span id="event-date" class="text-2xl">{{ formattedDate }}</span>
        </div>
        <div class="leading-8">{{ weddingConfig.location }}</div>
        <div class="relative flex justify-center" style="z-index: 50;">
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
            listStyle="modal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

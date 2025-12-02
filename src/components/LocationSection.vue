<script setup>
const props = defineProps({
  location: {
    type: String,
    default: 'ភ្នំពេញ'
  },
  mapUrl: {
    type: String,
    default: 'https://goo.gl/maps/m6QhfxtiAx7g51yy6'
  }
})
</script>

<template>
  <div class="w-full py-16 bg-gradient-to-b from-amber-50 to-slate-100">
    <div class="max-w-md px-6 mx-auto text-center">
      
      <!-- Section Title -->
      <div class="mb-8">
        <span class="text-4xl">🗺️</span>
        <h2 class="mt-4 text-2xl text-slate-800 font-moulpali">
          ទីតាំងកម្មវិធីមង្គល
        </h2>
        <p class="mt-2 text-sm tracking-widest uppercase text-slate-500 font-kantumruy">
          Event Location
        </p>
      </div>

      <!-- Location Card -->
      <div class="p-6 bg-white shadow-xl rounded-3xl">
        <!-- Location Name -->
        <div class="p-4 mb-6 rounded-2xl bg-slate-50">
          <p class="text-xl font-bold text-slate-800 font-dangrek">{{ props.location }}</p>
        </div>

        <!-- QR Code -->
        <div class="p-4 mb-6 bg-white border-2 border-dashed rounded-2xl border-slate-200">
          <p class="mb-3 text-xs text-slate-400 font-kantumruy">Scan QR Code</p>
          <div class="flex justify-center">
            <div class="p-3 bg-white rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="180" height="180" viewBox="0 0 250 250">
                <rect x="0" y="0" width="250" height="250" fill="#ffffff"></rect>
                <g transform="scale(8.621)">
                  <g transform="translate(0,0)">
                    <path fill-rule="evenodd" d="M9 0.25L9 0.75A0.25 0.25 0 0 1 8.75 1L8.25 1A0.25 0.25 0 0 0 8 1.25L8 1.75A0.25 0.25 0 0 0 8.25 2L8.75 2A0.25 0.25 0 0 1 9 2.25L9 2.75A0.25 0.25 0 0 1 8.75 3L8.25 3A0.25 0.25 0 0 0 8 3.25L8 3.75A0.25 0.25 0 0 0 8.25 4L9.75 4A0.25 0.25 0 0 1 10 4.25L10 6.75A0.25 0.25 0 0 0 10.25 7L10.75 7A0.25 0.25 0 0 0 11 6.75L11 4.25A0.25 0.25 0 0 1 11.25 4L11.75 4A0.25 0.25 0 0 1 12 4.25L12 4.75A0.25 0.25 0 0 0 12.25 5L12.75 5A0.25 0.25 0 0 1 13 5.25L13 5.75A0.25 0.25 0 0 1 12.75 6L12.25 6A0.25 0.25 0 0 0 12 6.25L12 8.75A0.25 0.25 0 0 0 12.25 9L14.75 9A0.25 0.25 0 0 1 15 9.25L15 10.75ZM0 0L7 0L7 7L0 7ZM1 1L1 6L6 6L6 1ZM5 3.5A1.5 1.5 0 0 1 3.5 5A1.5 1.5 0 0 1 2 3.5A1.5 1.5 0 0 1 3.5 2A1.5 1.5 0 0 1 5 3.5ZM22 0L29 0L29 7L22 7ZM23 1L23 6L28 6L28 1ZM27 3.5A1.5 1.5 0 0 1 25.5 5A1.5 1.5 0 0 1 24 3.5A1.5 1.5 0 0 1 25.5 2A1.5 1.5 0 0 1 27 3.5ZM0 22L7 22L7 29L0 29ZM1 23L1 28L6 28L6 23ZM5 25.5A1.5 1.5 0 0 1 3.5 27A1.5 1.5 0 0 1 2 25.5A1.5 1.5 0 0 1 3.5 24A1.5 1.5 0 0 1 5 25.5Z" fill="#1e293b"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <!-- Map Link -->
        <a :href="props.mapUrl" target="_blank"
          class="block p-4 transition-all rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
          <div class="flex items-center justify-center gap-3 text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="font-bold font-kantumruy">បើក Google Maps</span>
          </div>
        </a>

        <!-- URL -->
        <p class="mt-4 text-xs break-all text-slate-400 font-kantumruy">
          {{ props.mapUrl }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  location: { type: String, default: 'ភ្នំពេញ' },
  mapUrl: { type: String, default: 'https://goo.gl/maps/m6QhfxtiAx7g51yy6' }
})
</script>

<template>
  <div class="w-full py-16 bg-rose-50">
    <div class="max-w-md px-6 mx-auto text-center">
      
      <!-- Title -->
      <div class="mb-8">
        <span class="text-4xl">🏛️</span>
        <h2 class="mt-4 text-2xl text-rose-800 font-moulpali">ទីតាំងកម្មវិធី</h2>
        <p class="mt-2 text-gray-500 font-kantumruy">Event Location</p>
      </div>

      <!-- Map Card -->
      <div class="overflow-hidden bg-white shadow-xl rounded-3xl">
        <!-- Map embed placeholder -->
        <div class="relative h-48 bg-gradient-to-br from-rose-100 to-pink-100">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <span class="text-6xl">🗺️</span>
              <p class="mt-2 text-gray-600 font-kantumruy">{{ props.location }}</p>
            </div>
          </div>
        </div>
        
        <!-- Info -->
        <div class="p-6">
          <h3 class="mb-2 text-xl font-bold text-gray-800 font-dangrek">{{ props.location }}</h3>
          <p class="mb-4 text-sm text-gray-500 font-kantumruy">សូមចុចប៊ូតុងខាងក្រោមដើម្បីមើលផែនទី</p>
          
          <a 
            :href="props.mapUrl" 
            target="_blank"
            class="inline-flex items-center gap-2 px-8 py-3 text-white transition-all rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:scale-105 font-kantumruy"
          >
            <span>📍</span>
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>

      <!-- QR hint -->
      <p class="mt-6 text-sm text-gray-400 font-kantumruy">
        ស្កេន QR Code ឬចុចប៊ូតុងខាងលើ
      </p>
    </div>
  </div>
</template>

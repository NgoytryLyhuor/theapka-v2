<script setup>
const props = defineProps({
  backgroundImage: {
    type: String,
    default: 'https://theapka.com/storage/01J4TYV5XJP7PKF7RPH3KE6238.jpg'
  },
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
  <div class="w-full py-16 bg-gradient-to-b from-white to-amber-50">
    <div class="max-w-md px-6 mx-auto">
      
      <!-- Section Title -->
      <div class="mb-12 text-center">
        <div class="inline-block px-6 py-2 mb-4 border rounded-full border-amber-300 bg-amber-50">
          <span class="text-sm tracking-widest text-amber-700 uppercase font-kantumruy">Event Schedule</span>
        </div>
        <h2 class="text-2xl text-amber-900 font-moulpali">
          កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍
        </h2>
      </div>

      <!-- Schedule Card -->
      <div class="overflow-hidden bg-white shadow-xl rounded-3xl">
        <!-- Header Image -->
        <div class="relative h-48 bg-center bg-cover" 
          :style="{ backgroundImage: `url('${props.backgroundImage}')` }">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <p class="text-lg font-bold text-white font-dangrek">{{ props.location }}</p>
          </div>
        </div>

        <!-- Schedule Items -->
        <div class="p-6">
          <div class="space-y-4">
            <!-- Item 1 -->
            <div class="flex items-center gap-4 p-4 rounded-xl bg-amber-50">
              <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl rounded-full bg-amber-100">
                🎊
              </div>
              <div>
                <p class="text-sm text-amber-600 font-kantumruy">ម៉ោង ៤:០០ រសៀល</p>
                <p class="font-bold text-amber-900 font-kantumruy">ពិធីស្វាគមន៍ភ្ញៀវ</p>
              </div>
            </div>

            <!-- Item 2 -->
            <div class="flex items-center gap-4 p-4 rounded-xl bg-rose-50">
              <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl rounded-full bg-rose-100">
                💍
              </div>
              <div>
                <p class="text-sm text-rose-600 font-kantumruy">ម៉ោង ៥:០០ រសៀល</p>
                <p class="font-bold text-rose-900 font-kantumruy">ពិធីមង្គលការ</p>
              </div>
            </div>

            <!-- Item 3 -->
            <div class="flex items-center gap-4 p-4 rounded-xl bg-purple-50">
              <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl rounded-full bg-purple-100">
                🍽️
              </div>
              <div>
                <p class="text-sm text-purple-600 font-kantumruy">ម៉ោង ៦:០០ ល្ងាច</p>
                <p class="font-bold text-purple-900 font-kantumruy">ពិធីជប់លៀង</p>
              </div>
            </div>
          </div>

          <!-- View Location Button -->
          <a :href="props.mapUrl" target="_blank"
            class="flex items-center justify-center gap-2 w-full py-4 mt-6 text-white transition-all rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 font-kantumruy">
            <span class="text-xl">📍</span>
            <span>មើលទីតាំង</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

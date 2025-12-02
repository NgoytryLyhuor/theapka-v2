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
  <div 
    id="theapka-schedule-background" 
    class="w-full text-center h-[750px] lg:h-[850px] bg-center lg:bg-top bg-cover lg:bg-contain bg-no-repeat relative"
    :style="{ backgroundImage: `url('${props.backgroundImage}')` }"
  >
    <div class="absolute inset-0 bg-white opacity-50"></div>
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-full max-w-xl px-3 py-8 mx-auto text-black">
        <div class="mb-2 text-xl font-moulpali lg:mb-12">
          កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍
        </div>
        <div class="mt-3 text-sm leading-8 text-left font-kantumruy lg:text-base lg:leading-10">
          <!-- Schedule content can be added here -->
          <slot></slot>
        </div>
        <div class="flex-1 text-center">
          <a 
            class="font-bold" 
            :href="props.mapUrl" 
            target="_blank"
          >
            {{ props.location }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


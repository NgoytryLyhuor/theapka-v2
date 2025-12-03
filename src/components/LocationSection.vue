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
  <div class="w-full my-12 text-center">
    <div class="my-4 font-moulpali">ទីតាំងកម្មវិធីមង្គល</div>
    <div class="relative w-full max-w-xl mx-auto mb-4 font-dangrek">
      <div>{{ props.location }}</div>
      <div class="flex justify-center mt-5 mb-5">
        <!-- QR Code Image -->
        <img src="/images/qr-code.png" alt="QR Code" class="w-[250px] h-[250px]" />
      </div>
      <a 
        :href="props.mapUrl" 
        class="text-center text-blue-500 underline text-md" 
        target="_blank"
      >
        {{ props.mapUrl }}
      </a>
    </div>
  </div>
</template>


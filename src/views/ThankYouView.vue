<script setup>
import ThankYouSection from '../components/ThankYouSection.vue'

const eventConfig = {
  thankYouBackground: 'https://theapka.com/storage/01J4TYXR517E73RV2PRB75Y5ME.jpg'
}
</script>

<template>
  <div class="flex flex-wrap max-w-xl mx-auto">
    <ThankYouSection 
      :background-image="eventConfig.thankYouBackground"
    />
  </div>
</template>


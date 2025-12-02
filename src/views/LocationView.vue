<script setup>
import LocationSection from '../components/LocationSection.vue'

const eventConfig = {
  location: 'ភ្នំពេញ',
  mapUrl: 'https://goo.gl/maps/m6QhfxtiAx7g51yy6'
}
</script>

<template>
  <div class="flex flex-wrap max-w-xl mx-auto">
    <LocationSection 
      :location="eventConfig.location"
      :map-url="eventConfig.mapUrl"
    />
  </div>
</template>


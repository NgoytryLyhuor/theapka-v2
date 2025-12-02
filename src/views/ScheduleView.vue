<script setup>
import ScheduleSection from '../components/ScheduleSection.vue'

const eventConfig = {
  location: 'ភ្នំពេញ',
  mapUrl: 'https://goo.gl/maps/m6QhfxtiAx7g51yy6',
  scheduleBackground: 'https://theapka.com/storage/01J4TYV5XJP7PKF7RPH3KE6238.jpg'
}
</script>

<template>
  <div class="flex flex-wrap max-w-xl mx-auto">
    <ScheduleSection 
      :background-image="eventConfig.scheduleBackground"
      :location="eventConfig.location"
      :map-url="eventConfig.mapUrl"
    />
  </div>
</template>


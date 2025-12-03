<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { weddingConfig } from '../config/guests'
import CoverSection from '../components/CoverSection.vue'
import InvitationSection from '../components/InvitationSection.vue'
import ScheduleSection from '../components/ScheduleSection.vue'
import LocationSection from '../components/LocationSection.vue'
import ThankYouSection from '../components/ThankYouSection.vue'

const route = useRoute()

// Get guest name from URL slug (convert dashes back to spaces)
const guestName = computed(() => {
  const slug = route.params.guestSlug
  if (!slug) return ''
  // Convert dashes back to spaces for display
  return slug.replace(/-/g, ' ')
})
</script>

<template>
  <div class="flex flex-wrap max-w-xl mx-auto">
    <CoverSection :guest-name="guestName" />
    <InvitationSection />
    <ScheduleSection 
      :background-image="weddingConfig.scheduleBackground"
      :location="weddingConfig.location"
      :map-url="weddingConfig.mapUrl"
    />
    <LocationSection 
      :location="weddingConfig.location"
      :map-url="weddingConfig.mapUrl"
    />
    <ThankYouSection 
      :background-image="weddingConfig.thankYouBackground"
    />
  </div>
</template>


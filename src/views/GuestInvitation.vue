<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getGuest, formatGuestName, weddingConfig } from '../config/guests'
import CoverSection from '../components/CoverSection.vue'
import InvitationSection from '../components/InvitationSection.vue'
import ScheduleSection from '../components/ScheduleSection.vue'
import LocationSection from '../components/LocationSection.vue'
import ThankYouSection from '../components/ThankYouSection.vue'

const route = useRoute()

// Get guest data from config
const guest = computed(() => getGuest(route.params.guestSlug))
const guestName = computed(() => formatGuestName(guest.value))
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


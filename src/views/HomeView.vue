<script setup>
import { weddingConfig } from '../config/guests'
import CoverSection from '../components/CoverSection.vue'
import InvitationSection from '../components/InvitationSection.vue'
import ScheduleSection from '../components/ScheduleSection.vue'
import LocationSection from '../components/LocationSection.vue'
import ThankYouSection from '../components/ThankYouSection.vue'
</script>

<template>
  <div class="flex flex-wrap max-w-xl mx-auto">
    <!-- Home page shows invitation without specific guest name -->
    <CoverSection guest-name="" />
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

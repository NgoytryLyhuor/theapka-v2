<script setup>
import { ref, computed } from 'vue'

const nameInput = ref('')
const linkGenerated = ref(false)

// Get base URL
const baseUrl = window.location.origin

// Convert input to URL slug (spaces → dashes)
const urlSlug = computed(() => {
  return nameInput.value.trim().replace(/\s+/g, '-')
})

// Clean URL (no encoding, just dashes for spaces)
const cleanUrl = computed(() => {
  if (!urlSlug.value) return ''
  return `${baseUrl}/${urlSlug.value}`
})

const generateLink = () => {
  if (nameInput.value.trim()) {
    linkGenerated.value = true
  }
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(cleanUrl.value)
    alert('Link copied! តំណភ្ជាប់បានចម្លងហើយ!')
  } catch (err) {
    const textArea = document.createElement('textarea')
    textArea.value = cleanUrl.value
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    alert('Link copied! តំណភ្ជាប់បានចម្លងហើយ!')
  }
}

const openLink = () => {
  window.open(cleanUrl.value, '_blank')
}

// Share message text
const shareMessage = computed(() => {
  return `💒 សិរីមង្គលអាពាហ៍ពិពាហ៍ 💕\n\nសូមគោរពអញ្ជើញ ${nameInput.value}\nមកចូលរួមពិធីមង្គលអាពាហ៍ពិពាហ៍\n\nង៉ុយទ្រី លីហួរ & ជិន ស្រីរតន៍\n\n👆 សូមចុចតំណភ្ជាប់ខាងលើ`
})

// Share to Telegram
const shareToTelegram = () => {
  const text = encodeURIComponent(shareMessage.value)
  const url = encodeURIComponent(cleanUrl.value)
  window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank')
}

const reset = () => {
  nameInput.value = ''
  linkGenerated.value = false
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen px-4" style="background: linear-gradient(to bottom right, #fdf2f8, white, #fff1f2);">
    <div class="w-full max-w-md p-8 bg-white rounded-2xl" style="box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
      <!-- Header -->
      <div class="mb-8 text-center">
        <h1 class="mb-2 text-2xl font-moulpali" style="color: #db2777;">បង្កើតតំណភ្ជាប់អញ្ជើញ</h1>
        <p class="font-kantumruy" style="color: #6b7280;">Create Invitation Link</p>
      </div>

      <!-- Form -->
      <div v-if="!linkGenerated" class="space-y-6">
        <!-- Name Input -->
        <div>
          <label class="block mb-2 text-sm font-medium font-kantumruy" style="color: #374151;">
            ឈ្មោះភ្ញៀវពេញ / Guest Full Name
          </label>
          <input 
            v-model="nameInput"
            type="text" 
            placeholder="ឧ. លោក សុខា និង ភរិយា"
            class="w-full px-4 py-3 font-dangrek rounded-xl"
            style="color: #1f2937; border: 2px solid #fbcfe8; outline: none;"
            @keyup.enter="generateLink"
            @focus="$event.target.style.borderColor = '#f472b6'"
            @blur="$event.target.style.borderColor = '#fbcfe8'"
          />
          <p class="mt-1 text-xs font-kantumruy" style="color: #9ca3af;">ឈ្មោះនេះនឹងបង្ហាញនៅលើការ្តអញ្ជើញ</p>
          
          <!-- Live Preview -->
          <div v-if="urlSlug" class="p-2 mt-2 text-sm rounded-lg font-kantumruy" style="background-color: #fdf2f8; color: #db2777;">
            URL: /{{ urlSlug }}
          </div>
        </div>

        <!-- Generate Button -->
        <button 
          @click="generateLink"
          :disabled="!nameInput.trim()"
          class="w-full py-3 text-white font-kantumruy rounded-xl"
          :style="{ 
            backgroundColor: nameInput.trim() ? '#ec4899' : '#d1d5db',
            cursor: nameInput.trim() ? 'pointer' : 'not-allowed'
          }"
          @mouseenter="$event.target.style.backgroundColor = nameInput.trim() ? '#db2777' : '#d1d5db'"
          @mouseleave="$event.target.style.backgroundColor = nameInput.trim() ? '#ec4899' : '#d1d5db'"
        >
          បង្កើតតំណភ្ជាប់ / Generate Link
        </button>
      </div>

      <!-- Result -->
      <div v-else class="space-y-6">
        <!-- Success Icon -->
        <div class="text-center">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl rounded-full" style="background-color: #dcfce7;">
            ✅
          </div>
          <p class="font-kantumruy" style="color: #16a34a;">Link created successfully!</p>
        </div>

        <!-- Guest Info -->
        <div class="p-4 rounded-xl" style="background-color: #f9fafb;">
          <p class="mb-1 text-sm font-kantumruy" style="color: #6b7280;">Guest Name / ឈ្មោះភ្ញៀវ:</p>
          <p class="text-lg font-dangrek" style="color: #1f2937;">{{ nameInput }}</p>
        </div>

        <!-- Generated Link -->
        <div class="p-4 rounded-xl" style="background-color: #fdf2f8; border: 2px solid #fbcfe8;">
          <p class="mb-2 text-sm font-kantumruy" style="color: #6b7280;">Invitation Link:</p>
          <p class="text-sm break-all font-dangrek" style="color: #db2777;">{{ cleanUrl }}</p>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-3">
          <button 
            @click="copyLink"
            class="flex-1 py-3 text-white font-kantumruy rounded-xl"
            style="background-color: #ec4899;"
            @mouseenter="$event.target.style.backgroundColor = '#db2777'"
            @mouseleave="$event.target.style.backgroundColor = '#ec4899'"
          >
            📋 Copy Link
          </button>
          <button 
            @click="openLink"
            class="flex-1 py-3 font-kantumruy rounded-xl"
            style="color: #db2777; border: 2px solid #ec4899; background-color: white;"
            @mouseenter="$event.target.style.backgroundColor = '#fdf2f8'"
            @mouseleave="$event.target.style.backgroundColor = 'white'"
          >
            🔗 Open Link
          </button>
        </div>

        <!-- Share to Telegram -->
        <div>
          <p class="mb-3 text-sm text-center font-kantumruy" style="color: #6b7280;">Share to / ចែករំលែកទៅ</p>
          <button 
            @click="shareToTelegram"
            class="w-full py-3 text-white font-kantumruy rounded-xl flex items-center justify-center gap-2"
            style="background-color: #0088cc;"
            @mouseenter="$event.target.style.backgroundColor = '#006699'"
            @mouseleave="$event.target.style.backgroundColor = '#0088cc'"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            Share to Telegram
          </button>
        </div>

        <!-- Create Another -->
        <button 
          @click="reset"
          class="w-full py-2 font-kantumruy"
          style="color: #6b7280;"
          @mouseenter="$event.target.style.color = '#ec4899'"
          @mouseleave="$event.target.style.color = '#6b7280'"
        >
          ← Create Another Link
        </button>
      </div>

      <!-- Back to Home -->
      <div class="mt-6 text-center">
        <router-link 
          to="/" 
          class="text-sm font-kantumruy"
          style="color: #9ca3af;"
        >
          🏠 Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

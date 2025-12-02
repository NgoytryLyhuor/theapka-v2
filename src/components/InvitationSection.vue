<script setup>
// Modern Invitation Section
</script>

<template>
  <div class="w-full py-16 bg-gradient-to-b from-rose-50 to-white">
    <div class="max-w-md px-6 mx-auto text-center">
      
      <!-- Decorative top -->
      <div class="flex items-center justify-center gap-4 mb-8">
        <div class="w-16 h-px bg-gradient-to-r from-transparent to-rose-300"></div>
        <span class="text-3xl">💒</span>
        <div class="w-16 h-px bg-gradient-to-l from-transparent to-rose-300"></div>
      </div>

      <!-- Title -->
      <h2 class="mb-6 text-2xl text-rose-800 font-moulpali">
        យើងខ្ញុំមានកិត្តិយស
      </h2>

      <!-- Invitation Card -->
      <div class="p-8 bg-white shadow-xl invitation-card rounded-3xl">
        <div class="mb-6 text-4xl">🙏</div>
        
        <p class="mb-6 leading-8 text-gray-700 font-kantumruy">
          សូមគោរពអញ្ជើញ ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា 
          មកចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្តី ជ័យមង្គល 
          ក្នុងពិធីអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ។
        </p>

        <!-- Decorative line -->
        <div class="flex items-center justify-center gap-3">
          <div class="w-8 h-px bg-rose-200"></div>
          <span class="text-rose-400">❤</span>
          <div class="w-8 h-px bg-rose-200"></div>
        </div>
      </div>

      <!-- Bottom decoration -->
      <div class="flex justify-center gap-2 mt-8">
        <span class="text-2xl animate-bounce" style="animation-delay: 0s;">🌸</span>
        <span class="text-2xl animate-bounce" style="animation-delay: 0.2s;">🌺</span>
        <span class="text-2xl animate-bounce" style="animation-delay: 0.4s;">🌸</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.invitation-card {
  border: 2px solid #fce7f3;
  position: relative;
}

.invitation-card::before {
  content: '';
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  background: linear-gradient(135deg, #f472b6, #fb7185, #f472b6);
  border-radius: 1.5rem;
  z-index: -1;
  opacity: 0.3;
}
</style>

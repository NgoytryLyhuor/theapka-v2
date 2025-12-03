<script setup>
const props = defineProps({
  backgroundImage: {
    type: String,
    default: 'https://theapka.com/storage/01J4TYXR517E73RV2PRB75Y5ME.jpg'
  }
})
</script>

<template>
  <div 
    id="theapka-thank-you" 
    class="w-full text-center h-[750px] relative overflow-hidden"
  >
    <!-- Background Image as img tag for PDF support -->
    <img 
      :src="props.backgroundImage" 
      alt="thank you background" 
      class="absolute inset-0 object-cover object-center w-full h-full"
      crossorigin="anonymous"
    />
    <div class="absolute inset-0 bg-white opacity-30"></div>
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-full px-3 mx-auto text-center text-white">
        <div 
          class="max-w-xl p-2 mx-auto text-xl leading-8 font-dangrek rounded-2xl" 
          style="background: #cfbdb470"
        >
          <img 
            src="https://theapka.com/storage/templates/chhay/images/thank.gif" 
            class="h-24 mx-auto" 
            alt="thank you"
          >
          <div class="mt-4">
            វត្តមានឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
            ជាកិត្តិយសដ៏ឧត្តុង្គឧត្តម ចំពោះគ្រួសាររបស់យើងខ្ញុំ។
          </div>
          <div class="flex justify-center mx-auto">
            <img 
              v-for="n in 5" 
              :key="n"
              src="https://theapka.com/storage/templates/chhay/images/flower_2.gif" 
              class="h-12" 
              alt="flower"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


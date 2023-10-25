<script setup></script>

<template>
  <footer  id="basPage"
    class="footer footer-center p-8 h-[30vh] snap-item text-primary-content"
  >
    <div class="max-w-2xl mx-auto text-white">
      <div class="text-center">
        <div class="flex justify-center my-10">
          <p class="text-sm mr-2 text-primary">made with</p>
          <img src="../assets/Logo-Vuejs.png" class="h-12 md:h-16" />
          <p class="text-sm mr-2 text-primary">and</p>
          <img src="../assets/Tailwind.png" class="h-12 md:h-16" />
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400 pb-8"
      >
        <p class="order-2 md:order-1 mt-8 md:mt-0">
          &copy; 2023 All rights reserved by
          <span class="text-secondary">Ilyas</span>
        </p>
        <div class="order-1 md:order-2">
          <span class="px-2 border-l"
            >Privacy <span class="text-secondary">Policy</span></span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

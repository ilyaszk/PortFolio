<script setup>
import { ref, onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import Presentation from "./components/Presentation.vue";
import Competences from "./components/Competences.vue";
import BasPage from "./components/BasPage.vue";
import Contact from "./components/Contact.vue";
import LoadingScreen from "./components/LoadingScreen.vue";

const isLoadingScreen = ref(true);
const isLoadingHome = ref(false);
onMounted(() => {
  setTimeout(() => {
    isLoadingScreen.value = false; // Update the ref value
  }, 1800); // Adjust the time as needed

  setTimeout(() => {
    isLoadingHome.value = true; // Update the ref value
  }, 3000);
});
</script>

<template>
  <Transition name="fade">
    <LoadingScreen v-if="isLoadingScreen"></LoadingScreen>
  </Transition>
  <Transition name="fade">
    <div v-if="isLoadingHome" class="snap-container">
      <NavBar></NavBar>
      <Presentation></Presentation>
      <Competences></Competences>
      <div class="h-screen snap-item">projet</div>
      <Contact></Contact>
      <BasPage></BasPage>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active in 2.1.8 */ {
  opacity: 0;
}
</style>

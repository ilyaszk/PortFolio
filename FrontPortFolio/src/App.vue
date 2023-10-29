<script setup>
import { ref, onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import Presentation from "./components/Presentation.vue";
import Competences from "./components/Competences.vue";
import BasPage from "./components/BasPage.vue";
import Contact from "./components/Contact.vue";
import BonRencontre from "./components/BonRencontre.vue";
import LoadingScreen from "./components/LoadingScreen.vue";

const isLoadingScreen = ref(true);
const isLoadingHome = ref(false);
onMounted(() => {
  setTimeout(() => {
    isLoadingScreen.value = false; // Update the ref value
  }, 1800); // Adjust the time as needed
  setTimeout(() => {
    isLoadingHome.value = true; // Update the ref value
  }, 3300);
});

const showEncre = () => {
  document.getElementById("encre").setAttribute("style", "display: none;");
};
</script>

<template>
  <Transition name="fade">
    <LoadingScreen v-if="isLoadingScreen"></LoadingScreen>
  </Transition>
  <Transition name="fade">
    <div v-if="isLoadingHome" class="snap-container pricipal">
      <NavBar @onfocus="showEncre"></NavBar>
      <Presentation></Presentation>
      <Competences></Competences>
      <BonRencontre></BonRencontre>
      <Contact></Contact>
      <BasPage></BasPage>
      <nav class="gotoTop">
        <a href="#navBar">&#9650;</a>
      </nav>
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

.pricipal {
  position: relative;
}

.gotoTop {
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 2rem;
  font-size: 3rem;
  z-index: 100;
}
.gotoTop:hover {
  scale: 1.2;
  transition: all 0.5s ease-in-out;
}
.gotoTop a {
  text-decoration: none;
  color: #939597;
}

.gotoTop a:hover {
  color: #cf5c78;
  transition: all 0.5s ease-in-out;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <div class="min-h-screen snap-item bg-tertiary">
    <div class="container flex justify-center min-h-screen items-center">
      <div
        id="default-carousel"
        class="relative w-[90vw] h-[90vh] px-20 pb-14"
        data-carousel="{{ state }}"
      >
        <!-- Carousel wrapper -->
        <div class="relative overflow-hidden rounded-lg md:h-[80vh]">
          <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div class="flex bg-white h-full items-center">
              <div class="w-2/5">
                <img src="../assets/FrontEnd.jpg" alt="" />
              </div>
              <div class="w-3/5 px-10">
                <h1 class="text-4xl font-bold my-2 text-secondary">
                  Front-end
                </h1>
                <p class="text-lg text-primary">
                  I have a passion for building web applications from the ground
                  up and transforming creative concepts into interactive
                  experiences in the browser.
                </p>
                <p class="text-lg font-semibold text-secondary my-2">
                  Languages I speak:
                </p>
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#HTML</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#CSS</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#JS</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#VUEJS</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#REACTJS</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#ANGULAR</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#ANGULARJS</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#FLUTTER</span
                >
                <p class="text-lg font-semibold text-secondary my-2">
                  Dev Tools:
                </p>
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#VS Code</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#IntelliJ</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#Bootstrap</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#TailWind</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#Github</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#Copilot</span
                >
              </div>
            </div>
          </div>
          <!-- Item 2 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div class="flex bg-white h-full items-center">
              <div class="w-2/5">
                <img src="../assets/BackEnd.jpg" alt="" />
              </div>
              <div class="w-3/5 px-10">
                <h1 class="text-4xl font-bold my-2 text-secondary">Back-end</h1>
                <p class="text-lg text-primary">
                  I excel in developing server-side solutions and backend
                  systems, turning complex ideas into robust and efficient
                  functionality behind the scenes.
                </p>
                <p class="text-lg font-semibold text-secondary my-2">
                  Languages I speak:
                </p>
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#JAVA/J2EE</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#PHP</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#SYMFONY</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#PostgreSQL</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#MySQL</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#HIBERNATE</span
                >
                <p class="text-lg font-semibold text-secondary my-2">
                  Dev Tools:
                </p>
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#VS Code</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#IntelliJ</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#Linux</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#Postman</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#Github</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#Copilot</span
                >
              </div>
            </div>
          </div>
          <!-- Item 3 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div class="flex bg-white h-full items-center">
              <div class="w-2/5">
                <img src="../assets/softSkills.jpg" alt="" />
              </div>
              <div class="w-3/5 px-10">
                <h1 class="text-4xl font-bold my-2 text-secondary">
                  Soft-skills
                </h1>
                <p class="text-lg text-primary">
                  I possess valuable soft skills that enhance my effectiveness
                  as a developer and collaborator. These include strong
                  communication and teamwork.
                </p>
                <p class="text-lg font-semibold text-secondary my-2">
                  Languages I speak:
                </p>
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#FRENCH</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#ENGLISH</span
                >
                <p class="text-lg font-semibold text-secondary my-2">
                  Dev Tools:
                </p>
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#Communication</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#Teamwork</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#Problem-solving</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#Adaptability</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
                  >#Self-control</span
                >
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#Positivity</span
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Slider indicators -->
        <div
          class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
        >
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary dark:bg-gray-800/30 group-hover:bg-secondary dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary dark:bg-gray-800/30 group-hover:bg-secondary dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

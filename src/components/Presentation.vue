<script setup>
const words = [
  "Hello, I'm Ilyas",
  "I'm a",
  " Full-Stack",
  "developer based in France,",
  "I love to develop",
  "websites",
  "and",
  "applications.",
  "I hope you will enjoy my Portfolio and don't",
  "hesitate to",
  "contact me.",
];

let i = 0;
let j = 0;
let currentWord = "";
let typewriterElement;
const type = () => {
  currentWord = words[i];
  typewriterElement = document.getElementById(`typewriter${i + 1}`);
  console.log("typewriterElement", i);

  if (typewriterElement) {
    typewriterElement.textContent = currentWord.substring(0, j + 1);
    j++;
    if (j === currentWord.length) {
      i++;
      j = 0;
    }
  }
  if (i !== words.length) {
    setTimeout(type, 30);
  }
};
type();
</script>
<template>
  <div class="flex justify-center h-screen snap-item px-20 pb-9">
    <div class="my-auto w-1/2 flex justify-end">
      <nav class="w-fit">
        <ul>
          <li>
            <a
              href="#default-carousel"
              class="flex justify-end items-center px-16 py-9 hover:px-24 text-3xl hover:text-secondary text-primary font-bold transform transition-all duration-1000"
            >
              COMPETENCES
            </a>
          </li>

          <li>
            <a
              href=""
              class="flex justify-end items-center px-16 py-9 hover:px-24 text-3xl hover:text-secondary text-primary font-bold transform transition-all duration-1000"
            >
              PROJECTS
            </a>
          </li>

          <li>
            <a
              href="#contact"
              class="flex justify-end items-center px-16 py-9 hover:px-24 text-3xl hover:text-secondary text-primary font-bold transform transition-all duration-1000"
              >CONTACT
            </a>
          </li>

          <li>
            <a
              href="#basPage"
              class="flex justify-end items-center px-16 py-9 hover:px-24 text-3xl hover:text-secondary text-primary font-bold transform transition-all duration-1000"
            >
              INFORMATIONS
            </a>
          </li>
        </ul>
      </nav>
      <div class="w-1 bg-secondary me-24"></div>
    </div>
    <div class="my-auto text-start w-1/2">
      <h1 id="typewriter1" class="text-5xl font-bold text-primary"></h1>

      <div class="flex">
        <p
          id="typewriter2"
          class="text-2xl font-semibold text-primary mt-2"
        ></p>
        &nbsp;
        <span
          id="typewriter3"
          class="text-2xl font-semibold text-secondary mt-2"
        >
        </span>
        &nbsp;
        <p id="typewriter4" class="text-2xl font-semibold text-primary mt-2">
          <br />
        </p>
      </div>

      <div class="flex">
        <p
          id="typewriter5"
          class="text-2xl font-semibold text-primary mt-2"
        ></p>
        &nbsp;
        <span
          id="typewriter6"
          class="text-2xl font-semibold text-secondary mt-2"
        ></span>
        &nbsp;
        <p
          id="typewriter7"
          class="text-2xl font-semibold text-primary mt-2"
        ></p>
        &nbsp;
        <span
          id="typewriter8"
          class="text-2xl font-semibold text-secondary mt-2"
        ></span>
      </div>
      <p id="typewriter9" class="text-2xl font-semibold text-primary mt-2"></p>
      <div class="flex">
        <p
          id="typewriter10"
          class="text-2xl font-semibold text-primary mt-2"
        ></p>
        &nbsp;
        <span
          id="typewriter11"
          class="text-2xl font-semibold text-secondary mt-2"
        ></span>
      </div>
    </div>
  </div>
</template>

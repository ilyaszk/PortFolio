<script>
import axios from "axios";
import CVFile from "../download/CV-Ilyas-Zahafkradra.pdf"; // Assurez-vous que le chemin d'accès est correct

export default {
  data() {
    return {
      filesrc: {
        title: "CV_Ilyas_Zahaf-kradra.pdf",
        src: CVFile,
      },
    };
  },
  methods: {
    forceFileDownload(response, title) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", title);
      document.body.appendChild(link);
      link.click();
    },
    downloadWithAxios(url, title) {
      console.log(url, title);
      axios({
        method: "get",
        url,
        responseType: "arraybuffer",
      })
        .then((response) => {
          this.forceFileDownload(response, title);
        })
        .catch(() => console.log("error occured"));
    },
  },
};
</script>

<template>
  <nav
    id="navBar"
    class="flex justify-between px-20 py-9 items-center snap-start bg-white"
  >
    <div class="flex">
      <svg
        id="Layer_1"
        style="enable-background: new 0 0 65 65"
        version="1.1"
        x="0px"
        y="0px"
        width="44"
        height="42"
        viewBox="0 0 68 68"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <path
            class="st0"
            d="M6,9.3h16c0.4,0,0.8-0.3,0.8-0.8S22.4,7.8,22,7.8H6c-0.4,0-0.8,0.3-0.8,0.8S5.6,9.3,6,9.3z"
          />
          <path
            class="st0"
            d="M26,9.3h2c0.4,0,0.8-0.3,0.8-0.8S28.4,7.8,28,7.8h-2c-0.4,0-0.8,0.3-0.8,0.8S25.6,9.3,26,9.3z"
          />
          <path
            class="st0"
            d="M64,23.8c-0.4,0-0.8,0.3-0.8,0.8v7c0,0.4,0.3,0.8,0.8,0.8s0.8-0.3,0.8-0.8v-7C64.8,24.1,64.4,23.8,64,23.8z"
          />
          <path
            class="st0"
            d="M64,34.8c-0.4,0-0.8,0.3-0.8,0.8v1c0,0.4,0.3,0.8,0.8,0.8s0.8-0.3,0.8-0.8v-1C64.8,35.1,64.4,34.8,64,34.8z"
          />
          <path
            class="st0"
            d="M2.3,36.5c0,0.4,0.3,0.8,0.8,0.8s0.8-0.3,0.8-0.8v-1.3H5c0.4,0,0.8-0.3,0.8-0.8S5.4,33.8,5,33.8H3.8v-1.3   c0-0.4-0.3-0.8-0.8-0.8s-0.8,0.3-0.8,0.8v1.3H1c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8h1.3V36.5z"
          />
          <path
            class="st0"
            d="M58,8.3h1.3v1.3c0,0.4,0.3,0.8,0.8,0.8s0.8-0.3,0.8-0.8V8.3H62c0.4,0,0.8-0.3,0.8-0.8S62.4,6.8,62,6.8h-1.3   V5.5c0-0.4-0.3-0.8-0.8-0.8s-0.8,0.3-0.8,0.8v1.3H58c-0.4,0-0.8,0.3-0.8,0.8S57.6,8.3,58,8.3z"
          />
          <path
            class="st0"
            d="M64.7,55.3c0,0,0-0.1-0.1-0.1c0,0,0-0.1,0-0.1l-7.8-9.8V13.5c0-0.4-0.3-0.8-0.8-0.8H10c-0.4,0-0.8,0.3-0.8,0.8   v31.7L1.4,55c0,0,0,0.1,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1v4c0,0.4,0.3,0.8,0.8,0.8h62   c0.4,0,0.8-0.3,0.8-0.8v-4c0,0,0-0.1,0-0.1C64.7,55.4,64.7,55.3,64.7,55.3z M10.8,14.3h44.5v30.5H10.8V14.3z M63.3,58.8H2.8v-2.5   H47c0.4,0,0.8-0.3,0.8-0.8s-0.3-0.8-0.8-0.8H3.6l6.8-8.5h45.3l6.8,8.5H53c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8h10.3V58.8z"
          />
          <path
            class="st0"
            d="M52,16.8H14c-0.4,0-0.8,0.3-0.8,0.8v24c0,0.4,0.3,0.8,0.8,0.8h38c0.4,0,0.8-0.3,0.8-0.8v-24   C52.8,17.1,52.4,16.8,52,16.8z M51.3,40.8H14.8V18.3h36.5V40.8z"
          />
          <polygon
            class="st0"
            points="32.7,30.3 34.9,32.5 36,31.4 33.8,29.2 36,28.1 30,26.5 31.6,32.5  "
          />
          <path
            class="st0"
            d="M50.3,54.8c-0.3-0.1-0.6-0.1-0.8,0.2c-0.1,0.1-0.2,0.3-0.2,0.5s0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2   c0.1,0,0.2,0,0.3,0c0.1,0,0.2-0.1,0.2-0.2c0.1-0.1,0.1-0.2,0.2-0.2c0-0.1,0.1-0.2,0.1-0.3c0-0.2-0.1-0.4-0.2-0.5   C50.5,54.9,50.4,54.8,50.3,54.8z"
          />
        </g>
      </svg>
      <h1 class="text-4xl ps-3 text-secondary font-bold select-none">IZK</h1>
    </div>
    <div class="flex items-center">
      <ul class="flex items-center space-x-6">
        <li>
          <!-- hover  font bold secondary colr -->
          <a
            class="cursor-pointer text-xl text-primary hover:text-secondary hover:font-bold transition duration-500 ease-in-out"
            @click="downloadWithAxios(filesrc.src, filesrc.title)"
            >Resume</a
          >
        </li>

        <li>
          <a
            class="cursor-pointer"
            href="https://github.com/ilyaszk"
            target="_blank"
          >
            <svg
              class="fill-current text-primary hover:text-secondary transition duration-500 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 30 30"
            >
              <path
                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            class="cursor-pointer"
            href="https://www.linkedin.com/in/ilyas-zahaf-kradra-524702221/"
            target="_blank"
          >
            <svg
              class="fill-current text-primary hover:text-secondary transition duration-500 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 50 50"
            >
              <path
                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

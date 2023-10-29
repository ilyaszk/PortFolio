<script>
import emailjs from "emailjs-com";
import VueBasicAlert from "vue-basic-alert";

export default {
  name: "Contact",
  components: {
    VueBasicAlert,
  },
  data() {
    return {
      user_name: "",
      user_email: "",
      user_message: "",
      isLoading: false,
    };
  },
  methods: {
    sendEmail() {
      const form = this.$refs.myForm;
      this.isLoading = true;
      //Configure your emailjs service on https://dashboard.emailjs.com
      emailjs
        .sendForm(
          "service_ivq2mhc",
          "template_ggqi37p",
          form,
          "Lh4-kbC9ZWm1ULYUq"
        )
        .then(
          (result) => {
            this.user_name = "";
            this.user_email = "";
            this.user_message = "";
            this.isLoading = false;
            this.$refs.alert.showAlert(
              "success", // There are 4 types of alert: success, info, warning, error
              "Your message has been sent successfully!", // Icon styles: now only 2 styles 'solid' and 'regular'
              "Success", // Header of the alert
              {
                iconSize: 35, // Size of the icon (px)
                iconType: "solid", // Icon styles: now only 2 styles 'solid' and 'regular'
                position: "top right",
              } // Position of the alert 'top right', 'top left', 'bottom left', 'bottom right'
            );
          },
          (error) => {
            alert(error.message);
          }
        );
    },
  },
};
</script>

<template>
  <!-- loading during the sending of the email -->
  <div
    v-if="isLoading"
    class="fixed top-0 left-0 w-full h-full z-50 bg-primary/60"
  >
    <div class="flex justify-center items-center w-full h-full">
      <div
        class="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-secondary"
      ></div>
    </div>
  </div>
  <section
    id="contact"
    class="min-h-screen snap-item bg-tertiary pb-7 flex justify-center items-center"
  >
    <vue-basic-alert :duration="300" :closeIn="3500" ref="alert" />

    <div class="container">
      <h2 class="text-4xl text-primary font-bold text-center pt-8">
        Contact Me
      </h2>
      <p class="text-lg text-primary font-bold text-center mt-4">
        If you have any questions or something to discuss, please drop me a
        line. I will get back to you as soon as possible. Thank you!
      </p>
      <form ref="myForm" @submit.prevent="sendEmail" class="space-y-8 my-4">
        <div>
          <label for="name" class="block mb-2 text-md font-bold text-primary">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="user_name"
            class="form-input shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name"
            required
          />
        </div>
        <div>
          <label for="email" class="block mb-2 text-md font-bold text-primary">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="user_email"
            class="form-input shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name@xyz.com"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-md font-bold text-primary"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            v-model="user_message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-white hover:text-secondary transition-all duration-500"
        >
          Send message
        </button>
      </form>
    </div>
  </section>
</template>

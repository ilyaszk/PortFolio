<script setup></script>
<template>
  <section
    id="contact"
    class="min-h-screen snap-item bg-tertiary pb-7 relative"
  >
    <div class="w-1/2 mx-auto">
      <h2 class="text-4xl text-primary font-bold text-center pt-8">
        Contact Me
      </h2>
      <p class="text-lg text-primary font-bold text-center mt-4">
        If you have any questions or something to discuss, please drop me a
        line. I will get back to you as soon as possible. Thank you!
      </p>
      <form action="#" class="space-y-8 my-4">
        <div>
          <label for="email" class="block mb-2 text-md font-bold text-primary">
            Your email
          </label>
          <input
            type="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name@xyz.com"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-md font-bold text-primary"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Let us know how we can help you"
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

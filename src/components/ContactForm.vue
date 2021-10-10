<template>
  <div class="lg:flex lg:flex-row lg:justify-evenly lg:mt-10 lg:divide-x-2">
    <div class="hidden lg:w-1/2">
      <div class="lg:my-12">
        <h3 class="lg:text-2xl lg:font-bold">Address:</h3>
        <p class="lg:text-l">18415 Some Rd,<br> Avon Lake, OH, 44012  </p>
      </div>
     <div class="lg:my-12">
        <h3 class="lg:text-2xl lg:font-bold">Phone Number:</h3>
        <p class="lg:text-l">(123)456-7890</p>
      </div>
      <div class="lg:my-12">
        <h3 class="lg:text-2xl lg:font-bold">Hours:</h3>
        <h4 class="lg:text-xl lg:font-medium">Monday - Thursday</h4>
        <p class="lg:text-l">11 AM - 11 PM</p>
        <h4 class="lg:text-xl lg:font-medium">Friday & Saturday</h4>
        <p class="lg:text-l">11 AM - 1 AM</p>
        <h4 class="lg:text-xl lg:font-medium">Sunday</h4>
        <p class="lg:text-l">12 PM - 8 PM</p>
      </div>
    </div>

    <div class="mt-10 lg:w-1/2">
      <form class="flex flex-col mx-auto">
        <div class="my-4 w-4/5 mx-auto">
          <label for="name" class="text-xl">Name</label><br>
          <input class="border border-opacity-75 w-4/5 cursor-text" v-model="name" type="text" for="name" placeholder="John Smith">
        </div>
        <div class="my-4 mx-auto w-4/5">
          <label for="email" class="text-xl">Email</label><br>
          <input class="border border-opacity-75 w-4/5 cursor-text" v-model="email" type="email" for="email" placeholder="jsmith@gmail.com">
        </div>
        <div class="my-4 w-4/5 mx-auto">
          <label for="phone" class="text-xl">Phone</label><br>
          <input class="border border-opacity-75 w-4/5 cursor-text" v-model="phone" type="tele" for="phone" placeholder="123-456-7890">
        </div>
        <div class="my-4 w-4/5 mx-auto">
          <label class="text-xl" for="name">Message</label><br>
          <textarea class="border w-4/5" for="message" v-model="message" rows="5" placeholder="Enter message here"></textarea>
        </div>
        <input type="button"
          value="Send Message"
          class="self-center mt-10 hover:text-tertiary hover:bg-primary text-primary bg-transparent font-semibold py-2 px-4 border border-primary hover:border-transparent rounded w-1/4"
          v-on:click="submitContactForm"
        >
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      phone: null,
      message: ''
    }
  },
  methods: {
    submitContactForm(e) {
      e.preventDefault()
      let formInfo = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      }
      axios.post('/api/contact', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      })
      this.name = '',
      this.email = '',
      this.phone = null,
      this.message = ''
    }
  }
}
</script>

<style scoped>

</style>

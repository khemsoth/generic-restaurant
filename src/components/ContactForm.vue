<template>
  <div class="flex flex-row justify-evenly mt-10">
    <div class="w-1/2"> 
      <div class="my-12">
        <h3 class="text-2xl font-bold">Address:</h3>
        <p class="text-l">18415 Some Rd,<br> Avon Lake, OH, 44012  </p>
      </div>
     <div class="my-12">
        <h3 class="text-2xl font-bold">Phone Number:</h3>
        <p class="text-l">(123)456-7890</p>
      </div>
      <div class="my-12">
        <h3 class="text-2xl font-bold">Hours:</h3>
        <h4 class="text-xl font-medium">Monday - Thursday</h4>
        <p class="text-l">11 AM - 11 PM</p>
        <h4 class="text-xl font-medium">Friday & Saturday</h4>
        <p class="text-l">11 AM - 1 AM</p>
        <h4 class="text-xl font-medium">Sunday</h4>
        <p class="text-l">12 PM - 8 PM</p>
      </div>
    </div>

    <div class="w-1/2">
      <form class="flex flex-col mx-auto">
        <div class="my-4 w-4/5 mx-auto"> 
          <label for="name" class="text-xl">Name</label><br>
          <input class="border border-opacity-75 w-4/5" type="text" for="name" placeholder="John Smith">
        </div>
        <div class="my-4 mx-auto w-4/5">
          <label for="email" class="text-xl">Email</label><br>
          <input class="border border-opacity-75  w-4/5" type="email" for="email" placeholder="jsmith@gmail.com">
        </div>
        <div class="my-4 w-4/5 mx-auto">
          <label for="phone" class="text-xl">Phone</label><br>
          <input class="border border-opacity-75 w-4/5" type="tele" pattern="[0-9]{3}-[0-9](3}-[0-9]{4}" for="phone" placeholder="123-456-7890">
        </div>
        <div class="my-4 w-4/5 mx-auto">  
          <label class="text-xl" for="name">Message</label><br>
          <textarea class="border w-4/5" for="message" rows="5" placeholder="Enter message here"></textarea>
        </div>
        <input type="button" 
          value="Send Message" 
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-1/5 mx-10 self-end"
          v-on:click="submitContactForm"
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {

    }
  },
  methods: {
    submitContactForm(e) {
      e.preventDefault
      console.log('submitted contact form')
    }
  }
}
</script>

<style scoped>

</style>
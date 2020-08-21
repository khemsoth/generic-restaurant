<template>
  <div class="flex flex-row justify-end">
    <form class="flex flex-col w-1/2">
      <div class="my-4"> 
        <label for="name">Name: </label>
        <input class="border border-opacity-75 w-2/5" type="text" for="name" placeholder="John Smith">
      </div>
      <div class="my-4">
        <label for="email">Email: </label>
        <input class="border border-opacity-75  w-2/5" type="email" for="email" placeholder="jsmith@gmail.com">
      </div>
      <div class="my-4">
        <label for="phone">Phone: </label>
        <input class="border border-opacity-75 w-2/5" type="tele" pattern="[0-9]{3}-[0-9](3}-[0-9]{4}" for="phone" placeholder="123-456-7890">
      </div>
      <div class="my-4">  
        <label class="" for="name">Message: </label>
        <textarea class="border w-2/5" for="message" placeholder="Enter message here"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
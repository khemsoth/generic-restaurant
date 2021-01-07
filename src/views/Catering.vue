<template>
  <div>
    <img src="../assets/neonbrand-kbcqR60zWeo-unsplash.jpg" alt="" class="h-screen w-screen" >
    <h2
    class="text-3xl m-5 text-left text-primary font-bold"
    >
    Choose from one of our options!
    </h2>
    <ul class="grid grid-cols-2 gap-1">
      <li 
      v-for="option in options" 
      :key="option.id"
      class="mx-auto my-4 p-6 border-2 border-primary w-3/4 h-56 text-primary"
      >
        <p class="text-xl italic">{{ option.name }}</p>
        <p class="mt-6">{{ option.desc }}</p>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  name: 'Catering',
  components: {
    Footer
  },
  data() {
    return {
      options: [
        {
          name: 'Package 1',
          desc: 'Adipisicing consectetur ad proident aliquip irure esse duis magna.',
        },
        {
          name: 'Package 2',
          desc: 'Dolor velit ea proident ullamco voluptate cupidatat ut voluptate sunt culpa nisi.'
        },
        {
          name: 'Package 3',
          desc: 'Reprehenderit minim esse consequat tempor.'
        },
        {
          name: 'Package 4',
          desc: 'Aliquip veniam sunt laboris proident velit in labore qui minim nisi.'
        },
      ]
    }
  }
}
</script>

<style>

  .option {

  }

</style>
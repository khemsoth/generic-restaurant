<template>
  <div>
    This will be the catering page
    <h2
    class="text-3xl m-5 text-left font-bold"
    >
    Choose from one of our options!
    </h2>
    <ul class="grid grid-cols-2 gap-1">
      <li 
      v-for="option in options" 
      :key="option.id"
      :style="{ backgroundImage: option.image }"
      class="mx-auto my-4 p-6 border-2 w-3/4 h-56 bg-cover bg-no-repeat"
      >
        <div>{{ option.name }}</div>
        <div>{{ option.desc }}</div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Catering',
  data() {
    return {
      options: [
        {
          name: 'Package 1',
          desc: 'Adipisicing consectetur ad proident aliquip irure esse duis magna.',
          image: `url(${require('../assets/alexander-kovacs-uo9TCt61o30-unsplash.jpg')})`
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
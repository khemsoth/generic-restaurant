<template>
  <div>
    <ul class="flex flex-row">
      <li 
      v-for="option in options" 
      v-bind:key="option.id"
      class="m-4"
      >
        <input type="button" 
        v-bind:value="option.name"
        class="p-3"
        >
      </li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'Menu Option',
  data() {
    return {
      options: [
        {
          name: 'Lunch'
        },
        {
          name: 'Dinner'
        },
        {
          name: 'Desert'
        },
        {
          name: 'Drinks'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <ul class="flex flex-row">
      <li 
      v-for="course in courses" 
      v-bind:key="course.id"
      class="m-4"
      >
        <input type="button" 
        v-bind:value="course.name"
        class="p-3"
        >
      </li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'Courses',
  props: {
    course: String
  },
  data() {
    return {
      courses: [
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

  input:hover {
    cursor: pointer;
  }

</style>
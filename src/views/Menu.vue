<template>
  <div class="menu flex flex-col items-center">
    <ul class="flex flex-row">
      <li 
      v-for="course in courses" 
      @click="toggleCourse"
      v-bind:key="course.id"
      class="m-4"
      >
        <input type="button" 
        v-bind:value="course.name"
        class="p-3"
        >
      </li>
    </ul> 
    <component :is='component' />
  </div>
</template>

<script>
import LunchMenu from '../components/LunchMenu'
import MenuOption from '../components/MenuOption'
import DrinksMenu from '../components/DrinksMenu'

export default {
  name: 'Menu', 
  components: {
    LunchMenu,
    MenuOption,
    DrinksMenu
  },
  data() {
    return {
      component: 'LunchMenu',
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
  },
  methods: {
    toggleCourse() {
      console.log(this.component)
      this.component = this.courses.name + 'Menu'
      console.log(this.component)
    }
  }
}
</script>

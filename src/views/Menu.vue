<template>
  <div class="menu flex flex-col items-center">
    <ul class="flex flex-row">
      <li 
      v-for="course in courses" 
      :class="{ active: currentMenu === course }"
       @click="currentMenu = course.name"
      v-bind:key="course.id"
      class="m-4"
      >
        <input type="button" 
        v-bind:value="course.name"
        class="cursor-pointer hover:bg-tertiary text-primary font-semibold py-2 px-4 border border-primary hover:border-transparent rounded"
        >
      </li>
    </ul> 
    <keep-alive>
      <component :is='currentMenuComponent' />
    </keep-alive>
  </div>
</template>

<script>
import LunchMenu from '../components/LunchMenu'
import MenuOption from '../components/MenuOption'
import DrinksMenu from '../components/DrinksMenu'
import DinnerMenu from '../components/DinnerMenu'
import DessertMenu from '../components/DessertMenu'

export default {
  name: 'Menu', 
  components: {
    LunchMenu,
    MenuOption,
    DrinksMenu,
    DinnerMenu,
    DessertMenu
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
          name: 'Dessert'
        },
        {
          name: 'Drinks'
        },
      ],
      currentMenu: 'Lunch'
    }
  },
  methods: {
    toggleCourse() {
      console.log(this.component)
      this.component = this.courses.name + 'Menu'
      console.log(this.component)
    }
  },
  computed: {
    currentMenuComponent() {
      return this.currentMenu + 'Menu'
    }
  }
}
</script>

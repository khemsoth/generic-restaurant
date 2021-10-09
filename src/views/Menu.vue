<template>
<div>
  <img src="../assets/suad-kamardeen-CzPnO-3707k-unsplash.jpg" alt="Woman looking at menu" class="h-screen w-screen">
  <div class="menu flex flex-col items-center">
    <ul class="flex flex-row my-10">
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
  </div>
</template>

<script>
import LunchMenu from '../components/LunchMenu'
import MenuOption from '../components/MenuOption'
import DrinksMenu from '../components/DrinksMenu'
import DinnerMenu from '../components/DinnerMenu'
import DessertMenu from '../components/DessertMenu'
import Footer from '../components/Footer'

export default {
  name: 'Menu', 
  components: {
    LunchMenu,
    MenuOption,
    DrinksMenu,
    DinnerMenu,
    DessertMenu,
    Footer
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

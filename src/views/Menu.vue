<template>
  <div class="menu flex flex-col items-center">
    <MenuOption />
    <MenuItem />
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem'
import MenuOption from '../components/MenuOption'

export default {
  name: 'Menu', 
  components: {
    MenuItem,
    MenuOption
  },
  props: {
    course: String
  },
  data() {
    return {

    }
  },
}
</script>

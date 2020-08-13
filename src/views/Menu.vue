<template>
  <div class="menu flex flex-col items-center">
    <h1>This is an menu page</h1>
    <MenuItem />
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem'

export default {
  name: 'Menu', 
  components: {
    MenuItem
  },
  data() {
    return {

    }
  },
}
</script>

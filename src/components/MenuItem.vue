<template>
  <div class="max-w-2xl ">
    <ul v-for="item in items" v-bind:key="item.id">
      <li>
        <div  class="menu-item-title text-xl font-bold text-left">
          {{ item.title }} 
        </div>
        <div class="m-3">
          {{ item.desc }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  data() {
    return {
      items: [
        {
          title: 'Burger',
          desc: 'Random burger description'
        },
                {
          title: 'Hotdog',
          desc: 'Random hotdog description'
        },
                {
          title: 'Pasta',
          desc: 'Random pasta description'
        },
                {
          title: 'Sausage',
          desc: 'Random sausage description'
        },
                {
          title: 'Chicken',
          desc: 'Random chicken description'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
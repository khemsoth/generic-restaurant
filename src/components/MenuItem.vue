<template>
  <div class="w-2/5 shadow-2xl p-4">
    <ul>
      <li     
      v-for="item in items" 
      v-bind:key="item.id"
      class="mb-10"
      >
        <div class="menu-item-title text-xl font-bold text-left ml-12">
          {{ item.title }} 
           <div class="float-right text-sm font-light italic mr-12">
            {{ item.price }}
          </div>
        </div>
        <div class="pl-16 m-3 text-left">
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
          desc: 'Random burger description',
          price: 13.99
        },
                {
          title: 'Hotdog',
          desc: 'Random hotdog description',
          price: 5.99
        },
                {
          title: 'Pasta',
          desc: 'Random pasta description',
          price: 12.95
        },
                {
          title: 'Sausage',
          desc: 'Random sausage description',
          price: 10.99
        },
                {
          title: 'Chicken',
          desc: 'Random chicken description',
          price: 8.99
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
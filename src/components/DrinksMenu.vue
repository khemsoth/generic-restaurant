<template>
  <div class="w-2/5 shadow-2xl p-4">
    <ul>
      <li     
      v-for="drink in drinks" 
      v-bind:key="drink.id"
      class="mb-10"
      >
        <div class="menu-item-title text-xl font-bold text-left ml-12">
          {{ drink.title }} 
           <div class="float-right text-sm font-light italic mr-12">
            {{ drink.price }}
          </div>
        </div>
        <div class="pl-16 m-3 text-left">
          {{ drink.desc }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DrinksMenu',
  data() {
    return {
      drinks: [
        {
          title: 'Beer 1',
          desc: 'Random beer description',
          price: 8.99
        },
                {
          title: 'Beer 2',
          desc: 'Random beer description',
          price: 5.99
        },
                {
          title: 'Beer 3',
          desc: 'Random beer description',
          price: 7.99
        },
                {
          title: 'Beer 4',
          desc: 'Random beer description',
          price: 10.99
        },
                {
          title: 'Beer 5',
          desc: 'Random beer description',
          price: 8.99
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
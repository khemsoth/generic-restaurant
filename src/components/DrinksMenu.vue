<template>
  <div class="w-2/5 shadow-2xl p-4">
    <h2 class="text-bold text-3xl">Drinks</h2>
    <p class="italic text-sm my-4">Served all day!</p>
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
          title: 'Drink 1',
          desc: 'Fugiat pariatur ad occaecat incididunt enim eu veniam dolor.',
          price: 8.99
        },
        {
          title: 'Drink 2',
          desc: 'Amet consequat ut aliqua laborum fugiat officia.',
          price: 5.99
        },
                {
          title: 'Drink 3',
          desc: 'Mollit non elit anim aliqua nostrud reprehenderit ex consequat eu nisi exercitation amet.',
          price: 7.99
        },
                {
          title: 'Drink 4',
          desc: 'Mollit dolor aute sint sint est quis ullamco et laboris qui ullamco.',
          price: 10.99
        },
                {
          title: 'Drink 5',
          desc: 'Consequat exercitation cupidatat culpa et enim reprehenderit.',
          price: 8.99
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
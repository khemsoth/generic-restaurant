<template>
  <div class="w-11/12 shadow-2xl p-4 border">
    <h2 class="text-bold text-3xl">Dessert</h2>
    <p class="italic text-sm my-4">Served all day!</p>
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
  name: 'LunchMenu',
  data() {
    return {
      items: [
        {
          title: 'Dessert 1',
          desc: 'Sint ad cupidatat consectetur eu duis sit cillum in pariatur.',
          price: 8.99
        },
                {
          title: 'Dessert 2',
          desc: 'Eu consectetur deserunt labore magna aliquip incididunt pariatur quis ut ipsum deserunt nisi ullamco.',
          price: 7.99
        },
                {
          title: 'Dessert 3',
          desc: 'Dolor cillum anim magna non sunt Lorem eu non exercitation pariatur enim dolore.',
          price: 5.95
        },
                {
          title: 'Dessert 4',
          desc: 'In ipsum adipisicing dolore nulla sint proident aliquip ullamco dolore pariatur mollit.',
          price: 9.99
        },
                {
          title: 'Dessert 5',
          desc: 'Eiusmod nostrud dolore aliqua sint sunt laborum.',
          price: 6.99
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="w-2/5 shadow-2xl p-4">
    <p class="italic text-sm my-4">Served from open til 4 PM.</p>
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
          title: 'Lunch 1',
          desc: 'Deserunt ea ex non sunt esse et velit quis.',
          price: 13.99
        },
                {
          title: 'Lunch 2',
          desc: 'Consequat veniam do consectetur pariatur adipisicing.',
          price: 5.99
        },
                {
          title: 'Lunch 3',
          desc: 'Aliqua sit irure ipsum cupidatat laborum ex sint quis dolore commodo esse in.',
          price: 12.95
        },
                {
          title: 'Lunch 4',
          desc: 'Nostrud aliqua proident minim sunt irure amet aliqua incididunt reprehenderit.',
          price: 10.99
        },
                {
          title: 'Lunch 5',
          desc: 'Minim exercitation pariatur veniam in est duis.',
          price: 8.99
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
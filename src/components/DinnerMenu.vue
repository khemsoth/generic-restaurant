<template>
  <div class="w-11/12 shadow-2xl p-4">
    <h2 class="text-bold text-3xl">Dinner</h2>
    <p class="italic text-sm my-4">Served from 4 PM til close.</p>
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
  name: 'DinnerMenu',
  data() {
    return {
      items: [
        {
          title: 'Dinner 1',
          desc: 'Voluptate ipsum amet velit tempor ipsum.',
          price: 17.99
        },
                {
          title: 'Dinner 2',
          desc: 'Voluptate eu in voluptate duis amet do occaecat occaecat culpa tempor est.',
          price: 20.99
        },
                {
          title: 'Dinner 3',
          desc: 'Enim ut esse adipisicing non do est.',
          price: 15.95
        },
                {
          title: 'Dinner 4',
          desc: 'Proident esse minim commodo cillum exercitation do aliqua est nisi.',
          price: 12.99
        },
                {
          title: 'Dinner 5',
          desc: 'Anim ad mollit Lorem adipisicing est non nostrud laborum exercitation anim duis.',
          price: 22.99
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="m-16 h-auto pb-20">
    <div class="flex flex-row justify-between m-20 p-20 w-5/6 h-40 bg-white shadow-xl"
      v-for="special in specials" :key="special.id"
      >
      <div class="flex flex-col w-5/6">
        <h3 class="text-3xl text-semi mb-12">
          {{ special.name }}
        </h3>
        <p class="text-xl text-justify w-5/6">
          {{ special.desc }}
        </p>
      </div>
      <div class="w-1/6">
        <img class="w-64 h-full" :src=special.img alt="">
      </div>
    </div>
  </div>
</template>

<script>
import special1 from '../assets/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg'
import special2 from '../assets/rachel-wu-hvPVxVHzmoQ-unsplash.jpg'
import special3 from '../assets/spencer-davis-T0nv78Vuc0g-unsplash.jpg'

export default {
  name: 'Specials',
  data() {
    return {
      specials: [
        {
          name: 'Special1',
          desc: 'Cillum Lorem et Lorem proident. Esse enim esse excepteur veniam veniam ut duis deserunt consequat sit consequat incididunt excepteur qui.',
          img: special1
        },
        {
          name: 'Special2',
          desc: 'Officia proident mollit nisi ut commodo. Ex ad non deserunt dolore voluptate aliqua mollit ullamco duis magna.',
          img: special2
        },
        {
          name: 'Special3',
          desc: 'Irure do fugiat excepteur velit id duis non fugiat sint quis sit excepteur. Id eiusmod qui aliqua elit incididunt aliqua et excepteur est deserunt ea in mollit.',
          img: special3
        }
      ]
    }
  }
}
</script>

<style>

</style>
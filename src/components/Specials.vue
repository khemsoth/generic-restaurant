<template>
  <div class="m-16">
    <div class="flex flex-row justify-between m-20 p-20"
      v-for="special in specials" :key="special.id"
      >
      <div>
        {{ special.name }}
        {{ special.desc }}
      </div>
      <div>
        <img :src=special.img alt="">
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
          name: 'special1',
          desc: 'Cillum Lorem et Lorem proident. Esse enim esse excepteur veniam veniam ut duis deserunt consequat sit consequat incididunt excepteur qui.',
          img: special1
        },
        {
          name: 'special2',
          desc: 'Officia proident mollit nisi ut commodo. Ex ad non deserunt dolore voluptate aliqua mollit ullamco duis magna.',
          img: special2
        },
        {
          name: 'special3',
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
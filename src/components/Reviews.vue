<template>
  <div class="flex flex-row pb-20 bg-white">
    <div class="lg:grid lg:grid-cols-2 lg:grid-rows-2 mx-auto">
      <div class="w-4/5 mx-auto mt-20 mb-20 p-16 text-primary"
        v-for="review in reviews" :key="review.id"
        >
        <div class="flex flex-col justify-center">
          <h3 class="text-3xl font-bold text-semi">
            {{ review.name }}
          </h3>
          <h5 class="text-2xl mb-12">
            {{ review.position }}
          </h5>
          <p class="text-xl italic text-justify">
            {{ review.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Reviews',
  data() {
    return {
      reviews: [
        {
          name: 'Reviewer 1',
          desc: '"Cillum Lorem et Lorem proident. Esse enim esse excepteur veniam veniam ut duis deserunt consequat sit consequat incididunt excepteur qui."',
          position: 'Company-position'
        },
        {
          name: 'Reviewer 2',
          desc: '"Officia proident mollit nisi ut commodo. Ex ad non deserunt dolore voluptate aliqua mollit ullamco duis magna."',
          position: 'Company-position'
        },
        {
          name: 'Reviewer 3',
          desc: '"Irure do fugiat excepteur velit id duis non fugiat sint quis sit excepteur. Id eiusmod qui aliqua elit incididunt aliqua et excepteur est deserunt ea in mollit."',
          position: 'Company-position'
        }
      ]
    }
  }
}
</script>

<style>

</style>
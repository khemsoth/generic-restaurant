<template>
  <div>
    <h2
    class="text-3xl m-5 text-left font-bold"
    >
    Join us for the special events listed below!
    </h2>
    <ul class="grid grid-cols-2 gap-1">
      <li 
      v-for="event in events" 
      :key="event.id"
      class="mx-auto my-4 p-6 border-2 min-w-3/4 bg-tertiary"
      >
        <div>{{ event.name }}</div>
        <div>{{ event.date }}</div>
        <div>{{ event.desc }}</div>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  name: 'Events',
  components: {
    Footer,
  },
  data() {
    return {
      events: [
        {
          name: 'Event 1',
          date: 'September 14',
          desc: 'Amet commodo incididunt sit labore mollit.'
        },
        {
          name: 'Event 2',
          date: 'September 21',
          desc: 'Sit laboris labore magna laborum exercitation in anim officia.'
        },
        {
          name: 'Event 3',
          date: 'October 10',
          desc: 'Qui non cillum fugiat ex.'
        },
        {
          name: 'Event 4',
          date: 'November 20',
          desc: 'Pariatur elit eu ea ullamco sunt veniam mollit.'
        },
        {
          name: 'Event 5',
          date: 'December 1',
          desc: 'Excepteur fugiat mollit cupidatat eiusmod enim proident minim dolor.'
        },
      ]
    }
  }

}
</script>

<style>

</style>
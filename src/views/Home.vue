<template>
<div class="home">
  <div class="banner bg-cover h-screen flex flex-col justify-center">
    <!--<img class="h-screen w-screen opacity-75 relative" src="../assets/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg" alt="" srcset="">-->
    <div class="flex justify-center">
      <div class='flex flex-col justify-center items-center bg-white bg-opacity-75 w-1/2 p-48'>
        <p class="m-12">elit dolore malis elit summis amet quis magna quis summis fore quid eram sint
          ipsum quorum culpa quorum magna tamen. quem multos minim magna tamen eram aliqua anim magna veniam quis quis malis
          tempor velit enim quorum export sint esse.</p>
        <div class="w-full flex flex-row justify-evenly">
          <RedirectButton />
          <RedirectButton />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import RedirectButton from '../components/RedirectButton'

export default {
  name: 'Home',
  components: {
    RedirectButton
  }
}
</script>

<style scoped>
  .banner {
    background-image: url('../assets/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg');
  }
</style>

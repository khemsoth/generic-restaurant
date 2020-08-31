<template>
  <div class="home">
    <div class="banner">
      <!--<img class="h-screen w-screen opacity-75 relative" src="../assets/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg" alt="" srcset="">-->
      <div class="">
        <div class='flex justify-center items-center'>
          <RedirectButton />
          <RedirectButton />
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

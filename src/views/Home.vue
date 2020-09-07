<template>
<div>
<div class="home bg-tertiary">
  <div class="banner bg-cover h-screen flex flex-col justify-center">
    <div class="flex justify-center">
      <div class='flex flex-col items-center bg-white bg-opacity-75 w-1/2 lg:p-32 '>
        <h2 class="text-3xl text-bold text-primary">Lorem ipsum dolor sit amet.</h2>
        <p class="m-12 text-xl text-semi text-secondary">elit dolore malis elit summis amet quis magna quis summis fore quid eram sint
          ipsum quorum culpa quorum magna tamen. quem multos minim magna tamen eram aliqua anim magna veniam quis quis malis
          tempor velit enim quorum export sint esse.</p>
        <div class="w-full flex flex-row justify-evenly">
          <RedirectButton />
        </div>
      </div>
    </div>
  </div>
  <Specials />
  <Reviews />
</div>
  <Footer />
</div>
</template>

<script>
import RedirectButton from '../components/RedirectButton'
import Specials from '../components/Specials'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    RedirectButton,
    Specials,
    Reviews,
    Footer
  }
}
</script>

<style scoped>
  .banner {
    background-image: url('../assets/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg');
  }
</style>

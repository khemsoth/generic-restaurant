<template>
  <div id="app">
    <div class="nav-bar flex flex-row justify-between" id="nav">
      <div class="logo flex items-center">
      <h2 class="text-4xl ml-6 font-semibold">
        Generic Brewhouse
      </h2>
      </div>
      <input type="button" class="nav-link-button" value="+">
      <div class="nav-links mr-6 lg:flex lg:items-end">
        <router-link to="/" class="mr-6 p-2 text-xl">Home</router-link>
        <router-link to="/menu" class="mr-6 p-2 text-xl">Menu</router-link>
        <router-link to="/events" class="mr-6 p-2 text-xl">Events</router-link>
        <router-link to="/catering" class="mr-6 p-2 text-xl">Catering</router-link>
        <router-link to="/about" class="mr-6 p-2 text-xl">About</router-link>
        <router-link to="/contact" class="mr-6 p-2 text-xl">Contact</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>

.logo {
  color: #bdc3c7;
}

.nav-bar {
  height: 15vh;
  background-color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #ecf0f1;
}

#nav a.router-link-exact-active {
  font-style: italic;
  color: #ecf0f1;
}

@media only screen and (max-width: 640px) {

  .nav-bar {
    height: 20vh;
  }

}

@media only screen and (max-width: 768px) {

  .nav-links {
    display: none;
  }

  .nav-link-button {
    width: 30%;
    height: 30%;
    background-color: rgba(0, 0, 0, 0);
  }
}

@media only screen and (min-width: 1024px) {
  .nav-link-button {
    display: none;
  }
}

</style>

<template>
  <div id="app">
    <header class="nav-bar flex flex-col" id="nav">
      <div class="flex flex-row justify-between my-10">
        <div class="logo flex items-center">
        <h2 class="text-4xl ml-4 font-semibold">
          Generic Brewhouse
        </h2>
        </div>
        <input type="button" class="nav-link-button border-2 w-auto h-auto self-center text-4xl bg-transparent text-white mr-10" value="+" v-on:click="toggleNav">
      </div>
    </header>
    <nav :class="{ 'menu-open': menuOpen, 'menu-closed': menuClosed }" 
      class="nav-links">
       <router-link to="/" class="mr-6 p-2 text-xl"><span @click="closeMenu">Home</span></router-link>
       <router-link to="/menu" class="mr-6 p-2 text-xl"><span @click="closeMenu">Menu</span></router-link>
       <router-link to="/events" class="mr-6 p-2 text-xl"><span @click="closeMenu">Events</span></router-link>
       <router-link to="/catering" class="mr-6 p-2 text-xl"><span @click="closeMenu">Catering</span></router-link>
       <router-link to="/about" class="mr-6 p-2 text-xl"><span @click="closeMenu">About</span></router-link>
       <router-link to="/contact" class="mr-6 p-2 text-xl"><span @click="closeMenu">Contact</span></router-link>
     </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      showMenu: false,
      menuOpen: false,
      menuClosed: true
    }
  },
  methods: {
    openMenu() {
      if(this.showMenu == false) {
        this.showMenu = true
      } else {
        this.showMenu = false
      }
    },
    closeMenu() {
      this.menuOpen = false
      this.menuClosed = true
    },
  toggleNav() {
    if(this.menuClosed === true) {
      this.menuOpen = true
      this.menuClosed = false
    } else if (this.menuClosed === false) {
      this.menuOpen = false
      this.menuClosed = true
    }
  }
  },
}
</script>

<style>

input:hover {
  cursor: pointer;
}

.logo {
  color: #bdc3c7;
}

.nav-bar {
  height: 15vh;
  background-color: #2c3e50;
}

 .nav-links {
   display: flex; 
   flex-direction: column;
   background-color: #2c3e50;
   color: #fff;
   width: 100%; 
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

@keyframes menuDown {
  0% {
    transform: scaleY(0)
  }
  100% {
    transform: scaleY(1)
  }
}

@keyframes menuUp {
  from {
    transform: scaleY(1)
  } 
  to {
    transform: scaleY(0)
  }
}

.menu-open {
    animation: menuDown .5s ease-in-out forwards;
    -webkit-animation: menuDown .5s ease-in-out forwards;
    -ms-animation: menuDown .5s ease-in-out forwards;
    -moz-animation: menuDown .5s ease-in-out forwards;
    -o-webkit-animation: menuDown .5s ease-in-out forwards;
    transform-origin: top;
}

.menu-closed {
    animation: menuUp .5s ease-in-out forwards;
    -webkit-animation: menuUp .5s ease-in-out forwards;
    -ms-animation: menuUp .5s ease-in-out forwards;
    -moz-animation: menuUp .5s ease-in-out forwards;
    -o-webkit-animation: menuUp .5s ease-in-out forwards; 
    transform-origin: top;
    display: none;
}
/*
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
  
}*/

</style>

<template>
<div class="w-full flex flex-row justify-evenly">
  <router-link to="/menu" tag="button"
    class="cursor-pointer hover:bg-primary hover:text-tertiary text-primary font-semibold py-2 px-4 border border-primary hover:border-transparent rounded w-1/4">Menu</router-link>
  <router-link to="/contact" tag="button"
    class="cursor-pointer hover:bg-primary hover:text-tertiary text-primary font-semibold py-2 px-4 border border-primary hover:border-transparent rounded w-1/4">Contact</router-link>
</div>
</template>

<script>
export default {
  name: "RedirectButton",
  props: ['path'],
};
</script>

<style scoped>
</style>

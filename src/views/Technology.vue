<template>
  <main></main>
</template>

<script>
export default {
  name: "Technology",
  mounted() {
    document.body.classList.add("technology");
  },
  unmounted() {
    document.body.classList.remove("technology");
  },
};
</script>

<style>
</style>
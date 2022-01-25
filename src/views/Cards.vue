<template>
  <div class="home">
    <h1>Cards</h1>
    <div class="cards">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: { Card },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-between;
  margin: 5rem 2rem;
}
</style>
<template>
  <main id="main" class="grid-container grid-container--destination flow">
    <h1 class="numbered-title">
      <span aria-hidden="true">01</span>Pick your destination
    </h1>

    <picture>
      <source srcset="../assets/images/image-moon.webp" type="image/webp" />
      <img src="../assets/images/image-moon.png" alt="the moon" />
    </picture>

    <div class="tab-list underline-indicators flex">
      <button
        aria-selected="true"
        class="uppercase ff-sans-cond text-accent letter-spacing-2"
      >
        Moon
      </button>
      <button
        aria-selected="false"
        class="uppercase ff-sans-cond text-accent letter-spacing-2"
      >
        Mars
      </button>
      <button
        aria-selected="false"
        class="uppercase ff-sans-cond text-accent letter-spacing-2"
      >
        Europa
      </button>
      <button
        aria-selected="false"
        class="uppercase ff-sans-cond text-accent letter-spacing-2"
      >
        Titan
      </button>
    </div>

    <article class="destination-info flow">
      <h2 class="fs-800 uppercase ff-serif">Moon</h2>

      <p>
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>

      <div class="destination-meta flex">
        <div>
          <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
          <p class="ff-serif uppercase">384,400 km</p>
        </div>
        <div>
          <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
          <p class="ff-serif uppercase">3 days</p>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  name: "Destination",
  mounted() {
    document.body.classList.add("destination");
  },
  unmounted() {
    document.body.classList.remove("destination");
  },

  setup() {
    const tabItems = ["Moon", "Mars", "Europa", "Titan"];
    return {
      tabItems,
    };
  },
};
</script>

<style>
</style>
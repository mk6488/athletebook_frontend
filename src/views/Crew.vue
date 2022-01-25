<template>
  <main id="main" class="grid-container grid-container--crew flow">
    <h1 class="numbered-title">
      <span aria-hidden="true">02</span> Meet your crew
    </h1>

    <div class="dot-indicators flex">
      <button aria-selected="true">
        <span class="sr-only">The commander</span>
      </button>
      <button aria-selected="false">
        <span class="sr-only">The mission specialist</span>
      </button>
      <button aria-selected="false">
        <span class="sr-only">The pilot</span>
      </button>
      <button aria-selected="false">
        <span class="sr-only">The crew engineer</span>
      </button>
    </div>

    <article class="crew-details flow">
      <header class="flow flow--space-small">
        <h2 class="fs-600 ff-serif uppercase">Commander</h2>
        <p class="fs-700 uppercase ff-serif">Douglas Hurley</p>
      </header>
      <p>
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.
      </p>
    </article>

    <picture>
      <source
        srcset="../assets/images/image-douglas-hurley.webp"
        type="image/webp"
      />
      <img
        src="../assets/images/image-douglas-hurley.png"
        alt="Douglas Hurley"
      />
    </picture>
  </main>
</template>

<script>
export default {
  name: "Crew",
  mounted() {
    document.body.classList.add("crew");
  },
  unmounted() {
    document.body.classList.remove("crew");
  },
};
</script>

<style>
</style>
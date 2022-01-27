<template>
  <a class="skip-to-content" href="#main">Skip to content</a>
  <header @click="toggleNav" class="primary-header flex">
    <div>
      <img
        src="../assets/images/logo.svg"
        alt="space tourism logo"
        class="logo"
      />
    </div>
    <button class="mobile-nav-toggle" aria-controls="primary-navigation">
      <span class="sr-only" aria-expanded="false">Menu</span>
    </button>
    <nav>
      <ul
        id="primary-navigation"
        data-visible="false"
        class="primary-navigation underline-indicators flex"
      >
        <router-link
          to="/"
          class="ff-sans-cond uppercase text-white letter-spacing-2"
          ><span aria-hidden="true">00</span>Home</router-link
        >
        <router-link
          to="/destination"
          class="ff-sans-cond uppercase text-white letter-spacing-2"
          ><span aria-hidden="true">01</span>Destination</router-link
        >
        <router-link
          to="/crew"
          class="ff-sans-cond uppercase text-white letter-spacing-2"
          ><span aria-hidden="true">02</span>Crew</router-link
        >
        <router-link
          to="/technology"
          class="ff-sans-cond uppercase text-white letter-spacing-2"
          ><span aria-hidden="true">03</span>Technology</router-link
        >
      </ul>
    </nav>
  </header>
</template>

<script>
import { toggleNav } from "../helpers/navigation";

export default {
  setup() {
    return { toggleNav };
  },
};
</script>

<style >
</style>
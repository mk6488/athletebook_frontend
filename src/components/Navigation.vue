<template>
  <a class="skip-to-content" href="#main">Skip to content</a>
  <header class="primary-header flex">
    <div>
      <img
        src="../assets/images/logo.svg"
        alt="athlete book logo"
        class="logo"
      />
    </div>
    <button
      @click="toggleNav"
      class="mobile-nav-toggle"
      aria-controls="primary-navigation"
    >
      <span class="sr-only" aria-expanded="false">Menu</span>
    </button>
    <nav>
      <ul
        id="primary-navigation"
        class="primary-navigation underline-indicators flex"
        :data-visible="navOpen"
      >
        <li class="active">
          <router-link
            to="/"
            class="ff-sans-cond uppercase text-white letter-spacing-2"
            ><span aria-hidden="true">00</span>Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/destination"
            class="ff-sans-cond uppercase text-white letter-spacing-2"
            ><span aria-hidden="true">01</span>Destination</router-link
          >
        </li>
        <li>
          <router-link
            to="/crew"
            class="ff-sans-cond uppercase text-white letter-spacing-2"
            ><span aria-hidden="true">02</span>Crew</router-link
          >
        </li>
        <li>
          <router-link
            to="/technology"
            class="ff-sans-cond uppercase text-white letter-spacing-2"
            ><span aria-hidden="true">03</span>Technology</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const navOpen = ref(false);

    function toggleNav() {
      navOpen.value = !navOpen.value;
      const navToggle = document.querySelector(".mobile-nav-toggle");
      if (navOpen.value) {
        navToggle.setAttribute("aria-expanded", true);
      } else {
        navToggle.setAttribute("aria-expanded", false);
      }
    }

    return { navOpen, toggleNav };
  },
};
</script>

<style>
</style>
<template>
  <main id="main" class="grid-container grid-container--technology flow">
    <h1 class="numbered-title">
      <span aria-hidden="true">03</span> Space launch 101
    </h1>

    <div
      @keydown="tabKeydown"
      class="number-list flex"
      role="tablist"
      aria-label="technology list"
    >
      <button
        @click="tabClick"
        aria-selected="true"
        role="tab"
        aria-controls="launch-tab"
        class="text-white ff-serif"
        tabindex="0"
        data-image="launch-image"
      >
        1
      </button>
      <button
        @click="tabClick"
        aria-selected="false"
        role="tab"
        aria-controls="spaceport-tab"
        class="text-white ff-serif"
        tabindex="-1"
        data-image="spaceport-image"
      >
        2
      </button>
      <button
        @click="tabClick"
        aria-selected="false"
        role="tab"
        aria-controls="capsule-tab"
        class="text-white ff-serif"
        tabindex="-1"
        data-image="capsule-image"
      >
        3
      </button>
    </div>

    <!-- launch vehicle -->
    <article
      class="technology-info flow"
      id="launch-tab"
      tabindex="0"
      role="tabpanel"
    >
      <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
        The terminology...
      </h1>
      <p class="fs-700 uppercase ff-serif">Launch vehicle</p>

      <p>
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
        carry a payload from Earth's surface to space, usually to Earth orbit or
        beyond. Our WEB-X carrier rocket is the most powerful in operation.
        Standing 150 metres tall, it's quite an awe-inspiring sight on the
        launch pad!
      </p>
    </article>

    <!-- spaceport -->
    <article
      hidden
      class="technology-info flow"
      id="spaceport-tab"
      tabindex="0"
      role="tabpanel"
    >
      <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
        The terminology...
      </h1>
      <p class="fs-700 uppercase ff-serif">Launch vehicle</p>

      <p>
        A spaceport or cosmodrome is a site for launching (or receiving)
        spacecraft, by analogy to the seaport for ships or airport for aircraft.
        Based in the famous Cape Canaveral, our spaceport is ideally situated to
        take advantage of the Earth’s rotation for launch.
      </p>
    </article>

    <!-- space capsule -->
    <article
      hidden
      class="technology-info flow"
      id="capsule-tab"
      tabindex="0"
      role="tabpanel"
    >
      <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
        The terminology...
      </h1>
      <p class="fs-700 uppercase ff-serif">Launch vehicle</p>

      <p>
        A space capsule is an often-crewed spacecraft that uses a blunt-body
        reentry capsule to reenter the Earth's atmosphere without wings. Our
        capsule is where you'll spend your time during the flight. It includes a
        space gym, cinema, and plenty of other activities to keep you
        entertained.
      </p>
    </article>

    <!-- launch image -->
    <picture id="launch-image">
      <source
        srcset="../assets/images/image-launch-vehicle-portrait.jpg"
        type="image/jpg"
        sizes="100vw"
      />
      <source
        media="(min-width:45em)"
        srcset="../assets/images/image-launch-vehicle-landscape.jpg"
        type="image/jpg"
      />
      <img
        src="../assets/images/image-launch-vehicle-portrait.jpg"
        alt="the launch vehicle"
      />
    </picture>

    <!-- spaceport image -->
    <picture hidden id="spaceport-image">
      <source
        srcset="../assets/images/image-spaceport-portrait.jpg"
        type="image/jpg"
      />
      <source
        media="(min-widthL45em)"
        srcset="../assets/images/image-spaceport-landscape.jpg"
        type="image/jpg"
      />
      <img
        src="../assets/images/image-spaceport-portrait.jpg"
        alt="the spaceport"
      />
    </picture>

    <!-- capsule image -->
    <picture hidden id="capsule-image">
      <source
        srcset="../assets/images/image-space-capsule-portrait.jpg"
        type="image/jpg"
      />
      <source
        media="(min-widthL45em)"
        srcset="../assets/images/image-space-capsule-landscape.jpg"
        type="image/jpg"
      />
      <img
        src="../assets/images/image-space-capsule-portrait.jpg"
        alt="the space capsule"
      />
    </picture>

    <!-- <div id="launch-image" class="image-placeholder launch-img"></div>
    <div
      hidden
      id="spaceport-image"
      class="image-placeholder spaceport-img"
    ></div>
    <div hidden id="capsule-image" class="image-placeholder capsule-img"></div> -->
  </main>
</template>

<script>
import { changeTabFocus, changeTabPanel } from "../helpers/tabs";

export default {
  name: "Technology",
  mounted() {
    document.body.classList.add("technology");
  },
  unmounted() {
    document.body.classList.remove("technology");
  },

  setup() {
    function tabKeydown(e) {
      changeTabFocus(e);
    }

    function tabClick(e) {
      changeTabPanel(e);
    }

    return { tabKeydown, tabClick };
  },
};
</script>

<style>
</style>
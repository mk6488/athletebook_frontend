<template>
  <div class="game">
    <div class="rank">3</div>

    <div class="front">
      <img
        class="thumbnail"
        src="@/assets/images/game-cover.jpeg"
        alt="cover"
      />
      <h3 class="name">Game name</h3>
      <div class="stats">
        <p class="viewers icon-before">539.9k</p>
        <div class="streamers">
          <img src="@/assets/images/streamer-1.jpg" alt="" />
          <img src="@/assets/images/streamer-2.jpg" alt="" />
          <img src="@/assets/images/streamer-3.jpg" alt="" />
        </div>
      </div>
    </div>

    <div class="back">
      <div class="streaming-info">
        <p class="game-stat">559k<span>Watching</span></p>
        <p class="game-stat">25.8k<span>Streams</span></p>
      </div>
      <button class="btn">See more streams</button>
      <div class="streamers">
        <div class="streamer">
          <div class="icon">
            <img src="@/assets/images/streamer-1.jpg" alt="" />
          </div>
          <p class="name">Gamer 1</p>
          <p class="number">36.1k</p>
        </div>
        <div class="streamer">
          <div class="icon">
            <img src="@/assets/images/streamer-2.jpg" alt="" />
          </div>
          <p class="name">Gamer 2</p>
          <p class="number">35.1k</p>
        </div>
        <div class="streamer">
          <div class="icon">
            <img src="@/assets/images/streamer-3.jpg" alt="" />
          </div>
          <p class="name">Gamer 3</p>
          <p class="number">34.1k</p>
        </div>
      </div>
    </div>

    <div class="background">
      <img src="@/assets/images/game-cover.jpeg" alt="" />
    </div>
  </div>
  <svg width="0" height="0" x="0" y="0">
    <defs>
      <clipPath id="wave" clipPathUnits="objectBoundingBox">
        <path
          d="M2,0 L0,0 C0,0.435075027 0,0.694334287 0,0.777777778 C0.22980939,0.777777778 0.3,1 0.5,1 C0.7,1 0.8,0.777777778 1,0.777777778 C1.2,0.777777778 1.3,1 1.5,1 C1.7,1 1.75,0.777777778 2,0.777777778 L2,0 Z"
          id="Line"
        ></path>
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-200 0"
          begin="0s"
          dur="10s"
          repeatCount="indefinite"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.game {
  position: relative;
  width: 12.5em;
  cursor: pointer;
}

.streamers {
  display: flex;
  text-align: center;

  img {
    width: 2em;
    height: 2em;
    border-radius: 50%;
  }
}

.rank {
  position: absolute;
  top: 0;
  right: 1em;
  z-index: 1000;
  font-weight: bold;
  font-size: 1.125rem;
  background: rgba(0, 0, 0, 0.65);
  padding: 0.5em 0.5em 0.75em;
  clip-path: polygon(100% 0%, 100% 100%, 50% 85%, 0 100%, 0 0);
  transition: transform 200ms cubic-bezier(0.21, 1, 0.81, 1);
}

.front {
  transition: 250ms;

  .thumbnail {
    border-radius: 0.5em;
  }

  .name {
    margin: 0.75em 0;
  }

  .stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .viewers {
    display: flex;
    align-items: center;
  }

  .viewers::before {
    content: "\f007";
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.75em;
    margin-right: 0.5em;
  }

  .streamers img {
    border: 2px solid var(--clr-dark);

    &:nth-of-type(1) {
      transform: translateX(50%);
      z-index: 1;
    }
    &:nth-of-type(2) {
      transform: translateX(25%);
    }
  }
}

.back {
  opacity: 0;
  position: absolute;
  top: 55%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  transform: translateY(35%);

  .streaming-info {
    columns: 2;
    column-rule: 1px solid rgba(255, 255, 255, 0.25);
  }

  .btn {
    cursor: pointer;
    border: 0;
    background: rgb(0, 76, 199);
    border-radius: 100vw;
    color: var(--clr-light);
    font-weight: bold;
    padding: 0.5em 1.5em;
  }

  .game-stat {
    font-size: 1.125rem;
    text-align: center;

    span {
      font-size: 0.85rem;
      display: block;
    }
  }
}

.background {
  background: #282e36;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  transform: scale(0.2, 0.9);
  opacity: 0;
  border-radius: 0.5em;
  overflow: hidden;

  img {
    opacity: 0.3;
    clip-path: url(#wave);
    height: 30%;
    width: 100%;
    object-fit: cover;
  }
}

.game:hover {
  .rank {
    transform: translate(150%, -85%);
  }

  .front {
    transform: translateY(-30%) scale(0.8);

    .name {
      animation: gameName 250ms forwards;
    }

    .stats {
      opacity: 0;
    }
  }

  .back {
    opacity: 1;
    transition: transform 250ms ease, opacity 150ms linear;
    transform: translateY(0);

    .streamers {
      width: 100%;
      justify-content: space-between;
    }

    .streamer {
      font-size: 0.9rem;
    }

    .name {
      font-weight: bold;
    }
  }

  .background {
    transition: transform 200ms cubic-bezier(0.21, 1, 0.81, 1),
      opacity 100ms linear;
    opacity: 1;
    transform: scale(1.4, 1.2);
  }
}

@keyframes gameName {
  0% {
    text-align: left;
    opacity: 1;
  }

  20% {
    text-align: left;
    opacity: 0;
  }

  50% {
    text-align: center;
    color: #fff;
    opacity: 0;
    transform: scale(1.2);
  }

  100% {
    text-align: center;
    color: #fff;
    opacity: 1;
    transform: scale(1.2);
  }
}

// Pulse Effect
.streamer {
  .icon {
    display: inline-block;
    width: 2em;
    height: 2em;
    position: relative;
    transition: transform ease-in-out 150ms;
    &::before,
    &::after {
      opacity: 0;
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      border-radius: 50%;
    }
    &::before {
      content: "\f04b";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 0.65em;
      background: #f00;
      display: grid;
      place-items: center;
      z-index: 10;
      transition: opacity 75ms linear, background-color 100ms linear;
    }
    &:hover {
      transform: translateY(-15%) scale(1.2);
      &::before {
        background: #cc0202;
      }
      &::after {
        background: #f00;
        z-index: 1;
        animation: pulse 1250ms infinite;
      }
    }
  }
  &:hover {
    .icon {
      transform: translateY(-10%);
      &::before {
        opacity: 1;
      }
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.9;
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}
</style>>

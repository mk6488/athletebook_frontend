<template>
  <div class="ltr-wizard container">
    <form @submit.prevent="submit" class="form">
      <h2 class="text-center">LearnToRow Signup Form</h2>
      <!-- Progress bar -->
      <div class="progress-bar">
        <div
          class="progress"
          id="progress"
          :style="{ width: formStepsNum * (100 / (numPages - 1)) + '%' }"
        ></div>
        <div
          class="progress-step"
          :class="formStepsNum >= 0 ? 'progress-step-active' : ''"
          data-title="Intro"
        ></div>
        <div
          class="progress-step"
          :class="formStepsNum >= 1 ? 'progress-step-active' : ''"
          data-title="Contact"
        ></div>
        <div
          class="progress-step"
          :class="formStepsNum >= 2 ? 'progress-step-active' : ''"
          data-title="ID"
        ></div>
        <div
          class="progress-step"
          :class="formStepsNum === 3 ? 'progress-step-active' : ''"
          data-title="Password"
        ></div>
      </div>

      <!-- Steps -->
      <div
        class="form-step"
        :class="formStepsNum === 0 ? 'form-step-active' : ''"
      >
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div class="input-group">
          <label for="position">Position</label>
          <input type="text" name="position" id="position" />
        </div>
        <div class="">
          <a
            @click="
              formStepsNum++;
              updateProgress;
            "
            href="#"
            class="btn btn-next width-50 ml-auto"
            >Next</a
          >
        </div>
      </div>

      <div
        class="form-step"
        :class="formStepsNum === 1 ? 'form-step-active' : ''"
      >
        <div class="input-group">
          <label for="phone">Phone</label>
          <input type="text" name="phone" id="phone" />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div class="btn-group">
          <a @click="formStepsNum--" href="#" class="btn btn-prev">Previous</a>
          <a @click="formStepsNum++" href="#" class="btn btn-next">Next</a>
        </div>
      </div>

      <div
        class="form-step"
        :class="formStepsNum === 2 ? 'form-step-active' : ''"
      >
        <div class="input-group">
          <label for="dob">Date of Birth</label>
          <input type="date" name="dob" id="dob" />
        </div>
        <div class="input-group">
          <label for="ID">National ID</label>
          <input type="number" name="nId" id="ID" />
        </div>
        <div class="btn-group">
          <a @click="formStepsNum--" href="#" class="btn btn-prev">Previous</a>
          <a @click="formStepsNum++" href="#" class="btn btn-next">Next</a>
        </div>
      </div>

      <div
        class="form-step"
        :class="formStepsNum === 3 ? 'form-step-active' : ''"
      >
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div class="input-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>
        <div class="btn-group">
          <a @click="formStepsNum--" href="#" class="btn btn-prev">Previous</a>
          <input type="submit" value="Submit" class="btn" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LTRSignup",
  components: {},
  setup() {
    const formStepsNum = 0;
    const numPages = 4;
    const form = {
      username: "",
      position: "",
      phone: "",
      email: "",
      dob: "",
      nId: "",
      password: "",
      confirmPassword: "",
    };

    function submit(event) {
      const {
        username,
        position,
        phone,
        email,
        dob,
        nId,
        password,
        confirmPassword,
      } = Object.fromEntries(new FormData(event.target));
      console.log(
        username,
        position,
        phone,
        email,
        dob,
        nId,
        password,
        confirmPassword
      );
    }

    return { formStepsNum, numPages, form, submit };
  },
};
</script>

<style scoped>
/* Global */
input {
  display: block;
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/* Container */

.ltr-wizard {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

/* Progress bar */
.progress-bar {
  position: relative;
  display: flex;
  justify-content: space-between;
  counter-reset: step;
  margin: 2rem 0 4rem 0;
}

.progress-bar::before,
.progress {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  background-color: #dcdcdc;
  z-index: -1;
}

.progress {
  background-color: var(--primary-color);
  width: 0%;
  transition: 0.3s;
}

.progress-step {
  width: 2.1875rem;
  height: 2.1875rem;
  background-color: #dcdcdc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-step::before {
  counter-increment: step;
  content: counter(step);
}

.progress-step::after {
  content: attr(data-title);
  position: absolute;
  top: calc(100% + 0.5rem);
  font-size: 0.85rem;
  color: #666;
}

.progress-step-active {
  background-color: var(--primary-color);
  color: #f3f3f3;
}

/* Form */
.form {
  width: clamp(320px, 30%, 430px);
  border: 1px solid #ccc;
  border-radius: 0.35rem;
  padding: 1.5rem;
}

.form-step {
  display: none;
  transform-origin: top;
  animation: animate 0.5s;
}

.form-step-active {
  display: block;
}

.input-group {
  margin: 2rem 0;
}

@keyframes animate {
  from {
    transform: scale(1, 0);
    opacity: 0;
  }
  to {
    transform: scale(1, 1);
    opacity: 1;
  }
}

/* Button */
.btn-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.btn {
  padding: 0.75rem;
  display: block;
  text-decoration: none;
  background-color: var(--primary-color);
  color: #f3f3f3;
  text-align: center;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.3s;
}
.btn:hover {
  box-shadow: 0 0 0 2px #fff, 0 0 0 3px var(--primary-color);
}
</style>
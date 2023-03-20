<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column fill-height justify-center align-center mt-4 mb-10 mx-3">
        <v-card class="pt-12 pb-12 px-4 bio-card text-center" :class="{'bio-card-active': loaded}">
          <div class="position-relative mb-6 mt-6">
            <v-avatar class="avatar avatar-img" size="12rem">
              <v-img src="img/avatar.jpg" eager @load="loaded=true;"></v-img>
            </v-avatar>
          </div>
          <div class="bio mb-5">
            <h1>Jakub Kiermasz</h1>
            <ul>
              <li>Software Engineer</li>
              <li>Swift and Vapor enthusiast</li>
            </ul>
          </div>
          <v-card-actions class="justify-center bio-actions">
            <v-btn
                variant="outlined"
                icon="fas fa-brands fa-twitter"
                class="mx-4"
                size="4rem"
                href="https://twitter.com/JakubKiermasz"
                target="_blank"
            ></v-btn>
            <v-btn
                variant="outlined"
                icon="fas fa-brands fa-github"
                class="mx-4"
                size="4rem"
                href="https://github.com/kkiermasz"
                target="_blank"
            ></v-btn>
            <v-btn
                variant="outlined"
                icon="fas fa-brands fa-linkedin"
                class="mx-4"
                size="4rem"
                href="https://www.linkedin.com/in/jakub-kiermasz/"
                target="_blank"
            ></v-btn>
            <v-btn
                variant="outlined"
                icon="fas fa-solid fa-file"
                class="mx-4"
                size="4rem"
                href="/files/resume.pdf"
                target="_blank"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import {mdiEmail, mdiGithub, mdiFileAccount} from "@mdi/js";


export default {
  name: "index",
  data: () => ({
    mdiEmail, mdiGithub, mdiFileAccount,
    loaded: false
  }),
}
</script>

<style lang="scss" scoped>


.bio {
  font-family: Quicksand, Helvetica, sans-serif;
  text-transform: lowercase;
  font-size: 1.15rem;
  font-weight: 300;
  line-height: 2;
  letter-spacing: .04em;
  color: #141414;

  & h1 {
    display: block;
    font-size: 2.15rem;
    font-weight: 300;
    letter-spacing: .06em;
    margin: 0 0 0.525em;
    color: #393939;
    line-height: 1.5;
  }

  & ul {
    list-style: none;
  }
}

.avatar {
  border: 1px solid;
}

.bio-card {
  width: 100%;
  max-width: 40rem;
  transform: rotateX(25deg);
  opacity: 0;
  transform-origin: 50% 50%;
  background-color: #e0e0da;
  border: 1px solid;
  box-shadow: none;

  &-active {
    opacity: 0.95;
    transform: rotateX(0deg);
    transition: opacity 1s ease, transform 1s ease;
  }
}

.bio-actions {
  color: #6a6a6a;
}

.links {
  opacity: 0;

  &-active {
    opacity: 1;
    transition: opacity 1s ease;
  }
}

</style>

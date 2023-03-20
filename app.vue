<template>
  <div>
    <SeoKit></SeoKit>
    <OgImageScreenshot></OgImageScreenshot>
    <NuxtPage :key="$route.fullPath"></NuxtPage>
  </div>
</template>

<style lang="scss">

body {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center, bottom center;
  background-attachment: fixed;
  background-color: #e0e0da;
}

.v-application {
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center, bottom center;
  background-attachment: fixed;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity, filter;
  transition-timing-function: ease-in-out;
  transition-duration: 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}

</style>

<template>
  <div class="container">
    <div class="content">
      <div class="links-section">
        <a href="https://getdrin.app" class="link">drin</a>
        <a href="https://ticjournal.com" class="link">ticjournal</a>
      </div>

      <div class="social-section">
        <a href="https://github.com/kkiermasz" class="link">github</a>
        <a href="https://linkedin.com/in/jakub-kiermasz" class="link">linkedin</a>
        <a href="https://twitter.com/JakubKiermasz" class="link">x</a>
        <a href="https://medium.com/@jakubkiermasz" class="link">medium</a>
      </div>

      <div class="options-section">
        <a href="/resume.pdf" class="link">resume</a>
        <router-link to="/invoicing" class="link">invoicing</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Home view component
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #656560;
  color: #fff;
  font-family: monospace;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 360px;
  gap: 64px;
}

.links-section, .social-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
}

.options-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.25rem;
}

.link:hover {
  text-decoration: underline;
}
</style> 
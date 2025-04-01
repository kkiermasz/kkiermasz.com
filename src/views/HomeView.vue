<template>
  <div class="min-h-screen w-full bg-[#656560] text-white font-['Menlo'] overflow-x-hidden box-border flex items-center justify-center px-6 py-6">
    <div class="w-full max-w-[360px] flex flex-col items-start gap-16">
      <div class="w-full flex flex-col items-start gap-3">
        <a href="https://getdrin.app" class="p-1 text-white no-underline hover:underline">drin</a>
        <a href="https://ticjournal.com" class="p-1 text-white no-underline hover:underline">ticjournal</a>
      </div>

      <div class="w-full flex flex-col items-start gap-3">
        <a href="https://github.com/kkiermasz" class="p-1 text-white no-underline hover:underline">github</a>
        <a href="https://linkedin.com/in/jakub-kiermasz" class="p-1 text-white no-underline hover:underline">linkedin</a>
        <a href="https://twitter.com/JakubKiermasz" class="p-1 text-white no-underline hover:underline">x</a>
        <a href="https://medium.com/@jakubkiermasz" class="p-1 text-white no-underline hover:underline">medium</a>
      </div>

      <div class="w-full flex justify-between">
        <a href="/resume.pdf" class="p-1 text-white no-underline hover:underline">resume</a>
        <router-link to="/invoicing" class="p-1 text-white no-underline hover:underline">invoicing</router-link>
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
  width: 100%;
  background-color: #656560;
  color: #fff;
  font-family: monospace;
  overflow-x: hidden;
  padding: 24px 0;
  box-sizing: border-box;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 360px;
  gap: 64px;
  padding: 16px;
  box-sizing: border-box;
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

/* Responsive adjustments */
@media (max-width: 400px) {
  .content {
    width: 100%;
  }
  
  .options-section {
    justify-content: space-between;
    gap: 16px;
  }
}

@media (max-height: 600px) {
  .container {
    align-items: flex-start;
    overflow-y: auto;
    padding-top: 64px;
  }
  
  .content {
    gap: 32px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
}
</style> 
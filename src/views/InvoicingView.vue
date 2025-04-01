<template>
  <div class="min-h-screen w-full bg-[#656560] text-white font-['Menlo'] overflow-x-hidden box-border flex items-center justify-center px-6 py-6">
    <div class="w-full max-w-[360px] flex flex-col items-center gap-8">
      <span class="text-white">invoicing details</span>
      
      <div class="w-full flex flex-col gap-6">
        <div class="flex flex-col gap-1">
          <span class="text-white">name</span>
          <span class="text-white no-underline hover:underline cursor-pointer" @click="copyToClipboard('Bug Factory Jakub Kiermasz')">Bug Factory Jakub Kiermasz</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-white">address</span>
          <span class="text-white no-underline hover:underline cursor-pointer" @click="copyToClipboard('ul. Długa 55a/33, 53-633 Wrocław')">ul. Długa 55a/33, 53-633 Wrocław</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-white">VAT Number/NIP</span>
          <span class="text-white no-underline hover:underline cursor-pointer" @click="copyToClipboard('PL9452264831')">PL9452264831</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-white">REGON</span>
          <span class="text-white no-underline hover:underline cursor-pointer" @click="copyToClipboard('523735432')">523735432</span>
        </div>
      </div>

      <div class="mt-8">
        <router-link to="/" class="p-1 text-white no-underline hover:underline">home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Invoicing view component
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Copied to clipboard:', text)
    })
    .catch(err => {
      console.error('Failed to copy: ', err)
    })
}
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
  align-items: center;
  text-align: center;
  gap: 2rem;
  width: 360px;
  padding: 16px;
  font-size: 1rem;
  box-sizing: border-box;
}

h1 {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
}

.details-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  cursor: pointer;
}

.detail-item:hover {
  opacity: 0.8;
}

.navigation {
  margin-top: 2rem;
  text-align: center;
}

.back-link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.back-link:hover {
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 400px) {
  .content {
    width: 100%;
  }
}

@media (max-height: 600px) {
  .container {
    align-items: flex-start;
    overflow-y: auto;
    padding-top: 48px;
  }
  
  .content {
    gap: 32px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
}
</style> 
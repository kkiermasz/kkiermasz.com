<template>
  <div class="container">
    <div class="content">
      <span>invoicing details</span>
      
      <div class="details-section">
        <div class="detail-item" @click="copyToClipboard('Bug Factory Jakub Kiermasz')">
          <span class="label">name</span>
          <span class="value">Bug Factory Jakub Kiermasz</span>
        </div>
        <div class="detail-item" @click="copyToClipboard('ul. Długa 55a/33, 53-633 Wrocław')">
          <span class="label">address</span>
          <span class="value">ul. Długa 55a/33, 53-633 Wrocław</span>
        </div>
        <div class="detail-item" @click="copyToClipboard('PL9452264831')">
          <span class="label">VAT Number/NIP</span>
          <span class="value">PL9452264831</span>
        </div>
        <div class="detail-item" @click="copyToClipboard('523735432')">
          <span class="label">REGON</span>
          <span class="value">523735432</span>
        </div>
      </div>

      <div class="navigation">
        <router-link to="/" class="back-link">home</router-link>
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
  background-color: #656560;
  color: #fff;
  font-family: monospace;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 360px;
  padding: 1rem;
  font-size: 1rem;
}

h1 {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
}

.details-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
</style> 
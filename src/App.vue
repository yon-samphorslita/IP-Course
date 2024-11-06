<script setup>
import { RouterLink, RouterView } from 'vue-router'
import App from './components/App.vue';
import ProductCategories from './components/ProductCategories.vue';
import PromotionBanners from './components/PromotionBanners.vue';
</script>

<template>
<div id="app">
  <App />
  <ProductCategories />
  <PromotionBanners  />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
</style>

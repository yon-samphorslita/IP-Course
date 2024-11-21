<template>
  <div id="app">
    <ProductCategories :categories = "categories" />
    <PromotionBanners :banners = "promotions" />
  </div>
</template>

<script>
import { useProductStore } from './stores/productStore';
import ProductCategories from './components/ProductCategories.vue';
import PromotionBanners from './components/PromotionBanners.vue';
import { computed, onMounted } from 'vue';

    export default {
        name: 'App',
        components: {
            ProductCategories,
            PromotionBanners
        },
        setup() {
          const productStore = useProductStore();

          onMounted(async () => {
            try {
            await productStore.initializeData();
            } catch (error) {
              console.error(error);
            }
          });

          const categories = computed(() => productStore.categories);
          const promotions = computed(() => productStore.promotions);

          return {
            categories,
            promotions,
          };
        },
      };
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
</style>

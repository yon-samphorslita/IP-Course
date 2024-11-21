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
import { mapState } from 'pinia';

    export default {
        name: 'App',
        components: {
            ProductCategories,
            PromotionBanners
        },
        data() {
          return {
            currentGroupName: 'Group A',
          };
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
          const popularProducts = computed(() => productStore.getPopularProducts());

          return {
            categories,
            promotions,
            popularProducts,
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

<template class="App">
  <div id="app">
    <Header />
    <deal />
    <AppHeader title="Featured Categories" :nav="groups" />
    <ProductCategories class="product" :categories = "categories" />
    <PromotionBanners class="promotion" :promotions = "promotions" />
    <AppHeader title="Popular Products" :nav="groups" />
    <Product class="products" :products="products"/>
    <router-link />
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore';
import ProductCategories from '@/components/ProductCategories.vue';
import PromotionBanners from '@/components/PromotionBanners.vue';
import AppHeader from '@/components/menu.vue';
import Product from '@/components/Products.vue';
import Header from '@/components/Header.vue';
import { computed, onMounted } from 'vue';
import { mapState } from 'pinia';
import Deal from '@/components/showCase.vue';

    export default {
      name: 'HomeView',
      components: {
        AppHeader,
        ProductCategories,
        PromotionBanners, 
        Product,
        Header,
        Deal
      },
      data() {
        return {
          currentGroupName: 'All',
        };
      },
      computed: {
        ...mapState(useProductStore, {
          popularProducts: 'getPopularProducts',
        }),
          categories() {
            const productStore = useProductStore();
              return productStore.getCategoriesByGroup(this.currentGroupName)
            },
            productsByGroup() {
              const productStore = useProductStore()
              return productStore.getProductsByGroup(this.currentGroupName)
            },
            productsByCategory() {
              const productStore = useProductStore()
              return productStore.getProductsByCategory(this.currentCategoryName)
            },
        },
        setup() {
          const productStore = useProductStore();

          onMounted(() => {
            productStore.fetchCategories();
            productStore.fetchGroups();
            productStore.fetchProducts();
            productStore.fetchPromotions();
          });

          const groups = computed(() => productStore.groups);
          const categories = computed(() => productStore.categories);
          const promotions = computed(() => productStore.promotions);
          const popularProducts = computed(() => productStore.getPopularProducts());
          const products = computed(() => productStore.products);

          return {
            groups,
            categories,
            promotions,
            popularProducts,
            products
          };
        },
      };
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dosis|Quicksand');
#app {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family:Quicksand;
  left: 0;
  right: 0;
  margin: 0;
  padding: 10px;
}
template {
  padding: 0px;
  margin: 0;
}
body {
  margin: 0;
}
</style>
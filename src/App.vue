<template>
  <div id="app">
    <ProductCategories :categories = "categories" />
    <PromotionBanners :banners = "banners" />
  </div>
</template>

<script>
  import ProductCategories from './components/ProductCategories.vue';
  import PromotionBanners from './components/PromotionBanners.vue';
  import axios from 'axios';

    export default {
        name: 'App',
        components: {
            ProductCategories,
            PromotionBanners
        },

        data() {
            return {
                categories:  [],
                banners: []
            };
        },

    methods: {
      async fetchCategories() {
        try {
          const response = await axios.get('http://localhost:3000/api/categories');
          this.categories = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchBanners() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        this.banners = response.data;
        } catch (error) {
          console.error(error);
        }
      }
    },

    mounted() {
      this.fetchCategories();
      this.fetchBanners();
    }
  };

</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
</style>

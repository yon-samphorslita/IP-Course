<template>
    <div id="app">
        <ProductCategories :categories = "categories" />
        <PromotionBanners :banners = "banners" />
    </div>
</template>

<script>
    import ProductCategories from './ProductCategories.vue';
    import PromotionBanners from './PromotionBanners.vue';
    export default {
        name: 'App',
        components: {
            ProductCategories,
            PromotionBanners
        },

        data() {
            return {
                categories:  [
                    { name: 'Cake & Milk', items: 14, color:'#f2fce4', image: 'cake.png' },
                    { name: 'Peach', items: 17, color:'#fefbe8', image: 'peach.png' },
                    { name: 'Organic Kiwi', items: 21, color: '#eeffec', image: 'kiwi.png' },
                    { name: 'Red Apple', items: 68, color: '#fff0e9', image: 'apple.png' },
                    { name: 'Snack', items: 34, color: '#fef4eb', image: 'snack.png' },
                    { name: 'Black plum', items: 25, color: '#fff4ff', image: 'plum.png' },
                    { name: 'Vegetables', items: 65, color: '#f2fce4', image: 'veggies.png' },
                    { name: 'Headphone', items: 33, color: '#fefbea', image: 'pod.png' },
                    { name: 'Cake & Milk', items: 54, color: '#f2fce4', image: 'cakes.png' },
                    { name: 'Orange', items: 63, color: '#fff4ff', image: 'orange.png' }
                ],

                banners: [
                    { text: 'Everyday Fresh & Clean with Our Products', color: '#f0e9d7', image: 'onion.png'},
                    { text: 'Make your Breakfast Healthy and Easy', color:'#f2e8e9', image: 'juice.png'},
                    { text: 'The best Organic Products Online', color: '#e6eaf3', image: 'veggie.png'}
                ]
            };
        }
    };
</script>
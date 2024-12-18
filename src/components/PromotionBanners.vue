<template>
    <div class="promotion-banners">
        <router-link :to="{name:'productPage',
        params: {name: promotion.title}}"
        v-for="promotion in promotions" :key="promotion.title" 
        class="promotion-item" :style="{backgroundColor: promotion.color}">
            <div class="promotion-content">
                <p>{{ promotion.title }}</p>
                <ButtonComponent @click="shopNow(promotion)">Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 -2 15 15">
                        <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>
                </ButtonComponent>
            </div>
            <img :src="getImagePath(promotion.image)" :alt="promotion.title" />
        </router-link>
    </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
    name: 'PromotionBanners',
    components: {
        ButtonComponent
    },
    props: {
        promotions: Array
    },
    methods: {
        getImagePath(image) {
            return new URL(`../assets/${image}`, import.meta.url).href;
        },
        shopNow(promotion) {
                alert("Let's shop: " + promotion.title);
        }
    }
};
</script>

<style scoped>
.promotion-banners {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
    color: #000;
}
.promotion-item {
    display: grid;
    grid-template-columns: 200px auto;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    width: 512px;
    height: 300px;
}

.promotion-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

img {
    width: 175px;
    height: auto;
}

p {
    font-size: x-large;
    font-weight: bold;
}
a {
    text-decoration: none;
    color: #253D4E;
}
</style>
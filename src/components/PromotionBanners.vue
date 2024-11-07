<template>
    <div class="promotion-banners">
        <div v-for="banner in banners" :key="banner.text" class="banner-item" :style="{backgroundColor: banner.color}">
            <div class="banner-content">
                <p>{{ banner.text }}</p>
                <button @click="shopNow(banner)">Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 -2 15 15">
                        <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>
                </button>
            </div>
            <img :src="getImagePath(banner.image)" :alt="banner.text" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'PromotionBanners',
    props: {
        banners: Array
    },
    methods: {
        getImagePath(image) {
            return new URL(`../assets/${image}`, import.meta.url).href;
        },
        shopNow(banner) {
                alert("Let's shop: " + banner.text);
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
.banner-item {
    display: grid;
    grid-template-columns: 200px auto;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background-color: #f0f0f0;
    width: 512px;
    height: 300px;
}

.banner-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

button {
    margin-top: 10px;
    padding: 5px ;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: medium;
    align-items: center;
    align-content: center;
    justify-content: center;
}

img {
    width: 175px;
    height: auto;
}

p {
    font-size: x-large;
    font-weight: bold;
    font-family:Arial, Helvetica, sans-serif;
    color: #293b3f;
}

</style>
<template>
    <div class="product-categories">
        <div v-for="category in categories" :key="category.name" class="category-item" :style="{ backgroundColor: category.color}">
            <img :src="getImagePath(category.image)" :alt="category.name" />
            <p>{{ category.name }}</p>
            <span>{{ category.productCount }} items</span>
        </div> 
    </div>
</template>

<script>
export default {
    name:  'ProductCategories',
    props: {
        categories: {
            type: Array,
            default: () => [] //Default is empty array
        }
    },
    methods: {
        getImagePath(image) {
            return new URL(`../assets/${image}`, import.meta.url).href;
        }
    }
};
</script>

<style scoped>
.product-categories {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    color: black;
}

.category-item {
    text-align: center;
    width: 136px;
    height: 185px;
    padding: 10px;
    border-radius: 8px;
    background-color: #f5f5f5;
}

img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    border-radius: 10px
}

p {
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #293b3f;
}


span {
    color: gray;
}

</style>
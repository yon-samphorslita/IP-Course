<template>
    <Header />
    <div class="category">
        <div class="box" :style="{backgroundColor:backgroundColor}">
            <div class="list">
                <h1 class="name">
                    {{ name }}
                </h1>
                <p class="direct">
                    Home > Category > {{ name }}
                </p>
            </div>
            <div class="image">
                <img src="@/assets/categoryPage/frame.png" alt="image">
                <img src="@/assets/categoryPage/frame.png" alt="image">
            </div>
        </div>        
    </div>
</template>
<script>
import Header from './Header.vue';

export default {
    components: {
        Header
    },
    props:{
        name: String
    },
    setup() {
        const backgroundColor = window.history.state?.color || '#ffffff'; // Default to white if no color
        return { backgroundColor };
    }
}
</script>
<style scoped>
.category{
    padding: 200px 40px 40px 40px;
}
.box {
    border-radius: 20px;
}
.list {
    padding: 50px 50px 0px 50px;
}
h1 {
    margin-top: 0;
    color: #0c3548;
}
p {
    margin-top: 30px;
    color: gray;
    font-size: 14px;
}
.image {
    display: flex;
}
img {
    position: relative;
    width: 50%;
    margin-top: -120px;
}
</style>
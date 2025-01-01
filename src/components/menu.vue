<template>
    <div class="Menu">
        <ul>
            <li class="menu">Menu</li>
            <li class="section1">
                <router-link :to="{name: 'section', params: { id: 1, pageNumber}}">
                    Section 1
                </router-link>
            </li>
            <li class="section2">
                <router-link :to="{name: 'section', params: { id: 2, pageNumber}}">
                    Section 2
                </router-link>
            </li>
            <li class="section3">
                <router-link :to="{name: 'section', params: { id: 3, pageNumber}}">
                    Section 3
                </router-link>
            </li>
            <li class="section4">
                <router-link :to="{name: 'section', params: { id: 4, pageNumber}}">
                    Section 4
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
    name: 'Menu',
    setup() {
        const route = useRoute();

        // Create a computed property for pageNumber that updates reactively
        const pageNumber = computed(() => route.params.pageNumber || 1); // Default to 1 if not provided

        return { pageNumber };
    },
};
</script>

<style scoped>
.Menu {
    color: black;
    border-right: 1px solid black;
    display: flex;
    width: fit-content;
    flex-direction: column;
    align-items: center;
    height: 90%;
    margin: 0;
    padding: 0px 20px;
    position: absolute;
}
ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}
.section1, .section2, .section3, .section4, .menu {
    border-bottom: 1px solid black;
    padding: 10px 20px;
    width: 100%;
    display: flex;
    justify-content: center;
}
a {
    text-decoration: none;
    color: black;
}
</style>
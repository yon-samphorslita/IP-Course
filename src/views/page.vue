<template>
    <div class="page" >
        Welcome to page {{ pageNumber }}
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'Page',
  setup() {
    const route = useRoute();

    // Use computed to automatically track updates to the route parameter
    const pageNumber = computed(() => route.params.pageNumber);

    return { pageNumber };
  },
};
</script>

<style scoped>
.page {
    padding: 100px;
    text-align: center;
    display: flex;
}
</style>
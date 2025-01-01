<template>
  <div class="section">
    <div class="line">
    </div>
    <p>This is Section {{ id }} of Page {{ pageNumber }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Section',
  setup() {
    const route = useRoute();

    // Retrieve the route params and default to 1 if not provided
    const id = computed(() => route.params.id || 'No ID Provided');
    const pageNumber = computed(() => route.params.pageNumber || 1);

    return { id, pageNumber };
  },
};
</script>

<style scoped>
.section {
  text-align: center;
  padding: 10px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.line {
  height: 0px;
  width: 250px;
  border: black 1px dashed;
}
</style>

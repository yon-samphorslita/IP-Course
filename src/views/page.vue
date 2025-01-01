<template>
  <div class="page">
    Welcome to Page {{ pageNumber }}
    <router-view />
    <Message />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Message from '@/views/message.vue';

export default {
  name: 'Page',
  components: { Message },
  setup() {
    const route = useRoute();
    const pageNumber = computed(() => route.params.pageNumber || 1);

    return { pageNumber };
  },
};
</script>

<style scoped>
.page {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 88vh;
  gap: 10px;
  font-size: 22px;
}
</style>

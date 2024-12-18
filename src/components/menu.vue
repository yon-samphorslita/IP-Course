<template>
    <header class="app-header">
        <nav>
            <ul>
                <li class="feature"> {{ title }}</li>
                <button>All</button>
                <button v-for="(item, index) in nav" :key="index">{{ item }}</button>
              </ul>
        </nav>
    </header>
</template>
<script>
import { useProductStore } from '@/stores/productStore';
import { onMounted } from 'vue';


export default {
    name: 'AppHeader',

    props: {
      title: {
        type: String, 
        Required: true
      },
      nav: {
        type: Array,
        Required: true
      }
    },
    
    setup() {
      const productStore = useProductStore();

      // Fetch groups when the component is mounted
      onMounted(() => {
          productStore.fetchGroups();
      });

      return {
          productStore
      };
    }
}
</script>
<style >
.app-header {
  display: flex;
  flex-direction: column;
}
ul {
  list-style: none;
  display: flex;
}
button {
  border: none;
  background-color: white;
  text-decoration: none;
  color: #0c3548;
  margin-right: 20px;
  font-size: 16px;
}
.feature {
    font-size: 20px;
    font-weight: bold;
    margin-right: auto;
}
button:hover {
  font-weight: bold;
  animation: linear;
}
</style>
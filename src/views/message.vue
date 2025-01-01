<template>
    <div class="container">
      <!-- Display the most recent message -->
      <div v-if="store.message" class="display">
        Message from Page {{ store.pageNumber }}: {{ store.message }}
      </div>
  
      <!-- Input message for the current page -->
      <div class="message">
        <div class="label">Message: </div>
        <input
          v-model="currentMessage"
          @input="updateMessage"
          class="input-field"
          placeholder="Type your message here"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { store } from '@/stores/store.js';
  
  export default {
    name: 'Message',
    setup() {
      const route = useRoute();
      const pageNumber = computed(() => parseInt(route.params.pageNumber, 10) || 1);
  
      // Sync current message with the store
      const currentMessage = computed({
        get: () => (store.pageNumber === pageNumber.value ? store.message : ''),
        set: (value) => {
          store.message = value;
          store.pageNumber = pageNumber.value;
        },
      });
  
      // Update the store when the input changes
      const updateMessage = () => {
        store.message = currentMessage.value;
        store.pageNumber = pageNumber.value;
      };
  
      return { store, pageNumber, currentMessage, updateMessage };
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
  .message {
    width: 500px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  .input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
  }
  .display {
    padding: 10px;
    display: flex;
  }
  </style>
  
<template>
    <header class="header">
      <div class="logo">
        <div>Header</div>
      </div>
      <nav class="nav">
        <ul class="pages">
          <li>
            <router-link :to="{ name: 'page', params: { pageNumber: 1 } }">Page 1</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'page', params: { pageNumber: 2 } }">Page 2</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'page', params: { pageNumber: 3 } }">Page 3</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    background-color: black;
    padding: 10px 30px;
    align-items: center;
    color: white;
  }
  
  .logo {
    display: flex;
    margin-right: auto;
    font-weight: bold;
  }
  
  .pages {
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .pages a {
    text-decoration: none;
    color: white;
  }
  
  </style>
  
<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Menu from './components/menu.vue';
export default {
  components: { 
    Header ,
    Menu,
    Footer,
  }
}
</script>

<template>
  <Header />
  <Menu />
  <RouterView/>
  <Footer/>
</template>

<style >
body {
  margin: 0;
  font-size: 18px;
}
</style>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Menu from './components/menu.vue';
import page from './views/page.vue';
export default {
  components: { 
    Header ,
    Menu,
    page,
    Footer
  }
}
</script>

<template>
  <Header />
  <Menu />
  <page/>
  <Footer/>
</template>

<style >
body {
  margin: 0;
}
</style>

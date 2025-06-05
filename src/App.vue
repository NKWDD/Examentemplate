<template>
  <div id="app">
    <!-- Navigation -->
    <AppNavbar />
    
    <!-- Main Content -->
    <main class="main-content">
      <RouterView />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/common/AppNavbar.vue'
import AppFooter from './components/common/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px; /* Ruimte voor fixed navbar */
}
</style>
<template>
  <div class="home-view">
    <h1>Home Pagina</h1>
    <p>Welkom op de homepagina van de applicatie.</p>
    <AppCard>
      <template #header>
        <h2>Welkom!</h2>
      </template>
      <template #body>
        <p>Dit is een voorbeeld van de homepagina content.</p>
      </template>
    </AppCard>
  </div>
</template>

<script>
import AppCard from '@/components/common/AppCard.vue';

export default {
  name: 'HomeView',
  components: {
    AppCard
  }
}
</script>

<style scoped>
.home-view {
  padding: 20px;
}
</style>
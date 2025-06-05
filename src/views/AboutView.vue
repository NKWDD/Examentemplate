<template>
  <div class="about-view">
    <h1>Over Ons</h1>
    <AppCard>
      <template #header>
        <h2>Ons Team</h2>
      </template>
      <template #body>
        <p>Informatie over het team en de organisatie.</p>
      </template>
    </AppCard>
  </div>
</template>

<script>
import AppCard from '@/components/common/AppCard.vue';

export default {
  name: 'AboutView',
  components: {
    AppCard
  }
}
</script>

<style scoped>
.about-view {
  padding: 20px;
}
</style>
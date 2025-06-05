<template>
  <div class="dashboard-view">
    <div class="row">
      <div class="col-md-3">
        <AppSidebar />
      </div>
      <div class="col-md-9">
        <h1>Dashboard</h1>
        <div class="row">
          <div class="col-md-4" v-for="i in 3" :key="i">
            <AppCard>
              <template #header>
                <h3>Card {{ i }}</h3>
              </template>
              <template #body>
                <p>Dashboard content voor card {{ i }}</p>
              </template>
            </AppCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from '@/components/common/AppSidebar.vue';
import AppCard from '@/components/common/AppCard.vue';

export default {
  name: 'DashboardView',
  components: {
    AppSidebar,
    AppCard
  }
}
</script>

<style scoped>
.dashboard-view {
  padding: 20px;
}
</style>
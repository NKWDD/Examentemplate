<template>
  <footer class="simple-footer">
    <p class="mb-0">&copy; {{ currentYear }} © 2025 BSO Rooie Noes. Alle rechten voorbehouden.</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  setup() {
    const currentYear = new Date().getFullYear()
    return { currentYear }
  }
}
</script>

<style scoped>
.simple-footer {
  background-color: #ffffff;
  text-align: center;
  padding: 1rem 0;
  font-size: 0.85rem;
  color: #666;
  border-top: 1px solid #e0e0e0;
}
</style>

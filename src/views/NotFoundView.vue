<template>
  <div class="not-found-view">
    <div class="container text-center py-5">
      <h1 class="display-1 text-danger">404</h1>
      <h2 class="mb-4">Pagina niet gevonden</h2>
      <p class="lead">De pagina die u zoekt bestaat niet of is verplaatst.</p>
      <router-link to="/" class="btn btn-primary">
        Terug naar homepagina
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
  metaInfo() {
    return {
      title: 'Pagina niet gevonden'
    }
  }
}
</script>

<style scoped>
.not-found-view {
  min-height: 70vh;
  display: flex;
  align-items: center;
}
.display-1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
}
</style>
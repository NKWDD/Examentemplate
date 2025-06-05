<template>
  <div class="login-view">
    <h1>Inloggen</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <LoginForm @submit="handleLogin" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/forms/LoginForm.vue';

export default {
  name: 'LoginView',
  components: {
    LoginForm
  },
  methods: {
    handleLogin(credentials) {
      console.log('Login attempt with:', credentials);
      // Hier zou je normaal de login logica implementeren
    }
  }
}
</script>

<style scoped>
.login-view {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
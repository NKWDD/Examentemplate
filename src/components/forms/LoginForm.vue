<template>
  <form @submit.prevent="handleSubmit" class="login-form">
    <div class="mb-3">
      <label for="email" class="form-label">
        E-mailadres
        <span class="text-danger">*</span>
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': errors.email }"
        placeholder="voer je e-mailadres in"
        required
        autocomplete="email"
        :disabled="loading"
      >
      <div v-if="errors.email" class="invalid-feedback">
        {{ errors.email }}
      </div>
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">
        Wachtwoord
        <span class="text-danger">*</span>
      </label>
      <div class="input-group">
        <input
          id="password"
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          class="form-control"
          :class="{ 'is-invalid': errors.password }"
          placeholder="voer je wachtwoord in"
          required
          autocomplete="current-password"
          :disabled="loading"
        >
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="togglePassword"
          :disabled="loading"
        >
          <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
        </button>
        <div v-if="errors.password" class="invalid-feedback">
          {{ errors.password }}
        </div>
      </div>
    </div>

    <div class="mb-3 form-check">
      <input
        id="remember"
        v-model="form.remember"
        type="checkbox"
        class="form-check-input"
        :disabled="loading"
      >
      <label class="form-check-label" for="remember">
        Onthoud mij
      </label>
    </div>

    <div v-if="generalError" class="alert alert-danger" role="alert">
      <i class="bi bi-exclamation-triangle-fill me-2"></i>
      {{ generalError }}
    </div>

    <div v-if="successMessage" class="alert alert-success" role="alert">
      <i class="bi bi-check-circle-fill me-2"></i>
      {{ successMessage }}
    </div>

    <div class="d-grid gap-2">
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="loading || !isFormValid"
      >
        <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        <i v-else class="bi bi-box-arrow-in-right me-2"></i>
        {{ loading ? 'Bezig met inloggen...' : 'Inloggen' }}
      </button>
    </div>

    <div class="mt-3 text-center">
      <a href="#" @click.prevent="$emit('forgot-password')" class="text-decoration-none">
        Wachtwoord vergeten?
      </a>
    </div>

    <div v-if="showRegisterLink" class="mt-3 text-center">
      <span class="text-muted">Nog geen account? </span>
      <a href="#" @click.prevent="$emit('register')" class="text-decoration-none">
        Registreer hier
      </a>
    </div>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  emits: ['submit', 'forgot-password', 'register'],
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    generalError: {
      type: String,
      default: ''
    },
    successMessage: {
      type: String,
      default: ''
    },
    showRegisterLink: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false
      },
      errors: {
        email: '',
        password: ''
      },
      showPassword: false
    }
  },
  computed: {
    isFormValid() {
      return this.form.email && 
             this.form.password && 
             this.isValidEmail(this.form.email) &&
             this.form.password.length >= 6;
    }
  },
  methods: {
    handleSubmit() {
      this.clearErrors();
      
      if (this.validateForm()) {
        this.$emit('submit', { ...this.form });
      }
    },
    
    validateForm() {
      let isValid = true;
      
      // Email validatie
      if (!this.form.email) {
        this.errors.email = 'E-mailadres is verplicht';
        isValid = false;
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Voer een geldig e-mailadres in';
        isValid = false;
      }
      
      // Wachtwoord validatie
      if (!this.form.password) {
        this.errors.password = 'Wachtwoord is verplicht';
        isValid = false;
      } else if (this.form.password.length < 6) {
        this.errors.password = 'Wachtwoord moet minimaal 6 tekens bevatten';
        isValid = false;
      }
      
      return isValid;
    },
    
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    
    clearErrors() {
      this.errors = {
        email: '',
        password: ''
      };
    },
    
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    
    reset() {
      this.form = {
        email: '',
        password: '',
        remember: false
      };
      this.clearErrors();
      this.showPassword = false;
    }
  },
  
  // Expose reset method for parent components
  expose: ['reset']
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-label {
  font-weight: 500;
}

.input-group .btn {
  border-left: 0;
}

.input-group .form-control:focus + .btn {
  border-color: #86b7fe;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}

.alert {
  border-radius: 0.5rem;
}

.alert i {
  font-size: 1.1em;
}

.btn-primary:disabled {
  opacity: 0.6;
}

.form-check-label {
  cursor: pointer;
}

.text-decoration-none:hover {
  text-decoration: underline !important;
}

@media (max-width: 576px) {
  .login-form {
    max-width: 100%;
    padding: 0 1rem;
  }
}
</style>
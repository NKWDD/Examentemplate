<template>
  <nav class="navbar navbar-expand-lg bg-white fixed-top">
    <div class="container">
      <!-- Brand -->
    <router-link class="navbar-brand" to="/">
      <img 
        src="/src/assets/rooienoes_logo_transparent.png" 
        alt="Logo" 
        height="125" 
        class="d-inline-block align-top"
      >
    </router-link>

      <!-- Mobile toggle -->
      <button 
        class="navbar-toggler" 
        type="button" 
        @click="toggleMobileMenu"
        :aria-expanded="mobileMenuOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation items -->
      <div class="navbar-collapse" :class="{ 'collapse': !mobileMenuOpen }">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/" 
              @click="closeMobileMenu"
              :class="{ 'active': $route.name === 'Home' }"
            >
              <i class="bi bi-house me-1"></i>
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/about" 
              @click="closeMobileMenu"
              :class="{ 'active': $route.name === 'About' }"
            >
              <i class="bi bi-info-circle me-1"></i>
              Over Ons
            </router-link>
          </li>
            <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/team" 
              @click="closeMobileMenu"
              :class="{ 'active': $route.name === 'Team' }"
            >
              <i class="bi bi-house me-1"></i>
              Team
            </router-link>
          </li>
                    <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/Nieuws" 
              @click="closeMobileMenu"
              :class="{ 'active': $route.name === 'Nieuws' }"
            >
              <i class="bi bi-house me-1"></i>
              Nieuws
            </router-link>
          </li>
                    <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/Contact" 
              @click="closeMobileMenu"
              :class="{ 'active': $route.name === 'Contact' }"
            >
              <i class="bi bi-house me-1"></i>
              Contact
            </router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <router-link 
              class="nav-link" 
              to="/dashboard" 
              @click="closeMobileMenu"
              :class="{ 'active': $route.name === 'Dashboard' }"
            >
              <i class="bi bi-speedometer2 me-1"></i>
              Dashboard
            </router-link>
          </li>
        </ul>

        <!-- Right side items -->
        <ul class="navbar-nav">
          
          <!-- User dropdown -->
          <li class="nav-item dropdown" v-if="isAuthenticated">
            <a 
              class="nav-link dropdown-toggle" 
              href="#" 
              id="userDropdown" 
              role="button" 
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-circle me-1"></i>
              {{ userName }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="#" @click.prevent="viewProfile">
                  <i class="bi bi-person me-2"></i>
                  Profiel
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" @click.prevent="viewSettings">
                  <i class="bi bi-gear me-2"></i>
                  Instellingen
                </a>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <a class="dropdown-item text-danger" href="#" @click.prevent="handleLogout">
                  <i class="bi bi-box-arrow-right me-2"></i>
                  Uitloggen
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useMainStore } from '../../stores/main.js'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'AppNavbar',
  setup() {
    const store = useMainStore()
    const router = useRouter()
    const mobileMenuOpen = ref(false)

    const isAuthenticated = computed(() => store.isAuthenticated)
    const userName = computed(() => store.userName)

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }

    const handleLogout = () => {
      store.logout()
      router.push('/')
      closeMobileMenu()
    }

    const viewProfile = () => {
      // Implementeer profiel weergave
      console.log('View profile')
      closeMobileMenu()
    }

    const viewSettings = () => {
      // Implementeer instellingen
      console.log('View settings')
      closeMobileMenu()
    }

    return {
      mobileMenuOpen,
      isAuthenticated,
      userName,
      toggleMobileMenu,
      closeMobileMenu,
      handleLogout,
      viewProfile,
      viewSettings
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
}

.nav-link.active {
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;
}

.dropdown-menu {
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

@media (max-width: 991.98px) {
  .navbar-nav {
    text-align: center;
    padding: 1rem 0;
  }
  
  .nav-item {
    margin: 0.25rem 0;
  }
}</style>
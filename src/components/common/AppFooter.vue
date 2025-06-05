<template>
  <footer class="bg-dark text-light py-4 mt-auto">
    <div class="container">
      <div class="row">
        <!-- Company Info -->
        <div class="col-md-4 mb-3">
          <h5 class="fw-bold mb-3">Examen App</h5>
          <p class="text-muted">
            Een complete Vue.js 3 template voor examenvoorbereiding 
            met alle benodigde technische componenten.
          </p>
          <div class="d-flex gap-3">
            <a href="#" class="text-light" @click.prevent="openSocial('facebook')">
              <i class="bi bi-facebook fs-5"></i>
            </a>
            <a href="#" class="text-light" @click.prevent="openSocial('twitter')">
              <i class="bi bi-twitter fs-5"></i>
            </a>
            <a href="#" class="text-light" @click.prevent="openSocial('linkedin')">
              <i class="bi bi-linkedin fs-5"></i>
            </a>
            <a href="#" class="text-light" @click.prevent="openSocial('github')">
              <i class="bi bi-github fs-5"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-md-4 mb-3">
          <h5 class="fw-bold mb-3">Snelle Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <router-link to="/" class="text-muted text-decoration-none">
                <i class="bi bi-house me-2"></i>Home
              </router-link>
            </li>
            <li class="mb-2">
              <router-link to="/about" class="text-muted text-decoration-none">
                <i class="bi bi-info-circle me-2"></i>Over Ons
              </router-link>
            </li>
            <li class="mb-2" v-if="isAuthenticated">
              <router-link to="/dashboard" class="text-muted text-decoration-none">
                <i class="bi bi-speedometer2 me-2"></i>Dashboard
              </router-link>
            </li>
            <li class="mb-2" v-if="!isAuthenticated">
              <router-link to="/login" class="text-muted text-decoration-none">
                <i class="bi bi-box-arrow-in-right me-2"></i>Inloggen
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="col-md-4 mb-3">
          <h5 class="fw-bold mb-3">Contact</h5>
          <div class="text-muted">
            <p class="mb-2">
              <i class="bi bi-envelope me-2"></i>
              info@examenapp.nl
            </p>
            <p class="mb-2">
              <i class="bi bi-telephone me-2"></i>
              +31 (0)6 12345678
            </p>
            <p class="mb-2">
              <i class="bi bi-geo-alt me-2"></i>
              Amsterdam, Nederland
            </p>
            <p class="mb-0">
              <i class="bi bi-clock me-2"></i>
              Ma-Vr: 9:00 - 17:00
            </p>
          </div>
        </div>
      </div>

      <hr class="my-4 border-secondary">

      <!-- Bottom Row -->
      <div class="row align-items-center">
        <div class="col-md-8">
          <p class="text-muted mb-0">
            &copy; {{ currentYear }} Examen App. Alle rechten voorbehouden.
            <span class="d-none d-md-inline">
              | Gemaakt met Vue.js 3 en Bootstrap 5
            </span>
          </p>
        </div>
        <div class="col-md-4 text-md-end">
          <div class="d-flex gap-3 justify-content-md-end justify-content-center mt-2 mt-md-0">
            <a href="#" class="text-muted text-decoration-none" @click.prevent="showPrivacy">
              Privacy
            </a>
            <a href="#" class="text-muted text-decoration-none" @click.prevent="showTerms">
              Voorwaarden
            </a>
            <a href="#" class="text-muted text-decoration-none" @click.prevent="showCookies">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { useMainStore } from '../../stores/main.js'

export default {
  name: 'AppFooter',
  setup() {
    const store = useMainStore()
    
    const currentYear = new Date().getFullYear()
    const isAuthenticated = computed(() => store.isAuthenticated)

    const openSocial = (platform) => {
      // Implementeer social media links
      console.log(`Opening ${platform}`)
      // window.open(`https://${platform}.com/yourpage`, '_blank')
    }

    const showPrivacy = () => {
      // Implementeer privacy policy
      console.log('Show privacy policy')
    }

    const showTerms = () => {
      // Implementeer terms of service
      console.log('Show terms of service')
    }

    const showCookies = () => {
      // Implementeer cookie policy
      console.log('Show cookie policy')
    }

    return {
      currentYear,
      isAuthenticated,
      openSocial,
      showPrivacy,
      showTerms,
      showCookies
    }
  }
}
</script>

<style scoped>
footer a:hover {
  color: #ffffff !important;
  transition: color 0.3s ease;
}

.bi {
  transition: transform 0.2s ease;
}

.bi:hover {
  transform: scale(1.1);
}

@media (max-width: 767.98px) {
  .col-md-4 {
    text-align: center;
  }
  
  .list-unstyled {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .list-unstyled li {
    margin-bottom: 0 !important;
  }
}
</style>
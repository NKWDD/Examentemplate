<template>
  <div class="sidebar-overlay" v-if="isOpen && isMobile" @click="closeSidebar"></div>
  
  <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
    <!-- Header -->
    <div class="sidebar-header">
      <h5 class="sidebar-title">
        <i class="bi bi-list-ul me-2"></i>
        Menu
      </h5>
      <button 
        class="btn btn-sm btn-outline-secondary d-md-none" 
        @click="closeSidebar"
        type="button"
      >
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <!-- Navigation -->
    <nav class="sidebar-nav">
      <ul class="nav flex-column">
        <!-- Main Navigation -->
        <li class="nav-item">
          <router-link 
            to="/" 
            class="nav-link"
            :class="{ 'active': $route.name === 'Home' }"
            @click="handleNavigation"
          >
            <i class="bi bi-house me-2"></i>
            Dashboard
          </router-link>
        </li>

        <li class="nav-item">
          <router-link 
            to="/about" 
            class="nav-link"
            :class="{ 'active': $route.name === 'About' }"
            @click="handleNavigation"
          >
            <i class="bi bi-info-circle me-2"></i>
            Informatie
          </router-link>
        </li>

        <!-- Divider -->
        <li class="sidebar-divider"></li>
        <li class="sidebar-heading">Beheer</li>

        <!-- Management Items -->
        <li class="nav-item">
          <a 
            href="#" 
            class="nav-link" 
            @click.prevent="toggleSubmenu('users')"
          >
            <i class="bi bi-people me-2"></i>
            Gebruikers
            <i class="bi ms-auto" :class="submenus.users ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
          </a>
          <ul class="nav flex-column submenu" v-show="submenus.users">
            <li class="nav-item">
              <a href="#" class="nav-link submenu-link" @click.prevent="handleAction('users.list')">
                <i class="bi bi-list me-2"></i>
                Alle Gebruikers
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link submenu-link" @click.prevent="handleAction('users.add')">
                <i class="bi bi-plus-circle me-2"></i>
                Nieuwe Gebruiker
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a 
            href="#" 
            class="nav-link" 
            @click.prevent="toggleSubmenu('content')"
          >
            <i class="bi bi-file-text me-2"></i>
            Content
            <i class="bi ms-auto" :class="submenus.content ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
          </a>
          <ul class="nav flex-column submenu" v-show="submenus.content">
            <li class="nav-item">
              <a href="#" class="nav-link submenu-link" @click.prevent="handleAction('content.posts')">
                <i class="bi bi-newspaper me-2"></i>
                Berichten
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link submenu-link" @click.prevent="handleAction('content.pages')">
                <i class="bi bi-file-earmark me-2"></i>
                Pagina's
              </a>
            </li>
          </ul>
        </li>

        <!-- Divider -->
        <li class="sidebar-divider"></li>
        <li class="sidebar-heading">Instellingen</li>

        <li class="nav-item">
          <a 
            href="#" 
            class="nav-link" 
            @click.prevent="handleAction('settings')"
          >
            <i class="bi bi-gear me-2"></i>
            Algemeen
          </a>
        </li>

        <li class="nav-item">
          <a 
            href="#" 
            class="nav-link" 
            @click.prevent="handleAction('reports')"
          >
            <i class="bi bi-graph-up me-2"></i>
            Rapporten
          </a>
        </li>
      </ul>
    </nav>

    <!-- Footer -->
    <div class="sidebar-footer">
      <div class="user-info" v-if="isAuthenticated">
        <div class="user-avatar">
          <i class="bi bi-person-circle"></i>
        </div>
        <div class="user-details">
          <div class="user-name">{{ userName }}</div>
          <div class="user-role text-muted">{{ userRole }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useMainStore } from '../../stores/main.js'

export default {
  name: 'AppSidebar',
  setup() {
    const store = useMainStore()
    
    const submenus = ref({
      users: false,
      content: false
    })
    
    const isMobile = ref(window.innerWidth < 768)

    const isOpen = computed(() => store.sidebarOpen)
    const isAuthenticated = computed(() => store.isAuthenticated)
    const userName = computed(() => store.userName)
    const userRole = computed(() => store.userRole)

    const toggleSubmenu = (menu) => {
      submenus.value[menu] = !submenus.value[menu]
    }

    const closeSidebar = () => {
      store.setSidebarOpen(false)
    }

    const handleNavigation = () => {
      if (isMobile.value) {
        closeSidebar()
      }
    }

    const handleAction = (action) => {
      console.log(`Action: ${action}`)
      // Implementeer specifieke acties hier
      
      if (isMobile.value) {
        closeSidebar()
      }
    }

    const handleResize = () => {
      isMobile.value = window.innerWidth < 768
      if (!isMobile.value && isOpen.value) {
        // Desktop: laat sidebar open
      }
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      submenus,
      isMobile,
      isOpen,
      isAuthenticated,
      userName,
      userRole,
      toggleSubmenu,
      closeSidebar,
      handleNavigation,
      handleAction
    }
  }
}
</script>

<style scoped>
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}

.sidebar {
  position: fixed;
  top: 76px; /* Below navbar */
  left: -280px;
  width: 280px;
  height: calc(100vh - 76px);
  background-color: #fff;
  border-right: 1px solid #dee2e6;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  z-index: 1041;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.sidebar-open {
  left: 0;
}

.sidebar-header {
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
}

.sidebar-title {
  margin: 0;
  color: #495057;
  font-weight: 600;
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0;
}

.nav-link {
  padding: 0.75rem 1rem;
  color: #495057;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  border: none;
  background: transparent;
}

.nav-link:hover {
  background-color: #f8f9fa;
  color: #0d6efd;
}

.nav-link.active {
  background-color: #e3f2fd;
  color: #0d6efd;
  border-right: 3px solid #0d6efd;
}

.submenu {
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}

.submenu-link {
  padding-left: 3rem;
  color: #6c757d;
  font-size: 0.9rem;
}

.submenu-link:hover {
  background-color: #e9ecef;
  color: #0d6efd;
}

.sidebar-divider {
  height: 1px;
  background-color: #dee2e6;
  margin: 0.5rem 0;
}

.sidebar-heading {
  padding: 0.75rem 1rem 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6c757d;
  letter-spacing: 0.5px;
}

.sidebar-footer {
  padding: 1rem;
  border-top: 1px solid #dee2e6;
  background-color: #f8f9fa;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-avatar {
  font-size: 2rem;
  color: #6c757d;
}

.user-name {
  font-weight: 600;
  color: #495057;
  font-size: 0.9rem;
}

.user-role {
  font-size: 0.8rem;
}

/* Desktop styles */
@media (min-width: 768px) {
  .sidebar {
    position: static;
    left: 0;
    top: 0;
    height: 100vh;
    box-shadow: none;
  }
  
  .sidebar-overlay {
    display: none;
  }
}

/* Scrollbar styling */
.sidebar-nav::-webkit-scrollbar {
  width: 4px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.sidebar-nav::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
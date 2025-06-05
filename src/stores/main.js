import { defineStore } from 'pinia'

// Main store voor algemene app state
export const useMainStore = defineStore('main', {
  state: () => ({
    // User data
    user: null,
    isAuthenticated: false,
    
    // App state
    loading: false,
    error: null,
    sidebarOpen: false,
    
    // Theme/UI state
    theme: 'light',
    
    // Data
    items: [],
    currentItem: null
  }),
  
  getters: {
    // User getters
    userName: (state) => state.user?.name || 'Gast',
    userRole: (state) => state.user?.role || 'user',
    
    // App getters
    hasError: (state) => state.error !== null,
    itemCount: (state) => state.items.length,
    
    // Filtered items (voorbeeld)
    activeItems: (state) => state.items.filter(item => item.active === true)
  },
  
  actions: {
    // Authentication actions
    async login(credentials) {
      this.loading = true
      this.error = null
      
      try {
        // Hier zou je je API call maken
        // const response = await api.login(credentials)
        
        // Dummy login voor template
        this.user = {
          id: 1,
          name: credentials.username,
          email: credentials.email || `${credentials.username}@example.com`,
          role: 'user'
        }
        this.isAuthenticated = true
        
        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(this.user))
        
        return true
      } catch (error) {
        this.error = error.message || 'Login failed'
        return false
      } finally {
        this.loading = false
      }
    },
    
    logout() {
      this.user = null
      this.isAuthenticated = false
      localStorage.removeItem('user')
    },
    
    // App state actions
    setLoading(status) {
      this.loading = status
    },
    
    setError(error) {
      this.error = error
    },
    
    clearError() {
      this.error = null
    },
    
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    
    setSidebarOpen(status) {
      this.sidebarOpen = status
    },
    
    // Data actions
    async fetchItems() {
      this.loading = true
      this.error = null
      
      try {
        // Hier zou je je API call maken
        // const response = await api.getItems()
        
        // Dummy data voor template
        this.items = [
          { id: 1, name: 'Item 1', active: true, description: 'Beschrijving van item 1' },
          { id: 2, name: 'Item 2', active: false, description: 'Beschrijving van item 2' },
          { id: 3, name: 'Item 3', active: true, description: 'Beschrijving van item 3' }
        ]
        
        return this.items
      } catch (error) {
        this.error = error.message || 'Failed to fetch items'
        return []
      } finally {
        this.loading = false
      }
    },
    
    addItem(item) {
      const newItem = {
        id: Date.now(),
        ...item,
        active: true
      }
      this.items.push(newItem)
      return newItem
    },
    
    updateItem(id, updates) {
      const index = this.items.findIndex(item => item.id === id)
      if (index !== -1) {
        this.items[index] = { ...this.items[index], ...updates }
        return this.items[index]
      }
      return null
    },
    
    deleteItem(id) {
      const index = this.items.findIndex(item => item.id === id)
      if (index !== -1) {
        this.items.splice(index, 1)
        return true
      }
      return false
    },
    
    setCurrentItem(item) {
      this.currentItem = item
    },
    
    // Initialize app
    async init() {
      // Check for saved user
      const savedUser = localStorage.getItem('user')
      if (savedUser) {
        try {
          this.user = JSON.parse(savedUser)
          this.isAuthenticated = true
        } catch (error) {
          console.error('Failed to parse saved user:', error)
          localStorage.removeItem('user')
        }
      }
      
      // Load initial data
      await this.fetchItems()
    }
  }
})
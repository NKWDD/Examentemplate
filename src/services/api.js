import axios from 'axios'

// Base URL configuratie
const BASE_URL = 'http://localhost:3000/api' // Pas aan naar jouw API

// Axios instance maken
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Token toevoegen als beschikbaar
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // Loading state (optioneel)
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`)
    
    return config
  },
  (error) => {
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Successful response
    return response.data
  },
  (error) => {
    // Error handling
    console.error('API Error:', error)
    
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response
      
      switch (status) {
        case 401:
          // Unauthorized - redirect to login
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          window.location.href = '/login'
          break
        case 403:
          // Forbidden
          console.error('Access forbidden')
          break
        case 404:
          // Not found
          console.error('Resource not found')
          break
        case 500:
          // Server error
          console.error('Server error')
          break
        default:
          console.error(`Error ${status}: ${data?.message || 'Unknown error'}`)
      }
      
      return Promise.reject(new Error(data?.message || `Error ${status}`))
    } else if (error.request) {
      // Network error
      console.error('Network error:', error.message)
      return Promise.reject(new Error('Netwerkfout: Controleer je internetverbinding'))
    } else {
      // Other error
      console.error('Error:', error.message)
      return Promise.reject(error)
    }
  }
)

// API endpoints
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
  refresh: () => api.post('/auth/refresh'),
  profile: () => api.get('/auth/profile')
}

export const userAPI = {
  getAll: () => api.get('/users'),
  getById: (id) => api.get(`/users/${id}`),
  create: (userData) => api.post('/users', userData),
  update: (id, userData) => api.put(`/users/${id}`, userData),
  delete: (id) => api.delete(`/users/${id}`)
}

export const dataAPI = {
  // Generic CRUD operations
  getAll: (endpoint) => api.get(`/${endpoint}`),
  getById: (endpoint, id) => api.get(`/${endpoint}/${id}`),
  create: (endpoint, data) => api.post(`/${endpoint}`, data),
  update: (endpoint, id, data) => api.put(`/${endpoint}/${id}`, data),
  delete: (endpoint, id) => api.delete(`/${endpoint}/${id}`),
  
  // Specific endpoints (examples)
  getItems: () => api.get('/items'),
  getItemById: (id) => api.get(`/items/${id}`),
  createItem: (item) => api.post('/items', item),
  updateItem: (id, item) => api.put(`/items/${id}`, item),
  deleteItem: (id) => api.delete(`/items/${id}`),
  
  // Search and filter
  search: (endpoint, query) => api.get(`/${endpoint}/search`, { params: { q: query } }),
  filter: (endpoint, filters) => api.get(`/${endpoint}`, { params: filters })
}

// File upload helper
export const uploadAPI = {
  uploadFile: (file, endpoint = 'upload') => {
    const formData = new FormData()
    formData.append('file', file)
    
    return api.post(`/${endpoint}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  
  uploadMultiple: (files, endpoint = 'upload/multiple') => {
    const formData = new FormData()
    files.forEach((file, index) => {
      formData.append(`files[${index}]`, file)
    })
    
    return api.post(`/${endpoint}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

// Helper functions
export const apiHelpers = {
  // Set auth token
  setAuthToken: (token) => {
    if (token) {
      localStorage.setItem('token', token)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      localStorage.removeItem('token')
      delete api.defaults.headers.common['Authorization']
    }
  },
  
  // Clear auth
  clearAuth: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    delete api.defaults.headers.common['Authorization']
  },
  
  // Check if authenticated
  isAuthenticated: () => {
    return localStorage.getItem('token') !== null
  }
}

// Export default axios instance
export default api
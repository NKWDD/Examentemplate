<template>
  <div class="card" :class="cardClass">
    <div v-if="imageUrl" class="card-img-top-container">
      <img :src="imageUrl" :alt="imageAlt" class="card-img-top" />
    </div>
    
    <div class="card-header" v-if="$slots.header || title">
      <slot name="header">
        <h5 class="card-title mb-0">{{ title }}</h5>
      </slot>
    </div>
    
    <div class="card-body" :class="bodyClass">
      <h5 v-if="title && !$slots.header" class="card-title">{{ title }}</h5>
      <h6 v-if="subtitle" class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
      
      <div class="card-text">
        <slot>
          <p v-if="text">{{ text }}</p>
        </slot>
      </div>
    </div>
    
    <div class="card-footer" v-if="$slots.footer || showFooter">
      <slot name="footer">
        <div class="d-flex justify-content-between align-items-center">
          <small class="text-muted" v-if="footerText">{{ footerText }}</small>
          <div v-if="showActions">
            <button 
              v-if="primaryAction" 
              class="btn btn-primary btn-sm me-2"
              @click="$emit('primary-action')"
            >
              {{ primaryAction }}
            </button>
            <button 
              v-if="secondaryAction" 
              class="btn btn-outline-secondary btn-sm"
              @click="$emit('secondary-action')"
            >
              {{ secondaryAction }}
            </button>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  emits: ['primary-action', 'secondary-action'],
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    imageAlt: {
      type: String,
      default: 'Card image'
    },
    variant: {
      type: String,
      default: '',
      validator: (value) => ['', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(value)
    },
    border: {
      type: String,
      default: '',
      validator: (value) => ['', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(value)
    },
    shadow: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    footerText: {
      type: String,
      default: ''
    },
    primaryAction: {
      type: String,
      default: ''
    },
    secondaryAction: {
      type: String,
      default: ''
    }
  },
  computed: {
    cardClass() {
      let classes = [];
      
      if (this.variant) {
        classes.push(`bg-${this.variant}`);
        if (this.variant === 'dark') {
          classes.push('text-white');
        }
      }
      
      if (this.border) {
        classes.push(`border-${this.border}`);
      }
      
      if (this.shadow) {
        classes.push('shadow');
      }
      
      if (this.hover) {
        classes.push('card-hover');
      }
      
      return classes.join(' ');
    },
    bodyClass() {
      return this.variant && ['dark', 'primary'].includes(this.variant) ? 'text-white' : '';
    },
    showFooter() {
      return this.footerText || this.showActions;
    },
    showActions() {
      return this.primaryAction || this.secondaryAction;
    }
  }
}
</script>

<style scoped>
.card-hover {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-img-top-container {
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-hover:hover .card-img-top {
  transform: scale(1.05);
}

.card-title {
  color: inherit;
}

.card-subtitle {
  color: inherit;
  opacity: 0.8;
}
</style>
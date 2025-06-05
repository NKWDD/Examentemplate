<template>
  <div 
    class="modal fade" 
    :id="modalId"
    tabindex="-1" 
    :aria-labelledby="`${modalId}Label`"
    aria-hidden="true"
    ref="modalElement"
  >
    <div class="modal-dialog" :class="modalSizeClass">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header" v-if="showHeader">
          <h5 class="modal-title" :id="`${modalId}Label`">
            <i v-if="icon" :class="`bi ${icon} me-2`"></i>
            {{ title }}
          </h5>
          <button 
            type="button" 
            class="btn-close" 
            @click="handleClose"
            :aria-label="closeLabel"
          ></button>
        </div>

        <!-- Body -->
        <div class="modal-body" :class="bodyClass">
          <slot name="body">
            <p v-if="message" v-html="message"></p>
          </slot>
        </div>

        <!-- Footer -->
        <div class="modal-footer" v-if="showFooter">
          <slot name="footer">
            <button 
              type="button" 
              class="btn btn-secondary" 
              @click="handleClose"
            >
              {{ cancelText }}
            </button>
            <button 
              v-if="showConfirm"
              type="button" 
              :class="confirmButtonClass"
              @click="handleConfirm"
              :disabled="loading"
            >
              <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
              {{ confirmText }}
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppModal',
  props: {
    modalId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Modal Title'
    },
    message: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md', // sm, md, lg, xl
      validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
    },
    type: {
      type: String,
      default: 'default', // default, confirm, warning, danger, success, info
      validator: (value) => ['default', 'confirm', 'warning', 'danger', 'success', 'info'].includes(value)
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: 'Bevestigen'
    },
    cancelText: {
      type: String,
      default: 'Annuleren'
    },
    closeLabel: {
      type: String,
      default: 'Sluiten'
    },
    bodyClass: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    backdrop: {
      type: [Boolean, String],
      default: true
    },
    keyboard: {
      type: Boolean,
      default: true
    }
  },
  emits: ['confirm', 'cancel', 'close', 'show', 'shown', 'hide', 'hidden'],
  setup(props, { emit }) {
    const modalElement = ref(null)
    let bootstrapModal = null

    const modalSizeClass = computed(() => {
      const sizeMap = {
        sm: 'modal-sm',
        md: '',
        lg: 'modal-lg',
        xl: 'modal-xl'
      }
      return sizeMap[props.size]
    })

    const confirmButtonClass = computed(() => {
      const typeMap = {
        default: 'btn btn-primary',
        confirm: 'btn btn-primary',
        warning: 'btn btn-warning',
        danger: 'btn btn-danger',
        success: 'btn btn-success',
        info: 'btn btn-info'
      }
      return typeMap[props.type]
    })

    const handleConfirm = () => {
      emit('confirm')
    }

    const handleClose = () => {
      emit('cancel')
      emit('close')
      hide()
    }

    const show = () => {
      if (bootstrapModal) {
        bootstrapModal.show()
      }
    }

    const hide = () => {
      if (bootstrapModal) {
        bootstrapModal.hide()
      }
    }

    const toggle = () => {
      if (bootstrapModal) {
        bootstrapModal.toggle()
      }
    }

    onMounted(() => {
      if (modalElement.value) {
        // Import Bootstrap modal dynamically
        import('bootstrap/js/dist/modal').then((Modal) => {
          bootstrapModal = new Modal.default(modalElement.value, {
            backdrop: props.backdrop,
            keyboard: props.keyboard
          })

          // Add event listeners
          modalElement.value.addEventListener('show.bs.modal', () => {
            emit('show')
          })

          modalElement.value.addEventListener('shown.bs.modal', () => {
            emit('shown')
          })

          modalElement.value.addEventListener('hide.bs.modal', () => {
            emit('hide')
          })

          modalElement.value.addEventListener('hidden.bs.modal', () => {
            emit('hidden')
          })
        })
      }
    })

    onUnmounted(() => {
      if (bootstrapModal) {
        bootstrapModal.dispose()
      }
    })

    return {
      modalElement,
      modalSizeClass,
      confirmButtonClass,
      handleConfirm,
      handleClose,
      show,
      hide,
      toggle
    }
  }
}
</script>

<style scoped>
.modal-header {
  border-bottom: 1px solid #dee2e6;
}

.modal-footer {
  border-top: 1px solid #dee2e6;
}

.modal-title {
  color: #495057;
  font-weight: 600;
}

/* Type-specific styling */
.modal-content {
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

/* Warning modal */
.modal[data-type="warning"] .modal-header {
  background-color: #fff3cd;
  border-bottom-color: #ffecb5;
}

.modal[data-type="warning"] .modal-title {
  color: #664d03;
}

/* Danger modal */
.modal[data-type="danger"] .modal-header {
  background-color: #f8d7da;
  border-bottom-color: #f5c2c7;
}

.modal[data-type="danger"] .modal-title {
  color: #721c24;
}

/* Success modal */
.modal[data-type="success"] .modal-header {
  background-color: #d1e7dd;
  border-bottom-color: #badbcc;
}

.modal[data-type="success"] .modal-title {
  color: #0f5132;
}

/* Info modal */
.modal[data-type="info"] .modal-header {
  background-color: #d1ecf1;
  border-bottom-color: #bee5eb;
}

.modal[data-type="info"] .modal-title {
  color: #055160;
}

/* Loading state */
.btn:disabled {
  cursor: not-allowed;
}

/* Animation improvements */
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
}

.modal.show .modal-dialog {
  transform: translate(0, 0);
}

/* Mobile responsiveness */
@media (max-width: 576px) {
  .modal-dialog {
    margin: 0.5rem;
    max-width: calc(100% - 1rem);
  }
  
  .modal-body {
    padding: 1rem;
  }
  
  .modal-footer {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .modal-footer .btn {
    width: 100%;
  }
}
</style>
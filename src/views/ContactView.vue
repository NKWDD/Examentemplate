<template>
  <section class="contact-section">
    <div class="container">
      <h2 class="section-title">Contactformulier</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <!-- Aanhef -->
        <div class="form-group">
          <label for="salutation">Aanhef*</label>
          <select id="salutation" v-model="form.salutation" required>
            <option value="" disabled selected>Selecteer aanhef</option>
            <option value="De heer">De heer</option>
            <option value="Mevrouw">Mevrouw</option>
            <option value="Anders">Anders</option>
          </select>
        </div>

        <!-- Naam -->
        <div class="form-group">
          <label for="name">Naam*</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            required 
            placeholder="Volledige naam"
          >
        </div>

        <!-- E-mailadres -->
        <div class="form-group">
          <label for="email">E-mailadres*</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required 
            placeholder="voorbeeld@domein.nl"
          >
        </div>

        <!-- Telefoonnummer -->
        <div class="form-group">
          <label for="phone">Telefoonnummer*</label>
          <input 
            type="tel" 
            id="phone" 
            v-model="form.phone" 
            required 
            placeholder="0612345678"
          >
        </div>

        <!-- Vraag/opmerking -->
        <div class="form-group">
          <label for="message">Vraag/opmerking*</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            required 
            placeholder="Typ hier uw bericht..."
            rows="5"
          ></textarea>
        </div>

        <!-- Nieuwsbrief checkbox (niet verplicht) -->
        <div class="form-group newsletter-group">
          <input 
            type="checkbox" 
            id="newsletter" 
            v-model="form.newsletter"
          >
          <label for="newsletter">Ik wil me aanmelden voor de nieuwsbrief</label>
        </div>

        <!-- Verplichte velden notitie -->
        <p class="required-notice">* Verplichte velden</p>

        <!-- Submit knop -->
        <button type="submit" class="submit-btn">
          Versturen
        </button>

        <!-- Success popup -->
        <div v-if="showSuccess" class="success-popup">
          <div class="popup-content">
            <div class="popup-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            </div>
            <h3 class="popup-title">Bedankt voor uw bericht!</h3>
            <p class="popup-message">We hebben uw contactverzoek ontvangen en nemen zo snel mogelijk contact met u op.</p>
            <button @click="showSuccess = false" class="popup-close-btn">
              Sluiten
            </button>
          </div>
          <div class="popup-overlay" @click="showSuccess = false"></div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        salutation: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        newsletter: false
      },
      showSuccess: false
    }
  },
  methods: {
    submitForm() {
      console.log('Formulier ingediend:', this.form);
      
      // Reset het formulier na verzending
      this.resetForm();
      
      // Toon de mooie popup
      this.showSuccess = true;
    },
    resetForm() {
      this.form = {
        salutation: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        newsletter: false
      };
    }
  }
}
</script>

<style scoped>
.contact-section {
  padding: 80px 0;
  background-color: #FFF8E1;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 2.5rem;
  font-weight: 600;
}

.contact-form {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  position: relative;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #F4B942;
  outline: none;
  box-shadow: 0 0 0 3px rgba(244, 185, 66, 0.2);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.newsletter-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.newsletter-group input[type="checkbox"] {
  width: auto;
}

.required-notice {
  font-size: 0.85rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
}

.submit-btn {
  background: #F4B942;
  color: #333;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
}

.submit-btn:hover {
  background: #E6A732;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(244, 185, 66, 0.3);
}

/* Success Popup Styling */
.success-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
}

.popup-content {
  position: relative;
  background: white;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  max-width: 450px;
  width: 90%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  z-index: 2;
  animation: popIn 0.4s ease-out;
}

.popup-icon {
  width: 60px;
  height: 60px;
  background: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.popup-icon svg {
  width: 30px;
  height: 30px;
  fill: white;
}

.popup-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
}

.popup-message {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.popup-close-btn {
  background: #F4B942;
  color: #333;
  border: none;
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.popup-close-btn:hover {
  background: #E6A732;
  transform: translateY(-2px);
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Responsive aanpassingen */
@media (max-width: 768px) {
  .contact-form {
    padding: 30px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .contact-form {
    padding: 20px;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .submit-btn {
    max-width: 100%;
  }
  
  .popup-content {
    padding: 30px 20px;
  }
  
  .popup-title {
    font-size: 1.3rem;
  }
}
</style>
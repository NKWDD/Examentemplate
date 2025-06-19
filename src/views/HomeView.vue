<template>
  <div class="home-view">
    <!-- Hero Section met Carousel -->
    <section class="hero-section">
      <div class="carousel-container">
        <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div 
            v-for="(slide, index) in slides" 
            :key="index"
            class="carousel-slide"
            :style="{ backgroundImage: `url(${slide.image})` }"
          >
            <div class="slide-overlay">
              <div class="slide-content">
                <h2 class="slide-title">{{ slide.title }}</h2>
                <p class="slide-subtitle">{{ slide.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation Buttons -->
        <button @click="previousSlide" class="carousel-btn carousel-btn-prev" aria-label="Vorige slide">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button @click="nextSlide" class="carousel-btn carousel-btn-next" aria-label="Volgende slide">
          <i class="fas fa-chevron-right"></i>
        </button>
        
        <!-- Indicators -->
        <div class="carousel-indicators">
          <button 
            v-for="(slide, index) in slides" 
            :key="index"
            @click="goToSlide(index)"
            :class="['indicator', { active: index === currentSlide }]"
            :aria-label="`Ga naar slide ${index + 1}`"
          ></button>
        </div>
      </div>
    </section>

    <!-- Welkom/Info Sectie -->
    <section class="info-section">
      <div class="container">
        <div class="info-card">
          <h2 class="info-title">Welkom bij BSO Rooie Noes!</h2>
          <p class="info-text">Wat fijn dat je er bent!

Bij BSO Rooie Noes draait alles om plezier maken, ontdekken en jezelf zijn. Na een drukke schooldag kun je hier lekker ontspannen, spelen met vriendjes en vriendinnetjes, knutselen, buiten ravotten of gezellig een boekje lezen in onze knusse hoekjes.

Onze begeleiders staan elke dag met een grote glimlach voor je klaar. Samen zorgen we voor een veilige, warme en vrolijke plek waar iedereen zich thuis voelt — of je nu houdt van actie, creativiteit of juist van rust.

Bij Rooie Noes maken we herinneringen die blijven hangen... en soms ook een beetje rode wangen van het lachen!</p>
          <button class="info-button">Tot snel bij BSO Rooie Noes – waar elke dag een feestje is!

</button>
        </div>
      </div>
    </section>

    <!-- Laatste Nieuws Sectie -->
    <section class="news-section">
      <div class="container">
        <h2 class="section-title">Laatste Nieuws</h2>
        <div class="news-grid">
          <div v-for="newsItem in latestNews" :key="newsItem.id" class="news-card">
            <div class="news-image-container">
              <img :src="newsItem.image" :alt="newsItem.title" class="news-image">
            </div>
            <div class="news-content">
              <div class="news-meta">
                <span class="news-date">{{ formatDate(newsItem.date) }}</span>
                <span class="news-category">{{ newsItem.category }}</span>
              </div>
              <h3 class="news-title">{{ newsItem.title }}</h3>
              <p class="news-excerpt">{{ newsItem.excerpt }}</p>
              <button class="btn-read-more" @click="readMore(newsItem.id)">
                Lees meer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      currentSlide: 0,
      autoSlideInterval: null,
      slides: [
        {
          id: 1,
          title: 'Kindfestival 2024',
          subtitle: 'Een onvergetelijke dag vol muziek, kunst en verbinding',
          image: 'https://img.freepik.com/vrije-photo/kinderen-spelen-op-gras_1098-504.jpg?semt=ais_hybrid&w=740'
        },
        {
          id: 2,
          title: 'Kunstworkshop',
          subtitle: 'Ontdek je creatieve kant in onze inspirerende workshops',
          image: 'https://media.istockphoto.com/id/1916612882/nl/foto/portrait-group-and-kids-with-smile-at-school-for-education-learning-and-knowledge-with-hug.jpg?s=612x612&w=0&k=20&c=3ZZcCxkxeLnjnjOoWdGTE4G5JCURbCgkwiVZRAdseAw='
        },
        {
          id: 3,
          title: 'Natuurwandeling',
          subtitle: 'Verken de natuurlijke schoonheid van onze omgeving',
          image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
        }
      ],
      latestNews: [
        {
          id: 1,
          title: 'Zomerfeest op de BSO – Kom je ook?',
          excerpt: 'Wat hebben we er zin in: het grote Zomerfeest van BSO Rooie Noes komt eraan! Op vrijdag 5 juli toveren we onze buitenruimte om tot een waar feestparadijs met spelletjes, muziek, limonade en lekkers. Er is een springkussen, een schminkhoek én natuurlijk de beroemde ‘Rooie Noes Spelletjesparade’. Ouders, broertjes en zusjes zijn ook van harte welkom om mee te genieten.',
          date: new Date('2025-06-15'),
          category: 'Evenementen',
          image: 'https://image.oudersvannu.nl/243483486/width/2048/festivals-met-kinderen'
        },
        {
          id: 2,
          title: 'Kunstweek in de BSO – Kleine kunstenaars aan het werk!',
          excerpt: 'Afgelopen week stond in het teken van kunst & creativiteit bij BSO Rooie Noes. Onze kinderen lieten hun fantasie de vrije loop tijdens de Kunstweek, waarbij we werkten met verf, klei, papier-maché en zelfs buitenkrijt! De afsluiting was een echte mini-expositie voor ouders en verzorgers, met trotse kinderen die vol enthousiasme hun kunstwerken lieten zien. Dank aan iedereen die kwam kijken en mee deed – wat zijn we trots op onze kleine kunstenaars! 🖌️✨',
          date: new Date('2025-06-10'),
          category: 'Nieuws',
          image: 'https://cobra-museum.nl/wp-content/uploads/2023/05/Chagall-vis-Jeroen-Krabbe-crop.jpeg'
        }
      ]
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    previousSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    },
    formatDate(date) {
      return date.toLocaleDateString('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    readMore(newsId) {
      this.$router.push(`/news/${newsId}`);
    }
  }
}
</script>

<style scoped>
/* CSS Custom Properties voor kleuren */
:root {
  --primary-accent: rgba(244, 185, 66, 1);
  --secondary-accent: rgba(185, 104, 212, 1);
  --background-light: rgba(255, 248, 225, 1);
  --gradient-bg: rgba(248, 225, 166, 1);
  --text-dark: rgba(51, 51, 51, 1);
}

.home-view {
  min-height: 100vh;
  background: var(--background-light);
  background-color: #FFF8E1;
}

/* Hero Section & Carousel */
.hero-section {
  height: 60vh;
  position: relative;
  overflow: hidden;
}

.carousel-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.carousel-slide {
  flex: 0 0 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  padding: 40px;
}

.slide-content {
  color: white;
  max-width: 600px;
}

.slide-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.slide-subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Carousel Navigation */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: var(--secondary-accent);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.carousel-btn:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.carousel-btn-prev {
  left: 20px;
}

.carousel-btn-next {
  right: 20px;
}

/* Carousel Indicators */
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  transform: scale(1.3);
}

/* Info Section */
.info-section {
  padding: 60px 0;
  background: var(--background-light);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.info-card {
  background: var(--gradient-bg);
  background-color: #F8E1A6;
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.info-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.info-text {
  font-size: 1.1rem;
  color: var(--text-dark);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.info-button {
  background: var(--primary-accent);
  color: black;
  border: none;
  padding: 15px 40px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(244, 185, 66, 0.3);
  background-color: #FFF8E1;
}

.info-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(185, 104, 212, 0.4);
}

/* News Section */
.news-section {
  padding: 80px 0;
  background: var(--background-light);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 3rem;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.news-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #F8E1A6;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.news-image-container {
  height: 200px;
  overflow: hidden;
}

.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .news-image {
  transform: scale(1.05);
}

.news-content {
  padding: 25px;
}

.news-meta {
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
}

.news-date, .news-category {
  font-size: 0.85rem;
  padding: 4px 12px;
  border-radius: 15px;
  font-weight: 500;
}

.news-date {
  background: rgba(255, 255, 255, 0.8);
  color: var(--text-dark);
}

.news-category {
  background: var(--primary-accent);
  color: white;
}

.news-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.news-excerpt {
  color: var(--text-dark);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.btn-read-more {
  background: white;
  color: var(--secondary-accent);
  border: 2px solid var(--secondary-accent);
  padding: 10px 25px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.btn-read-more:hover {
  color: black;
  transform: translateY(-2px);
  background-color: #FFF8E1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    height: 50vh;
  }
  
  .slide-title {
    font-size: 2rem;
  }
  
  .slide-subtitle {
    font-size: 1rem;
  }
  
  .slide-overlay {
    padding: 20px;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
  
  .carousel-btn-prev {
    left: 10px;
  }
  
  .carousel-btn-next {
    right: 10px;
  }
  
  .info-section {
    padding: 40px 0;
  }
  
  .info-card {
    padding: 40px 20px;
    border-radius: 15px;
  }
  
  .info-title {
    font-size: 1.8rem;
  }
  
  .news-section {
    padding: 60px 0;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 45vh;
  }
  
  .slide-title {
    font-size: 1.5rem;
  }
  
  .slide-subtitle {
    font-size: 0.9rem;
  }
  
  .info-title {
    font-size: 1.5rem;
  }
  
  .info-text {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .news-content {
    padding: 20px;
  }
}
</style>
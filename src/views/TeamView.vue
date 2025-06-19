<template>
  <div class="about-view">
    <!-- Custom afbeelding onder navigatie -->
    <div class="hero-image">
      <img src="/src/assets/wiezijnwij1.png" alt="BSO Rooie Noes team" />
    </div>

    <!-- Team Sectie -->
    <section class="team-section">
      <div class="container">
        <h2 class="section-title">Ons Team</h2>
        <div class="team-grid">
          <div v-for="lid in leidsters" :key="lid.naam" class="team-card">
            <img :src="lid.url_img" :alt="lid.naam" class="team-image" />
            <div class="team-info">
              <h3 class="team-name">{{ lid.naam }}</h3>
              <p class="team-role">{{ lid.functie }}</p>
              <p class="team-age">{{ lid.leeftijd }} jaar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import leidsters from '@/assets/data/leidsters.js'; // zorg dat dit pad klopt

export default {
  name: 'HomeView',
  data() {
    return {
      leidsters
    };
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

.about-view {
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
  background-color: #f9e0fd;
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
  background-color: #f9e0fd;
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

<style scoped>

.hero-image {
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 30px;
  border-radius: 8px;
  background-color: #f9e0fd;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .hero-image {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .team-filters {
    justify-content: center;
  }
}
.team-section {
  padding: 80px 0;
  background: #FFF8E1;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.team-card {
  background: #f9e0fd;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.team-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 15px;
}

.team-info {
  color: var(--text-dark);
}

.team-name {
  font-size: 1.3rem;
  font-weight: 600;
}

.team-role {
  font-size: 1rem;
  margin-top: 5px;
  opacity: 0.8;
}

.team-age {
  font-size: 0.9rem;
  margin-top: 3px;
  color: #555;
}

/* Responsive */
@media (max-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}

</style>
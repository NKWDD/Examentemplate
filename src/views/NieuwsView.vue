<template>
  <div class="news-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-image" :style="{ backgroundImage: 'url(https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)' }">
        <div class="hero-overlay">
          <h1 class="hero-title">Nieuws</h1>
        </div>
      </div>
    </section>

    <!-- Nieuws Overzicht -->
    <section class="news-overview-section">
      <div class="container">
        <div class="news-grid">
          <div v-for="newsItem in newsItems" :key="newsItem.id" class="news-card">
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
              </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NewsView',
  data() {
    return {
      newsItems: [
        {
          id: 1,
          title: 'Zomerfeest op de BSO – Kom je ook?',
          excerpt: 'Wat hebben we er zin in: het grote Zomerfeest van BSO Rooie Noes komt eraan! Op vrijdag 5 juli toveren we onze buitenruimte om tot een waar feestparadijs met spelletjes, muziek, limonade en lekkers.',
          date: new Date('2025-06-15'),
          category: 'Evenementen',
          image: 'https://image.oudersvannu.nl/243483486/width/2048/festivals-met-kinderen',
          fullContent: '<p>Wat hebben we er zin in: het grote Zomerfeest van BSO Rooie Noes komt eraan! Op vrijdag 5 juli toveren we onze buitenruimte om tot een waar feestparadijs met spelletjes, muziek, limonade en lekkers.</p><p>Er is een springkussen, een schminkhoek én natuurlijk de beroemde "Rooie Noes Spelletjesparade". Ouders, broertjes en zusjes zijn ook van harte welkom om mee te genieten van 15:00 tot 18:00 uur.</p><p>We sluiten de dag af met een gezamenlijke picknick, dus neem gerust iets lekkers mee om te delen!</p>'
        },
        {
          id: 2,
          title: 'Kunstweek in de BSO – Kleine kunstenaars aan het werk!',
          excerpt: 'Afgelopen week stond in het teken van kunst & creativiteit bij BSO Rooie Noes. Onze kinderen lieten hun fantasie de vrije loop tijdens de Kunstweek.',
          date: new Date('2025-06-10'),
          category: 'Nieuws',
          image: 'https://cobra-museum.nl/wp-content/uploads/2023/05/Chagall-vis-Jeroen-Krabbe-crop.jpeg',
          fullContent: '<p>Afgelopen week stond in het teken van kunst & creativiteit bij BSO Rooie Noes. Onze kinderen lieten hun fantasie de vrije loop tijdens de Kunstweek, waarbij we werkten met verf, klei, papier-maché en zelfs buitenkrijt!</p><p>De afsluiting was een echte mini-expositie voor ouders en verzorgers, met trotse kinderen die vol enthousiasme hun kunstwerken lieten zien. De thema\'s varieerden van "Mijn droomwereld" tot "Dieren van de toekomst".</p><p>Dank aan iedereen die kwam kijken en mee deed – wat zijn we trots op onze kleine kunstenaars! 🖌️✨</p>'
        },
        {
          id: 3,
          title: 'Nieuwe speeltoestellen geopend',
          excerpt: 'We zijn trots om aan te kondigen dat onze nieuwe speeltoestellen officieel in gebruik zijn genomen! De kinderen hebben er al volop van genoten.',
          date: new Date('2025-05-28'),
          category: 'Nieuws',
          image: 'https://img.freepik.com/free-photo/kids-playing-playground_23-2149210149.jpg',
          fullContent: '<p>Na weken van voorbereiding zijn onze nieuwe speeltoestellen eindelijk klaar! Dankzij een succesvolle sponsoractie en een bijdrage van de gemeente hebben we kunnen investeren in kwalitatieve en veilige speeltoestellen.</p><p>Het hoogtepunt is zonder twijfel de nieuwe klimtoren met glijbaan, maar ook de schommels en wipwap zijn populair. De officiële opening werd verricht door onze jongste BSO-bezoeker, Lisa (4 jaar), die het lint mocht doorknippen.</p><p>Veilig spelen staat voorop, daarom hebben al onze begeleiders een extra training gevolgd voor toezicht bij de nieuwe toestellen.</p>'
        },
        {
          id: 4,
          title: 'BSO Rooie Noes wint pedagogiekprijs',
          excerpt: 'Met trots kunnen we melden dat BSO Rooie Noes de regionale pedagogiekprijs heeft gewonnen voor ons unieke aanbod in creatieve ontwikkeling.',
          date: new Date('2025-05-15'),
          category: 'Prijzen',
          image: 'https://cobra-museum.nl/wp-content/uploads/2023/05/Chagall-vis-Jeroen-Krabbe-crop.jpeg',
          fullContent: '<p>Met trots kunnen we melden dat BSO Rooie Noes de regionale pedagogiekprijs heeft gewonnen voor ons unieke aanbod in creatieve ontwikkeling. De jury prees vooral onze "holistische benadering van kindontwikkeling" en de manier waarop we ruimte bieden voor zowel expressie als rust.</p><p>De prijs bestaat uit een bronzen beeldje en een geldbedrag van €2.500 dat we zullen besteden aan extra materialen voor onze kunst- en muziekhoek.</p><p>Dit succes delen we natuurlijk met alle kinderen, ouders en ons fantastische team dat elke dag het verschil maakt!</p>'
        }
      ]
    }
  },
  methods: {
    formatDate(date) {
      return date.toLocaleDateString('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
}
</script>

<style scoped>
.news-view {
  min-height: 100vh;
  background: #FFF8E1;
}

/* Hero Section */
.hero-section {
  height: 40vh;
  position: relative;
}

.hero-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-title {
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

/* News Overview Section */
.news-overview-section {
  padding: 80px 0;
  background: #FFF8E1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
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

.news-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
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
  color: #333;
}

.news-category {
  background: #F4B942;
  color: white;
}

.news-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.news-excerpt {
  color: #333;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.btn-read-more {
  background: white;
  color: #B968D4;
  border: 2px solid #B968D4;
  padding: 10px 25px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  display: inline-block;
}

.btn-read-more:hover {
  background: #B968D4;
  color: white;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    height: 30vh;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .news-overview-section {
    padding: 60px 0;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 25vh;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .news-content {
    padding: 20px;
  }
}
</style>
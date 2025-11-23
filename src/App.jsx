import React, { useState } from "react";

export default function App() {
  const [currentView, setCurrentView] = useState("collections");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const braceletCategories = [
    {
      name: "Bracelets simples",
      images: ["/images/39.jpeg", "/images/15.jpeg","/images/12.jpeg","/images/13.jpeg","/images/14.jpeg","/images/16.jpeg","/images/17.jpeg","/images/25.jpeg","/images/28.jpeg","/images/33.jpeg","/images/41.jpeg",],
      price: "200F"
    },
    {
      name: "Bracelets Yin-Yang",
      images: ["/images/21.jpeg", "/images/7.jpeg","/images/20.jpeg","/images/23.jpeg","/images/26.jpeg","/images/32.jpeg","/images/36.jpeg"],
      price: "600F"
    },
    {
      name: "Bracelets Papillon",
      images: ["/images/22.jpeg", "/images/5.jpeg","/images/9.jpeg","/images/4.jpeg","/images/3.jpeg","/images/10.jpeg","/images/11.jpeg","/images/18.jpeg","/images/7.jpeg","/images/19.jpeg","/images/24.jpeg","/images/31.jpeg","/images/29.jpeg","/images/34.jpeg","/images/35.jpeg","/images/40.jpeg","/images/27.jpeg"],
      price: "300F"
    }
  ];

  const colliers = [
    "/images/45.jpeg",
    "/images/collier-2.jpeg",
    "/images/collier-3.jpeg"
  ];

  const accessoires = [
    "/images/accessoire-1.jpeg",
    "/images/accessoire-2.jpeg",
    "/images/accessoire-3.jpeg"
  ];

  const renderCollections = () => (
    <div className="grid-3">
      <div className="card">
        <img src="/images/5.jpeg" alt="Bracelets" />
        <h3>Bracelets</h3>
        <p>Modèles fins, colorés ou personnalisés.</p>
        <button className="btn" onClick={() => setCurrentView("bracelets")}>Voir les modèles</button>
      </div>

      <div className="card">
        <img src="/images/45.jpeg" alt="Colliers" />
        <h3>Colliers</h3>
        <p>Pièces délicates pour toutes occasions.</p>
        <button className="btn" onClick={() => setCurrentView("collier")}>Voir les modèles</button>
      </div>

      <div className="card">
        <img src="/images/47.jpeg" alt="Accessoires" />
        <h3>Accessoires</h3>
        <p>Accessoires en perles.</p>
        <button className="btn" onClick={() => setCurrentView("accessoires")}>Voir les modèles</button>
      </div>
    </div>
  );

  const renderBraceletCategories = () => (
    <div>
      <h3>Catégories de Bracelets</h3>
      <div className="grid-3">
        {braceletCategories.map((category, index) => (
          <div key={index} className="card">
            <img src={category.images[0]} alt={category.name} />
            <h4>{category.name}</h4>
            <p>Prix : {category.price}</p>
            <button className="btn" onClick={() => {
              setSelectedCategory(category);
              setCurrentView("braceletCategory");
            }}>Voir toutes les images</button>
          </div>
        ))}
      </div>
      <button className="btn" style={{ marginTop: 16 }} onClick={() => setCurrentView("collections")}>
        Retour aux collections
      </button>
    </div>
  );

  // ← LA PARTIE MAGIQUE (bouton retour intelligent)
  const renderImages = (images) => (
    <div>
      <div className="gallery" style={{ marginTop: 16 }}>
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`img-${idx}`} />
        ))}
      </div>

      <button
        className="btn"
        style={{ marginTop: 16 }}
        onClick={() => {
          if (selectedCategory) {
            // on vient d’une sous-catégorie de bracelet → on retourne à la liste des bracelets
            setCurrentView("bracelets");
            setSelectedCategory(null);
          } else {
            // on vient de Colliers ou Accessoires → on retourne à l’accueil
            setCurrentView("collections");
          }
        }}
      >
        Retour aux collections
      </button>
    </div>
  );

  return (
    <div className="app-root">
      <style>{`
        :root{--beige:#F7EED9;--gold:#D1A65A;--black:#111;--white:#fff}
        *{box-sizing:border-box}
        body,html,#root{height:100%}
        .app-root{font-family: 'Poppins', sans-serif;color:var(--black);background:var(--white);}
        .container{max-width:1100px;margin:0 auto;padding:24px}
        .hero{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:40px;border-radius:12px;background:linear-gradient(90deg, rgba(247,238,217,1) 0%, rgba(255,255,255,1) 100%)}
        .hero-left{flex:1}
        .brand{font-family: 'Playfair Display', serif;font-size:40px;margin:0}
        .tag{margin:8px 0 16px;color:#4b4b4b}
        .btn{background:var(--gold);border:none;padding:12px 20px;border-radius:8px;color:var(--white);cursor:pointer}
        .hero-photo{width:320px;height:320px;border-radius:12px;object-fit:cover;box-shadow:0 6px 18px rgba(0,0,0,0.12)}

        .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px}
        .card{padding:16px;border-radius:10px;background:#fff;box-shadow:0 6px 18px rgba(0,0,0,0.06);text-align:center}
        .card img{width:100%;height:200px;object-fit:cover;border-radius:8px}
        .card h3{margin:12px 0 6px}
        .card h4{margin:8px 0 4px}

        .features{display:flex;gap:20px;margin-top:28px}
        .feature{flex:1;background:linear-gradient(180deg, #fff 0%, rgba(247,238,217,0.4) 100%);padding:16px;border-radius:10px;text-align:center}

        .gallery{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:28px}
        .gallery img{width:100%;height:160px;object-fit:cover;border-radius:8px}

        .about{display:flex;gap:18px;align-items:center;padding:18px;margin-top:28px}
        .about img{width:180px;height:180px;object-fit:cover;border-radius:12px}

        .contact{display:flex;align-items:center;justify-content:space-between;padding:18px;margin-top:28px;border-radius:10px;background:#fff}

        section.testimonials{margin-top:28px}
        section.testimonials h3{text-align:center}
        section.testimonials p{margin-top:12px;font-style:italic;text-align:center}

        footer{margin-top:36px;text-align:center;color:#666}

        @media(max-width:900px){
          .grid-3{grid-template-columns:1fr}
          .gallery{grid-template-columns:repeat(2,1fr)}
          .hero{flex-direction:column}
          .hero-photo{width:100%;height:260px}
        }
      `}</style>

      <div className="container">
        <header className="hero" role="banner">
          <div className="hero-left">
            <h1 className="brand">Beads by Vanelle</h1>
            <p className="tag">Bijoux et accessoires faits à la main — uniques et personnalisables</p>
            <button className="btn" onClick={() => window.scrollTo({top:800, behavior:'smooth'})}>Voir la collection</button>
          </div>
          <img className="hero-photo" src="/images/35.jpeg" alt="Bracelet en perles" />
        </header>

        <section aria-labelledby="collections">
          <h2 style={{marginTop:24}}>Nos collections</h2>

          {currentView === "collections" && renderCollections()}
          {currentView === "bracelets" && renderBraceletCategories()}
          {currentView === "braceletCategory" && selectedCategory && renderImages(selectedCategory.images)}
          {currentView === "collier" && renderImages(colliers)}
          {currentView === "accessoires" && renderImages(accessoires)}
        </section>

        {/* Le reste du site reste identique */}
        <section className="features" aria-label="avantages">
          <div className="feature"><h4>Fait main</h4><p>Chaque pièce est fabriquée avec soin.</p></div>
          <div className="feature"><h4>Perles de qualité</h4><p>Matériaux durables et beaux.</p></div>
          <div className="feature"><h4>Personnalisations</h4><p>personnalisables sur demande.</p></div>
        </section>

        <section className="about" aria-labelledby="about">
          <img src="/images/vanelle.jpeg" alt="Vanelle" />
          <div>
            <h3>À propos</h3>
            <p>Je suis Vanelle, créatrice passionnée. J'imagine et je crée chaque pièce à la main. Mon objectif est d’offrir des bijoux qui racontent une histoire.</p>
            <p style={{marginTop:8}}>Tu peux commander directement via WhatsApp ou Instagram.</p>
          </div>
        </section>

        <section className="contact" aria-labelledby="contact">
          <div>
            <h4>Contact</h4>
            <p>WhatsApp: <a href="https://wa.me/237682108805" target="_blank" rel="noreferrer">+237 682108805</a></p>
          </div>
          <div>
            <button className="btn" onClick={() => window.open('https://wa.me/237682108805','_blank')}>Commander par WhatsApp</button>
          </div>
        </section>

        <section className="testimonials" aria-labelledby="testimonials">
          <h3>Ils adorent Beads by Vanelle</h3>
          <div className="gallery">
            <img src="/images/43.jpeg" alt="avis1" />
            <img src="/images/feedback-2.jpeg" alt="avis2" />
            <img src="/images/feedback-3.jpeg" alt="avis3" />
            <img src="/images/feedback-4.jpeg" alt="avis4" />
          </div>
          <p style={{marginTop:12, fontStyle:'italic', textAlign:'center'}}>« Là où le beau rencontre le naturel »</p>
        </section>

        <footer>© {new Date().getFullYear()} Beads by Vanelle — Fait main à Yaoundé</footer>
      </div>
    </div>
  );
}
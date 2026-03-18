import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Phone, MessageCircle, Clock, Shield, Zap, DollarSign,
  Wrench, Droplets, Flame, ArrowDownCircle, Database,
  AlertTriangle, Star, MapPin, Facebook, Instagram,
  Menu, X, Thermometer
} from 'lucide-react';

const PHONE = '787-608-4375';
const PHONE_LINK = 'tel:7876084375';
const WHATSAPP_LINK = 'https://wa.me/17876084375';
const HERO_IMAGE = 'https://customer-assets.emergentagent.com/job_island-fast-plumbing/artifacts/305srpc6_WhatsApp%20Image%202026-03-17%20at%201.16.33%20PM.jpeg';

const services = [
  {
    icon: <AlertTriangle />,
    name: 'Emergencias 24/7',
    desc: 'Servicio de emergencia las 24 horas. Llegamos en 45 minutos o menos, cualquier día del año.'
  },
  {
    icon: <Droplets />,
    name: 'Detección de Fugas',
    desc: 'Tecnología avanzada para encontrar fugas ocultas sin romper paredes ni pisos.'
  },
  {
    icon: <Wrench />,
    name: 'Reparación de Tuberías',
    desc: 'Reparamos y reemplazamos tuberías dañadas por corrosión, edad o impacto de huracanes.'
  },
  {
    icon: <Thermometer />,
    name: 'Calentadores de Agua',
    desc: 'Instalación y reparación de calentadores. Agua caliente cuando la necesitas.'
  },
  {
    icon: <ArrowDownCircle />,
    name: 'Destape de Drenajes',
    desc: 'Desobstrucción profesional de drenajes y líneas de desagüe con equipo especializado.'
  },
  {
    icon: <Database />,
    name: 'Sistemas de Cisterna',
    desc: 'Mantenimiento, reparación e instalación de cisternas y bombas de agua.'
  },
];

const reviews = [
  {
    stars: 5,
    text: 'Llamé a las 11 de la noche con una tubería rota y llegaron en 30 minutos. Profesionales de verdad. Los recomiendo a todo el mundo.',
    name: 'María R.',
    location: 'Bayamón'
  },
  {
    stars: 5,
    text: 'Precio justo, trabajo limpio, y me explicaron todo antes de empezar. Por fin un plomero en quien puedo confiar.',
    name: 'Carlos M.',
    location: 'San Juan'
  },
  {
    stars: 5,
    text: 'Después del huracán, RapidFix fue la única compañía que contestó. Nos arreglaron la cisterna y las tuberías en un día.',
    name: 'Ana L.',
    location: 'Caguas'
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowMobileCta(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="rf-app">
      {/* Noise texture overlay */}
      <svg className="noise-overlay" aria-hidden="true">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* === NAVIGATION === */}
      <header className={`rf-nav ${scrolled ? 'scrolled' : ''}`} data-testid="main-nav">
        <div className="nav-inner">
          <button className="rf-logo" onClick={() => scrollTo('hero')} data-testid="logo" aria-label="RapidFix Home">
            <span className="logo-rapid">RAPID</span>
            <span className="logo-fix">FIX</span>
          </button>

          <nav className="nav-links" data-testid="nav-links">
            <button onClick={() => scrollTo('servicios')}>Servicios</button>
            <button onClick={() => scrollTo('diferencia')}>Sobre Nosotros</button>
            <button onClick={() => scrollTo('resenas')}>Reseñas</button>
            <button onClick={() => scrollTo('contacto')}>Contacto</button>
          </nav>

          <a href={PHONE_LINK} className="nav-cta" data-testid="nav-cta-call">
            <Phone size={15} /> Llama Ahora
          </a>

          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="hamburger-menu"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* === MOBILE MENU === */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} data-testid="mobile-menu">
        <nav>
          <button onClick={() => scrollTo('servicios')}>Servicios</button>
          <button onClick={() => scrollTo('diferencia')}>Sobre Nosotros</button>
          <button onClick={() => scrollTo('resenas')}>Reseñas</button>
          <button onClick={() => scrollTo('contacto')}>Contacto</button>
        </nav>
        <a href={PHONE_LINK} className="mobile-menu-cta" data-testid="mobile-menu-cta">
          <Phone size={20} /> Llama Ahora — {PHONE}
        </a>
      </div>

      <main>
        {/* === HERO === */}
        <section id="hero" className="hero-section" data-testid="hero-section">
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-ripples">
              <span className="ripple r1"></span>
              <span className="ripple r2"></span>
              <span className="ripple r3"></span>
            </div>
            <svg className="hero-pipes" viewBox="0 0 1440 900" fill="none">
              <path d="M-20,750 L180,750 L180,450 L420,450" stroke="rgba(250,250,248,0.06)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="180" cy="450" r="6" fill="rgba(250,250,248,0.06)" />
              <circle cx="420" cy="450" r="6" fill="rgba(250,250,248,0.06)" />
              <path d="M1460,600 L1260,600 L1260,300 L1020,300" stroke="rgba(250,250,248,0.06)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="1260" cy="300" r="6" fill="rgba(250,250,248,0.06)" />
              <circle cx="1020" cy="300" r="6" fill="rgba(250,250,248,0.06)" />
              <path d="M600,920 L600,700 L800,700" stroke="rgba(250,250,248,0.04)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="600" cy="700" r="5" fill="rgba(250,250,248,0.04)" />
              <path d="M-10,200 L120,200 L120,500" stroke="rgba(250,250,248,0.03)" strokeWidth="2" strokeLinecap="round" />
              <path d="M1200,100 L1200,400 L1400,400" stroke="rgba(250,250,248,0.03)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="hero-split">
            <div className="hero-content">
              <p className="hero-overline stagger-1" data-testid="hero-overline">
                PLOMERÍA PROFESIONAL — PUERTO RICO
              </p>
              <h1 className="hero-headline stagger-2" data-testid="hero-headline">
                WHEN THE WATER RISES,<br />
                <em>we show up.</em>
              </h1>
              <p className="hero-sub stagger-3" data-testid="hero-subcopy">
                Puerto Rico's fastest plumbing response. 45 minutes or less, 24/7, because your home can't wait until mañana.
              </p>
              <div className="hero-ctas stagger-4">
                <a href={PHONE_LINK} className="btn-flame" data-testid="hero-cta-call">
                  <Phone size={18} /> Llama Ahora — {PHONE}
                </a>
                <a href={WHATSAPP_LINK} className="btn-outline-white" data-testid="hero-cta-whatsapp">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>

            <div className="hero-image-wrapper stagger-5" data-testid="hero-image-wrapper">
              <div className="hero-image-frame">
                <img
                  src={HERO_IMAGE}
                  alt="RapidFix professional plumber ready to serve Puerto Rico"
                  className="hero-image"
                  data-testid="hero-image"
                />
                <div className="hero-image-accent" aria-hidden="true"></div>
              </div>
              <div className="badge-45" data-testid="badge-45">
                <span className="badge-num">45</span>
                <span className="badge-unit">MIN</span>
              </div>
            </div>
          </div>
        </section>

        {/* === TRUST BAR === */}
        <section className="trust-bar" data-testid="trust-bar" aria-label="Trust indicators">
          <div className="trust-inner">
            <div className="trust-item" data-testid="trust-24-7">
              <Clock size={20} /><span>24/7 Servicio</span>
            </div>
            <div className="trust-item" data-testid="trust-license">
              <Shield size={20} /><span>Licencia & Seguro</span>
            </div>
            <div className="trust-item" data-testid="trust-response">
              <Zap size={20} /><span>45 Min Respuesta</span>
            </div>
            <div className="trust-item" data-testid="trust-pricing">
              <DollarSign size={20} /><span>Precios Transparentes</span>
            </div>
          </div>
        </section>

        {/* === SERVICES === */}
        <section id="servicios" className="services-section" data-testid="services-section">
          <div className="services-hero-img" data-testid="services-hero-image">
            <img
              src="/images/services-tools.jpg"
              alt="Herramientas profesionales de plomería sobre superficie de concreto"
              className="services-banner-photo"
            />
            <div className="services-hero-overlay"></div>
          </div>
          <div className="section-container">
            <p className="section-overline reveal">NUESTROS SERVICIOS</p>
            <h2 className="section-headline reveal">
              ISLAND-TOUGH <em>Expertise</em>
            </h2>
            <div className="services-grid">
              {services.map((s, i) => (
                <div
                  className="service-card reveal"
                  key={i}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                  data-testid={`service-card-${i}`}
                >
                  <div className="service-icon">{s.icon}</div>
                  <h3 className="service-name">{s.name}</h3>
                  <p className="service-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === THE RAPIDFIX DIFFERENCE === */}
        <section id="diferencia" className="difference-section" data-testid="difference-section">
          <div className="section-container">
            <div className="diff-grid reveal">
              <div className="diff-visual" data-testid="diff-visual">
                <div className="diff-stat" data-testid="diff-stat">
                  <span className="diff-number">45</span>
                  <span className="diff-label">MINUTOS</span>
                  <span className="diff-sublabel">O MENOS — GARANTIZADO</span>
                </div>
                <img
                  src="/images/service-action.jpg"
                  alt="Plomero reparando tuberías de cobre en un hogar de Puerto Rico"
                  className="diff-photo"
                  data-testid="diff-photo"
                />
              </div>
              <div className="diff-copy">
                <p className="section-overline">LA DIFERENCIA RAPIDFIX</p>
                <h2 className="section-headline">
                  RÁPIDO. CONFIABLE. <em>De aquí.</em>
                </h2>
                <p className="diff-text">
                  Garantizamos llegada en 45 minutos para emergencias. No "el mismo día." No "pronto." En 45 minutos, un técnico certificado está en tu puerta.
                </p>
                <p className="diff-text">
                  Precios transparentes — ves el costo antes de empezar. Sin sorpresas, sin cargos ocultos. Y con experiencia real en los retos únicos de la isla: corrosión por salitre, tuberías antiguas, sistemas de cisterna, y reconstrucción post-huracán.
                </p>
                <a href={PHONE_LINK} className="btn-flame" data-testid="diff-cta-call">
                  <Phone size={18} /> Llama Ahora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* === REVIEWS === */}
        <section id="resenas" className="reviews-section" data-testid="reviews-section">
          <div className="section-container">
            <p className="section-overline reveal">LO QUE DICEN NUESTROS CLIENTES</p>
            <h2 className="section-headline reveal" style={{ color: 'var(--rf-white)' }}>
              CONFIANZA <em>comprobada.</em>
            </h2>
            <div className="reviews-grid">
              {reviews.map((r, i) => (
                <div
                  className="review-card reveal"
                  key={i}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                  data-testid={`review-card-${i}`}
                >
                  <div className="review-stars" aria-label={`${r.stars} stars`}>
                    {Array(r.stars).fill(0).map((_, j) => (
                      <Star key={j} size={16} fill="var(--rf-sun)" stroke="var(--rf-sun)" />
                    ))}
                  </div>
                  <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                  <p className="review-author">
                    — {r.name}, <span>{r.location}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="google-badge reveal" data-testid="google-badge">
              <Star size={20} fill="var(--rf-sun)" stroke="var(--rf-sun)" />
              <span>4.9 en Google Reviews</span>
            </div>
          </div>
        </section>

        {/* === ABOUT === */}
        <section id="nosotros" className="about-section" data-testid="about-section">
          <div className="section-container">
            <div className="about-grid reveal">
              <div className="about-image" data-testid="about-image">
                <img
                  src="/images/about-team.jpg"
                  alt="Equipo RapidFix frente a su vehículo de servicio en un barrio de Puerto Rico"
                  className="about-photo"
                  data-testid="about-photo"
                />
              </div>
              <div className="about-copy">
                <p className="section-overline">NUESTRA HISTORIA</p>
                <h2 className="section-headline">
                  DE AQUÍ. <em>Para aquí.</em>
                </h2>
                <p className="about-text">
                  No somos una franquicia del mainland. Somos boricuas que entendemos el salitre, las tuberías viejas, y el vecino que necesita ayuda al lado. Nacimos en Puerto Rico, nos formamos aquí, y trabajamos para nuestra comunidad.
                </p>
                <p className="about-text">
                  Después del Huracán María, vimos cómo la gente esperaba días — semanas — por reparaciones básicas. Decidimos que ninguna familia en esta isla debería esperar cuando su hogar está en riesgo. Así nació RapidFix.
                </p>
                <p className="about-text about-tagline">
                  Pa' eso estamos. — That's what we're here for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === EMERGENCY CTA === */}
        <section className="emergency-section" data-testid="emergency-cta">
          <div className="emergency-stripes" aria-hidden="true"></div>
          <div className="emergency-content">
            <h2 className="emergency-headline" data-testid="emergency-headline">
              ¿EMERGENCIA DE PLOMERÍA?
            </h2>
            <p className="emergency-sub">
              No esperes. Estamos a 45 minutos.
            </p>
            <div className="emergency-ctas">
              <a href={PHONE_LINK} className="btn-white" data-testid="emergency-cta-call">
                <Phone size={18} /> {PHONE}
              </a>
              <a href={WHATSAPP_LINK} className="btn-outline-white-on-flame" data-testid="emergency-cta-whatsapp">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* === FOOTER === */}
      <footer id="contacto" className="rf-footer" data-testid="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="rf-logo footer-logo">
              <span className="logo-rapid" style={{ color: 'var(--rf-white)' }}>RAPID</span>
              <span className="logo-fix" style={{ color: 'var(--rf-sun)' }}>FIX</span>
            </div>
            <p className="footer-tagline">Pa' eso estamos.</p>
          </div>

          <div className="footer-contact" data-testid="footer-contact">
            <h4>CONTACTO</h4>
            <a href={PHONE_LINK}><Phone size={14} /> {PHONE}</a>
            <a href={WHATSAPP_LINK}><MessageCircle size={14} /> WhatsApp</a>
            <a href="mailto:info@rapidfixpr.com"><MapPin size={14} /> info@rapidfixpr.com</a>
          </div>

          <div className="footer-areas" data-testid="footer-areas">
            <h4>ÁREAS DE SERVICIO</h4>
            <ul>
              <li>San Juan</li>
              <li>Bayamón</li>
              <li>Carolina</li>
              <li>Caguas</li>
              <li>Ponce</li>
              <li>Guaynabo</li>
              <li>Trujillo Alto</li>
              <li>Toa Baja</li>
            </ul>
          </div>

          <div className="footer-social" data-testid="footer-social">
            <h4>SÍGUENOS</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook" data-testid="social-facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram" data-testid="social-instagram"><Instagram size={20} /></a>
              <a href={WHATSAPP_LINK} aria-label="WhatsApp" data-testid="social-whatsapp"><MessageCircle size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <p>© 2026 RapidFix PR · Plomería Profesional · Licencia #XXXXX</p>
        </div>
      </footer>

      {/* === MOBILE STICKY CTA === */}
      <div className={`mobile-sticky-cta ${showMobileCta ? 'show' : ''}`} data-testid="mobile-sticky-cta">
        <a href={PHONE_LINK} className="sticky-call" data-testid="sticky-cta-call">
          <Phone size={16} /> Llama Ahora
        </a>
        <a href={WHATSAPP_LINK} className="sticky-wa" data-testid="sticky-cta-whatsapp">
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default App;

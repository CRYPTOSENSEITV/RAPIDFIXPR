import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import {
  Phone, MessageCircle, Clock, Shield, Zap, DollarSign,
  Wrench, Droplets, Flame, ArrowDownCircle, Database,
  AlertTriangle, Star, MapPin, Facebook, Instagram,
  Menu, X, Thermometer, Globe
} from 'lucide-react';

const PHONE = '939-268-8367';
const PHONE_LINK = 'tel:9392688367';
const WHATSAPP_LINK = 'https://wa.me/19392688367';
const HERO_IMAGE = 'https://customer-assets.emergentagent.com/job_island-fast-plumbing/artifacts/305srpc6_WhatsApp%20Image%202026-03-17%20at%201.16.33%20PM.jpeg';

const serviceIcons = [<AlertTriangle />, <Droplets />, <Wrench />, <Thermometer />, <ArrowDownCircle />, <Database />];

const txt = {
  es: {
    nav: { services: 'Servicios', about: 'Sobre Nosotros', reviews: 'Reseñas', contact: 'Contacto', callNow: 'Llama Ahora' },
    hero: {
      overline: 'PLOMERÍA PROFESIONAL — PUERTO RICO',
      h1a: 'CUANDO EL AGUA SUBE,',
      h1b: 'llegamos.',
      sub: 'La respuesta de plomería más rápida de Puerto Rico. 45 minutos o menos, 24/7, porque tu hogar no puede esperar hasta mañana.',
      cta: `Llama Ahora — ${PHONE}`,
      heroAlt: 'Plomero profesional de RapidFix listo para servir a Puerto Rico',
    },
    trust: ['24/7 Servicio', 'Licencia & Seguro', '45 Min Respuesta', 'Precios Transparentes'],
    services: {
      overline: 'NUESTROS SERVICIOS',
      h2: 'EXPERIENCIA',
      h2em: 'Isleña',
      items: [
        { name: 'Emergencias 24/7', desc: 'Servicio de emergencia las 24 horas. Llegamos en 45 minutos o menos, cualquier día del año.' },
        { name: 'Detección de Fugas', desc: 'Tecnología avanzada para encontrar fugas ocultas sin romper paredes ni pisos.' },
        { name: 'Reparación de Tuberías', desc: 'Reparamos y reemplazamos tuberías dañadas por corrosión, edad o impacto de huracanes.' },
        { name: 'Calentadores de Agua', desc: 'Instalación y reparación de calentadores. Agua caliente cuando la necesitas.' },
        { name: 'Destape de Drenajes', desc: 'Desobstrucción profesional de drenajes y líneas de desagüe con equipo especializado.' },
        { name: 'Sistemas de Cisterna', desc: 'Mantenimiento, reparación e instalación de cisternas y bombas de agua.' },
      ],
      imgAlt: 'Herramientas profesionales de plomería sobre superficie de concreto',
    },
    diff: {
      label: 'MINUTOS',
      sublabel: 'O MENOS — GARANTIZADO',
      overline: 'LA DIFERENCIA RAPIDFIX',
      h2: 'RÁPIDO. CONFIABLE.',
      h2em: 'De aquí.',
      p1: 'Garantizamos llegada en 45 minutos para emergencias. No "el mismo día." No "pronto." En 45 minutos, un técnico certificado está en tu puerta.',
      p2: 'Precios transparentes — ves el costo antes de empezar. Sin sorpresas, sin cargos ocultos. Y con experiencia real en los retos únicos de la isla: corrosión por salitre, tuberías antiguas, sistemas de cisterna, y reconstrucción post-huracán.',
      imgAlt: 'Plomero reparando tuberías de cobre en un hogar de Puerto Rico',
    },
    reviews: {
      overline: 'LO QUE DICEN NUESTROS CLIENTES',
      h2: 'CONFIANZA',
      h2em: 'comprobada.',
      badge: '4.9 en Google Reviews',
      items: [
        { text: 'Llamé a las 11 de la noche con una tubería rota y llegaron en 30 minutos. Profesionales de verdad. Los recomiendo a todo el mundo.', name: 'María R.', location: 'Bayamón' },
        { text: 'Precio justo, trabajo limpio, y me explicaron todo antes de empezar. Por fin un plomero en quien puedo confiar.', name: 'Carlos M.', location: 'San Juan' },
        { text: 'Después del huracán, RapidFix fue la única compañía que contestó. Nos arreglaron la cisterna y las tuberías en un día.', name: 'Ana L.', location: 'Caguas' },
      ],
    },
    about: {
      overline: 'NUESTRA HISTORIA',
      h2: 'DE AQUÍ.',
      h2em: 'Para aquí.',
      p1: 'No somos una franquicia del mainland. Somos boricuas que entendemos el salitre, las tuberías viejas, y el vecino que necesita ayuda al lado. Nacimos en Puerto Rico, nos formamos aquí, y trabajamos para nuestra comunidad.',
      p2: 'Después del Huracán María, vimos cómo la gente esperaba días — semanas — por reparaciones básicas. Decidimos que ninguna familia en esta isla debería esperar cuando su hogar está en riesgo. Así nació RapidFix.',
      tagline: "Pa' eso estamos. — That's what we're here for.",
      imgAlt: 'Equipo RapidFix frente a su vehículo de servicio en un barrio de Puerto Rico',
    },
    emergency: {
      h2: '¿EMERGENCIA DE PLOMERÍA?',
      sub: 'No esperes. Estamos a 45 minutos.',
    },
    footer: {
      tagline: "Pa' eso estamos.",
      contact: 'CONTACTO',
      areas: 'ÁREAS DE SERVICIO',
      follow: 'SÍGUENOS',
      legal: '© 2026 RapidFix PR · Plomería Profesional · Licencia #XXXXX',
    },
    mobileCta: 'Llama Ahora',
  },
  en: {
    nav: { services: 'Services', about: 'About Us', reviews: 'Reviews', contact: 'Contact', callNow: 'Call Now' },
    hero: {
      overline: 'PROFESSIONAL PLUMBING — PUERTO RICO',
      h1a: 'WHEN THE WATER RISES,',
      h1b: 'we show up.',
      sub: "Puerto Rico's fastest plumbing response. 45 minutes or less, 24/7, because your home can't wait until mañana.",
      cta: `Call Now — ${PHONE}`,
      heroAlt: 'RapidFix professional plumber ready to serve Puerto Rico',
    },
    trust: ['24/7 Service', 'Licensed & Insured', '45 Min Response', 'Transparent Pricing'],
    services: {
      overline: 'OUR SERVICES',
      h2: 'ISLAND-TOUGH',
      h2em: 'Expertise',
      items: [
        { name: '24/7 Emergencies', desc: 'Round-the-clock emergency service. We arrive in 45 minutes or less, any day of the year.' },
        { name: 'Leak Detection', desc: 'Advanced technology to find hidden leaks without breaking walls or floors.' },
        { name: 'Pipe Repair', desc: 'We repair and replace pipes damaged by corrosion, age, or hurricane impact.' },
        { name: 'Water Heaters', desc: 'Installation and repair of water heaters. Hot water when you need it.' },
        { name: 'Drain Clearing', desc: 'Professional drain and sewer line clearing with specialized equipment.' },
        { name: 'Cistern Systems', desc: 'Maintenance, repair, and installation of cisterns and water pumps.' },
      ],
      imgAlt: 'Professional plumbing tools on a concrete surface',
    },
    diff: {
      label: 'MINUTES',
      sublabel: 'OR LESS — GUARANTEED',
      overline: 'THE RAPIDFIX DIFFERENCE',
      h2: 'FAST. RELIABLE.',
      h2em: 'From here.',
      p1: 'We guarantee arrival in 45 minutes for emergencies. Not "same day." Not "soon." In 45 minutes, a certified technician is at your door.',
      p2: "Transparent pricing — you see the cost before we start. No surprises, no hidden fees. And with real experience in the island's unique challenges: salt-air corrosion, legacy pipes, cistern systems, and post-hurricane rebuilds.",
      imgAlt: 'Plumber repairing copper pipes in a Puerto Rico home',
    },
    reviews: {
      overline: 'WHAT OUR CLIENTS SAY',
      h2: 'PROVEN',
      h2em: 'Trust.',
      badge: '4.9 on Google Reviews',
      items: [
        { text: 'I called at 11 PM with a burst pipe and they arrived in 30 minutes. True professionals. I recommend them to everyone.', name: 'María R.', location: 'Bayamón' },
        { text: 'Fair price, clean work, and they explained everything before starting. Finally a plumber I can trust.', name: 'Carlos M.', location: 'San Juan' },
        { text: 'After the hurricane, RapidFix was the only company that answered. They fixed our cistern and pipes in one day.', name: 'Ana L.', location: 'Caguas' },
      ],
    },
    about: {
      overline: 'OUR STORY',
      h2: 'FROM HERE.',
      h2em: 'For here.',
      p1: "We're not a mainland franchise. We're boricuas who understand the salt air, the aging pipes, and the neighbor who needs help next door. Born in Puerto Rico, trained here, working for our community.",
      p2: "After Hurricane María, we saw people waiting days — weeks — for basic repairs. We decided no family on this island should have to wait when their home is at risk. That's how RapidFix was born.",
      tagline: "Pa' eso estamos. — That's what we're here for.",
      imgAlt: 'RapidFix team in front of their service van in a Puerto Rico neighborhood',
    },
    emergency: {
      h2: 'PLUMBING EMERGENCY?',
      sub: "Don't wait. We're 45 minutes away.",
    },
    footer: {
      tagline: "That's what we're here for.",
      contact: 'CONTACT',
      areas: 'SERVICE AREAS',
      follow: 'FOLLOW US',
      legal: '© 2026 RapidFix PR · Professional Plumbing · License #XXXXX',
    },
    mobileCta: 'Call Now',
  },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [lang, setLang] = useState('es');
  const heroVideoRef = useRef(null);
  const reviewsVideoRef = useRef(null);

  const T = txt[lang];

  useEffect(() => {
    const videos = [heroVideoRef.current, reviewsVideoRef.current].filter(Boolean);
    videos.forEach((v) => {
      v.muted = true;
      v.defaultMuted = true;
      v.setAttribute('muted', '');
      v.setAttribute('playsinline', '');
      v.setAttribute('webkit-playsinline', '');
      const tryPlay = () => v.play().catch(() => {});
      tryPlay();
      v.addEventListener('loadedmetadata', tryPlay);
      v.addEventListener('canplay', tryPlay);
    });

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const v = e.target;
          if (e.isIntersecting) v.play().catch(() => {});
          else if (!v.paused) v.pause();
        });
      },
      { threshold: 0.1 }
    );
    videos.forEach((v) => visibilityObserver.observe(v));

    const resumeOnInteraction = () => {
      videos.forEach((v) => v.play().catch(() => {}));
    };
    document.addEventListener('touchstart', resumeOnInteraction, { once: true, passive: true });
    document.addEventListener('click', resumeOnInteraction, { once: true });

    return () => {
      visibilityObserver.disconnect();
      document.removeEventListener('touchstart', resumeOnInteraction);
      document.removeEventListener('click', resumeOnInteraction);
    };
  }, []);

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
            <button onClick={() => scrollTo('servicios')}>{T.nav.services}</button>
            <button onClick={() => scrollTo('diferencia')}>{T.nav.about}</button>
            <button onClick={() => scrollTo('resenas')}>{T.nav.reviews}</button>
            <button onClick={() => scrollTo('contacto')}>{T.nav.contact}</button>
          </nav>

          <button
            className="lang-toggle"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            data-testid="lang-toggle"
            aria-label="Toggle language"
          >
            <Globe size={14} />
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          <a href={PHONE_LINK} className="nav-cta" data-testid="nav-cta-call">
            <Phone size={15} /> {T.nav.callNow}
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
        <button
          className="mobile-lang-toggle"
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          data-testid="mobile-lang-toggle"
        >
          <Globe size={16} /> {lang === 'es' ? 'English' : 'Español'}
        </button>
        <nav>
          <button onClick={() => scrollTo('servicios')}>{T.nav.services}</button>
          <button onClick={() => scrollTo('diferencia')}>{T.nav.about}</button>
          <button onClick={() => scrollTo('resenas')}>{T.nav.reviews}</button>
          <button onClick={() => scrollTo('contacto')}>{T.nav.contact}</button>
        </nav>
        <a href={PHONE_LINK} className="mobile-menu-cta" data-testid="mobile-menu-cta">
          <Phone size={20} /> {T.nav.callNow} — {PHONE}
        </a>
      </div>

      <main>
        {/* === HERO === */}
        <section id="hero" className="hero-section" data-testid="hero-section">
          <div className="hero-bg" aria-hidden="true">
            <video
              ref={heroVideoRef}
              className="hero-video"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
            />
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
                {T.hero.overline}
              </p>
              <h1 className="hero-headline stagger-2" data-testid="hero-headline">
                {T.hero.h1a}<br />
                <em>{T.hero.h1b}</em>
              </h1>
              <p className="hero-sub stagger-3" data-testid="hero-subcopy">
                {T.hero.sub}
              </p>
              <div className="hero-ctas stagger-4">
                <a href={PHONE_LINK} className="btn-flame" data-testid="hero-cta-call">
                  <Phone size={18} /> {T.hero.cta}
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
                  alt={T.hero.heroAlt}
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
              <Clock size={20} /><span>{T.trust[0]}</span>
            </div>
            <div className="trust-item" data-testid="trust-license">
              <Shield size={20} /><span>{T.trust[1]}</span>
            </div>
            <div className="trust-item" data-testid="trust-response">
              <Zap size={20} /><span>{T.trust[2]}</span>
            </div>
            <div className="trust-item" data-testid="trust-pricing">
              <DollarSign size={20} /><span>{T.trust[3]}</span>
            </div>
          </div>
        </section>

        {/* === SERVICES === */}
        <section id="servicios" className="services-section" data-testid="services-section">
          <div className="services-hero-img" data-testid="services-hero-image">
            <img
              src="/images/services-tools.jpg"
              alt={T.services.imgAlt}
              className="services-banner-photo"
            />
            <div className="services-hero-overlay"></div>
          </div>
          <div className="section-container">
            <p className="section-overline reveal">{T.services.overline}</p>
            <h2 className="section-headline reveal">
              {T.services.h2} <em>{T.services.h2em}</em>
            </h2>
            <div className="services-grid">
              {T.services.items.map((s, i) => (
                <div
                  className="service-card reveal"
                  key={i}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                  data-testid={`service-card-${i}`}
                >
                  <div className="service-icon">{serviceIcons[i]}</div>
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
                  <span className="diff-label">{T.diff.label}</span>
                  <span className="diff-sublabel">{T.diff.sublabel}</span>
                </div>
                <img
                  src="/images/service-action.jpg"
                  alt={T.diff.imgAlt}
                  className="diff-photo"
                  data-testid="diff-photo"
                />
              </div>
              <div className="diff-copy">
                <p className="section-overline">{T.diff.overline}</p>
                <h2 className="section-headline">
                  {T.diff.h2} <em>{T.diff.h2em}</em>
                </h2>
                <p className="diff-text">{T.diff.p1}</p>
                <p className="diff-text">{T.diff.p2}</p>
                <a href={PHONE_LINK} className="btn-flame" data-testid="diff-cta-call">
                  <Phone size={18} /> {T.nav.callNow}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* === REVIEWS === */}
        <section id="resenas" className="reviews-section" data-testid="reviews-section">
          <video
            ref={reviewsVideoRef}
            className="reviews-video"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            aria-hidden="true"
          />
          <div className="section-container">
            <p className="section-overline reveal">{T.reviews.overline}</p>
            <h2 className="section-headline reveal" style={{ color: 'var(--rf-white)' }}>
              {T.reviews.h2} <em>{T.reviews.h2em}</em>
            </h2>
            <div className="reviews-grid">
              {T.reviews.items.map((r, i) => (
                <div
                  className="review-card reveal"
                  key={i}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                  data-testid={`review-card-${i}`}
                >
                  <div className="review-stars" aria-label="5 stars">
                    {Array(5).fill(0).map((_, j) => (
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
              <span>{T.reviews.badge}</span>
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
                  alt={T.about.imgAlt}
                  className="about-photo"
                  data-testid="about-photo"
                />
              </div>
              <div className="about-copy">
                <p className="section-overline">{T.about.overline}</p>
                <h2 className="section-headline">
                  {T.about.h2} <em>{T.about.h2em}</em>
                </h2>
                <p className="about-text">{T.about.p1}</p>
                <p className="about-text">{T.about.p2}</p>
                <p className="about-text about-tagline">{T.about.tagline}</p>
              </div>
            </div>
          </div>
        </section>

        {/* === EMERGENCY CTA === */}
        <section className="emergency-section" data-testid="emergency-cta">
          <div className="emergency-stripes" aria-hidden="true"></div>
          <div className="emergency-content">
            <h2 className="emergency-headline" data-testid="emergency-headline">
              {T.emergency.h2}
            </h2>
            <p className="emergency-sub">{T.emergency.sub}</p>
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
            <p className="footer-tagline">{T.footer.tagline}</p>
          </div>

          <div className="footer-contact" data-testid="footer-contact">
            <h4>{T.footer.contact}</h4>
            <a href={PHONE_LINK}><Phone size={14} /> {PHONE}</a>
            <a href={WHATSAPP_LINK}><MessageCircle size={14} /> WhatsApp</a>
            <a href="mailto:rapidfixpr@icloud.com"><MapPin size={14} /> rapidfixpr@icloud.com</a>
          </div>

          <div className="footer-areas" data-testid="footer-areas">
            <h4>{T.footer.areas}</h4>
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
            <h4>{T.footer.follow}</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook" data-testid="social-facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram" data-testid="social-instagram"><Instagram size={20} /></a>
              <a href={WHATSAPP_LINK} aria-label="WhatsApp" data-testid="social-whatsapp"><MessageCircle size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <p>{T.footer.legal}</p>
        </div>
      </footer>

      {/* === MOBILE STICKY CTA === */}
      <div className={`mobile-sticky-cta ${showMobileCta ? 'show' : ''}`} data-testid="mobile-sticky-cta">
        <a href={PHONE_LINK} className="sticky-call" data-testid="sticky-cta-call">
          <Phone size={16} /> {T.mobileCta}
        </a>
        <a href={WHATSAPP_LINK} className="sticky-wa" data-testid="sticky-cta-whatsapp">
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./Nikola.css";

// Green Character Component
const GreenCharacter: React.FC<{ mood?: string }> = ({ mood = "happy" }) => {
  return (
    <svg 
      className="green-character" 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head */}
      <circle cx="50" cy="50" r="35" fill="#00ff88"/>
      
      {/* Face - Happy */}
      {mood === "happy" && (
        <>
          <circle cx="40" cy="45" r="3" fill="#1a1a1a"/>
          <circle cx="60" cy="45" r="3" fill="#1a1a1a"/>
          <path d="M 35 58 Q 50 65 65 58" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
          
          {/* Waving Hand */}
          <g className="waving-hand">
            {/* Arm */}
            <path d="M 78 50 Q 83 45 88 38" stroke="#00ff88" strokeWidth="5" fill="none" strokeLinecap="round"/>
            {/* Hand */}
            <ellipse cx="90" cy="35" rx="6" ry="7" fill="#00ff88"/>
            {/* Fingers */}
            <path d="M 88 30 L 87 25" stroke="#00ff88" strokeWidth="2" strokeLinecap="round"/>
            <path d="M 90 29 L 90 23" stroke="#00ff88" strokeWidth="2" strokeLinecap="round"/>
            <path d="M 92 30 L 93 25" stroke="#00ff88" strokeWidth="2" strokeLinecap="round"/>
          </g>
        </>
      )}
      
      {/* Face - Wow/Surprised (Positive) */}
      {mood === "wow" && (
        <>
          {/* Eyes - bigger and rounder for excitement */}
          <circle cx="40" cy="45" r="4" fill="#1a1a1a"/>
          <circle cx="60" cy="45" r="4" fill="#1a1a1a"/>
          {/* Happy eyebrows - curved up */}
          <path d="M 32 38 Q 40 35 48 38" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M 52 38 Q 60 35 68 38" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
          {/* Big happy smile instead of O mouth */}
          <path d="M 35 58 Q 50 68 65 58" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          {/* Small sparkles for extra excitement */}
          <circle cx="30" cy="35" r="1.5" fill="#00ff88" opacity="0.6"/>
          <circle cx="70" cy="35" r="1.5" fill="#00ff88" opacity="0.6"/>
        </>
      )}
      
      {/* Shine effect */}
      <circle cx="42" cy="42" r="1.5" fill="white" opacity="0.8"/>
      <circle cx="62" cy="42" r="1.5" fill="white" opacity="0.8"/>
    </svg>
  );
};

const Nikola: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const projects = [
    {
      url: "akschejbal.cz",
      name: "SCHEJBAL & PARTNERS",
      description:
        "Advokátní kancelář tvořená právníky a ekonomy s více než 20letými zkušenostmi v oblasti finančního a firemního práva.",
    },
    {
      url: "sogsy.com",
      name: "Sogsy",
      description:
        "Inovativní a pohodlné ochranné boty pro psy, navržené tak, aby chránily tlapky před rozpálenými městskými povrchy.",
    },
    {
      url: "cleverfarm.ag",
      name: "CleverFarm",
      description:
        "Chytrá technologická řešení, která pomáhají zemědělcům řídit své hospodaření efektivněji, udržitelněji a s oporou v datech – pro lepší rozhodování a vyšší výnosy.",
    },
    {
      url: "cerstveutrzeno.cz",
      name: "Čerstvě utrženo",
      description:
        "Pečlivě vypěstované ovoce a zelenina z českých farem, sklizené v ten pravý okamžik zralosti a doručené na pulty prodejen co nejrychleji, aby si uchovaly svou čerstvost a chuť.",
    },
    {
      url: "masozluky.cz",
      name: "Maso z lúky",
      description:
        "Vyzrálé hovězí a jehněčí BIO maso z podhůří Bílých Karpat. Zvířata se celoročně pasou na pastvinách, mají volnost pohybu a jsou chována v souladu se svými přirozenými potřebami a zásadami welfare.",
    },
  ];

  const testimonials = [
    {
      text: "S Nikol spolupracujeme velmi rádi. Na začátku spolupráce nám pomohla vyladit marketingovou strategii a nastavit plán. Oceňuji její vhled do problematiky, neotřelé nápady a důslednost v dotahování věcí do konce. Velmi nám také pomáhá její znalost a přesah do obchodních procesů.",
      author: "Lumír Schejbal, SCHEJBAL & PARTNERS",
    },
    {
      text: "Oceňuji její proaktivní přístup, kvalitní výsledky a schopnost řídit marketing komplexně. Během naší spolupráce prokázala, že umí nejen budovat a posilovat značku, ale také se aktivně podílet na jejím strategickém rozvoji. Umí rychle reagovat na změny a přinášet nové nápady, které mají praktický dopad.",
      author: "David Täuber, Čerstvě utrženo",
    },
  ];

  const faqs = [
    {
      question: "Jak spolupráce probíhá?",
      answer:
        "Na začátku si promluvíme o vašich cílech, situaci a představě, kam se chcete posunout. Společně zanalyzujeme trh, nastavíme strategii a plán kroků. Potom už se starám o to, aby marketing fungoval jako celek.",
    },
    {
      question: "Umíte spolupracovat i s naším interním týmem nebo agenturou?",
      answer:
        "Jasně. Často funguju právě jako spojka mezi firmou a různými dodavateli – koordinuju interní i externí tým tak, aby všichni táhli za jeden provaz a výstupy na sebe navazovaly.",
    },
    {
      question: "Co když zatím nemáme jasnou marketingovou strategii?",
      answer:
        "To je naprosto v pořádku. Společně ji vytvoříme. Projdu s vámi značku, cílovky i trh a navrhnem strategii, která nebude jen teoretická, ale dá se opravdu použít v praxi.",
    },
    {
      question: "Jak zjistíte, co přesně naše firma potřebuje?",
      answer:
        "Začínám vždy marketingovým auditem – rychlou, ale detailní analýzou, která ukáže, co funguje, co ne a kde má smysl začít. Díky tomu se neplýtvá energií ani rozpočtem.",
    },
    {
      question: "Jak můžeme začít?",
      answer:
        "Stačí mi napsat nebo si domluvit krátký úvodní call. Probereme vaši situaci, cíle a co dává smysl dělat dál. Pokud si sedneme, navrhnu první kroky spolupráce.",
    },
    {
      question: "Jak dlouho trvá, než jsou vidět výsledky?",
      answer:
        "Záleží na typu spolupráce. Vždy ale pracujeme s konkrétními cíli a metrikami, takže je posun vidět.",
    },
  ];

  return (
    <div className="nikola-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-nav">
            <a href="#reference">Reference</a>
            <a href="#services">Co pro vás mohu udělat</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Kontaktujte mně</a>
          </div>

          <div className="hero-main-grid">
            <div className="hero-left">
              <div className="hero-image-wrapper">
                <div className="avatar-large"></div>
                <div className="floating-badge-availability">
                  <span className="status-dot"></span>
                  <span>Přijímám nové projekty</span>
                </div>
              </div>
              
              <div className="credentials">
                <p className="credentials-text">
                  Sladím váš marketing s obchodními cíli – od strategie přes plán až po realizaci a tým – tak, aby všechno fungovalo jako celek.
                </p>
              </div>
            </div>

            <div className="hero-right">
              <div className="character-with-badge">
                <GreenCharacter mood="happy" />
                <div className="name-badge-green">
                  <span>Nikola Ševčíková</span>
                </div>
              </div>

              <h1 className="hero-headline">
                Dávám <span className="emphasized-word">marketing</span>
              </h1>
              <h1 className="hero-headline">
                do souvislostí <span className="emphasized-word">s byznysem</span>
              </h1>

              <p className="hero-description-main">
                Pomáhám firmám růst. Dám vašemu marketingu a značce jasný směr,
                abyste investovali jen do toho, co skutečně posouvá byznys.
              </p>

              <div className="hero-highlights">
                <div className="highlight-item">
                  <div className="highlight-number">12+</div>
                  <div className="highlight-text">úspěšných projektů</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">100%</div>
                  <div className="highlight-text">focus na výsledky</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">B2B+B2C</div>
                  <div className="highlight-text">komplexní zkušenosti</div>
                </div>
              </div>

              <div className="hero-cta-group">
                <button className="cta-button-primary">Naplánovat schůzku</button>
                <p className="consultation-note">
                  První 30min konzultace zdarma
                </p>
              </div>

              <div className="trust-indicators">
                <span className="trust-item">✓ Agenturní zkušenosti</span>
                <span className="trust-item">✓ In-house vedení</span>
                <span className="trust-item">✓ Strategic planning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">9+</span>
            <span className="stat-label">let v marketingu</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">B2B</span>
            <span className="stat-label">marketing</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">B2C</span>
            <span className="stat-label">marketing</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">12+</span>
            <span className="stat-label">marketingových projektů</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Zkušenosti</span>
            <span className="stat-label">z agentury i ze strany klientů</span>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="references-section" id="reference">
        <div className="section-header">
          <span className="section-number">{"{01}"} — Vybrané reference</span>
          <div className="section-title-with-character">
            <GreenCharacter mood="wow" />
            <h2 className="section-title">Projekty, na kterých jsem pracovala</h2>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-url">{`{${project.url}}`}</div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h2>A co kdyby tu příště byl i váš projekt?</h2>
          <button className="cta-button">Domluvme si online schůzku</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="section-header">
          <span className="section-number">{"{02}"} — Co pro vás mohu udělat</span>
          <h2 className="section-title">Služby</h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-number">01</div>
            <h3>Výzkum a analýza</h3>
            <p className="service-goal">
              Cílem je pochopit trh, zákazníky, konkurenci a výchozí stav značky
            </p>
            <ul className="service-details">
              <li><strong>Trh & konkurence:</strong> velikost, trendy, hráči, příležitosti / rizika</li>
              <li><strong>Zákazník:</strong> rozhovory, dotazníky, nákupní data, potřeby & bariéry</li>
              <li><strong>Značka:</strong> vnímání a současná pozice na trhu</li>
              <li><strong>SWOT analýza:</strong> silné / slabé stránky, příležitosti a hrozby + insighty zevnitř firmy</li>
              <li><strong>Sales mapování:</strong> zdroje poptávek a leadů, jejich kvalita, důvody výher / proher</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-number">02</div>
            <h3>Strategie</h3>
            <p className="service-goal">
              Cílem je určit kam jdeme, proč, a kde je naše místo na trhu
            </p>
            <ul className="service-details">
              <li>Segmentace zákazníků, prioritizace a cílení</li>
              <li><strong>Value Proposition:</strong> proč jsme lepší, v čem přinášíme hodnotu</li>
              <li><strong>Marketingově-obchodní mix:</strong> produkt, cena, distribuce, propagace, základní procesy</li>
              <li><strong>Customer Journey & funnel:</strong> analýza klíčových momentů a konverzí, odhalení slabých míst a příležitostí ke zlepšení</li>
              <li><strong>Strategie značky:</strong> positioning, architektura, klíčové narativy, vizuální identita</li>
              <li>Cíle & metriky</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-number">03</div>
            <h3>Plán</h3>
            <p className="service-goal">
              Cílem je přenést strategii do konkrétních kroků, rozpočtu a harmonogramu
            </p>
            <ul className="service-details">
              <li>Roční / kvartální plán (aktivity, odpovědnosti)</li>
              <li>Mediální mix & rozpočet</li>
              <li><strong>Komunikační plán:</strong> kanály, obsah, priority</li>
              <li><strong>Kampaně:</strong> timing, kanály, formáty, kreativa, lead-generation (e-booky, webináře,...)</li>
              <li>Nástroje a technologie (CRM, analytika,...)</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-number">04</div>
            <h3>Realizace</h3>
            <p className="service-goal">
              Převést plán do praxe a průběžně řídit, aby přinášel výsledky
            </p>
            <ul className="service-details">
              <li><strong>Dohled nad realizací:</strong> zajištění, že aktivity dávají smysl a plní cíle</li>
              <li><strong>Koordinace týmu a dodavatelů:</strong> kapacity, briefy, termíny, kontrola kvality</li>
              <li><strong>Pravidelná strategická i operativní setkání:</strong> s vedením, obchodem, interním marketingem i externími partnery</li>
              <li>Reporting & vyhodnocení & optimalizace</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="section-header">
          <span className="section-number">{"{03}"} — FAQ</span>
          <h2 className="section-title">Často kladené otázky</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span className="faq-number">{String(index + 1).padStart(2, "0")}/</span>
                <span>{faq.question}</span>
                <span className="faq-icon">{openFaq === index ? "−" : "+"}</span>
              </button>
              {openFaq === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-badge">
          <span className="status-dot"></span>
          Aktuálně přijímám nové projekty
        </div>
        
        <a href="#top" className="back-to-top">
          Zpátky nahoru
        </a>

        <h2>Máte projekt, který potřebuje ruku marketéra?</h2>
        <h3>To jste tady správně!</h3>

        <div className="contact-profile">
          <div className="avatar-placeholder-small"></div>
          <div className="contact-info">
            <h4>Nikola Ševčíková</h4>
            <p className="contact-tagline">Business-first marketer</p>
            <p className="contact-email">hello@nikolasevcikova.com</p>
            <p className="contact-phone">+420 602 541 809</p>
          </div>
        </div>

        <p className="contact-description">
          <strong>
            Hledáte marketéra, který porozumí vašemu byznysu? Ozvěte se – ráda
            vás poznám.
          </strong>
          <br />
          Působím v Brně, ale setkat se můžeme online nebo osobně{" "}
          <strong>kdekoli</strong>.
        </p>

        <button className="cta-button">Naplánovat online schůzku</button>

        <p className="footer-note">
          Nikola Ševčíková, IČO: 06435084 (Neplátce DPH)
        </p>
      </section>
    </div>
  );
};

export default Nikola;


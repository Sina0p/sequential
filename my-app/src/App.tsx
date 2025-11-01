import './App.css';

function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>

        <div className="hero-content">
          <h1>Professionele Websites voor Jouw Bedrijf</h1>
          <p>
            Wij ontwerpen en ontwikkelen moderne, dynamische websites die jouw bedrijf helpen opvallen en online te groeien.
          </p>
          <a href="#contact" className="hero-btn">Laat Ons Jouw Website Maken</a>
        </div>
      </section>

      <section className="why-us">
        <h2>Waarom Kiezen Voor Ons?</h2>
        <div className="reasons">
          <div className="reason-card">
            <h3>Betaalbare Prijzen</h3>
            <p>Professionele kwaliteit tegen eerlijke tarieven.</p>
          </div>
          <div className="reason-card">
            <h3>Uniek Ontwerp</h3>
            <p>Elke website wordt volledig op maat gemaakt voor jouw merk en doelen.</p>
          </div>
          <div className="reason-card">
            <h3>Snel & Responsief</h3>
            <p>Geoptimaliseerd voor prestaties en alle apparaten.</p>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Wat Wij Aanbieden</h2>
        <div className="cards">
          <div className="card">
            <h3>Bedrijfswebsites</h3>
            <p>Laat jouw producten, diensten en merk professioneel zien.</p>
          </div>
          <div className="card">
            <h3>Persoonlijke branding</h3>
            <p>Laat jezelf, je projecten of hobby’s online zien met een professionele persoonlijke website.</p>
          </div>
          <div className="card">
            <h3>Onderhoud</h3>
            <p>We helpen je website veilig en up-to-date te houden, zodat jij je kunt focussen op je werk.</p>
          </div>
        </div>
      </section>


      <section className="about">
        <h2>Over Ons</h2>
        <p>
          Wij zijn twee enthousiaste webontwikkelaars met een passie voor het bouwen van moderne websites die bedrijven helpen groeien.
        </p>
      </section>

      <section className="contact" id="contact">
        <h2>Laten We Samen Iets Moois Bouwen</h2>
        <p>
          Neem contact met ons op via{' '}
          <a href="mailto:codemasters@example.com">codemasters@example.com</a>
        </p>
        <a href="mailto:codemasters@example.com" className="contact-btn">Contacteer Ons</a>
      </section>
    </div>
  );
}

export default App;

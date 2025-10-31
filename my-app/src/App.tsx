import './App.css';

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to CodeMasters</h1>
        <p>We build custom coding solutions for students and businesses.</p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>React, Vite, TypeScript, and more.</p>
          </div>
          <div className="card">
            <h3>App Development</h3>
            <p>Mobile apps using React Native and Flutter.</p>
          </div>
          <div className="card">
            <h3>Automation & Scripts</h3>
            <p>Python, Node.js, and automation solutions.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          We are two Informatica students passionate about coding and helping others
          bring their ideas to life. Quality and creativity are our priorities!
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email us at: <a href="mailto:codemasters@example.com">codemasters@example.com</a></p>
      </section>
    </div>
  );
}

export default App;

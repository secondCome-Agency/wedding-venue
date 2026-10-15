export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand">aangan.</div>
          <p>Thoughtful interiors. Personal stories. Spaces made to be lived in.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <div className="footer-links">
            <a href="#services">What We Do</a>
            <a href="#gallery">Our Gallery</a>
            <a href="#projects">Selected Work</a>
          </div>
        </div>
        <div>
          <h4>Say hello</h4>
          <div className="footer-links">
            <a href="mailto:hello@aanganinteriors.in">hello@aanganinteriors.in</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="#contact">Project enquiries</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Aangan Interiors</span>
        <span>Thoughtfully designed. Beautifully lived.</span>
      </div>
    </footer>
  );
}

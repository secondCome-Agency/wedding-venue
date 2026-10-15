export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy reveal">
        <div className="eyebrow">Interiors, thoughtfully considered</div>
        <h1>Spaces that<br /><em>feel like you.</em></h1>
        <p>We create warm, considered interiors that bring beauty, comfort and a little more meaning to the everyday.</p>
        <a className="text-link" href="#projects">Discover our work <span>↗</span></a>
      </div>
      <div className="hero-image reveal">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85" alt="Sunlit contemporary living room with warm neutral furnishings" />
        <div className="image-note">Considered spaces · Beautifully lived</div>
      </div>
    </section>
  );
}

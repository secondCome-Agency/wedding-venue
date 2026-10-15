export default function Gallery() {
  return (
    <>
      <section className="section gallery-intro" id="gallery">
        <div className="section-heading reveal">
          <span className="script">A little inspiration</span>
          <h2>Our Gallery</h2>
        </div>
      </section>
      <section className="gallery-banner reveal">
        <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90" alt="Wide view of an airy, naturally lit living room" loading="lazy" />
        <div className="gallery-label">gallery</div>
        <div className="gallery-caption">Spaces shaped by light, texture and feeling</div>
      </section>
    </>
  );
}

const services = [
  { title: 'Residential Interiors', meta: '01 / Homes with heart', image: 'photo-1600607687939-ce8a6c25118c', alt: 'Warm contemporary residential interior' },
  { title: 'Space Styling', meta: '02 / The finishing touch', image: 'photo-1616486338812-3dadae4b4ace', alt: 'Carefully styled living room details' },
  { title: 'Turnkey Interiors', meta: '03 / From start to home', image: 'photo-1600566753086-00f18fb6b3ea', alt: 'Beautifully finished modern home interior' },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading reveal">
        <span className="script">Made for living</span>
        <h2>A thoughtful approach to every space</h2>
        <p>From the first sketch to the finishing touch, we make the process feel personal.</p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <a className="service-card reveal" href="#contact" key={service.title}>
            <div className="service-photo">
              <img src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=1000&q=85`} alt={service.alt} loading="lazy" />
              <div className="service-title">{service.title}</div>
            </div>
            <div className="service-meta"><span>{service.meta}</span><b>↗</b></div>
          </a>
        ))}
      </div>
    </section>
  );
}

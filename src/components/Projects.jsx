const projects = [
  { title: 'The Quiet Residence', category: 'Residential · Jaipur', image: 'photo-1600607687920-4e2a09cf159d', alt: 'Minimal neutral living room project' },
  { title: 'Soft Living', category: 'Space styling · Gurugram', image: 'photo-1600210491892-03d54c0aaf87', alt: 'Warm elegant living area with layered textures' },
  { title: 'Earth & Ivory', category: 'Turnkey · Noida', image: 'photo-1600566753190-17f0baa2a6c3', alt: 'Modern interior with natural materials' },
];

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-heading reveal">
        <span className="script">A few favourites</span>
        <h2>Details make the difference</h2>
        <p>A collection of spaces and little moments that tell a bigger story.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <a className="project-card reveal" href="#contact" key={project.title}>
            <div className="project-image">
              <img src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1000&q=85`} alt={project.alt} loading="lazy" />
            </div>
            <div className="project-info">
              <div><h3>{project.title}</h3><p>{project.category}</p></div>
              <span className="project-arrow">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

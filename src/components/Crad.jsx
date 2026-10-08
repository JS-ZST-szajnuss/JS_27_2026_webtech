function Crad({ technologies }) {
  return (
    <div className="tech-grid">
      {technologies.map((tech) => (
        <article key={tech.id} className="tech-card">
          <div className="tech-card-header">
            <img src={`/${tech.image}`} alt={tech.name} className="tech-image" />
          </div>
          <div className="tech-card-body">
            <h3>{tech.name}</h3>
            <span className="tech-badge">{tech.category}</span>
            <p className="tech-hours">Czas nauki: <strong>{tech.hours} godz.</strong></p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Crad;
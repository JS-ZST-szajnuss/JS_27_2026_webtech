import { useState } from 'react';

function Technology({ name, category, hours, image }) {
  // Stany z Etapu 6
  const [likes, setLikes] = useState(0);
  const [isLearning, setIsLearning] = useState(false);

  // Etap 7 Zadanie 1: Stan widoczności szczegółów i funkcja przełączająca
  const [visible, setVisible] = useState(false);

  const toggleDetails = () => {
    setVisible(!visible);
  };

  return (
    <article className="tech-card">
      <div className="tech-card-header">
        <img src={`/${image}`} alt={name} className="tech-image" />
      </div>
      
      <div className="tech-card-body">
        <h3>{name}</h3>
        <span className="tech-badge">{category}</span>
        <p className="tech-hours">
          Czas nauki: <strong>{hours} godz.</strong>
        </p>
      </div>

   
      <p>Polubienia: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>
        Lubię
      </button>
      <button onClick={() => setLikes(0)}>
        Resetuj polubienia
      </button>

      {/* Sekcja Statusu nauki */}
      <p>Status: {isLearning ? "Uczę się" : "Jeszcze nie uczę się"}</p>
      <button onClick={() => setIsLearning(!isLearning)}>
        Zmień status nauki
      </button>

      {/* Etap 7: Przycisk wywołujący toggleDetails */}
      <div style={{ marginTop: '10px' }}>
        <button onClick={toggleDetails}>
          {visible ? "Ukryj szczegóły" : "Pokaż szczegóły"}
        </button>

        {/* Renderowanie warunkowe szczegółów na podstawie stanu visible */}
        {visible && (
          <div className="tech-details" style={{ marginTop: '8px' }}>
            <p>Dodatkowe szczegóły dotyczące technologii {name}.</p>
          </div>
        )}
      </div>
    </article>
  );
}

function Crad({ technologies }) {
  return (
    <div className="tech-grid">
      {technologies.map((tech) => (
        <Technology
          key={tech.id}
          name={tech.name}
          category={tech.category}
          hours={tech.hours}
          image={tech.image}
        />
      ))}
    </div>
  );
}

export default Crad;
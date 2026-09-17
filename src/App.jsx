import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css';
import Header from './components/Header.jsx';
import Technology from './components/Technology.jsx';
import Footer from './components/Footer.jsx';
import Student from './components/Student.jsx';
import InfoBox from './components/InfoBox.jsx';
import CourseCard from './components/CourseCard.jsx';

function App() {
  const technologies = [
    { id: 1, name: 'React', category: 'Frontend' },
    { id: 2, name: 'Node.js', category: 'Backend' },
    { id: 3, name: 'PostgreSQL', category: 'Baza danych' },
  ];
  return (
    <>
      <Header />
      <main>
        <Technology />
        <Technology />
        <Technology />

        <Student/>

        <InfoBox/>

        <CourseCard/>

        <section className="tech-list">
          <h2>Lista Technologii</h2>

          <div className="tech-card">
            <h3>{technologies[0].name}</h3>
            <p>Kategoria: {technologies[0].category}</p>
          </div>

          <div className="tech-card">
            <h3>{technologies[1].name}</h3>
            <p>Kategoria: {technologies[1].category}</p>
          </div>

          <div className="tech-card">
            <h3>{technologies[2].name}</h3>
            <p>Kategoria: {technologies[2].category}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Jakub Szajna",
    technologiesCount: 3
  };

  const student = {
  name: "Jakub",
  surname: "Szajna",
  className: "4P",
  specialization: "technik programista"
};

const course = {
  name: "Programowanie webowe",
  teacher: "Peul Monday",
  hours: 67,
  completed: true
};

  return (
    <div>

      <h1>Uczeń: {student.name} {student.surname}</h1>

      <p>Klasa: {student.className}</p>

      <p>Kierunek: {student.specialization}</p>

      <section>
        <h2>Nazwa kursu: {course.name}</h2>
        <p>Nauczyciel: {course.teacher}</p>
        <p>Liczba godzin: {course.hours}</p>

      </section>
    </div>
  );
}

export default App;

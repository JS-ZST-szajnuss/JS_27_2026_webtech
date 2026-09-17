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

function App() {
  return (
    <>
      <Header />
      <main>
        <Technology />
        <Technology />
        <Technology />

        <Student/>

        <InfoBox/>
      </main>
      <Footer />
    </>
  );
}

export default App;
import React from 'react';
import './modalities.css';
import logo from '/src/assets/logo.png';

function modalities() {
  return (
    <div class="modalities-container">
      <header class="modalities-header">
        <img src={logo} alt="soumaisfit-logo" class="logo"></img>
        <h1>Nossas Modalidades</h1>
        <p class="slogan">Várias modalidades para você</p>
      </header>

      <div class="modalities-grid">
        <div class="modalitie-card">
          <div class="div-image"></div>
          <div class="div-content">
            <h2>Fit Dance</h2>
            <p>O <b>FitDance</b> é uma modalidade de dança fitness que combina coreografias fáceis e animadas, como funk, axé e pop. Voltado para todas as idades, promove o bem-estar físico e emocional por meio de aulas divertidas que melhoram o condicionamento, a coordenação e a autoestima.</p>
            <a href="https://wa.me/5585992981393" target="_blank"><button class="cta-button">Quero Participar</button></a>
          </div>
        </div>

        <div class="modalitie-card">
          <div class="div-image"></div>
          <div class="div-content">
            <h2>Treinamento Funcional</h2>
            <p>O <b>Trenamento Funcional</b> simula movimentos do dia a dia para melhorar força, equilíbrio, coordenação, flexibilidade e resistência. Utiliza o peso do corpo e acessórios como cordas, bolas e elásticos, focando no corpo como um todo, e não em grupos musculares isolados. É indicado para todas as idades.</p>
            <a href="https://wa.me/5585992981393" target="_blank"><button class="cta-button">Quero Participar</button></a>
          </div>
        </div>

        <div class="modalitie-card">
          <div class="div-image"></div>
          <div class="div-content">
            <h2>Musculação</h2>
            <p>A <b>Musculação</b> é um tipo de treino realizado com pesos e equipamentos, com o objetivo de fortalecer e desenvolver os músculos. Pode ser praticada por pessoas de diferentes idades e níveis físicos, sendo eficaz para ganho de massa muscular, emagrecimento, melhora da postura, aumento da resistência e prevenção de lesões.</p>
            <a href="https://wa.me/5585992981393" target="_blank"><button class="cta-button">Quero Participar</button></a>
          </div>
        </div>
      </div>

      <footer>
        © 2025 Sou + Fit - Todos os direitos reservados
      </footer>
    </div>
  )
}

export default modalities

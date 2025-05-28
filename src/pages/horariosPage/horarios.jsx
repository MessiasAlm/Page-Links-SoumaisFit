import React from 'react';
import './horarios.css';
import logo from '/src/assets/logo.png';

function horarios() {
  return (
    <div class="container">
      <header>
        <img src={logo} alt="soumaisfit-logo" class="logo"></img>
        <h1>Horários</h1>
        <p class="slogan">Venha conhecer nossa estrutura, será um prazer lhe receber</p>
      </header>
      <div class="plan-card">

      </div>
    </div>
  );
}

export default horarios;
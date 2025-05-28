import React from 'react';
import './plans.css';
import logo from "../assets/logo.png"

function plans() {
   return(
    <div class="plans-container">
        <header class="plans-header">
            <img src={logo} alt="soumaisfit-logo" class="logo"></img>
            <h1>Nossos Planos</h1>
            <p>Escolha o que melhor se adapta aos seus objetivos</p>
        </header>

        <div class="plans-grid">
             <div class="plan-card">
                <h3>Monthly</h3>
                <h2><span class="dec">R$</span>199<span class="dec">,00</span></h2>
                <button class="cta-button">Comprar</button>
                <ul class="plan-features">
                    <li><i class="fas fa-check check-icon"></i> Acesso ilimitado</li>
                    <li><i class="fas fa-check check-icon"></i> 3 aulas em grupo por semana</li>
                    <li><i class="fas fa-check check-icon"></i> App premium + nutrição</li>
                    <li><i class="fas fa-check check-icon"></i> Acesso ao lounge VIP</li>
                </ul>
            </div>

             <div class="plan-card">
                <h3>Monthly</h3>
                <h2><span class="dec">R$</span>199<span class="dec">,00</span></h2>
                <button class="cta-button">Comprar</button>
                <ul class="plan-features">
                    <li><i class="fas fa-check check-icon"></i> Acesso ilimitado</li>
                    <li><i class="fas fa-check check-icon"></i> 3 aulas em grupo por semana</li>
                    <li><i class="fas fa-check check-icon"></i> App premium + nutrição</li>
                    <li><i class="fas fa-check check-icon"></i> Acesso ao lounge VIP</li>
                </ul>
            </div>

            <div class="plan-card highlighted">
                <div class="inverted-border-radius"><p class="popular-text">Popular</p></div>
                <h3>Monthly</h3>
                <h2><span class="dec">R$</span>199<span class="dec">,00</span></h2>
                <button class="cta-button">Comprar</button>
                <ul class="plan-features">
                    <li><i class="fas fa-check check-icon"></i> Acesso ilimitado</li>
                    <li><i class="fas fa-check check-icon"></i> 3 aulas em grupo por semana</li>
                    <li><i class="fas fa-check check-icon"></i> App premium + nutrição</li>
                    <li><i class="fas fa-check check-icon"></i> Acesso ao lounge VIP</li>
                </ul>
            </div>

             <div class="plan-card">
                <h3>Monthly</h3>
                <h2><span class="dec">R$</span>199<span class="dec">,00</span></h2>
                <button class="cta-button">Comprar</button>
                <ul class="plan-features">
                    <li><i class="fas fa-check check-icon"></i> Acesso ilimitado</li>
                    <li><i class="fas fa-check check-icon"></i> 3 aulas em grupo por semana</li>
                    <li><i class="fas fa-check check-icon"></i> App premium + nutrição</li>
                    <li><i class="fas fa-check check-icon"></i> Acesso ao lounge VIP</li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default plans;
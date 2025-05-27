import React from 'react';
import './plans.css';

function plans() {
   return(
    <div class="plans-container">
        <header class="plans-header">
            <h1>Nossos Planos</h1>
            <p>Escolha o que melhor se adapta aos seus objetivos</p>
        </header>

        <div class="plans-grid">
            <div class="plan-card">
                <div class="plan-icon">
                    <i class="fas fa-star"></i>
                </div>
                <h3>BASIC</h3>
                <h2>R$ 99/mês</h2>
                <ul class="plan-features">
                    <li><i class="fas fa-check check-icon"></i> Acesso à área de musculação</li>
                    <li><i class="fas fa-check check-icon"></i> 1 aula em grupo por semana</li>
                    <li><i class="fas fa-check check-icon"></i> App de treinos básico</li>
                </ul>
                <button class="cta-button">ASSINAR AGORA</button>
            </div>

            <div class="plan-card highlighted">
                <div class="popular-badge">
                    <i class="fas fa-fire"></i> MAIS POPULAR
                </div>
                <div class="plan-icon">
                    <i class="fas fa-gem"></i>
                </div>
                <h3>PREMIUM</h3>
                <h2>R$ 199/mês</h2>
                <ul class="plan-features">
                    <li><i class="fas fa-check check-icon"></i> Acesso ilimitado</li>
                    <li><i class="fas fa-check check-icon"></i> 3 aulas em grupo por semana</li>
                    <li><i class="fas fa-check check-icon"></i> App premium + nutrição</li>
                    <li><i class="fas fa-check check-icon"></i> Acesso ao lounge VIP</li>
                </ul>
                <button class="cta-button">ASSINAR AGORA</button>
            </div>

            <div class="plan-card">
                <div class="plan-icon">
                    <i class="fas fa-crown"></i>
                </div>
                <h3>ELITE</h3>
                <h2>R$ 299/mês</h2>
                <ul class="plan-features">
                    <li><i class="fas fa-check check-icon"></i> Personal trainer 2x/semana</li>
                    <li><i class="fas fa-check check-icon"></i> Aulas ilimitadas</li>
                    <li><i class="fas fa-check check-icon"></i> Massagem mensal</li>
                    <li><i class="fas fa-check check-icon"></i> Programa de recuperação</li>
                </ul>
                <button class="cta-button">ASSINAR AGORA</button>
            </div>
        </div>
    </div>
  );
}

export default plans;
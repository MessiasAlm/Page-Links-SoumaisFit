import React from 'react';
import './app.css'
import logo from '/src/assets/logo.png';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div class="container">
            <div class="header">
                <div class="logo-container">
                    <img src={logo} alt="soumaisfit-logo" class="logo"></img>
                </div>
                <h1>Sou + Fit</h1>
                <p class="slogan">Somos mais que uma academia, somos um complexo</p>
            </div>

            <div class="links-grid">

                <div class="link-card">
                    <Link to="/plans">
                        <div class="link-icon">
                            <i class="fas fa-clipboard-list" id="icon-plans"></i>
                        </div>
                        Nossos Planos
                    </Link>
                </div>

                <div class="link-card">
                    <a href="https://www.google.com/maps/place/Academia+Sou+%2B+Fit/@-3.6065567,-38.9647002,17z/data=!3m1!4b1!4m6!3m5!1s0x7c0c35062ae2ccd:0x44dcac8cd6fc45bb!8m2!3d-3.6065621!4d-38.9621253!16s%2Fg%2F11ybtddb_0?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                        <div class="link-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        Localização
                    </a>
                </div>

                <div class="link-card">
                    <Link to="/modalities">
                        <div class="link-icon">
                            <i class="fa solid fa-dumbbell" id="icon-modalities"></i>
                        </div>
                        Modalidades
                    </Link>
                </div>
            </div>

            <div class="highlights">
                <div class="highlight-item">Alto Padrão</div>
                <div class="highlight-item">Moderna</div>
                <div class="highlight-item">Complexo</div>
                <div class="highlight-item">#SouMaisFit</div>
                <div class="highlight-item">Experiência Única</div>
            </div>

            <div class="social-links">
                <a href="https://instagram.com/complexosoumaisfit" class="social-icon" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/5585992981393" class="social-icon" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>

            <div class="info">
                <div class="info-container">
                    <p class="info-title">Funcionamento</p>
                    <ul>
                        <li class="info-text"><span class="text-yellow">Seg. a Sex: </span>05h às 23h</li>
                        <li class="info-text"><span class="text-yellow">Sábado: </span>07h às 19h</li>
                        <li class="info-text"><span class="text-yellow">Domingo: </span>08h às 12h</li> 
                    </ul>
                </div>
                <div class="info-container">
                    <p class="info-title">Endereço</p>
                    <ul>
                        <li class="info-text">Solar Open Mall - Av. Deputado Barros Pinho, n⁰ 700 Bairro Palestina | São Gonçalo do Amarante</li>
                    </ul>
                </div>
            </div>

            <footer>
                © 2025 Sou + Fit - Todos os direitos reservados
            </footer>
        </div >

    )
}

export default App

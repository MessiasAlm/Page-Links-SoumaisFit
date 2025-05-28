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
                            <i class="fa solid fa-dumbbell" id="icon-plans"></i>
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
                    <Link to="/horarios">
                        <div class="link-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        Horários
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
                <a href="https://instagram.com/academiapremium" class="social-icon" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://tiktok.com/@academiapremium" class="social-icon" target="_blank">
                    <i class="fab fa-tiktok"></i>
                </a>
                <a href="https://youtube.com/academiapremium" class="social-icon" target="_blank">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="https://wa.me/5511999999999" class="social-icon" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>

            <footer>
                © 2025 Sou + Fit - Todos os direitos reservados
            </footer>
        </div >

    )
}

export default App
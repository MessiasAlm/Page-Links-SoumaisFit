import React from "react";
import "./links.css"

function App() {
    return (
        <div class="container">
            <div class="header">
                <div class="logo-container">
                    <img src="src\soumaisfit.png" alt="soumaisfit-logo" class="logo"></img>
                </div>
                <h1>Sou + Fit</h1>
                <p class="slogan">Somos mais que uma academia, somos um complexo</p>
            </div>

            <div class="links-grid">
                <div class="link-card">
                    <a href="https://www.google.com/maps/place/Academia+Sou+%2B+Fit/@-3.6065567,-38.9647002,17z/data=!3m1!4b1!4m6!3m5!1s0x7c0c35062ae2ccd:0x44dcac8cd6fc45bb!8m2!3d-3.6065621!4d-38.9621253!16s%2Fg%2F11ybtddb_0?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                        <div class="link-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        Localização
                    </a>
                </div>

                <div class="link-card">
                    <a href="http://wa.me/5585992981393?text=Quero%20saber%20mais%20sobre%20os%20planos." target="_blank">
                        <div class="link-icon">
                            <i class="fab fa-whatsapp"></i>
                        </div>
                        Whatsapp
                    </a>
                </div>

                <div class="link-card">
                    <a href="" target="_blank">
                        <div class="link-icon">
                            <i class=""></i>
                        </div>
                        Link 3
                    </a>
                </div>

                <div class="link-card">
                    <a href="" target="_blank">
                        <div class="link-icon">
                            <i class=""></i>
                        </div>
                        Link 4
                    </a>
                </div>
            </div>

            <div class="highlights">
                <div class="highlight-item">Alto Padrão</div>
                <div class="highlight-item">Moderna</div>
                <div class="highlight-item">Complexo</div>
                <div class="highlight-item">#SouMaisFit</div>
                <div class="highlight-item">#SGA</div>
                <div class="highlight-item">Treino Funcional</div>
                <div class="highlight-item">Experiência Única</div>

                {/*<div class="highlight-item">Personal Trainers</div>
                <div class="highlight-item">Moderna</div>
                <div class="highlight-item">Treino</div>
                <div class="highlight-item">Alto Padrão</div>
                <div class="highlight-item">Personal Trainers</div>
                <div class="highlight-item">Padrão</div>
                <div class="highlight-item">Padrão</div>
                <div class="highlight-item">Padrão</div>*/}
            </div>

            {/*} Redes Sociais com Efeito Centralizado {*/}
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
        </div>

    )
}

export default App
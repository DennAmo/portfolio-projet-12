import React, { useState } from 'react';

const AboutmeContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="about-container">
      <section className="contact-section">
        <h2 className="section-title">Me contacter</h2>
        <div className="contact-grid">
          <a 
            className="contact-card" 
            href="mailto:dennis.aubry@proton.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>

          <a 
            className="contact-card"
            href="https://www.linkedin.com/in/dennis-aubry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>

          <button className="contact-card" onClick={handleOpenModal}>
            <i className="fas fa-phone"></i>
            <span>Téléphone</span>
          </button>
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content">
              <button className="close-btn" onClick={handleCloseModal}>
                <i className="fas fa-times"></i>
              </button>
              <h3>Numéro de téléphone</h3>
              <p className="phone-number">+33 6 21 68 98 33</p>
            </div>
          </div>
        )}
      </section>

      <section className="background-section">
        <h2 className="section-title">Parcours</h2>
        <div className="card">
          <h3>Formation</h3>
          <p>Formation niveau 5 Developpement Intégrateur Web FrontEnd React Openclassrooms</p>
          <div className="skills-grid">
            <span className="skill-tag">HTML/CSS</span>
            <span className="skill-tag">SASS</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">Redux</span>
            <span className="skill-tag">SEO</span>
          </div>
        </div>

        <div className="card">
          <h3>Expérience</h3>
          <p className="text-content">
            J'ai beaucoup travailler par ci par là dans le passé, mais pas dans le domaine informatique. 
            Ces expériences diverses m'ont permis d'acquérir de nombreuses compétences transversales essentielles 
            au travail en entreprise.
          </p>
        </div>

        <div className="card">
          <h3>Objectifs</h3>
          <p className="text-content">
            J'aimerais m'améliorer dans l'univers du développement et acquérir plus de compétences, 
            notamment en PHP, Python et C#.
          </p>
        </div>
      </section>

      <section className="interests-section">
        <h2 className="section-title">Passions</h2>
        <div className="interests-grid">
          <div className="interest-card">
            <i className="fas fa-dumbbell"></i>
            <h3>Sport</h3>
            <ul>
              <li>Muay Thai</li>
              <li>MMA (Mixed Martial Arts)</li>
              <li>Badminton</li>
              <li>Course à pied</li>
            </ul>
          </div>

          <div className="interest-card">
            <i className="fas fa-gamepad"></i>
            <h3>Loisirs</h3>
            <p>Jeux vidéo et Manga/Animés</p>
          </div>

          <div className="interest-card">
            <i className="fas fa-robot"></i>
            <h3>Intelligence Artificielle</h3>
            <p className="text-content">
              Passionné par l'IA, notamment à travers des projets comme le mod Herika ChatGPT Companion 
              sur Skyrim, qui m'a fait découvrir le potentiel fascinant de l'interaction homme-machine.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutmeContent;

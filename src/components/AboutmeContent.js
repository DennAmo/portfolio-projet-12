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
    <>
      <h2 className='title'>Me contacter</h2>
      <div className='works'>
        <div className="aboutme">

          <div className='column'>
          <a className="container" href="mailto:dennis.aubry@proton.me">
              <div className="center">
                <button className="btn">
                  <span>Gmail</span>
                </button>
              </div>
            </a>

            <a className="container" href="https://chat.google.com/room/AAAAvaJ2eyU?cls=7">
              <div className="center">
                <button className="btn">
                  <span>Google Chat</span>
                </button>
              </div>
            </a>

            <div className="container">
              <div className="center">
                <button className="btn" onClick={handleOpenModal}>
                  <span>Téléphone</span>
                </button>
              </div>

              {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                  <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <span className="close-btn" onClick={handleCloseModal}>X</span>
                    <h2>Numéro de téléphone</h2>
                    <p>+33 6 21 68 98 33</p>
                  </div>
                </div>
              )}
            </div>
          </div>


          <h2>Parcours:</h2>
          <p>Formation niveau 5 Developpement Intégrateur Web FrontEnd React Openclassrooms</p>
          <p>Utilisation de html/css, sass, js, nodejs, express, api call, mongodb, redux, optimisation SEO, optimisation général de performance de chargement et navigation de site web, debug & test</p>

          <p>J'ai beaucoup travailler par ci par là dans le passé, mais pas dans le domaine informatique, j'ai dû faire plus d'une dizaines d'entreprises différentes qui m'ont fais acquérir plusieurs compétence nécéssaire au travail en entreprise en général,
            sans parler de l'informatique(certaine ne sont pas une fierté, mais toute éxpériences est bonnes à prendre).</p>
          <p>J'ai fais beaucoup de petits projets à titre personnel, sans pour autant en voir tout les aspects des technologies utilisés (php, python).</p>
          <p>J'aimerais m'améliorer dans l'univers du développement et acquérir plus de compétence dans divers domaine, nottament php, python et c#</p>

          <h2>Passion:</h2>
          <p>-Sport: Muay Thai, MMA(MixedMartialArt), Badminton, Course à pied</p>
          <p>-Jeux et Manga/Animés</p>
          <p>-IA: Ma passion pour l'I.A c'est révéler avec un mod(Herika ChatGPT Companion) sur Skyrim qui intègre une I.A dans le jeux, crée par DwemerDynamics opensource.</p>
          <p> Je pense pouvoir dire que cela m'a touché émotionnellement, le réalisme, la compréhension du contexte, les réponses, l'impression de communiquer avec un humain presque, même si l'I.A ne ressens pas,
            nous si, nous sommes humains et c'est je pense normal de montrer de l'empathie pour "quelque chose" qui nous "ressemble" d'une certaine façon</p>
        </div>
      </div>
    </>
  );
};

export default AboutmeContent;

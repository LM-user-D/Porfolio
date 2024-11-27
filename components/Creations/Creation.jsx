import "./creation.css";

export default function Creation() {
  return (
    <div className="creation">
      <h2>Mes Projets </h2>

      <div className="liens">
        
        <div className="boxe boxe-1">
          <a href="https://github.com/LM-user-D/Projet-3">
            <img className="img-creation" src="../../public/img/projet-Img/img-1.webp" alt="image du logo Java Script" />
            <p>Lien GitHub d'un projet JS</p>
          </a>
        </div>

       <div className="boxe boxe-2">
          <a href="https://github.com/LM-user-D/Projet.5">
            <img className="img-creation" src="../../public/img/projet-Img/img-3.webp"
            alt="image du logo react" />
            <p>Lien GitHub d'un projet React</p>
          </a>
        </div>

        <div className="boxe boxe-3">
          <a href="https://github.com/LM-user-D/Projet.6">
            <img className="img-creation" src="../../public/img/projet-Img/img-2.webp" alt="image du logo NodeJS" />
            <p>Lien GitHub d'un projet NodeJS</p>
          </a>
        </div>
 

      </div>
    </div>
  );
}

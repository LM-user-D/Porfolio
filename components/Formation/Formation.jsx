import "./Formation.css";

export default function Formation() {
  return (
    <div className="formation">
      <h2>Mes Formations</h2>

      <div className="container-formation">
        <div className="boxe-formation">
          <a href="https://openclassrooms.com/fr">
            <img
              className="img-creation"
              src="../../public/img/formation-img/img-1.png"
              alt=""
            />
          </a>
        </div>

        <div className="boxe-formation">
          <a href="https://www.udemy.com/course/formation-complete-developpeur-front-end/">
            <img
              className="img-creation"
              src="../../public/img/formation-img/img-3.jpg"
              alt="image de lien vers formation"
            />
          </a>
        </div>

        <div className="boxe-formation">
          <a href="https://www.udemy.com/course/css-animation-transitions-and-transforms-creativity-course/">
            <img
              className="img-creation"
              src="../../public/img/formation-img/img-4.jpg"
              alt="image du logo NodeJS"
            />           
          </a>
        </div>
        <div className="boxe-formation">
          <a href="https://www.udemy.com/course-dashboard-redirect/?course_id=2955324">
            <img
              className="img-creation"
              src="../../public/img/formation-img/img-2.jpg"
              alt="image du logo NodeJS"
            />
          </a>
        </div>

      </div>
    </div>
  );
}

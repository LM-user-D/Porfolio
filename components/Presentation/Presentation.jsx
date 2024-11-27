import img from "../../public/img/img2.jpg";
import "./prensentation.css";

import { useRef, useEffect } from "react";
export default function Presentation() {
  const container = useRef();
  container.innerHTML = "";

  useEffect(() => {
    for (let i = 0; i < 20; i++) {
      const box = document.createElement("div");
      box.className = "box";
      container.current.appendChild(box);
    }

  const box = document.querySelectorAll(".box");
    setInterval(() => {
     
    box.forEach((el) => {
      el.style.left = Math.random() * 100 + "vw";
      el.style.top = Math.random() * 100 + "vh";
      el.style.width = Math.random() * 100 + "px";
      el.style.height = Math.random() * 100 + "px";
    });

    }, 9000);

  }, []);

  return (
    <div className="presentation">
      <h1>Présentation</h1>
      <div ref={container} className="fond"></div>
     
        <div className="card">
          <div className="img-presentation">
            <img src={img} alt="Photo de profil" />
          </div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius mollitia quas asperiores. Fugiat deserunt similique minus unde iusto aliquid debitis illo itaque voluptatem, dolorum tenetur excepturi nostrum iure expedita sunt.
        </div>
    </div>
  );
}

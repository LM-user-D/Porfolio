import "./competences.css";
import { useRef, useEffect } from "react";
export default function Competences() {
  const tab = [
    { titre: "HTML", nb: "98%" },
    { titre: "SASS", nb: "50%" },
    { titre: "CSS", nb: "91%" },
    { titre: "JS", nb: "68%" },
    { titre: "REACT", nb: "45%" },
    { titre: "NodeJS", nb: "10%" },
  ];

  const container = useRef([]);
  const box = container.current;

  useEffect(() => {
    box.forEach((el, id) => {
      console.log(el);
      el.style.top = Math.random() * 50 + "%";
      el.style.left = Math.random() * 70 + "%";
      el.style.animationDelay = Math.random() * 3 + "s";

      if(el.style.top < 50 + "%"){
        el.style.top = Math.random() * 50 + "%";
      }
      if(el.style.left < 80 + "%"){
      el.style.left = Math.random() * 70 + "%";
      }
    });
  }, []);

  return (
    <div className="competences">
      <h2>Mes Compétence</h2>

      <div className="container">
        {tab.map((el, id) => (
          <div
            key={id}
            ref={(elt) => (container.current[id] = elt)}
            className={`dia dia-${id + 1}`}>
            <span>{el.titre}</span>
            <span>{el.nb}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

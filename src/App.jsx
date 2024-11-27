import Presentation from "../components/Presentation/Presentation";
import Creation from "../components/Creations/Creation";
import "./App.css";
import Competences from "../components/Compétences/Competences";
import Formation from "../components/Formation/Formation";
import Footer from "../components/Footer/Footer";
export default function App() {
  return (
    <div>
      <Presentation />
      <Competences />

      <Formation />

      <Creation />

      <Footer />
    </div>
  );
}

import "./notFound.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Centro de formação com sombra.webp";
import construction from "../../assets/undraw_Towing_re_wesa.webp";

const NotFound: React.FC = () => {
  return (
    <main className="container-notFound"
      aria-label="Página em construção, redireciona para a página inicial"
      aria-live="polite"
    >
      <div className="img-notFound">
        <img
          src={logo}
          alt="Centro de Formação Carlos Kopcak"
          title="Centro de Formação Carlos Kopcka"
        />
      </div>
      <h1>Página não encontrada.</h1>
      <p className="text-not">
        Não conseguimos encontrar o que estava procurando 🙁
      </p>
      <p className="text-not">
        Mas não fique triste, clique no botão e retorne para a tela inicial 😉
      </p>
      <div className="img-g">
        <img
          src={construction}
          alt="guincho rebocando um carro"
          title="Página em Construção"
        />
      </div>
      <div className="btn">
        <Link to="/">
          <button className="form-login-btn" type="submit" aria-label="Voltar para a página inicial">

            Voltar para a Home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

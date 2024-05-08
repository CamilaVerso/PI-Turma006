import "./notFound.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Centro de formação com sombra.png";
import construction from "../../assets/undraw_Towing_re_wesa.png";

const NotFound: React.FC = () => {
  return (
    <main className="container-notFound">
      <div className="img-notFound">
        <img
          src={logo}
          alt="Centro de Formação Carlos Kopcak"
          title="Centro de Formação Carlos Kopcka"
        />
      </div>
      <h1>Página em construção...</h1>
      <p className="text-not">
        Logo, logo aqui terá funcionalidades incríveis!
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
          <button className="form-login-btn" type="submit">
            Voltar para a Home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

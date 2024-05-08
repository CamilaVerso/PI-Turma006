import "./formSent.css";
import { Link } from "react-router-dom";
import send from "../../assets/undraw_Completing_re_i7ap.png"

const FormSent: React.FC = () => {
  return (
    <main className="container-formSent">
      <h1>Inscrição realizada</h1>

      <div className="img-g">
        <img
          src={send}
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

export default FormSent;

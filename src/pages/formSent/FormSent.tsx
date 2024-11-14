import "./formSent.css";
import { Link } from "react-router-dom";
import send from "../../assets/undraw_Completing_re_i7ap.webp"

const FormSent: React.FC = () => {
  return (
    <main className="container-formSent" aria-live="polite">

      <h1>Matrícula realizada</h1>

      <div className="img-g">
        <img
          src={send}
          alt="Simbolo de check e a ilustração de uma mulher"
          title="Sucesso"
        />
      </div>

      <div className="btn">
        <Link to="/">
          <button
            className="form-login-btn"
            type="submit"
            aria-label="Voltar para a página inicial"
          >
            Voltar para a Home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default FormSent;

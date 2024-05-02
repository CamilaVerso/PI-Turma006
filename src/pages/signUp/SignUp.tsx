import "./signUp.css";
import logo from "../../assets/Centro de formação com sombra.png";

const SignUp: React.FC = () => {
  return (
    <>
      <body className="login">
        <div className="img-login">
          <img
            src={logo}
            alt="logo Centro de formação Carlos Kopcak"
            title="Centro de Fonação Carlos Kopcak"
          />
        </div>
        <form action="" className="container-form">
          <div className="container-inputs">
            <strong><p className="titulo-criarConta">Cadastrar Nova Conta</p></strong>

            <label htmlFor="name">Nome</label>
            <input type="text" placeholder="Digite seu nome" />

            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" />

            <label htmlFor="senha">Senha</label>
            <input type="password" placeholder="Digite sua Senha" />

            <label htmlFor="ConfirmarSenha">Confirmar senha</label>
            <input type="password" placeholder="Digite sua Senha novamente" />

          </div>
          <button className="form-login-btn" type="submit">
            Cadastrar
          </button>
        </form>
        <p>
          Já tem uma conta?{" "}
          <a href="/login">
            <strong>Faça o login!</strong>
          </a>
        </p>
      </body>
    </>
  );
};

export default SignUp;

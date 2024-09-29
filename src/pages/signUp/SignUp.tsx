import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./signUp.css";
import logo from "../../assets/Centro de formação com sombra.png";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string; 
  courses?: string[]; 
}


const SignUp: React.FC = () => {
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [redirected, setRedirected] = useState(false);
  const [role, setRole] = useState<string>("administrativo"); // Perfil selecionado
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("Senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ""], "As senhas devem coincidir")
      .required("Confirmação de senha é obrigatória"),
    role: yup.string().required("Selecione o perfil"),
    courses: yup.array().test('courses-validation', 'Selecione ao menos um curso para professores', function (value) {
      const { role } = this.parent; 
      if (role === 'professor' && (!value || value.length === 0)) {
        return false;
      }
      return true; 
    }),
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
    setTimeout(() => {
      setSuccessAlert(true);
      setTimeout(() => {
        setSuccessAlert(false);
        setRedirected(true);
      }, 2000);
    }, 500);
  };

  useEffect(() => {
    if (redirected) {
      navigate("/login");
    }
  }, [redirected, navigate]);

  return (
    <>
      <body className="signUp">
        <div className="img-login">
          <img
            src={logo}
            alt="logo Centro de formação Carlos Kopcak"
            title="Centro de Formação Carlos Kopcak"
          />
        </div>
        <strong>
          <p className="titulo-criarConta">Cadastrar Nova Conta</p>
        </strong>
        <Stack
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          spacing={2}
        >
          {successAlert && (
            <Alert severity="success">
              Cadastro realizado com sucesso. Realize o seu Login.
            </Alert>
          )}
          {errorAlert && (
            <Alert severity="error">
              Cadastro não realizado. Tente novamente mais tarde.
            </Alert>
          )}
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)} className="container-form">
          <div className="container-inputs">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("name", { required: true })}
            />
            {errors.name && <div className="errors">{errors.name.message}</div>}

            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div className="errors">{errors.email.message}</div>
            )}

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite sua Senha"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <div className="errors">{errors.password.message}</div>
            )}

            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              type="password"
              placeholder="Digite sua Senha novamente"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <div className="errors">{errors.confirmPassword.message}</div>
            )}

            <label htmlFor="role">Selecione o perfil</label>
            <select id="select-perfil" 
              {...register("role", { required: true })}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="administrativo">Administrativo</option>
              <option value="professor">Professor</option>
            </select>
            {errors.role && <div className="errors">{errors.role.message}</div>}

            {role === "professor" && (
              <>
                <label htmlFor="courses">Selecione o(s) curso(s)</label>
                <div className="idiomas">
                  <div className="idioma">
                    <input
                      type="checkbox"
                      id="ingles" 
                      value="Inglês"
                      {...register("courses")}
                    />
                    <label htmlFor="ingles">Inglês</label>
                  </div>

                  <div className="idioma">
                    <input
                      type="checkbox"
                      id="espanhol"
                      value="Espanhol"
                      {...register("courses")}
                    />
                    <label htmlFor="espanhol">Espanhol</label>
                  </div>

                  <div className="idioma">
                    <input
                      type="checkbox"
                      id="italiano"
                      value="Italiano"
                      {...register("courses")}
                    />
                    <label htmlFor="italiano">Italiano</label>
                  </div>
                </div>
                {errors.courses && (
                  <div className="errors">{errors.courses.message}</div>
                )}
              </>
            )}
          </div>

          <button className="form-login-btn btn-cadastrar" type="submit">
            Cadastrar
          </button>
        </form>

        <p>
          Já tem uma conta?{" "}
          <Link to="/login">
            <strong>Faça o login!</strong>
          </Link>
        </p>
      </body>
    </>
  );
};

export default SignUp;

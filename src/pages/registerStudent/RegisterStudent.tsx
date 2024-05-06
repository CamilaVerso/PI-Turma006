import { useState, useEffect } from "react";
import * as yup from "yup";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
import { FormData } from "../../utils/FormInterfaces";
import "./registerStudent.css";

const buildSchema = () =>
  yup.object().shape({
    nome: yup.string().required("Nome do usuário é obrigatório"),
    password: yup
      .string()
      .required("Senha é obrigatória")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)/,
        "A senha deve ter caracteres e números"
      ),
    email: yup
      .string()
      .email("Digite um endereço de e-mail válido")
      .required("O e-mail é obrigatório"),
    cpf: yup
      .string()
      .matches(/^\d{11}$/, "Digite seu CPF corretamente")
      .required("Campo obrigatório"),
    cep: yup
      .string()
      .matches(/^\d{8}$/, "CEP inválido")
      .required("Campo obrigatório"),
    cidade: yup.string().required("Nome da Cidade é obrigatório"),
    rua: yup.string().required("Campo de rua é obrigatório"),
    numero: yup.number().required("Campo de número da casa é obrigatório"),
    complemento: yup.string(),
    uf: yup.string().required("Campo obrigatório"),
  });

const RegisterStudent: React.FC = () => {
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionType, setSelectedOptionType] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptionType(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    if (value.length <= 100) {
      setText(value);
    }
  };
  // const validationSchema = Yup.object().shape({
  //   cursoMatriculado: Yup.string().required("Selecione um curso"),
  // });

  // const onSubmitWrapper = (data: FormData) => {
  //   validationSchema
  //     .validate(data, { abortEarly: false })
  //     .then(() => {
  //      return handleSubmit((data) => {

  //         console.log(data);
  //       })();
  //     })
  //     .catch((validationErrors) => {
  //       console.error(validationErrors);
  //       /
  //     });
  // };

  // const onSubmit = (data: FormData) => {
  //   validationSchema
  //     .validate(data, { abortEarly: false })
  //     .then((validatedData) => {
  //       console.log(validatedData);
  //       handleSubmit(data, () => {});
  //     })
  //     .catch((validationErrors) => {
  //       console.error(validationErrors);
  //     });
  // };

  return (
    <body className="container-register">
      <h1>Formulário de Matrícula</h1>
      <div className="container-form-register">
        <form action="onSubmit">
          
            <label htmlFor="cursoMatriculado">
              Selecione o curso desejado<span className="required">*</span>:
            </label>
            <select
              name="cursoMatriculado"
              id="curso-escolhido"
              required
              
            >
              <option value="Selecione">Selecione</option>
              <option value="Espanhol">Espanhol</option>
              <option value="Inglês">Inglês</option>
              <option value="Italiano">Italiano</option>
            </select>
            {errors.cursoMatriculado && (
              <div>{errors.cursoMatriculado.message}</div>
            )}
         
          <div className="dados-pessoais">
            <p className="titulos">Dados Pessoais: </p>
            <div className="partes">
              <label htmlFor="nome">
                Nome Completo<span className="required">*</span>:{" "}
              </label>
              <input
                type="text"
                name="nome"
                id="nome-aluno"
                placeholder="Digite o nome do aluno"
                required
              />
              <label htmlFor="dataNascimento">
                Data de Nacimento<span className="required">*</span>:{" "}
              </label>
              <input type="date" name="dataNascimento" id="data-nasc-aluno" />

              <label htmlFor="idade" id="idade-aluno">
                Idade<span className="required">*</span>:
              </label>
              <input type="number" min={6} max={100} id="idade-aluno" />
            </div>

            <div className="partes">
              <label htmlFor="estadoCivil" id="">
                Estado Civil<span className="required">*</span>:
              </label>
              <select name="estadoCivil" id="estado-civil">
                <option value="selecione">Selecione</option>
                <option value="solteiro">Solteiro(a)</option>
                <option value="casado">Casado(a)</option>
                <option value="divorciado">Divorciado(a)</option>
                <option value="viuvo">Viúvo(a)</option>
              </select>

              <label htmlFor="estado-civil" id="">
                Gênero:
              </label>
              <select name="estado-civil" id="estado-civil">
                <option value="selecione">Selecione</option>
                <option value="homem_Cis">Homem Cis</option>
                <option value="mulher_Cis">Mulher Cis</option>
                <option value="homem_Trans">Homem Trans</option>
                <option value="mulher_Trans">Mulher Trans</option>
                <option value="nao_binario">Não Binário</option>
                <option value="outro">Outro/Prefiro não responder</option>
              </select>

              <label htmlFor="orientacao-sexual">Orientação Sexual: </label>
              <select name="orientacao-sexual" id="orientacao-sexual">
                <option value="selecione">Selecione</option>
                <option value="hetero">Hetero</option>
                <option value="homossexual">Homossexual</option>
                <option value="bissexual">Bissexual</option>
                <option value="outro-orientacao">
                  Outro/Prefiro não responder
                </option>
              </select>
            </div>

            <div className="partes">
              <label htmlFor="nome-mae">
                Mãe<span className="required">*</span>:{" "}
              </label>
              <input
                type="text"
                name="nome-mae"
                id="nome-mae"
                placeholder="Digite o nome da mãe do aluno"
              />

              <label htmlFor="nome-pai">Pai: </label>
              <input
                type="text"
                name="nome-pai"
                id="nome-pai"
                placeholder="Digite o nome do pai do aluno"
              />
            </div>

            <div className="partes">
              <label htmlFor="nacionalidade">
                Nacionalidade<span className="required">*</span>:{" "}
              </label>
              <input
                type="text"
                name="nacionalidade"
                id="nacionalidade"
                placeholder="Digite a sua Nacionalidade"
              />

              <label htmlFor="natural-estado">
                Naturalidade/Estado<span className="required">*</span>:{" "}
              </label>
              <input
                type="text"
                name="naturalidade"
                id="naturalidade"
                placeholder="Cidade/Estado"
              />

              </div>
              <div className="partes">

              <label htmlFor="cor-etnia">Cor/Etnia: </label>
              <select name="cor-etnia" id="cor-etnia">
                <option value="selecione">Selecione</option>
                <option value="amarelo">Amarelo</option>
                <option value="branca">Branca</option>
                <option value="indigena">Indígena</option>
                <option value="Parda">Parda</option>
                <option value="Preta">Preta</option>
              </select>
              <label htmlFor="sit-ocupacional">Situação Ocupacional: </label>
              <select name="sit-ocupacional" id="sit-ocupacional">
                <option value="selecione">Selecione</option>
                <option value="primeiro-emprego">1º Emprego</option>
                <option value="aponsentado">Aponsentado</option>
                <option value="autonomo">Autônomo</option>
                <option value="desempregado">Desempregado</option>
                <option value="empregado">Empregado</option>
                <option value="empregador">Empregador</option>
                <option value="Estudante">Estudante</option>
              </select>
            </div>

            <div className="partes-text">
            <label htmlFor="saude">
              Possui alguma deficiência/Problema de saúde?
            </label>
            <textarea
              name="saude"
              id="text-saude"
              rows={3}
              cols={40}
              value={text}
              onChange={handleChange}
              maxLength={100}
              style={{ resize: "none" }}
            ></textarea>
            </div>
          </div>

          <div>
            <p className="titulos">Endereço:</p>
            <label htmlFor="rua">
              Rua<span className="required">*</span>:{" "}
            </label>
            <input type="text" name="rua" />

            <label htmlFor="complemento">Complemento: </label>
            <input type="text" name="complemento" />

            <label htmlFor="bairro">
              Bairro<span className="required">*</span>:{" "}
            </label>
            <input type="text" name="bairro" />

            <label htmlFor="cidade">
              Cidade<span className="required">*</span>:{" "}
            </label>
            <input type="text" name="cidade" />

            <label htmlFor="uf">
              UF<span className="required">*</span>:{" "}
            </label>
            <input type="text" name="cidade" maxLength={2} />

            <label htmlFor="cep">
              CEP<span className="required">*</span>:{" "}
            </label>
            <input
              type="text"
              name="cep"
              maxLength={8}
              placeholder="00000000"
            />

            <label htmlFor="telefone1">
              Telefone1<span className="required">*</span>:{" "}
            </label>
            <input type="tel" id="telefone1" name="telefone1" maxLength={11} />

            <p className="titulos">Telefones de Emergência</p>
            
            <input type="tel" id="telefone2" name="telefone2" maxLength={11} placeholder="Telefone 2" />
            
            <input type="tel" id="telefone3" name="telefone3" maxLength={11} placeholder="Telefone 3" />

            <label htmlFor="email">
              Email<span className="required">*</span>:{" "}
            </label>
            <input type="email" id="email" name="email" />
          </div>

          <p className="titulos">Dados do Responsável <span>(Quando menor ou incapaz)</span>:</p>
  
          <label htmlFor="nome-res" className="label-name">Nome: </label>
          <input type="text" id="nome-res" name="nome-res" />

          <label htmlFor="cpf">CPF: </label>
          <input type="text" id="cpf" name="cpf" maxLength={11} />

          <label htmlFor="rg">RG: </label>
          <input type="text" id="rg" name="rg" maxLength={11} />

          <label htmlFor="telefone-con">Telefone para contato: </label>
          <input type="tel" id="contato" name="contato" maxLength={11} />
          
            <p className="titulos">Dados Escolaridade:</p>

            <p className="titulos-ens">Ensino Fundamental: </p>
            <label>
              <input
                type="radio"
                name="ensino-fund"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              Completo
            </label>

            <label>
              <input
                type="radio"
                name="ensino-fund"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              Incompleto
            </label>
            <p className="titulos-obs">
              Se incompleto, informe o Ano/série
            </p>
            <input type="text" name="ensino-fund" />

            <p className="titulos-ens">Ensino Médio: </p>
            <label>
              <input
                type="radio"
                name="ensino-med"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              Completo
            </label>

            <label>
              <input
                type="radio"
                name="ensino-med"
                value="option4"
                checked={selectedOption === "option4"}
                onChange={handleOptionChange}
              />
              Incompleto
            </label>
            <p className="titulos-obs">
              Se incompleto, informe o Ano/série
            </p>
            <input type="text" name="ensino-med" />

            <p className="titulos-ens">Ensino Superior: </p>
            <label>
              <input
                type="radio"
                name="ensino-sup"
                value="option5"
                checked={selectedOption === "option5"}
                onChange={handleOptionChange}
              />
              Completo
            </label>

            <label>
              <input
                type="radio"
                name="ensino-sup"
                value="option6"
                checked={selectedOption === "option6"}
                onChange={handleOptionChange}
              />
              Incompleto
            </label>
            <p className="titulos-obs">Observação: </p>
            <input type="text" name="ensino-sup" />
          
            <p className="titulos">Dados da escola:</p>

            <label htmlFor="escola">Escola: </label>
            <input type="text" name="escola" id="escola" />

            <label htmlFor="municipio">Município: </label>
            <input type="text" name="municipio" id="municipio" />

            <label htmlFor="uf">UF: </label>
            <input type="text" name="cidade" maxLength={2} />

            <p className="titulos">Tipo de Ensino: </p>
            <label>
              <input
                type="radio"
                name="tipo-ensino"
                value="regular"
                checked={selectedOptionType === "regular"}
                onChange={handleOptionChangeType}
              />
              Regular
            </label>

            <label>
              <input
                type="radio"
                name="tipo-ensino"
                value="eja"
                checked={selectedOptionType === "eja"}
                onChange={handleOptionChangeType}
              />
              Educação Jovens e Adultos
            </label>
          

          <button className="form-login-btn inscricao" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </body>
  );
};

export default RegisterStudent;

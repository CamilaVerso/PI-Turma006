import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormData, schema } from "../../utils/FormInterfaces";
import { useNavigate } from "react-router-dom";
import { cadastrarAluno } from "../../utils/firestoreService";

import "./registerStudent.css";

const RegisterStudent: React.FC = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionType, setSelectedOptionType] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Envia os dados do aluno para a subcoleção do Firestore com base no curso selecionado
      await cadastrarAluno(data.cursoMatriculado, {
        nome: data.nome,
        documento: data.endereco?.documento || "",
        numero: data.endereco?.telefone1 || "",
        matricula: data.matricula || "", // Certifique-se de que "matricula" existe em FormData
      });

        navigate("/form-enviado");
        console.log("Aluno cadastrado com sucesso!", data);
      }catch(error) {
        console.error("Erro ao cadastrar aluno no Firestore: ", error);
      }
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChangeType = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedOptionType(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    if (value.length <= 100) {
      setText(value);
    }
  };

  return (
    <div className="container-register" aria-labelledby="formulario-matricula">
      <h1>Formulário de Matrícula</h1>
      <div className="container-form-register">

        <form onSubmit={handleSubmit(onSubmit)} role="form">
          <label htmlFor="cursoMatriculado">
            Selecione o curso desejado<span className="required">*</span>:
          </label>
          <select
            {...register("cursoMatriculado", { required: true })}
            id="curso-escolhido"
            aria-describedby="curso-error"
          >
            <option value="" disabled selected>
              Selecione
            </option>
            <option value="Espanhol">Espanhol</option>
            <option value="Inglês">Inglês</option>
            <option value="Italiano">Italiano</option>
          </select>
          {errors.cursoMatriculado && (
            <div className="errors" role="alert">{errors.cursoMatriculado.message}</div>

          )}

          <div className="dados-pessoais">
            <p className="titulos">Dados Pessoais: </p>

            <div className="partes">
              <label htmlFor="nome">
                Nome Completo<span className="required">*</span>:{" "}
              </label>
              <input
                type="text"
                id="nome-aluno"
                placeholder="Digite o nome do aluno"
                {...register("nome", { required: true })}
                aria-describedby="nome-error"
              />

              {errors.nome && (
                <div className="errors" role="alert">{errors.nome.message}</div>
              )}

              <label htmlFor="dataNascimento">
                Data de Nascimento<span className="required">*</span>:{" "}
              </label>
              <input
                type="text"
                {...register("dataNascimento", { required: true })}
                id="data-nasc-aluno"
                placeholder="dd/mm/aaaa"
                maxLength={10}
              />
              {errors.dataNascimento && (
                <div className="errors" role="alert">{errors.dataNascimento.message}</div>
              )}

              <label htmlFor="idade" id="idade">
                Idade:
              </label>
              <input
                type="text"
                maxLength={2}
                id="idade"
                {...register("idade", { required: true })}
              />
              {errors.idade && (
                <div className="errors" role="alert">{errors.idade.message}</div>
              )}
            </div>

            <div className="partes">
              <label htmlFor="estadoCivil" id="estadoCivil">
                Estado Civil<span className="required">*</span>:
              </label>
              <select
                {...register("estadoCivil", { required: true })}
                id="estado-civil"
              >
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="solteiro">Solteiro(a)</option>
                <option value="casado">Casado(a)</option>
                <option value="divorciado">Divorciado(a)</option>
                <option value="viuvo">Viúvo(a)</option>
              </select>
              {errors.estadoCivil && (
                <div role="alert" className="errors">
                  {errors.estadoCivil.message}
                </div>
              )}

              <label htmlFor="genero" id="genero">
                Gênero:
              </label>
              <select id="genero" {...register("genero", { required: true })}>
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="homem_Cis">Homem Cis</option>
                <option value="mulher_Cis">Mulher Cis</option>
                <option value="homem_Trans">Homem Trans</option>
                <option value="mulher_Trans">Mulher Trans</option>
                <option value="nao_binario">Não Binário</option>
                <option value="outro">Outro/Prefiro não responder</option>
              </select>
              {errors.genero && (
                <div role="alert" className="errors">
                  {errors.genero.message}
                </div>
              )}

              <label htmlFor="orientacaoSexual">Orientação Sexual: </label>
              <select name="orientacaoSexual" id="orientacaoSexual">
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="hetero">Hetero</option>
                <option value="homossexual">Homossexual</option>
                <option value="bissexual">Bissexual</option>
                <option value="outro-orientacao">
                  Outro/Prefiro não responder
                </option>
              </select>
            </div>

            <div className="partes">
              <label htmlFor="nomeMae">
                Mãe<span className="required">*</span>:{" "}
              </label>
              <input
                type="text"
                id="nomeMae"
                placeholder="Digite o nome da mãe do aluno"
                {...register("nomeMae", { required: true })}
              />
              {errors.nomeMae && (
                <div role="alert" className="errors">
                  {errors.nomeMae.message}
                </div>
              )}

              <label htmlFor="nomePai">Pai: </label>
              <input
                type="text"
                name="nomePai"
                id="nomePai"
                placeholder="Digite o nome do pai do aluno"
              />
            </div>

            <div className="partes">
              <label htmlFor="nacionalidade">
                Nacionalidade<span className="required">*</span>:{" "}
              </label>
              <input
                type="text"
                id="nacionalidade"
                placeholder="Digite a sua Nacionalidade"
                {...register("nacionalidade", { required: true })}
              />
              {errors.nacionalidade && (
                <div role="alert" className="errors">
                  {errors.nacionalidade.message}
                </div>
              )}

              <label htmlFor="naturalidade">
                Naturalidade/Estado<span className="required">*</span>:{" "}
              </label>
              <input
                type="text"
                id="naturalidade"
                placeholder="Cidade/Estado"
                {...register("naturalidade", { required: true })}
              />
              {errors.naturalidade && (
                <div role="alert" className="errors">
                  {errors.naturalidade.message}
                </div>
              )}
            </div>
            <div className="partes">
              <label htmlFor="corEtnia">Cor/Etnia: </label>
              <select
                {...register("corEtnia", { required: true })}
                id="corEtnia"
              >
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="amarelo">Amarelo</option>
                <option value="branca">Branca</option>
                <option value="indigena">Indígena</option>
                <option value="Parda">Parda</option>
                <option value="Preta">Preta</option>
                <option value="NaoDeclarado">Prefiro não declarar</option>
              </select>
              {errors.corEtnia && (
                <div role="alert" className="errors">
                  {errors.corEtnia.message}
                </div>
              )}

              <label htmlFor="situacaoOcupacional">
                Situação Ocupacional:{" "}
              </label>
              <select name="situacaoOcupacional" id="situacaoOcupacional">
                <option value="" disabled selected>
                  Selecione
                </option>
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
                aria-label="Campo para descrever alguma deficiência ou problema de saúde, caso exista"
              ></textarea>
            </div>
          </div>

          <div>
            <p className="titulos">Endereço:</p>
            <label htmlFor="rua">
              Rua<span className="required">*</span>:{" "}
            </label>
            <input
              type="text"
              {...register("endereco.rua", { required: true })}
            />
            {errors.endereco && errors.endereco.rua && (
              <div role="alert" className="errors">
                {errors.endereco.rua.message}
              </div>
            )}

            <label htmlFor="complemento">Complemento: </label>
            <input type="text" name="complemento" />

            <label htmlFor="bairro">
              Bairro<span className="required">*</span>:{" "}
            </label>
            <input
              type="text"
              {...register("endereco.bairro", { required: true })}
            />
            {errors.endereco && errors.endereco.bairro && (
              <div role="alert" className="errors">
                {errors.endereco.bairro.message}
              </div>
            )}

            <label htmlFor="cidade">
              Cidade<span className="required">*</span>:{" "}
            </label>
            <input
              type="text"
              {...register("endereco.cidade", { required: true })}
            />
            {errors.endereco && errors.endereco.cidade && (
              <div role="alert" className="errors">
                {errors.endereco.cidade.message}
              </div>
            )}

            <label htmlFor="uf">
              UF<span className="required">*</span>:{" "}
            </label>
            <input
              type="text"
              {...register("endereco.uf", { required: true })}
              maxLength={2}
            />
            {errors.endereco && errors.endereco.uf && (
              <div role="alert" className="errors">
                {errors.endereco.uf.message}
              </div>
            )}
            <label htmlFor="cep">
              CEP<span className="required">*</span>:{" "}
            </label>
            <input
              type="text"
              maxLength={8}
              placeholder="00000000"
              {...register("endereco.cep", { required: true })}
            />
            {errors.endereco && errors.endereco.cep && (
              <div role="alert" className="errors">
                {errors.endereco.cep.message}
              </div>
            )}

            <label htmlFor="telefone1">
              Telefone1<span className="required">*</span>:{" "}
            </label>
            <input
              type="tel"
              id="telefone1"
              maxLength={11}
              {...register("endereco.telefone1", { required: true })}
            />
            {errors.endereco && errors.endereco.telefone1 && (
              <div role="alert" className="errors">
                {errors.endereco.telefone1.message}
              </div>
            )}

            <p className="titulos">Telefones de Emergência</p>

            <input
              type="tel"
              id="telefone2"
              name="telefone2"
              maxLength={11}
              placeholder="Telefone 2"
              aria-label="Telefone de emergência 2"

            />

            <input
              type="tel"
              id="telefone3"
              name="telefone3"
              maxLength={11}
              placeholder="Telefone 3"
              aria-label="Telefone de emergência 3"
            />

            <label htmlFor="email">
              Email<span className="required">*</span>:{" "}
            </label>
            <input
              type="email"
              id="email"
              {...register("endereco.email", { required: true })}
            />

            {errors.endereco && errors.endereco.email && (
              <div role="alert" className="errors">
                {errors.endereco.email.message}
              </div>
            )}
          </div>
        <div>
          <p className="titulos">
            Dados do Responsável <span>(Quando menor ou incapaz)</span>:
          </p>

          <label htmlFor="nome-res" className="label-name">
            Nome:{" "}
          </label>
          <input type="text" id="nome-res" name="nome-res" />

          <label htmlFor="cpf">CPF: </label>
          <input type="text" id="cpf" name="cpf" maxLength={11} />

          <label htmlFor="rg">RG: </label>
          <input type="text" id="rg" name="rg" maxLength={11} />

          <label htmlFor="telefone-con">Telefone para contato: </label>
          <input type="tel" id="contato" name="contato" maxLength={11} />
          </div>
          <div>

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
          <p className="titulos-obs">Se incompleto, informe o Ano/série</p>
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
          <p className="titulos-obs">Se incompleto, informe o Ano/série</p>
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
          </div>
          <div>

          <p className="titulos">Tipo de Ensino:</p>
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
          </div>
          <button className="form-login-btn inscricao" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterStudent;

import { useState } from "react";
import "./registerStudent.css";

const RegisterStudent: React.FC = () => {
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    if (value.length <= 100) {
      setText(value);
    }
  };

  return (
    <body className="container-register">
      <h1>Formulário de Matrícula</h1>
      <form action="submit">
        <label htmlFor="curso-matriculado">Selecione o curso desejado: </label>
        <select name="curso-matriculado" id="curso-escolhido">
          <option value="Selecione">Selecione</option>
          <option value="Espanhol">Espanhol</option>
          <option value="Inglês">Inglês</option>
          <option value="Italiano">Italiano</option>
        </select>
        <label htmlFor="nome">Nome Completo: </label>
        <input
          type="text"
          name="nome"
          id="nome-aluno"
          placeholder="Digite o nome completo do aluno"
        />
        <label htmlFor="data-nascimento">Data de Nacimento: </label>
        <input type="date" name="data-nascimento" id="data-nasc-aluno" />

        <label htmlFor="idade" id="idade-aluno">
          Idade:
        </label>
        <input type="number" min={6} max={100} id="idade-aluno" />

        <label htmlFor="estado-civil" id="">
          Estado Civil:
        </label>
        <select name="estado-civil" id="estado-civil">
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
          <option value="outro-orientacao">Outro/Prefiro não responder</option>
        </select>

        <label htmlFor="nome-mae">Mãe: </label>
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

        <label htmlFor="nacionalidade">Nacionalidade: </label>
        <input
          type="text"
          name="nacionalidade"
          id="nacionalidade"
          placeholder="Digite a sua Nacionalidade"
        />

        <label htmlFor="natural-estado">Naturalidade/Estado: </label>
        <input
          type="text"
          name="naturalidade"
          id="naturalidade"
          placeholder="Cidade/Estado"
        />
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
        <label htmlFor="rua">Rua: </label>
        <input type="text" name="rua" />

        <label htmlFor="bairro">Bairro: </label>
        <input type="text" name="bairro" />

        <label htmlFor="cidade">Cidade: </label>
        <input type="text" name="cidade" />

        <label htmlFor="uf">UF: </label>
        <input type="text" name="cidade" maxLength={2} />

        <label htmlFor="cep">CEP: </label>
        <input type="text" name="cep" maxLength={8} placeholder="00000000" />

        <label htmlFor="telefone1">Telefone1: </label>
        <input type="tel" id="telefone1" name="telefone1" maxLength={11} />

        <p>Telefones de Emergência</p>
        <label htmlFor="telefone2">Telefone2: </label>
        <input type="tel" id="telefone2" name="telefone2" maxLength={11} />
        <label htmlFor="telefone3">Telefone3: </label>
        <input type="tel" id="telefone3" name="telefone3" maxLength={11} />

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />

        <p>Dados do Responsável - Quando menor ou incapaz</p>
        <label htmlFor="nome-res">Nome: </label>
        <input type="text" id="nome-res" name="nome-res" />

        <label htmlFor="cpf">CPF: </label>
        <input type="text" id="cpf" name="cpf" maxLength={11} />

        <label htmlFor="rg">RG: </label>
        <input type="text" id="rg" name="rg" maxLength={11} />

        <label htmlFor="telefone-con">Telefone para contato: </label>
        <input type="tel" id="contato" name="contato" maxLength={11} />
        <div>
          <p>Dados Escolaridade</p>

          <label htmlFor="ensino-fund">Ensino Fundamental: </label>
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
          <label htmlFor="ensino-fund">
            Se incompleto, informe o Ano/série
          </label>
          <input type="text" name="ensino-fund" />

          <label htmlFor="ensino-med">Ensino Médio: </label>
          <label>
            <input
              type="radio"
              name="ensino-med"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            Completo
          </label>

          <label>
            <input
              type="radio"
              name="ensino-med"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            Incompleto
          </label>
          <label htmlFor="ensino-med">Se incompleto, informe o Ano/série</label>
          <input type="text" name="ensino-med" />

          <label htmlFor="ensino-sup">Ensino Superior: </label>
          <label>
            <input
              type="radio"
              name="ensino-sup"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            Completo
          </label>

          <label>
            <input
              type="radio"
              name="ensino-sup"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            Incompleto
          </label>
          <label htmlFor="ensino-sup">Observação: </label>
          <input type="text" name="ensino-sup" />
        </div>
        <div>
          <p>Dados da escola</p>

          <label htmlFor="escola">Escola: </label>
          <input type="text" name="escola" id="escola" />

          <label htmlFor="municipio">Município: </label>
          <input type="text" name="municipio" id="municipio" />

          <label htmlFor="uf">UF: </label>
          <input type="text" name="cidade" maxLength={2} />

          <label htmlFor="tipo-ensino">Tipo de Ensino: </label>
          <label>
            <input
              type="radio"
              name="tipo-ensino"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            Regular
          </label>

          <label>
            <input
              type="radio"
              name="tipo-ensino"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            Educação Jovens e Adultos
          </label>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </body>
  );
};

export default RegisterStudent;

import { useState } from "react";
import "./registerStudent.css";

const RegisterStudent: React.FC = () => {
  const [text, setText] = useState("");
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

        

      </form>
    </body>
  );
};

export default RegisterStudent;

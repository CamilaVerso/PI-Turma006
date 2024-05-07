import * as yup from "yup";

interface FormData {
  cursoMatriculado: string;
  nome: string;
  dataNascimento: string;
  idade: string;
  estadoCivil: string;
  genero: string;
  orientacaoSexual?: string;
  nomeMae: string;
  nomePai?: string;
  nacionalidade: string;
  naturalidade: string;
  corEtnia: string;
  situacaoOcupacional?: string;
  saude?: string;
  endereco: {
    rua: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
    telefone1: string;
    telefone2?: string;
    telefone3?: string;
    email: string;
  };
  responsavel: {
    nome?: string;
    cpf?: string;
    rg?: string;
    telefoneContato?: string;
  };
  escolaridade: {
    ensinoFundamental?: string;
    serieFundamental?: string;
    ensinoMedio?: string;
    serieMedio?: string;
    ensinoSuperior?: string;
    observacao?: string;
  };
  escola: {
    nome?: string;
    municipio?: string;
    uf?: string;
    tipoEnsino?: string;
  };
}

const schema = yup.object().shape({
  cursoMatriculado: yup.string().required("Selecione um curso"),
  nome: yup.string().required("Nome é obrigatório"),
  dataNascimento: yup
    .string()
    .required("Informe a data de nascimento do aluno"),
  idade: yup.string().required("Informe a idade do aluno"),
  estadoCivil: yup.string().required("Estado civil é obrigatório"),
  genero: yup.string().required("Gênero é obrigatório"),
  orientacaoSexual: yup.string(),
  nomeMae: yup.string().required("Nome da mãe é obrigatório"),
  nomePai: yup.string(),
  nacionalidade: yup.string().required("Nacionalidade é obrigatória"),
  naturalidade: yup.string().required("Naturalidade é obrigatória"),
  corEtnia: yup.string().required("Cor/etnia é obrigatória"),
  situacaoOcupacional: yup.string(),
  saude: yup.string(),
  endereco: yup.object().shape({
    rua: yup.string().required("Rua é obrigatória"),
    bairro: yup.string().required("Bairro é obrigatório"),
    cidade: yup.string().required("Cidade é obrigatória"),
    uf: yup.string().required("UF é obrigatória"),
    cep: yup.string().required("CEP é obrigatório"),
    telefone1: yup.string().required("Telefone 1 é obrigatório"),
    telefone2: yup.string(),
    telefone3: yup.string(),
    email: yup.string().email().required("Email é obrigatório"),
  }),
  responsavel: yup.object().shape({
    nome: yup.string(),
    cpf: yup.string(),
    rg: yup.string(),
    telefoneContato: yup.string(),
  }),
  escolaridade: yup.object().shape({
    ensinoFundamental: yup.string(),
    serieFundamental: yup.string(),
    ensinoMedio: yup.string(),
    serieMedio: yup.string(),
    ensinoSuperior: yup.string(),
    observacao: yup.string(),
  }),
  escola: yup.object().shape({
    nome: yup.string(),
    municipio: yup.string(),
    uf: yup.string(),
    tipoEnsino: yup.string(),
  }),
});

export { schema };
export type { FormData };

export interface FormData {
    cursoMatriculado: string;
    nome: string;
    dataNascimento: number;
    idade: string;
    estadoCivil: string;
    genero: string;
    orientacaoSexual: string;
    nomeMae: string;
    nomePai: string;
    nacionalidade: string;
    naturalidade: string;
    corEtnia: string;
    situacaoOcupacional: string;
    saude: string;
    endereco: {
      rua: string;
      bairro: string;
      cidade: string;
      uf: string;
      cep: string;
      telefone1: string;
      telefone2: string;
      telefone3: string;
      email: string;
    };
    responsavel: {
      nome: string;
      cpf: string;
      rg: string;
      telefoneContato: string;
    };
    escolaridade: {
      ensinoFundamental: string;
      serieFundamental: string;
      ensinoMedio: string;
      serieMedio: string;
      ensinoSuperior: string;
      observacao: string;
    };
    escola: {
      nome: string;
      municipio: string;
      uf: string;
      tipoEnsino: string;
    };
  }
  
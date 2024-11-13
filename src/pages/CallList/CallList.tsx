import ingles from "../../assets/estados-unidos.png";
import espanhol from "../../assets/espanha.png";
import italia from "../../assets/italia.png";
import "./callList.css";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, Alert } from '@mui/material';

interface Aluno {
  NOME?: string;
  NUMERO?: string | number;
  MATRICULA?: string;
  DOCUMENTO?: string;
  ESPANHOL?: string;
  DOCUMEN?: string;
  TELEFONE?: string | number;
  presente?: boolean;
  ausente?: boolean;
}

const carregarDadosCurso = async (curso: string): Promise<Aluno[]> => {
  let dados: Aluno[] = [];
  try {
    switch (curso) {
      case 'ingles':
        dados = (await import('../../aulas/ingles.json')).default;
        break;
      case 'espanhol':
        dados = (await import('../../aulas/espanhol.json')).default;
        break;
      case 'italiano':
        dados = (await import('../../aulas/italiano.json')).default;
        break;
      default:
        throw new Error('Curso não encontrado');
    }
  } catch (error) {
    console.error('Erro ao carregar os dados do curso:', error);
  }
  return dados;
};

const TEMPO_LIMITE = 10000; 

const CallList: React.FC = () => {
  const [curso, setCurso] = useState<string | null>(null);
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [contagemPresente, setContagemPresente] = useState<number>(0);
  const [contagemAusente, setContagemAusente] = useState<number>(0);
  const [exibirContagem, setExibirContagem] = useState<boolean>(false);
  const [alertaVisivel, setAlertaVisivel] = useState<boolean>(false);

  const carregarPresencas = () => {
    const presencasSalvas = localStorage.getItem("presencas");
    const tempoSalvo = localStorage.getItem("tempoSalvo");

    if (presencasSalvas && tempoSalvo) {
      const agora = Date.now();
      const tempoPassado = agora - parseInt(tempoSalvo);

      if (tempoPassado < TEMPO_LIMITE) {
        return JSON.parse(presencasSalvas);
      } else {
        localStorage.removeItem("presencas");
        localStorage.removeItem("tempoSalvo");
      }
    }
    return [];
  };

  const salvarPresenca = () => {
    localStorage.setItem("presencas", JSON.stringify(alunos));
    localStorage.setItem("tempoSalvo", Date.now().toString());
    atualizarContagem();
    setExibirContagem(true);
    setAlertaVisivel(true);
    
    setTimeout(() => {
      setAlertaVisivel(false);
    }, 3000);
  };

  const atualizarContagem = () => {
    const presentes = alunos.filter(aluno => aluno.presente).length;
    const ausentes = alunos.filter(aluno => aluno.ausente).length;
    setContagemPresente(presentes);
    setContagemAusente(ausentes);
  };

  useEffect(() => {
    const carregarDados = async () => {
      if (curso) {
        const dados = await carregarDadosCurso(curso);
        const presencasSalvas = carregarPresencas();
        const alunosComPresenca = dados.map((aluno) => {
          const alunoPresenca = presencasSalvas.find(
            (presenca: Aluno) => presenca.MATRICULA === aluno.MATRICULA
          );
          return {
            ...aluno,
            ...alunoPresenca,
          };
        });
        setAlunos(alunosComPresenca);
        setExibirContagem(false); 
      }
    };
    carregarDados();
  }, [curso]);

  const handleCursoClick = (nomeCurso: string) => {
    setCurso(nomeCurso);
  };

  const handleCheckboxChange = (index: number, type: 'presente' | 'ausente') => {
    setAlunos((prev) =>
      prev.map((aluno, i) =>
        i === index
          ? {
            ...aluno,
            [type]: !aluno[type],
            ...(type === 'presente' ? { ausente: false } : { presente: false })
          }
          : aluno
      )
    );
  };

  return (
    <div className="page-container">
      <div className="container-list">
        <h1>Lista de Presença</h1>
        <p>Escolha o curso</p>

        <div className="card">
          <div
            role="button"
            onClick={() => handleCursoClick('ingles')}
            aria-label="Selecionar curso de Inglês"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleCursoClick('ingles')}
          >
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={ingles} alt="Inglês" title="Inglês" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Inglês
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div
            role="button"
            onClick={() => handleCursoClick('espanhol')}
            aria-label="Selecionar curso de Espanhol"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleCursoClick('espanhol')}
          >
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={espanhol} alt="Espanhol" title="Espanhol" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Espanhol
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div
            role="button"
            onClick={() => handleCursoClick('italiano')}
            aria-label="Selecionar curso de Italiano"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleCursoClick('italiano')}
          >
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={italia} alt="Italiano" title="Italiano" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Italiano
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>

        {curso && (
          <div>
           <h2 className="titulo">Lista de Presença - {curso === 'ingles' ? 'Inglês' : curso.charAt(0).toUpperCase() + curso.slice(1)}</h2>

            {alertaVisivel && (
              <Alert severity="success" onClose={() => setAlertaVisivel(false)} sx={{ maxWidth: '400px', margin: '0 auto' }}>
                Presença salva com sucesso!
              </Alert>
            )}

            {exibirContagem && (
              <div className="contagem-presenca">
                <p>Presentes: {contagemPresente}</p>
                <p>Ausentes: {contagemAusente}</p>
              </div>
            )}

            <TableContainer component={Paper} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
              <Table sx={{ minWidth: 700 }} aria-label="attendance table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell>Nome</TableCell>
                    <TableCell align="center">Presente</TableCell>
                    <TableCell align="center">Ausente</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {alunos.map((aluno, index) => (
                    <TableRow key={index}>
                      <TableCell>{aluno.NOME}</TableCell>
                      <TableCell align="center">
                        <Checkbox
                          checked={aluno.presente || false}
                          onChange={() => handleCheckboxChange(index, 'presente')}
                          color="primary"
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          checked={aluno.ausente || false}
                          onChange={() => handleCheckboxChange(index, 'ausente')}
                          color="secondary"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={salvarPresenca}
                sx={{ marginTop: '20px' }}
              >
                Salvar Presença
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallList;

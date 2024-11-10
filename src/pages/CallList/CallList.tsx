import "./callList.css";
import React, { useState, useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import ingles from "../../assets/estados-unidos.png";
import espanhol from "../../assets/espanha.png";
import italia from "../../assets/italia.png";
import { Link } from 'react-router-dom';
import { db } from '../../firebaseConfig'; // Firebase configuração
import { collection, addDoc } from 'firebase/firestore'; // Firebase Firestore

// Definindo o tipo para os dados de alunos
interface Aluno {
  NOME?: string;
  NUMERO?: string | number;
  MATRICULA?: string;
  DOCUMENTO?: string;

// Campos adicionais para o curso de Espanhol
ESPANHOL?: string;
DOCUMEN?: string;
TELEFONE?: string | number;
}

// Função para carregar os dados JSON do curso
const carregarDadosCurso = async (curso: string): Promise<Aluno[]> => {
  let dados: Aluno[] = [];
// Checando qual arquivo JSON deve ser importado
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

return dados;
};


const CallList: React.FC = () => {
  const [curso, setCurso] = useState<string | null>(null);
  const [alunos, setAlunos] = useState<Aluno[]>([]); // Lista de alunos

  useEffect(() => {
    const carregarDados = async () => {
      if (curso) {
        const dados = await carregarDadosCurso(curso);
        setAlunos(dados); // Atualiza a lista de alunos
      }
    };

    carregarDados();
  }, [curso]);

  const handleCursoClick = (nomeCurso: string) => {
    setCurso(nomeCurso); // Define o curso ao clicar na imagem
  };

  return (
    <div className="page-container">
      <div className="container-list">
      <h1>Lista de chamada</h1>
      <p>Escolha o curso</p>

      <div className="card">
         <div 
         role="button"
         onClick={() => handleCursoClick('ingles')}
         aria-label="Selecionar curso de Inglês"
         tabIndex={0} // Para navegabilidade com teclado
         onKeyDown={(e) => e.key === 'Enter' && handleCursoClick('ingles')}
         > 

          <Card sx={{ maxWidth: 360 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={ingles}
                alt="Inglês"
                title="Inglês"
              />
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
              <CardMedia
                component="img"
                height="140"
                image={espanhol}
                alt="Espanhol"
                title="Espanhol"
              />
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
              <CardMedia
                component="img"
                height="140"
                image={italia}
                alt="Italiano"
                title="Italiano"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Italiano
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>

            {/* Exibição da lista de presença dos alunos */}
            {curso && (
        <div>
          <h2>Lista de Presença - {curso.charAt(0).toUpperCase() + curso.slice(1)}</h2>
          <ul>
            {alunos.map((aluno, index) => (
              <li key={index}>
                {aluno.NOME} - {aluno.NUMERO} - {aluno.MATRICULA}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default CallList;

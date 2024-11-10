import React, { useEffect, useState } from "react";
import './resumoEstatistico.css';


interface ResumoCurso {
  totalAlunos: number;
  curso: string;
}

const ResumoEstatistico: React.FC = () => {
  const [resumo, setResumo] = useState<Record<string, ResumoCurso>>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResumo = async () => {
      try {
        const response = await fetch("https://southamerica-east1-pi-carlos-kopcak.cloudfunctions.net/obterResumoEstatisticoV2");
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }
        const data = await response.json();
        setResumo(data);
      } catch (error) {
        setError("Não foi possível carregar os dados.");
      }
    };

    fetchResumo();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Resumo Estatístico dos Cursos</h1>
      <ul>
        {Object.entries(resumo).map(([curso, { totalAlunos }]) => (
          <li key={curso}>
            <strong>Curso:</strong> {curso} - <strong>Total de Alunos:</strong> {totalAlunos}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumoEstatistico;

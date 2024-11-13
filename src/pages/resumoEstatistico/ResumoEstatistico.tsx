import React, { useEffect, useState } from "react";
import './resumoEstatistico.css';
import { PieChart } from '@mui/x-charts'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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

  
  const pieChartData = Object.entries(resumo).map(([curso, { totalAlunos }]) => ({
    id: curso,
    value: totalAlunos,
    label: curso.charAt(0).toUpperCase() + curso.slice(1),
  }));

  
  const rows = Object.entries(resumo).map(([curso, { totalAlunos }]) => ({
    name: curso.charAt(0).toUpperCase() + curso.slice(1), 
    totalAlunos,
  }));

  return (
    <div className="container-resumo">
      <h1>Resumo Estatístico dos Cursos</h1>
      
      <div className="grafico">
        <h2>Gráfico de Distribuição de Alunos por Curso</h2>
        <PieChart
          series={[{ data: pieChartData }]}
          width={400}
          height={200}
        />
      </div>

      {/* Tabela de Detalhes dos Cursos */}
      <div>
        <h3 className="titulo-resumo">Detalhe dos Cursos</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="tabela de cursos">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>Curso</TableCell>
                <TableCell align="right">Total de Alunos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.totalAlunos}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ResumoEstatistico;

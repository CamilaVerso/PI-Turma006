import {onRequest} from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

interface ResumoCurso {
  totalAlunos: number;
  curso: string;
}

export const obterResumoEstatisticoV2 = onRequest(
  {region: "southamerica-east1"}, 
  async (request, response) => {
    response.set("Access-Control-Allow-Origin", "*"); // Adiciona o cabeçalho CORS
  try {
    const cursos = ["ingles", "espanhol", "italiano"];
    const resumo: Record<string, ResumoCurso> = {};


    for (const curso of cursos) {
      const snapshot = await db.collection("cursos").doc(curso).collection("alunos").get();
      resumo[curso] = {
        totalAlunos: snapshot.size,
        curso,
      };
    }
    response.status(200).json(resumo);
  } catch (error) {
    console.error("Erro ao obter resumo estatístico:", error);
    response.status(500).send("Erro ao obter resumo estatístico.");
  }
});

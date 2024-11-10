import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import RegisterStudent from "../pages/registerStudent/RegisterStudent";
import CallList from "../pages/CallList/CallList";
import SignUp from "../pages/signUp/SignUp";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FormSent from "../pages/formSent/FormSent";
import NotFound from "../pages/notFound/NotFound";
import ChamadaFirestore from "../components/ChamadaFirestore";
import ResumoEstatistico from "../pages/resumoEstatistico/ResumoEstatistico";


const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-aluno" element={<RegisterStudent />} />
        <Route path="/lista-de-chamada" element={<CallList />} />
        <Route path="/criar-conta" element={<SignUp />} />
        <Route path="/form-enviado" element={<FormSent />} />
        <Route path="/upload-dados" element={<ChamadaFirestore />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/resumo-estatistico" element={<ResumoEstatistico />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

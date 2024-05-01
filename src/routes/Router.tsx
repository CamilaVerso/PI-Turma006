import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import RegisterStudent from '../pages/registerStudent/RegisterStudent';
import CallList from '../pages/CallList/CallList';

const Router = () => {
    return (
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/cadastro-aluno' element={<RegisterStudent />}/>
            <Route path='/lista-de-chamada' element={<CallList />}/>
            
        </Routes>
     </BrowserRouter>
    );
}

export default Router;


import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './header.css'
import logo from '../../assets/Centro_de_formação.png';
import { Link } from 'react-router-dom';
// import logoSombra from '../../assets/Centro de formação com sombra.png'



const Header: React.FC = () => {
  return (

    <header>
      <div className='container-header'>
        <div className='logo'>
        <img className='logo-img' src={logo} alt="logo Centro de formação Carlos Kopcak" title='Centro de Fonação Carlos Kopcak' />
          {/* depois vou colocar o link na imagem para voltar para a home */}
        </div>

        <div className='links-menu'>
          <nav>
            <Stack direction="row" spacing={2}>
              <Button sx={{ color: '#1B4BD2', '&:hover': { color: '#824295' } }}>Login</Button>
              <Button sx={{ color: '#1B4BD2', '&:hover': { color: '#824295' } }}>Cadastro</Button>              
            </Stack>
            {/* <ul>
              <li>Login</li>
              <li>Cadastro</li>
            </ul> */}
          </nav>
        </div>


      </div>

    </header>
    //   <div className="container-menu">
    //   <div>

    //     <div className='containerLogo'>
    //        <img src={logo} alt="Logo da Minha Empresa" />
    //     </div>

    //     <div className='container-links-menu'>
    //       <nav className="menu-items">

    //         <ul>
    //           <li>Home</li>
    //           <li>Cadastro</li>
    //         </ul>

    //       </nav>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
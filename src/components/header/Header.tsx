import React, { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig"; // Certifique-se de importar corretamente
import { logoutUsuario } from "../../utils/authService";

import "./header.css";
import logo from "../../assets/Centro_de_formação.png";

const Header: React.FC = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user); // Define como verdadeiro se houver um usuário logado
    });
    return unsubscribe; // Limpeza para evitar vazamento de memória
  }, []);

  const handleLogout = async () => {
    await logoutUsuario();
    navigate("/login");
  };

  return (
    <header aria-label="Cabeçalho do site">
      <div className="container-header">
        <div className="logo">
          <Link to="/">
            <img
              className="logo-img"
              src={logo}
              alt="logo Centro de formação Carlos Kopcak"
              title="Centro de Fonação Carlos Kopcak"
            />
          </Link>
        </div>

        <div className="links-menu">
          <nav aria-label="Menu principal">
            <Stack direction="row" spacing={2}>
              {isAuthenticated ? ( 
                <>
                <Link to="/resumo-estatistico">
                  <Button
                    className="custom-button"
                    sx={{ color: "#1B4BD2", "&:hover": { color: "#E43858" } }}
                  >
                    Resumo Estatístico
                  </Button>
                </Link>
                <Button className="custom-button"
                onClick={handleLogout}
                  sx={{ color: "#1B4BD2", "&:hover": { color: "#E43858" } }}>
                  Sair
                </Button>
                </>
              ) : ( 
                <>
              <Link to="/login">
                    <Button className="custom-button"
                      sx={{ color: "#1B4BD2", "&:hover": { color: "#E43858" } }}>
                      Login
                    </Button>   
              </Link>
              <Link to="/criar-conta">
                <Button className="custom-button"
                  sx={{ color: "#1B4BD2", "&:hover": { color: "#E43858" } }}>
                  Cadastro
                </Button>
              </Link>
              </>
              )}
            </Stack>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

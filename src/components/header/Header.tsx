import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/Centro_de_formação.png";


const Header: React.FC = () => {
  return (
    <header>
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
          <nav>
            <Stack direction="row" spacing={2}>
              <Link to="/login">
                <Button
                  sx={{ color: "#1B4BD2", "&:hover": { color: "#E43858" } }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/criar-conta">
                <Button
                  sx={{ color: "#1B4BD2", "&:hover": { color: "#E43858" } }}
                >
                  Cadastro
                </Button>
              </Link>
            </Stack>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

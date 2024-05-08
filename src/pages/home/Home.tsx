import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import cadastrar from "../../assets/undraw_Account_re_o7id.png";
import lista from "../../assets/undraw_Collaboration_re_vyau.png";
import "./home.css";

const Home: React.FC = () => {
  return (
    <>
      <main>
        <div className="container-home">
          <div className="container-text">
            <h1>Centro de Formação Carlos Kopcak</h1>
            <h2>Imersão em Línguas</h2>
          </div>

          <div className="container-cards">
            <div className="card">
              <Link to="/cadastro-aluno">
                <Card sx={{ maxWidth: 360 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={cadastrar}
                      alt="Cadastrar aluno"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Cadastrar Aluno
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
            <div className="card">
              <Link to="/lista-de-chamada">
                <Card sx={{ maxWidth: 360 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={lista}
                      alt="lista de presença"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lista de presença
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

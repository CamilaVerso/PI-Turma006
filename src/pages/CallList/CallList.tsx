import "./callList.css";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ingles from "../../assets/estados-unidos.png";
import espanhol from "../../assets/espanha.png";
import italia from "../../assets/italia.png";

const CallList: React.FC = () => {
  return (
    <body className="container-list">
      <h1>Lista de chamada</h1>
      <p>Escolha o curso</p>

      <div className="card">
        <a href="">
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
        </a>
        <a href="">
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
        </a>
        <a href="">
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
        </a>
      </div>
    </body>
  );
};

export default CallList;

import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import cadastrar from '../../assets/undraw_Account_re_o7id.png'
import lista from '../../assets/undraw_Collaboration_re_vyau.png'
import "./home.css"

const Home: React.FC = () => {
    return (

        <>
            <main>
                <div className="container-home">
                    <div className="container-text">

                        <h1>Centro de Formação</h1>
                        <h2>Carlos Kopcka</h2>

                    </div>

                    <div className="container-cards">
                        <div className="card">
                            <a href="/cadastro-aluno">
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
                                            {/* <Typography variant="body2" color="text.secondary">
            Formulário de Cadastro
          </Typography> */}
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </a>
                        </div>
                        <div className="card">
                            <a href="/lista-de-chamada">
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
                                            {/* <Typography variant="body2" color="text.secondary">
            Formulário de Cadastro
          </Typography> */}
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                </a>
                        </div>
                    </div>
                </div>
            </main>

        </>

    )

}

export default Home;


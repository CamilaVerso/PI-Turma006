import './login.css'
import Button from '@mui/material/Button';
import logo from '../../assets/Centro de formação com sombra.png'

const Login: React.FC = () => {
    return (
        <>

            <body className='login'>
                <div className='img-login'>

                    <img src={logo} alt="logo Centro de formação Carlos Kopcak" title='Centro de Fonação Carlos Kopcak' />
                </div>
                <form action="" className="container-form">
                    <div className='container-inputs'>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" placeholder="Digite seu e-mail" />

                        <label htmlFor="senha">Senha</label>
                        <input type="password" placeholder="Digite sua Senha" />

                    </div>
                    <button className='form-login-btn' type="submit">Entrar</button>
                    
                </form>
                <p>Ainda não tem conta? <a href="/criar-conta"><strong>Cadastre-se aqui</strong></a></p>

            </body>

        </>
    )
}

export default Login;
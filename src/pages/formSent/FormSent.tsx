import './formSent.css';
import { Link } from 'react-router-dom';

const FormSent: React.FC = () => {
    return (
    <main className='container-formSent'>
    <h1>Inscrição realizada</h1>

    <Link to="/"><p className='voltar'>Voltar para a Home</p></Link>
    </main>
  );
};

export default FormSent;
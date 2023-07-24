import photo from '../assets/contato.jpg'
import CardContact from '../components/CardContact';
import Head from '../utils/head';

function Contato() {
  return (
    <div className='content'>
      <CardContact 
      title='Entre em contato'
      photo={photo}
      email='daniela.alvesm@outlook.com.br'
      tel='21 99999-9999'
      address='Rua X, 2'
    />
    <Head title="Produtos | Contato" desc="Página para contato"/>
    </div>
  )
}

export default Contato;
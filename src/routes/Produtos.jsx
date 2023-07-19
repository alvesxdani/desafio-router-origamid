import { useEffect, useState } from 'react';
import CardProduct from '../components/CardProduct';

function Produtos() {
  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  console.log(produtos)
  if (produtos === null) return null;
  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '1rem',
        justifyItems: 'center'
        }}>
      {produtos.map((item) => (
        <CardProduct photo={item.fotos[0].src} key={item.id} title={item.nome}/>
      ))}
      </div>
    </>
  );
}

export default Produtos;

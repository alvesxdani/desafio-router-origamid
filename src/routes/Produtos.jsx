import { useEffect, useState } from 'react';
import CardProduct from '../components/CardProduct';
import { GridContent } from '../components/GridContent/style';
import Head from '../utils/head';
import Loading from '../components/Loading';

function Produtos() {
  const [produtos, setProdutos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchProdutos(url) {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json()
        setProdutos(json)
      //   fetch('https://ranekapi.origamid.dev/json/api/produto')
      }
      catch(e) {
        setError(e);
      } finally {
        setIsLoading(false)
      }
    }
    fetchProdutos(`https://ranekapi.origamid.dev/json/api/produto/`);
  }, []);

  if (produtos === null) return null;
  if (isLoading) return <Loading />
  if (error) return <p>{error}</p>

  return (
    <>
      <GridContent className='content animaLeft'>
        <Head title="Produtos" />
      {produtos.map((item) => (
        <CardProduct photo={item.fotos[0].src} key={item.id} title={item.nome} preco={item.preco} id={item.id}/>
      ))}
      </GridContent>
    </>
  );
}

export default Produtos;

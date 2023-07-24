import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Head from '../utils/head';
import Loading from '../components/Loading';

function Produto() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(url) {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`);

    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) return <Loading />;
  if (data === null) return null;
  if (error) return <p>{error}</p>;

  return (
    <div className="content animaLeft produto">
      <Head title={data.nome} desc={data.descricao} />
      <div className="fotos">
        {data.fotos.map((foto) => (
          <img
            src={foto.src}
            alt={`Foto de ${foto.titulo}`}
            width={300}
            key={foto.src}
          />
        ))}
      </div>

      <div className="desc_produto">
        <h2>{data.nome}</h2>
        <span className='preco'>R$ {data.preco}</span>
        <p>{data.descricao}</p>
      </div>
    </div>
  );
}

export default Produto;

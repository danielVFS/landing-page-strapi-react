import { useEffect, useState } from 'react';

import * as Styled from './styles';
import { BaseTemplate } from '../BaseTemplate';
import { mockBase } from '../BaseTemplate/mock';
import { mapData } from '../../api/map-data';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        'http://localhost:1337/pages/?slug=landing-page',
      );
      const json = await data.json();
      const pageData = mapData(json);

      console.log(json);
      console.log(pageData);

      setData(pageData[0]);
    };

    load();
  }, []);

  if (data === undefined) {
    return <h1>Página não encontrada</h1>;
  }

  if (data && !data.slug) {
    return <h1>Carregando...</h1>;
  }

  return <BaseTemplate {...mockBase} />;
}

export default Home;

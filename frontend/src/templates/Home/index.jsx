import { useEffect, useState } from 'react';

import * as Styled from './styles';
import { BaseTemplate } from '../BaseTemplate';
import { mockBase } from '../BaseTemplate/mock';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/pages/?slug=landing-pages',
        );
        const json = await data.json();
        const pageData = mapData(json);

        setData(pageData[0]);
      } catch (error) {
        setData(undefined);
      }
    };

    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <h1>Carregando...</h1>;
  }

  return <BaseTemplate {...mockBase} />;
}

export default Home;

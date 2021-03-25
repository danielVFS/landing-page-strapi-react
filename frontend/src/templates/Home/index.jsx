import * as Styled from './styles';

import { BaseTemplate } from '../BaseTemplate';
import { mockBase } from '../BaseTemplate/mock';

function Home() {
  return <BaseTemplate {...mockBase} />;
}

export default Home;

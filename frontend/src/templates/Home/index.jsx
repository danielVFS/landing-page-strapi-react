import * as Styled from './styles';

import { Heading } from '../../components/Heading';
import { BaseTemplate } from '../BaseTemplate';
import { mockBase } from '../BaseTemplate/stories';

function Home() {
  return <BaseTemplate {...mockBase} />;
}

export default Home;

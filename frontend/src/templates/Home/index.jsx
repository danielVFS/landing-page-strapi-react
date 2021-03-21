import * as Styled from './styles';

import { Heading } from '../../components/Heading';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading>Hello World</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;

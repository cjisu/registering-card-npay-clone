import React from 'react';
import styled from 'styled-components';
import StyledReset from './styledComponents/styledReset';
import RegisterCard from './components/templates/RegisterCard';

const Wrapper = styled.div`
  padding: 8px;
`;
const App: React.FC = () => {
  return (
    <Wrapper>
      <StyledReset />
      <RegisterCard />
    </Wrapper>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components';
import Home from './components/Home';

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const App = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;

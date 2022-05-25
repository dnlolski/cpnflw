import React from 'react';
import { AppContainer } from './App.styles';
import Header from './components/header/Header';

function App() {
  return (
    <AppContainer>
      <Header headerText={'Search for a Public API'}/>
    </AppContainer>
  );
}

export default App;

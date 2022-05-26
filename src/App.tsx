import React from 'react';
import { AppContainer, SearchBrowserContainer} from './App.styles';
import Header from './components/header/Header';
import SearchInput from './components/searchInput/SearchInput';
import SearchButton from './components/searchButton/SearchButton';


function App() {

  const onSearchChange = (searchValue: string): void => {
    console.log(searchValue);
  };

  const onSearchButtonClick = (): void => {
    console.log('click')
  }

  return (
    <AppContainer>
      <SearchBrowserContainer>
        <Header headerText={'Search for a Public API'}/>
        <SearchInput onSearchChange={(event) => onSearchChange(event.target.value)}/>
        <SearchButton buttonText={'Search'} onSearchButtonClick={() => onSearchButtonClick()}/>
      </SearchBrowserContainer>
    </AppContainer>
  );
}

export default App;

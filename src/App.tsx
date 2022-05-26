import React, { useState } from 'react';
import { AppContainer, SearchBrowserContainer } from './App.styles';
import Header from './components/header/Header';
import SearchInput from './components/searchInput/SearchInput';
import SearchButton from './components/searchButton/SearchButton';
import Results from './components/results/Results';
import Api from './components/api/Api';


function App() {

  const [searchInput, setSearchInput] = useState<string>('')
  const [searchResult, setSearchResult] = useState<ApiDetails[]>()
  const [loading, setLoading] = useState(false);

  const api = new Api();

  const onSearchChange = (searchValue: string): void => {
    setSearchInput(searchValue)
  };

  const onSearchSubmit = (): void => {
    setLoading(true);
    api.searchForApi(searchInput)
      .then((response) => {
        let result = Object.fromEntries(Object.entries(response).slice(0, 5));
        setSearchResult(result)
      })
      .finally(() => {
        setLoading(false);
      })
  }

  return (
    <AppContainer>
      <SearchBrowserContainer>
        <Header headerText={'Search for a Public API'}/>
        <SearchInput onSearchSubmit={() => onSearchSubmit()}
                     onSearchChange={(event) => onSearchChange(event.target.value)}/>
        <SearchButton buttonText={'Search'} onSearchButtonClick={() => onSearchSubmit()}/>
        <Results searchResult={searchResult}/>
      </SearchBrowserContainer>
    </AppContainer>
  );
}

export interface SearchResult {
  count?: number
  entries?: ApiDetails[]
}

export interface ApiDetails {
  API?: string
  Auth?: string
  Category?: string
  Cors?: string
  Description?: string
  HTTP?: boolean
  Link?: string
}

export default App;



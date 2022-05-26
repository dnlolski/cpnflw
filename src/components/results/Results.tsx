import React from 'react';
import { ResultsContainer, SearchResults } from './Results.styles';
import Header from '../header/Header';
import { ApiDetails } from '../../App';


function Results({ searchResult }: ResultsProps) {

  return (
    <ResultsContainer>
      <Header smallHeader headerText={'Results'}/>
      <SearchResults>
        {searchResult.map((result) =>
          <>
            {result.Link}
          </>
        )}
      </SearchResults>
    </ResultsContainer>
  )
}

interface ResultsProps {
  searchResult: ApiDetails[]
}

export default Results;

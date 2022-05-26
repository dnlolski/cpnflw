import React from 'react';
import { ApiDescription, ApiElement, ApiDivider, ApiLink, ResultsContainer, SearchResults } from './Results.styles';
import Header from '../header/Header';
import { ApiDetails } from '../../App';


function Results({ searchResult }: ResultsProps) {

  return (
    <ResultsContainer>
      {searchResult.length ?
          <>
            <Header smallHeader headerText={'Results'}/>
            <SearchResults>
              {searchResult.map((result) =>
                <ApiElement key={result.API}>
                  <ApiLink href={result.Link} target="_blank">{result.API}</ApiLink>
                  <ApiDescription>
                    {result.Description}
                  </ApiDescription>
                  <ApiDivider/>
                </ApiElement>
              )}
            </SearchResults>
          </>
        :
        <>no results</>
      }
    </ResultsContainer>
  )
}

interface ResultsProps {
  searchResult: ApiDetails[]
}

export default Results;

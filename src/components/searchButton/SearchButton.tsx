import React, { MouseEventHandler } from 'react';
import { SearchButtonComponent } from './SearchButton.styles';


function SearchButton({ onSearchButtonClick, buttonText }: SearchButtonProps) {

  return (
    <SearchButtonComponent onClick={onSearchButtonClick}>
      { buttonText }
    </SearchButtonComponent>
  )
}

interface SearchButtonProps {
  onSearchButtonClick: MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
}

export default SearchButton;

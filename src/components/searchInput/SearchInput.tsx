import React, { ChangeEventHandler } from 'react';
import { InputComponent } from './SearchInput.styles';


function SearchInput({ onSearchChange }: SearchInputProps) {

  return (
    <InputComponent onChange={onSearchChange} placeholder={'Enter API name...'}/>
  )
}

interface SearchInputProps {
  onSearchChange: ChangeEventHandler<HTMLInputElement>
}

export default SearchInput;

import React, { ChangeEventHandler, FormEventHandler } from 'react';
import { InputComponent } from './SearchInput.styles';


function SearchInput({onSearchSubmit, onSearchChange }: SearchInputProps) {

  return (
    <InputComponent onSubmit={onSearchSubmit} onChange={onSearchChange} placeholder={'Enter API name...'}/>
  )
}

interface SearchInputProps {
  onSearchChange: ChangeEventHandler<HTMLInputElement>
  onSearchSubmit: FormEventHandler<HTMLInputElement>
}

export default SearchInput;

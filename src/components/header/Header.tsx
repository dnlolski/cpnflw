import React from 'react';
import { ApiBrowserHeader } from './Header.styles';


function Header({ headerText }: HeaderProps) {

  return (
    <ApiBrowserHeader>
      {headerText}
    </ApiBrowserHeader>
  )
}

interface HeaderProps {
  headerText: string
}

export default Header;

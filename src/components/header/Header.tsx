import React from 'react';
import { ApiBrowserHeader } from './Header.styles';


function Header({ smallHeader, headerText }: HeaderProps) {

  return (
    <ApiBrowserHeader small={smallHeader}>
      {headerText}
    </ApiBrowserHeader>
  )
}

interface HeaderProps {
  headerText: string
  smallHeader?: boolean
}

export default Header;

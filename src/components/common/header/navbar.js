import React from 'react';
import {menuData} from './menu-data';
import MainMenu from './menu';

const Navbar = () => {
  return (
      <MainMenu items={menuData} />
  );
};
export default Navbar;
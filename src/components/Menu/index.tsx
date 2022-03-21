import React from 'react';
import { Link } from 'react-router-dom';

import { Container, MenuTitle } from './MenuStyles';

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuTitle>
        <Link to="/"><span>Overview</span></Link>
      </MenuTitle>

      <MenuTitle>
        <Link to="/dashboard"><span>Dashboard</span></Link>
      </MenuTitle>

      <MenuTitle>
        <span>Reports</span>
      </MenuTitle>

      <MenuTitle>
        <span>Add</span>
      </MenuTitle>
    </Container>
  );
}

export default Menu;
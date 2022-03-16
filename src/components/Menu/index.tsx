import React from 'react';

import { Container, MenuTitle } from './MenuStyles';

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuTitle>
        <span>Overview</span>
      </MenuTitle>

      <MenuTitle>
        <span>Dasboard</span>
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
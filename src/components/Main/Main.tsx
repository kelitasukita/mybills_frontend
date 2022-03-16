import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Container, BottomMenu, OverviewIcon, DashboardIcon, ReportsIcon, AddIcon } from './MainStyles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
  
      <BottomMenu>
          <OverviewIcon />
          <DashboardIcon />
          <ReportsIcon />
          <AddIcon />
      </BottomMenu>

      {/* <Footer /> */}
      
    </Container>
  );
}

export default Main;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Overview from './components/screens/Overview';
import Dashboard from './components/screens/Dashboard';
import Reports from './components/screens/Reports';
import Add from './components/screens/Add';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Main />

        <main className="container">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/Add" element={<Add />} />
          </Routes>
        </main>
        <Footer /> 
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
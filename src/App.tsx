import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

// import './styles/header.scss';
// import './styles/overviewPanel.scss';
// import './styles/payBoxes.scss';
// import './styles/creditCards.scss';
// import './styles/footer.scss';
// import './styles/formAddBills.scss';
// import './styles/dateFilter.scss';

import Header  from './components/Header/Header';
import Main from './components/Main/Main';
// import { Footer } from './components/Footer';
// import { Overview } from './components/screens/Overview';
// import { Add } from './components/screens/Add';
// import { Reports } from './components/screens/Reports';
// import { Dashboard } from './components/screens/Dashboard';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Main />

        {/* <main className="container">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/Add" element={<Add />} />
          </Routes>
        </main>
        <Footer /> */}
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

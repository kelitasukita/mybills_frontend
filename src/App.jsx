import './styles/global.scss'
import './styles/header.scss'
import './styles/overviewPanel.scss'
import './styles/payBoxes.scss'
import { Header } from "./components/Header/header";
import { OverviewPanel } from './components/OverviewPanel/OverviewPanel';
import { Paid } from './components/Bills/Paid';
import { ToPay } from './components/Bills/ToPay';

export function App() {
  return (
      <>
        <Header />
        <main class="container">
          <OverviewPanel />
          <div id="payments">
          <Paid />
          <ToPay />
        </div>
        </main>
        
      </>);
    
}
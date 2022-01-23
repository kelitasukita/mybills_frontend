import './styles/global.scss'
import './styles/header.scss'
import './styles/overviewPanel.scss'
import './styles/payBoxes.scss'
import './styles/creditCards.scss'
import './styles/footer.scss'
import { Header } from "./components/Header/header";
import { OverviewPanel } from './components/OverviewPanel/OverviewPanel';
import { Paid } from './components/Bills/Paid';
import { ToPay } from './components/Bills/ToPay';
import { Amex } from './components/CreditCards/Amex';
import { Footer } from './components/Footer'
import { Visa } from './components/CreditCards/Visa'

export function App() {
  return (
      <>
        <Header />
        <main className="container">
          <OverviewPanel />
          <div id="payments">
            <Paid />
            <ToPay />
          </div>
          <div className="creditcards">
            <Amex />
            <Visa />
            <Visa />
            <Amex />
          </div>
        </main>
        <Footer />
        
      </>);
    
}
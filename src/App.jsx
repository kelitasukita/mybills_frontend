import './styles/global.scss'
import './styles/header.scss'
import './styles/overviewPanel.scss'
import './styles/payBoxes.scss'
import './styles/creditCards.scss'
import './styles/footer.scss'
import { Header } from "./components/Header/header";
import { OverviewPanel } from './components/OverviewPanel/OverviewPanel';
import { Bills } from './components/Bills/Bills';
import { CardBox } from './components/CreditCards/CardBox';
import { Footer } from './components/Footer'

export function App() {
  const cards = [
    {brand: 'Amex', title: 'Amex', factur: 6732.89},
    {brand: 'Visa', title: 'Visa Kelita', factur: 123.89},
    {brand: 'Visa', title: 'Visa Eder', factur: 321.89},
    {brand: 'NuBank', title: 'NuBank Kelita', factur: 432.89},
    {brand: 'Maestro', title: 'Maestro Kelita', factur: 345.89},
  ];

  return (
      <>
        <Header />

        <main className="container">
          <OverviewPanel />
          <div className="payments">
            <Bills endpoint="/expenses/paid" title="Paid Bills"/>
            <Bills endpoint="/expenses/unpaid" title="Bills to Pay"/>
            {
              cards.map((card, index) => {
                return <CardBox key={index} data={card}/>
              })
            }
          </div>
        </main>
        
        <Footer />
        
      </>);
    
}
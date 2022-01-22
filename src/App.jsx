import './styles/global.scss'
import './styles/header.scss'
import './styles/overviewPanel.scss'
import { Header } from "./components/Header/header";
import { OverviewPanel } from './components/OverviewPanel/OverviewPanel';

export function App() {
  return (
      <>
        <Header />
        <main class="container">
          <OverviewPanel />
        </main>
      </>);
    
}
import './styles/global.scss'
import './styles/header.scss'
import './styles/overviewPanel.scss'
import { Header } from "./components/header";
import { OverviewPanel } from './components/OverviewPanel';

export function App() {
  return (
      <>
        <Header />
        <main class="container">
          <OverviewPanel />
        </main>
      </>);
    
}
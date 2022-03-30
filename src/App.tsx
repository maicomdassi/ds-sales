import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import SalesByDate from './components/Sales-by-date';
import SalesSummary from './components/Sales-summary';

function App() {
  return (
    <>
      <Header />

      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-conatiner">
          <SalesSummary />
        </div>
      </div>
    </>
  );
}

export default App;

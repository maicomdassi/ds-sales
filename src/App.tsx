import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import PieChartCard from './components/Pie-chart-card';
import SalesByDate from './components/Sales-by-date';
import SalesSummary from './components/Sales-summary';
import SalesTable from './components/Sales-table';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };
  return (
    <>
      <Header />

      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-conatiner">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Uberlandia', 'Porto Alegre', 'Cachoeirinha']}
            series={[40, 30, 30]}
          />
          <PieChartCard
            name="Pagamento"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[20, 20, 60]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;

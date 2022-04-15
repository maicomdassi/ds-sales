import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as AvatarIcon } from '../../assets/images/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/images/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/images/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/images/sync-icon.svg';
import './styles.css';
import { FilterData, SalesSummaryData } from '../../types';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  sum: 0,
  min: 0,
  max: 0,
  avg: 0,
  count: 0
};

function SalesSummary({ filterData }: Props) {
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales by date');
      });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard label="Média" value={summary?.avg?.toFixed(2)} icon={<DoneIcon />} />
      <SalesSummaryCard label="Quantidade" value={summary?.count} icon={<SyncIcon />} />
      <SalesSummaryCard label="Mínima" value={summary?.min} icon={<BarChartIcon />} />
      <SalesSummaryCard label="Máxima" value={summary?.max} icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;

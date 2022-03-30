import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as AvatarIcon } from '../../assets/images/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/images/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/images/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/images/sync-icon.svg';
import './styles.css';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard label="Média" value={534.0} icon={<DoneIcon />} />
      <SalesSummaryCard label="Quantidade" value={44434} icon={<SyncIcon />} />
      <SalesSummaryCard label="Mínima" value={434.0} icon={<BarChartIcon />} />
      <SalesSummaryCard label="Máxima" value={5340.0} icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;

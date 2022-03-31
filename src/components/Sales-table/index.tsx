import './styles.css';

function SalesTable() {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas Recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma Pgto</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#341</td>
            <td>07/11/2022</td>
            <td>Feminino</td>
            <td>Roupas e Acessórios</td>
            <td>POA</td>
            <td>Crédito</td>
            <td>10.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/2022</td>
            <td>Feminino</td>
            <td>Roupas e Acessórios</td>
            <td>POA</td>
            <td>Crédito</td>
            <td>10.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/2022</td>
            <td>Feminino</td>
            <td>Roupas e Acessórios</td>
            <td>POA</td>
            <td>Crédito</td>
            <td>10.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/2022</td>
            <td>Feminino</td>
            <td>Roupas e Acessórios</td>
            <td>POA</td>
            <td>Crédito</td>
            <td>10.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/2022</td>
            <td>Feminino</td>
            <td>Roupas e Acessórios</td>
            <td>POA</td>
            <td>Crédito</td>
            <td>10.000,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;

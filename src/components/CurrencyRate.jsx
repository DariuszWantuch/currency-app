import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { fetchCurrencyRates } from '../api/CurrencyApi'; // Import the fetchCurrencyRates function

const CurrencyRateFetch = () => {
  const [currenciesRate, setCurrenciesRate] = useState([]);

  useEffect(() => {
    fetchCurrencyRates()
      .then((data) => {
        console.log(data);
        setCurrenciesRate(data);
      });
  }, []);

  const columns = [
    { field: 'currencyCode', headerName: 'Currency Code', width: 130 },
    { field: 'currencyName', headerName: 'Currency Name', width: 150 },
    { field: 'rate', headerName: 'Rate', width: 80 },
    { field: 'publicationDate', headerName: 'Publication Date', width: 120 }
  ];

  return (
    <div style={{ height: 370, width: '100%' }}>
    <DataGrid
      rows={currenciesRate}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection = {false}
    />
  </div>

  );
};
export default CurrencyRateFetch;

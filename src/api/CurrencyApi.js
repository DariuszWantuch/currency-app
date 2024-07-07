
const apiUrl = import.meta.env.VITE_APP_API_URL;

export const fetchCurrencyRates = () => {
    return fetch(apiUrl + 'CurrencyRate')
      .then((res) => {
        return res.json();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
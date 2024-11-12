import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=")
      .then((response) => {
        console.log(response.data);

        let rates = [
          {
            currency: "CAD",
            exchange_rate: response.data.rates.CAD,
            we_buy: 1.05 * response.data.rates.CAD,
            we_sell: 0.95 * response.data.rates.CAD,
          },
          {
            currency: "EUR",
            exchange_rate: response.data.rates.EUR,
            we_buy: 1.05 * response.data.rates.EUR,
            we_sell: 0.95 * response.data.rates.EUR,
          },
          {
            currency: "IDR",
            exchange_rate: response.data.rates.IDR,
            we_buy: 1.05 * response.data.rates.IDR,
            we_sell: 0.95 * response.data.rates.IDR,
          },
          {
            currency: "JPY",
            exchange_rate: response.data.rates.JPY,
            we_buy: 1.05 * response.data.rates.JPY,
            we_sell: 0.95 * response.data.rates.JPY,
          },
          {
            currency: "CHF",
            exchange_rate: response.data.rates.CHF,
            we_buy: 1.05 * response.data.rates.CHF,
            we_sell: 0.95 * response.data.rates.CHF,
          },
          {
            currency: "GBP",
            exchange_rate: response.data.rates.GBP,
            we_buy: 1.05 * response.data.rates.GBP,
            we_sell: 0.95 * response.data.rates.GBP,
          },
        ];
        setData(rates);
      });
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr className="table-head">
            <td>Curency</td>
            <td>We Buy</td>
            <td>Exchange Rate</td>
            <td>We Sell</td>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((rate, index) => {
            return (
              <tr key={index}>
                <td>{rate.currency}</td>
                <td>{rate.we_buy}</td>
                <td>{rate.exchange_rate}</td>
                <td>{rate.we_sell}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Rates are based from 1 USD.</p>
      <p>
        This Aplication uses API from{" "}
        <a href="https://currencyfreaks.com/">https://currencyfreaks.com</a>
      </p>
    </>
  );
}

export default App;

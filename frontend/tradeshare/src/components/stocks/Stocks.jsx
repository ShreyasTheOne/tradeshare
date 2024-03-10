import React, { useEffect, useState } from "react";
import axios from "axios";
import BuyModal from "../../modals/BuyModal";

const API_KEY = "cnmfdnpr01qtghmdiolgcnmfdnpr01qtghmdiom0";
const symbols = [
  "AAPL",
  "GOOGL",
  "MSFT",
  "AMZN",
  "TSLA",
  "NVDA",
  "NFLX",
  "PYPL",
  "INTC",
];

const Stocks = () => {
  const [stockData, setStockData] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const responses = await Promise.all(
          symbols.map((symbol) =>
            axios.get(
              `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
            )
          )
        );
        const data = responses.map((response) => response.data);
        setStockData(data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  const handleBuy = (stock) => {
    console.log(stock)
    setSelectedStock(stock);
  };

  const handleBuySubmit = (formData) => {
    // Handle buy submission with formData
    console.log("Buy submitted:", formData);
    // Close the modal after submission
    setSelectedStock(null);
  };

  const handleModalClose = () => {
    setSelectedStock(null);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Stocks Data</h2>
      <div className="flex flex-col">
        {stockData ? (
          stockData.map((stock, index) => (
            <div
              key={index}
              className="bg-gray-800 w-full justify-evenly items-center text-white p-4 flex flex-wrap gap-4 shadow rounded mr-4 mb-4"
            >
              <h3 className="text-lg font-semibold">{symbols[index]}</h3>
              <p className="text-gray-300">Current Price: ${stock.c}</p>
              <p className="text-gray-300">Previous Close: ${stock.pc}</p>
              <p className="text-gray-300">Opening Price: ${stock.o}</p>
              <p className="text-gray-300">High Price: ${stock.h}</p>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => handleBuy(stock)}
              >
                Buy
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {/* Render Buy Modal */}
      {selectedStock && (
        <BuyModal
          show={true}
          onClose={handleModalClose}
          onSubmit={handleBuySubmit}
          stock={selectedStock}
        />
      )}
    </div>
  );
};

export default Stocks;
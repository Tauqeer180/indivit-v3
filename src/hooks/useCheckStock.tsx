import { useEffect, useState } from "react";

export default function useCheckStock(selectedData) {
  const [isOutofStock, setIsOutofStock] = useState(false);
  const [stockData, checkStock] = useState([]);

  useEffect(() => {
    if (selectedData) {
      checkStock(selectedData);
    }
  }, [selectedData]);

  useEffect(() => {
    if (stockData) {
      // console.log("Stock Data -<>-", stockData);
      // debugger;
      var tempState = stockData?.some(function (element) {
        return parseInt(element?.ingredient_status) != 0;
      });

      setIsOutofStock(tempState);
    }
  }, [stockData]);

  return {
    checkStock,
    isOutofStock,
  };
}

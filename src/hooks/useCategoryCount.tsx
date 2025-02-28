import { useEffect, useState } from "react";

export default function useCategoryCount(selectedData, data, isSelected) {
  const [rawData, setRawData] = useState([]);
  const [limitText, setLimitText] = useState();
  const [limitDisable, setLimitDisable] = useState(false);

  useEffect(() => {
    setRawData(selectedData);
  }, [selectedData]);
  useEffect(() => {
    if (rawData) {
      if (data?.ingredient_category?.name?.toLowerCase() == "kräuter") {
        if (
          rawData?.filter(
            (d) => d?.ingredient_category?.name?.toLowerCase() === "kräuter"
          ).length >= 2
        ) {
          if (!isSelected) {
            setLimitText(
              "Aktuell nicht wählbar: Du kannst maximal 2 Kräuter in deinen Smoothie mischen"
            );
            setLimitDisable(true);
          }
        } else {
          setLimitText(null);
          setLimitDisable(false);
        }
      } else if (data?.ingredient_category?.name?.toLowerCase() == "extras") {
        if (
          rawData?.filter(
            (d) => d?.ingredient_category?.name?.toLowerCase() === "extras"
          ).length >= 2
        ) {
          if (!isSelected) {
            setLimitText(
              "Aktuell nicht wählbar: Du kannst maximal 2 Extras in deinen Smoothie mischen"
            );
            setLimitDisable(true);
          }
        } else {
          setLimitText(null);
          setLimitDisable(false);
        }
      }
    }
  }, [rawData]);

  return {
    limitText,
    limitDisable,
  };
}

import { useEffect, useState } from "react";

export default function useCategoryShare(selectedData, data, isSelected) {
  const [rawData, setRawShareData] = useState([]);
  const [limitText, setLimitText] = useState();
  const [limitDisable, setLimitDisable] = useState(false);
  const [isBlattgemüseOverloaded, setBlattgemüseOverloaded] = useState(false);
  const [isZitrusOverloaded, setZitrusOverloaded] = useState(false);
  const [isLiquidsOverloaded, setLiquidsOverloaded] = useState(false);
  const [blattgemüseCount, setBlattgemüseCount] = useState(0);
  const [zitrusCount, setZitrusCount] = useState(0);
  const [liquidsCount, setLiquidsCount] = useState(0);

  useEffect(() => {
    if (selectedData) {
      setRawShareData(selectedData);
    }
  }, [selectedData]);
  useEffect(() => {
    if (rawData) {
      let allBlattgemüse = rawData?.filter(
        (d) => d?.ingredient_category?.name?.toLowerCase() === "blattgemüse"
      );
      let allGemüse = rawData?.filter(
        (d) => d?.ingredient_category?.name?.toLowerCase() === "gemüse"
      );
      let allObst = rawData?.filter(
        (d) => d?.ingredient_category?.name?.toLowerCase() === "obst"
      );

      let allZitrus = rawData?.filter(
        (d) => d?.ingredient_category?.name?.toLowerCase() === "zitrus"
      );
      let allLiquids = rawData?.filter(
        (d) => d?.ingredient_category?.name?.toLowerCase() === "liquids"
      );
      let blattgemüseShare = allBlattgemüse.reduce(
        (x, y) => x + parseFloat(y?.value_in_percentage),
        0
      );
      let tempBlattgemüseCount = allBlattgemüse.length;

      let zitrusShare = allZitrus.reduce(
        (x, y) => x + parseFloat(y?.value_in_percentage),
        0
      );
      let tempZitrusCount = allZitrus.length;

      let liquidsShare = allLiquids.reduce(
        (x, y) => x + parseFloat(y?.value_in_percentage),
        0
      );
      let tempGemüseCount = allGemüse?.length;
      let tempObstCount = allObst?.length;

      let tempLiquidsCount = allLiquids.length;
      setLiquidsCount(tempLiquidsCount);
      setBlattgemüseCount(tempBlattgemüseCount);
      setZitrusCount(tempZitrusCount);

      if (blattgemüseShare > 20) {
        setBlattgemüseOverloaded(true);
      } else {
        setBlattgemüseOverloaded(false);
      }
      if (zitrusShare > 15) {
        setZitrusOverloaded(true);
      } else {
        setZitrusOverloaded(false);
      }
      if (liquidsShare > 30) {
        setLiquidsOverloaded(true);
      } else {
        setLiquidsOverloaded(false);
      }

      if (data?.ingredient_category?.name?.toLowerCase() == "blattgemüse") {
        if (tempBlattgemüseCount > 2 && blattgemüseShare >= 19.9) {
          // will be Consider 20
          setLimitText(
            "Du hast mehrere Blattgemüse ausgewählt. Die maximale Menge ist hier insgesamt auf 20% begrenzt."
          );
          setLimitDisable(true);
        } else {
          setLimitText(null);
          setLimitDisable(false);
        }
      } else if (data?.ingredient_category?.name?.toLowerCase() == "zitrus") {
        if (tempZitrusCount > 2 && zitrusShare >= 14.9) {
          // will be consider 15
          setLimitText(
            "Du hast mehrere Zitrusfrüchte ausgewählt. Die maximale Menge ist hier insgesamt auf 15% begrenzt."
          );
          setLimitDisable(true);
        } else {
          setLimitText(null);
          setLimitDisable(false);
        }
      } else if (
        data?.ingredient_category?.name?.toLowerCase() == "liquids" &&
        (tempGemüseCount != 0 || tempObstCount != 0)
      ) {
        if (tempLiquidsCount >= 2 && liquidsShare >= 29.9) {
          // will be consider 30
          setLimitText(
            "Du hast mehrere Liquids ausgewählt. Die maximale Menge ist in der aktuellen Auswahl auf 30% begrenzt."
          );
          // setLimitDisable(true);
        } else {
          setLimitText(null);
          setLimitDisable(false);
        }
      }
      // else if (data?.ingredient_category?.name?.toLowerCase() == "obst") {
      //   if (parseFloat(data?.value_in_percentage) < 2) {
      //     setLimitText("Aktuelle Auswahl nicht möglich.");
      //     setLimitDisable(true);
      //   } else {
      //     setLimitText(null);
      //     setLimitDisable(false);
      //   }
      // } else if (data?.ingredient_category?.name?.toLowerCase() == "gemüse") {
      //   if (parseFloat(data?.value_in_percentage) < 2) {
      //     setLimitText("Aktuelle Auswahl nicht möglich.");
      //     setLimitDisable(true);
      //   } else {
      //     setLimitText(null);
      //     setLimitDisable(false);
      //   }
      // }

      // console.log(
      //   "Min 22222222 ",
      //   selectedData?.some((s) => {
      //     return s.value_in_percentage < 2;
      //   })
      // );
      else if (
        (data?.ingredient_category?.name?.toLowerCase() == "obst" ||
          data?.ingredient_category?.name?.toLowerCase() == "gemüse") &&
        parseFloat(data?.value_in_percentage) < 2
      ) {
        setLimitText("Aktuelle Auswahl nicht möglich.");
      } else {
        setLimitText(null);
      }
      if (
        allGemüse?.some((s) => {
          return s.value_in_percentage < 2;
        }) ||
        allObst?.some((s) => {
          return s.value_in_percentage < 2;
        })
      ) {
        setLimitDisable(true);
      } else {
        setLimitDisable(false);
      }
    }
  }, [rawData, data]);

  const checkLiquidShareML = (data) => {
    let liquidsShareML = data.reduce(
      (x, y) =>
        x +
        (y.ingredient_category?.name?.toLowerCase() === "liquids"
          ? parseFloat(y?.ingredient_filling[y?.filling_index]?.fixed)
          : 0),
      0
    );
    return liquidsShareML;
  };
  const checkZitrusShareML = (data) => {
    let liquidsShareML = data.reduce(
      (x, y) =>
        x +
        (y.ingredient_category?.name?.toLowerCase() === "zitrus"
          ? parseFloat(y?.ingredient_filling[y?.filling_index]?.fixed)
          : 0),
      0
    );
    return liquidsShareML;
  };
  const checkBlattgemüseShareML = (data) => {
    let liquidsShareML = data.reduce(
      (x, y) =>
        x +
        (y.ingredient_category?.name?.toLowerCase() === "blattgemüse"
          ? parseFloat(y?.ingredient_filling[y?.filling_index]?.fixed)
          : 0),
      0
    );
    return liquidsShareML;
  };

  return {
    setRawShareData,
    limitText,
    limitDisable,
    isBlattgemüseOverloaded,
    isZitrusOverloaded,
    isLiquidsOverloaded,
    checkLiquidShareML,
    checkZitrusShareML,
    checkBlattgemüseShareML,
    liquidsCount,
    zitrusCount,
    blattgemüseCount,
  };
}

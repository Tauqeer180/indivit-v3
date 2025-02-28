import { useEffect, useState } from "react";

const useIngredientType = (data) => {
  const [id, setId] = useState(data);
  const [badgeLabel, setBadgeLabel] = useState(null);
  const [badgeColor, setBadgeColor] = useState("bg-theme-success");
  useEffect(() => {
    if (id == 1) {
      setBadgeLabel("Hauptzutat");
      setBadgeColor("bg-theme-success");
    } else if (id == 2) {
      setBadgeLabel("Ergänzung");
      setBadgeColor("bg-warning");
    } else if (id == 3) {
      setBadgeLabel("liquids");
      setBadgeColor("bg-info");
    } else {
      setBadgeLabel(null);
      setBadgeColor("bg-theme-success");
    }
  }, [id]);

  return {
    badgeLabel,
    badgeColor,
    setId,
  };
};

export default useIngredientType;

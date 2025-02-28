import { useEffect, useState } from "react";

const useIngredientStatus = (data) => {
  const [id, setStatusId] = useState(data);
  const [statusLabel, setStatusLabel] = useState(null);
  const [statusColor, setStatusColor] = useState("bg-theme-success");
  useEffect(() => {
    if (id == 0) {
      setStatusLabel("auf Lager"); //instock
      setStatusColor("bg-theme-success");
    } else if (id == 1) {
      setStatusLabel("bald im Sortiment"); //coming soon
      setStatusColor("bg-info");
    } else if (id == 2) {
      setStatusLabel("nicht verfügbar"); //discontinue
      setStatusColor("bg-warning");
    } else if (id == 3) {
      setStatusLabel("ausverkauft"); //sold out
      setStatusColor("bg-danger");
    } else {
      setStatusLabel(null);
      setStatusColor("bg-theme-success");
    }
  }, [id]);

  return {
    statusLabel,
    statusColor,
    setStatusId,
  };
};

export default useIngredientStatus;

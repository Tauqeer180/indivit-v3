'use client'
import { useEffect, useState } from "react";

const useColorBlender = () => {
  const [data, setData] = useState([]);
  const [color, setColor] = useState();
  const [darkenColor, setDarkenColor] = useState();
  const [hexColor, setHexColor] = useState();
  const [lottieColor, setLottieColor] = useState([]);
  useEffect(() => {
    if (data) {
      let r =
        data.reduce((x, y) => x + parseInt(y?.ingredient_color?.R), 0) /
        data?.length;
      let g =
        data.reduce((x, y) => x + parseInt(y?.ingredient_color?.G), 0) /
        data?.length;
      let b =
        data.reduce((x, y) => x + parseInt(y?.ingredient_color?.B), 0) /
        data?.length;
      let a =
        data.reduce((x, y) => x + y?.ingredient_color?.transparency / 100, 0) /
        data?.length;
      function colorDarkener(percent) {
        const dr = Math.max(
          0,
          Math.min(255, Math.round(parseInt(r) * (1 - percent)))
        );
        const dg = Math.max(
          0,
          Math.min(255, Math.round(parseInt(g) * (1 - percent)))
        );
        const db = Math.max(
          0,
          Math.min(255, Math.round(parseInt(b) * (1 - percent)))
        );
        setDarkenColor(data.length > 0 ? `rgb(${dr},${dg},${db})` : null);
      }
      colorDarkener(0.03);

      setColor(data.length > 0 ? `rgb(${r},${g},${b})` : null);

      let red = parseInt(r)?.toString(16).padStart(2, "0");
      let green = parseInt(g)?.toString(16).padStart(2, "0");
      let blue = parseInt(b)?.toString(16).padStart(2, "0");
      let hColor = `#${red}${green}${blue}`;
      setHexColor(hColor);
      function scaleRGB(n) {
        return Math.round((n / 255) * 100) / 100;
      }

      function hexToRgbA(hex) {
        var c;
        var list = [];
        // debugger;
        hex = hex.trim();
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
          c = hex.substring(1).split("");
          if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
          }
          c = "0x" + c.join("");
          list.push(scaleRGB((c >> 16) & 255));
          list.push(scaleRGB((c >> 8) & 255));
          list.push(scaleRGB(c & 255));
          list.push(1);
          setLottieColor(list);
        }
        // return hexToRgbA("#000000");
      }
      if (hexColor) {
        hexToRgbA(hexColor);
      }
    }
  }, [data]);

  const setColorArray = (data) => {
    setData(data);
  };

  return {
    color,
    hexColor,
    lottieColor,
    darkenColor,
    setColorArray,
  };
};

export default useColorBlender;

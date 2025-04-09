import { useEffect, useState } from 'react'

const useTasteCalculator = () => {
  const [tasteData, setTasteData] = useState({})
  const [rawTaste, setRawTaste] = useState([])
  useEffect(() => {
    if (rawTaste) {
      let taste = {}
      taste.sweet =
        parseFloat(rawTaste?.reduce((x, y) => x + y?.sweet * y?.value_in_percentage, 0)) / 100
      taste.sauer =
        parseFloat(rawTaste?.reduce((x, y) => x + y?.sauer * y?.value_in_percentage, 0)) / 100
      taste.bitter =
        parseFloat(rawTaste?.reduce((x, y) => x + y?.bitter * y?.value_in_percentage, 0)) / 100
      taste.creaming =
        parseFloat(rawTaste?.reduce((x, y) => x + y?.creaming * y?.value_in_percentage, 0)) / 100
      taste.intensity =
        parseFloat(rawTaste?.reduce((x, y) => x + y?.intensity * y?.value_in_percentage, 0)) / 100
      setTasteData(taste)
    }
  }, [rawTaste])

  return {
    setRawTaste,
    tasteData,
  }
}

export default useTasteCalculator

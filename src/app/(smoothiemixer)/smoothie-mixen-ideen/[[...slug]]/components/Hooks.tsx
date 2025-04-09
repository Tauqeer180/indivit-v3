export const getFilteredIngredients = (array1, array2) => {
  return (
    array1
      // ?.filter((obj) => obj.category_id == maxOcc.element)
      ?.filter((obj) => obj.ingredient_status == 0)
      ?.filter((object1) => {
        return !array2.some((object2) => {
          return object1?.id == object2?.id
        })
      })
  )
}

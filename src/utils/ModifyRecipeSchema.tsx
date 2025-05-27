export const modifyRecipeSchema = (data, newImages = []) => {
  return JSON.parse(data?.seo_scheme).map((item) => {
    if (item['@type'] === 'Recipe') {
      const updatedItem = { ...item }

      // Update images
      if (Array.isArray(newImages) && newImages.length > 0) {
        updatedItem.image = newImages
      }

      // Update rating

      updatedItem.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: data?.ratings.toString(),
        ratingCount: data?.counts?.toString(),
      }

      return updatedItem
    }

    // Leave other schema types untouched
    return item
  })
}

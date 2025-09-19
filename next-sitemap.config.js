module.exports = {
  siteUrl: 'https://indivit.de', // Your site URL
  generateRobotsTxt: true, // Optional: generates robots.txt
  generateIndexSitemap: false,
  sourceDir: '.next', // Explicitly set source directory
  sitemapSize: 50000, // Large size to prevent splitting into multiple files
  transform: async (config, path) => {
    // Log all paths being processed
    // console.log('Processing path:', path)

    // Return null to exclude specific paths
    if (path.includes('/admin/')) {
      return null
    }

    // Default transformation
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }
  },
  exclude: [
    '/login',
    '/signup',
    '/getreset',
    '/passwort-vergessen',
    '/update_password',
    '/erfolgreich-registriert',
    '/admin/revalidate',
    '/indivit-editor',
    '/temp',
    '/warenkorb',
    '/kasse',
    '/meine-wunschliste',
    '/meine-bestellung',
    '/mein-abonnement',
    '/meine-kreationen',
    '/danke-fuer-dein-feedback',
  ],
  additionalPaths: async (config) => {
    console.log('additionalPaths called')
    try {
      // Fetch products
      const productRes = await fetch('https://admin.indivit.de/api/client/smoothie_box_description')
      console.log('Product fetch response status:', productRes.status)
      const productData = await productRes.json()
      console.log('Product API data:', productData?.data?.length, 'products found')
      const productPaths =
        productData?.data?.map((product) => ({
          loc: `/produkte/${product.slug}`,
          changefreq: 'daily',
          priority: 0.7,
          lastmod: new Date().toISOString(),
        })) || []

      // Fetch recipes
      const recipeRes = await fetch('https://admin.indivit.de/api/client/get_smoothie')
      console.log('Recipe fetch response status:', recipeRes.status)
      const recipeData = await recipeRes.json()
      console.log('Recipe API data:', recipeData?.smoothies?.length, 'recipes found')
      const recipePaths =
        recipeData?.smoothies?.map((recipe) => ({
          loc: `/rezepte/${recipe.slug}`,
          changefreq: 'daily',
          priority: 0.7,
          lastmod: new Date().toISOString(),
        })) || []

      // Fetch categories
      const categoryRes = await fetch('https://admin.indivit.de/api/client/box_category')
      console.log('Category fetch response status:', categoryRes.status)
      const categoryData = await categoryRes.json()
      console.log('Category API data:', categoryData?.data?.length, 'categories found')
      const categoryPaths =
        categoryData?.data?.map((category) => ({
          loc: `/${category.slug}`,
          changefreq: 'daily',
          priority: 0.7,
          lastmod: new Date().toISOString(),
        })) || []

      // Fetch blogs
      const blogRes = await fetch('https://admin.indivit.de/api/client/blogs')
      console.log('blog fetch response status:', blogRes.status)
      const blogData = await blogRes.json()
      console.log('blog API data:', blogData?.data?.data?.length, 'blog found')
      const blogPaths =
        blogData?.data?.data?.map((blog) => ({
          loc: `/blog/${blog.slug}`,
          changefreq: 'daily',
          priority: 0.7,
          lastmod: new Date().toISOString(),
        })) || []

      const allPaths = [...productPaths, ...recipePaths, ...categoryPaths, ...blogPaths]
      console.log('Total generated paths:', allPaths.length)
      return allPaths
    } catch (error) {
      console.error('Error in additionalPaths:', error)
      return []
    }
  },
}

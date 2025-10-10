const { PurgeCSS } = require('purgecss')
const fs = require('fs')
const path = require('path')

async function purgeUnusedCSS() {
  const purgeCSSResult = await new PurgeCSS().purge({
    content: [
      'src/**/*.{js,jsx,ts,tsx}',
      'src/**/*.html',
    ],
    css: [
      'src/assets/css/bootstrap.css',
      'src/assets/css/style.css',
      'src/assets/fontawesome/css/all.css'
    ],
    safelist: [
      /^btn/, /^modal/, /^dropdown/, /^nav/, /^carousel/, /^toast/, /^offcanvas/, /^collapse/, /^accordion/,
      /^fa/, /^fas/, /^far/, /^fab/,
      /^aos/, /^swiper/,
      /^d-/, /^m[tblrxy]?-/, /^p[tblrxy]?-/, /^text-/, /^bg-/, /^border/, /^rounded/, /^shadow/, /^position/, /^flex/, /^justify/, /^align/, /^w-/, /^h-/,
      /^col/, /^row/, /^container/, /^g-/, /^gx-/, /^gy-/,
      /^form/, /^input/, /^is-valid/, /^is-invalid/,
      /^animate/, /^transition/,
      /^glass-effect/, /^shadow-theme/, /^btn-theme/, /^btn-outline/, /^markdown/, /^no-tailwind/,
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })

  const purgedDir = path.join(__dirname, '../src/assets/css/purged')
  if (!fs.existsSync(purgedDir)) {
    fs.mkdirSync(purgedDir, { recursive: true })
  }

  purgeCSSResult.forEach((result, index) => {
    const originalFiles = ['bootstrap.css', 'style.css', 'all.css']
    const outputPath = path.join(purgedDir, `purged-${originalFiles[index]}`)
    fs.writeFileSync(outputPath, result.css)
    
    const originalSize = fs.statSync(result.file).size
    const purgedSize = Buffer.byteLength(result.css, 'utf8')
    const reduction = ((originalSize - purgedSize) / originalSize * 100).toFixed(2)
    
    console.log(`✅ ${originalFiles[index]}: ${originalSize} bytes → ${purgedSize} bytes (${reduction}% reduction)`)
  })

  console.log('🎉 CSS purging completed! Check src/assets/css/purged/ directory')
}

purgeUnusedCSS().catch(console.error)
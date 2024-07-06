const fs = require('fs-extra')
const uglifyJS = require('uglify-js')
const prependFile = require('prepend-file')

const inputFile = 'index.js' // Your source JavaScript file
const outputFile = 'output.txt' // Your minified and prepended output file
const prependText = 'javascript:'

// Read the input JavaScript file
const inputCode = fs.readFileSync(inputFile, 'utf-8')

// Minify the JavaScript code
const minifiedCode = uglifyJS.minify(inputCode).code

// Write the minified code to the output file
fs.writeFileSync(outputFile, minifiedCode)

// Prepend the text to the output file
prependFile(outputFile, prependText, (err) => {
  if (err) {
    console.error('Error prepending text:', err)
    return
  }

  console.log('File minified and text prepended successfully!')
})

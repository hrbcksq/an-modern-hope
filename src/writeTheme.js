const { writeFileSync } = require('fs')
const { AnModernHope } = require('./themes')
const getColors = require('./getColors')
const getTokenColors = require('./getTokenColors')
const palette = require('./palette')

const themeMeta = Object.assign(palette, AnModernHope)
const colors = getColors(themeMeta)
const tokenColors = getTokenColors(themeMeta)

const content = {
  colors,
  tokenColors,
}

writeFileSync('./themes/AnModernHope.json', JSON.stringify(content))

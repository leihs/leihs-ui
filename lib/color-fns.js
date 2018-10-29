import Color from 'color'

// naive, brute-force function to change hue and keep luminosity
export function ColorTint(base, tinted) {
  const baseColor = Color(base)
  const tintedColor = Color(tinted)
  const baseLumi = colorLumiRound(baseColor)

  let darkenBy = -1
  let resultColor = hslTint(baseColor, tintedColor)

  while (baseLumi !== colorLumiRound(resultColor)) {
    darkenBy += 0.001
    resultColor = hslTint(baseColor, tintedColor).darken(darkenBy)
  }
  return resultColor.string()
}

// // DEV
// const purple = '#563d7c'
// const teal = 'hsla(180, 59%, 35%, 1)'
// console.log('p-t', ColorTint(purple, teal)) // p-t hsl(180, 34.1%, 23.5%)
// console.log('t-p', ColorTint(teal, purple)) // t-p hsl(263.79999999999995, 59%, 63.2%)

// helper
function colorLumiRound(c) {
  return Math.round(c.luminosity() * 1000)
}
function hslTint(a, b) {
  const tintSaturation = b.saturationv()
  if (tintSaturation > 0) return a.hue(b.hue()).saturate(b.saturationv())
  else return a.hue(b.hue()).saturate(-1)
}

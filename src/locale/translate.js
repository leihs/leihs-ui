import f from 'lodash'
import assert from 'assert'

import translations from './translations.json'

export function Translator(selectedLocale, defaultLocale) {
  assert(defaultLocale)
  const selectedLang = selectedLocale ? selectedLocale.split('-')[0] : null
  const defaultLang = defaultLocale.split('-')[0]

  return function translate(key) {
    const fallback = `⟪${key}⟫`
    const obj = f.get(translations, key)
    if (f.isEmpty(obj)) return fallback

    return (
      getIfContent(obj, selectedLocale) ||
      getIfContent(obj, selectedLang) ||
      getIfContent(obj, defaultLocale) ||
      getIfContent(obj, defaultLang) ||
      fallback
    )
  }
}

const getIfContent = (obj, key) => {
  if (!key) return
  const content = f.get(obj, key)
  if (f.isString(content) || f.isNumber(content)) return content
}

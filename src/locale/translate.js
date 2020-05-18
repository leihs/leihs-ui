import f from 'lodash'

import translations from './translations.json'
const DEFAULT_LOCALE = 'de-CH' // not really used in app because backend already falls back to default lang for the instance

export function Translator(locales, defaultLocale = DEFAULT_LOCALE) {
  const selectedLocale = f.isString(locales)
    ? locales
    : f.get(f.find(locales, { isSelected: true }) || f.find(locales, { isDefault: true }), 'locale_name')

  const selectedLang = selectedLocale ? selectedLocale.split('-')[0] : null
  const defaultLang = defaultLocale.split('-')[0]

  return function translate(key) {
    const fallback = `⟪${key}⟫`
    const obj = f.get(translations, key)
    if (f.isEmpty(obj)) return fallback

    return firstValue([
      f.get(obj, selectedLocale),
      f.get(obj, selectedLang),
      f.get(obj, defaultLocale),
      f.get(obj, defaultLang),
      fallback
    ])
  }
}

const firstValue = list => f.find(list, i => f.isString(i) || f.isNumber(i))

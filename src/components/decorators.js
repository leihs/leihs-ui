import f from 'lodash'

// import { DateTime } from 'luxon'
// import { formatMoney } from 'accounting-js'

// import t from '../locale/translate'

const isDev = process.env.NODE_ENV !== 'production'

export const DisplayName = (o, { short = false, abbr = false } = {}) => {
  if (short && abbr) throw new Error('Invalid Options!')
  // NOTE: Checks *keys* must be present, but values can be missing.
  //       Guards against forgetting to query the keys/fields (via GraphQL)!
  const expectKeys = !isDev
    ? f.noop
    : wanted => {
        if (!isDev) return
        const missing = f.difference(wanted, Object.keys(o))
        if (missing.length > 0) throw new Error(`Missing keys! ${missing}`)
      }

  if (!o) return false

  switch (o.__typename) {
    case 'Room':
      expectKeys(['name', 'description'])
      return short || !o.description ? `${o.name}` : `${o.name} (${o.description})`

    case 'Organization':
      expectKeys(['name', 'shortname'])
      return short || !o.shortname ? `${o.shortname || o.name}` : `${o.name} (${o.shortname})`

    // TODO: check against DB/leihs core and schema
    case 'Model':
      expectKeys(['product', 'version'])
      return short || !o.version ? `${o.product}` : `${o.product} (${o.version})`

    case 'Supplier':
      expectKeys(['name'])
      return o.name

    case 'User':
      expectKeys(['firstname', 'lastname'])
      if (abbr)
        return `${o.firstname || ''} ${o.lastname || ''}`
          .split(/\W/)
          .filter(f.presence)
          .map(s => f.first(s).toUpperCase())
          .filter((s, i, a) => i < 2 || a.length - i <= 3)
          .join('')

      if (short)
        return `${f
          .filter([f.first(f.toUpper(o.firstname))])
          .concat('')
          .join('. ')}${o.lastname}`

      return `${o.firstname || ''} ${o.lastname || ''}`.trim()

    default:
      throw new Error(`DisplayName: unknown type '${o.__typename}'!`)
  }
}

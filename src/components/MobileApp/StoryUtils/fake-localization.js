export const locale = 'de-CH'
export const orderPanelTexts = {
  label: {
    quantity: { 'de-CH': 'Anzahl' },
    minus: { 'de-CH': 'Minus' },
    plus: { 'de-CH': 'Plus' },
    pool: { 'de-CH': 'Gerätepark' },
    'pool-max-amount': { 'de-CH': '{pool} (max. {amount, number})' },
    'user-delegation': { 'de-CH': 'Delegation' },
    timespan: { 'de-CH': 'Zeitraum' },
    from: { 'de-CH': 'Von' },
    until: { 'de-CH': 'Bis' }
  },
  validate: {
    'missing-quantity': { 'de-CH': 'Verfügbarkeit kann nicht geprüft werden, da die Anzahl fehlt' },
    'invalid-start-date': { 'de-CH': 'Ungültiges Beginndatum' },
    'invalid-end-date': { 'de-CH': 'Ungültiges Enddatum' },
    'start-after-end': { 'de-CH': 'Enddatum muss nach Beginndatum sein' },
    'end-date-to-late': { 'de-CH': 'Datum darf nicht nach {maxDate, date, small} sein' },
    'start-date-to-early': { 'de-CH': 'Datum darf nicht vor {minDate, date, small} sein' },
    'pool-closed-at-start-date': { 'de-CH': 'Gerätepark ist am {startDate, date, small} geschlossen' },
    'pool-closed-at-end-date': { 'de-CH': 'Gerätepark ist am {endDate, date, small} geschlossen' },
    'quantity-to-large-at-day': {
      'de-CH': 'Gegenstand ist am {startDate, date, small} nicht in der gewünschten Menge verfügbar'
    },
    'quantity-to-large-in-range': {
      'de-CH': 'Gegenstand ist in diesem Zeitraum nicht in der gewünschten Menge verfügbar'
    },
    'user-delegation-cant-be-changed-active-cart': {
      'de-CH': 'Delegation kann nicht gewechselt werden, weil schon andere Reservationen vorhanden sind.'
    }
  }
}

import localeData from '@/Second/constants/localeData'
import store from '@/Second/store'

const unicodeOffsets = {
  arabic: 1632,
  persian: 1776
}

export default (value, currencyDisplay) => {
  const val = Number(value)
  if (isNaN(val)) return value
  const { auth: { provider, user } } = store.state
  const { language, currency } = (user && user.roles && user.roles.includes('ROLE_PROVIDER_BEAUTY')) ? localeData[provider.address.countryCode || 'ES'] : localeData[provider.countryCode || 'ES']
  const currencyOptions = {
    style: 'currency',
    currencyDisplay: currencyDisplay || 'symbol',
    currency
  }

  
  let currencyValue = val.toLocaleString(language, currencyOptions)
  switch (language) {
    case localeData.EG.language:
      return handleArabicCurrency(currencyValue)
    case localeData.TH.language:
      return switchCurrencyPosition(currencyValue)
    default:
      return currencyValue
  }
}

function handleArabicCurrency (currency) {
  return currency.replace(/[\u0660-\u0669]/g, function (d) {
    return d.charCodeAt(0) - unicodeOffsets.arabic
  }).replace(/[\u06f0-\u06f9]/g, function (d) {
    return d.charCodeAt(0) - unicodeOffsets.persian
  }).replace('ج.م.', localeData.EG.symbol)
}

function switchCurrencyPosition (currency) {
  return currency.slice(1) + currency.charAt(0)
}

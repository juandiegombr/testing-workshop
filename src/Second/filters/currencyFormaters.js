import localeData from '@/Second/constants/localeData'
const unicodeOffsets = {
  arabic: 1632,
  persian: 1776
}

export function handleArabicCurrency (currency) {
  return currency.replace(/[\u0660-\u0669]/g, function (d) {
    return d.charCodeAt(0) - unicodeOffsets.arabic
  }).replace(/[\u06f0-\u06f9]/g, function (d) {
    return d.charCodeAt(0) - unicodeOffsets.persian
  }).replace('ج.م.', localeData.EG.symbol)
}

export function switchCurrencyPosition (currency) {
  return currency.slice(1) + currency.charAt(0)
}

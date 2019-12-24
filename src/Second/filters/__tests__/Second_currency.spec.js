import currency from '@/Second/filters/currency'
import * as currencyFormaters from '@/Second/filters/currencyFormaters'
import store from '@/Second/store'

// Ejemplo sobre la dificultad de testear funciones muy acopladas

it('Format with default currency options', () => {
  let value = 600.60
  const spy = jest.spyOn(value.__proto__, 'toLocaleString')

  currency(value)
  
  expect(spy).toHaveBeenCalledTimes(1)
  expect(spy).toHaveBeenCalledWith('es-ES', {
    style: 'currency',
    currencyDisplay: 'symbol',
    currency: 'EUR'
  })
})

it.skip('Step 01: Format with Egypt currency options', () => {
  let value = 600.60
  const spy = jest.spyOn(value.__proto__, 'toLocaleString')

  currency(value)

  expect(spy).toHaveBeenCalledTimes(1)
  expect(spy).toHaveBeenCalledWith('ar-EG', {
      style: 'currency',
      currencyDisplay: 'symbol',
      currency: 'EGP'
    })
})

it.skip('Step 02: Format with Egypt currency options', () => {
  // Para poder testear la función con otros parámetros, debemos actualizar la store
  
  let value = 600.60
  const spy = jest.spyOn(value.__proto__, 'toLocaleString')
  store.commit('auth/setProvider', { countryCode: 'EG' })

  currency(value)

  expect(spy).toHaveBeenCalledTimes(1)
  expect(spy).toHaveBeenCalledWith('ar-EG', {
    style: 'currency',
    currencyDisplay: 'symbol',
    currency: 'EGP'
  })
})

it.skip('Final: Format with Egypt currency options', () => {
  // Para poder comprobar que se llama a la función de formato adecuada, debemos extraerla a
  // otro módulo que nos permita generar un spy
  // Debemos refactorizar el módulo currency
  
  let value = 600.60
  const spy = jest.spyOn(value.__proto__, 'toLocaleString')
  const arabicFormaterSpy = jest.spyOn(currencyFormaters, 'handleArabicCurrency')
  store.commit('auth/setProvider', { countryCode: 'EG' })

  currency(value)
  
  expect(arabicFormaterSpy).toHaveBeenCalledTimes(1)
  expect(spy).toHaveBeenCalledTimes(1)
  expect(spy).toHaveBeenCalledWith('ar-EG', {
    style: 'currency',
    currencyDisplay: 'symbol',
    currency: 'EGP'
  })
})

// afterEach(() => {
//   jest.clearAllMocks()
// })
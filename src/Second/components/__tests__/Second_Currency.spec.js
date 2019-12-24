import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/vue'

import Currency from '@/Second/components/Currency'
import filters from '@/Second/filters'

import { store } from '@/Second/store'

const renderWithFilter = (props, cb) => {
  const options = {
    store,
    props
  }
  const callback = (vue, store) => {
    vue.filter('currency', filters.currency)
    if (cb) {
      cb(vue, store)
    }
  }
  return render(Currency, options, callback)
}

it('Render', () => {
  const { getByText } = renderWithFilter()

  expect(getByText(/€500.00/)).toBeInTheDocument()
})

it('Render Egypt', () => {
  const { getByText } = renderWithFilter(null, (vue, store) => store.commit('auth/setProvider', { countryCode: 'EG' }))

  expect(getByText(/EGP 500.00/)).toBeInTheDocument()
})

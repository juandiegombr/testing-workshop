import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/vue'

import App from '../App'
import { routes } from '../router'
import { store } from '../store'
import VueI18n from 'vue-i18n'
import messages from '../i18n/messages'

const renderApp = () => {
  return render(App, { store, routes }, (vue, store, router) => {
    router.push('/login')
    vue.use(VueI18n)

    const i18n = new VueI18n({
      locale: 'en',
      fallbackLocale: 'en',
      messages
    })

    // Notice how we return an object from the callback function. It will be
    // merged as an additional option on the created Vue instance.
    return {
      i18n
    }
  })
}

jest.spyOn(Storage.prototype, 'setItem')

afterEach(() => {
  localStorage.setItem.mockClear()
})

it('Render App', async () => {
  const { getByText, getByLabelText } = renderApp()
  const user = {
    username: 'juandiego@mrjeffapp.com',
    password: 'contraseña',
  }
  await fireEvent.update(getByLabelText(/username/i), user.username)
  await fireEvent.update(getByLabelText(/password/i), user.password)

  expect(getByText(messages.en.welcome)).toBeInTheDocument()

  await fireEvent.click(getByText(/submit/i))

  expect(getByText(messages.es.welcome)).toBeInTheDocument()
  expect(getByText(/juandiego/i)).toBeInTheDocument()
  expect(getByText(/contraseña/i)).toBeInTheDocument()
  expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String))
})

import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, wait } from '@testing-library/vue'

import App from '../App'
import { routes } from '../router'
import { store } from '../store'
import VueI18n from 'vue-i18n'
import messages from '../i18n/messages'
import axios from 'axios'

import authService from '@/Third/services/auth'

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

it('Step 1: Login success', async () => {
  const { getByText, getByLabelText } = renderApp()
  const user = {
    username: 'juandiego@mrjeffapp.com',
    password: 'temporal'
  }
  await fireEvent.update(getByLabelText(/username/i), user.username)
  await fireEvent.update(getByLabelText(/password/i), user.password)

  expect(getByText(messages.en.welcome)).toBeInTheDocument()

  await fireEvent.click(getByText(/submit/i))
  await wait(() => getByText(messages.es.welcome))

  expect(getByText(messages.es.welcome)).toBeInTheDocument()
  expect(getByText(/juandiego/i)).toBeInTheDocument()
  expect(getByText(/juan diego apell/i)).toBeInTheDocument()
})

jest.spyOn(Storage.prototype, 'setItem')

afterEach(() => {
  jest.clearAllMocks()
})

it('Step 2: Login success with spies', async () => {
  const { getByText, getByLabelText } = renderApp()
  const user = {
    username: 'juandiego@mrjeffapp.com',
    password: 'temporal'
  }
  const axiosMock = jest.spyOn(axios, 'post')
  const loginSpy = jest.spyOn(authService, 'login')
  await fireEvent.update(getByLabelText(/username/i), user.username)
  await fireEvent.update(getByLabelText(/password/i), user.password)

  expect(getByText(messages.en.welcome)).toBeInTheDocument()

  await fireEvent.click(getByText(/submit/i))
  await wait(() => getByText(messages.es.welcome))
  expect(axiosMock).toHaveBeenCalledTimes(1)
  expect(loginSpy).toHaveBeenCalledTimes(1)
  expect(loginSpy).toHaveBeenCalledWith({
    username: expect.any(String),
    password: expect.any(String)
  })
  expect(axiosMock).toHaveBeenCalledWith(
    'https://backoffice.v1.backend.dev.mrjeffapp.net/user-service/v1/auth/jwt/generate',
    {
      username: expect.any(String),
      password: expect.any(String)
    }
  )
  expect(getByText(messages.es.welcome)).toBeInTheDocument()
  expect(getByText(/juandiego/i)).toBeInTheDocument()
  expect(getByText(/juan diego apell/i)).toBeInTheDocument()
  expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String))
})

it('Step 2: Login error', async () => {
  const { getByText, getByLabelText } = renderApp()
  const user = {
    username: 'juandiego@mrjeffapp.com',
    password: 'temporal'
  }
  const axiosMock = jest.spyOn(axios, 'post').mockImplementation(() => {
    return Promise.reject(new Error('401'))
  })

  await fireEvent.update(getByLabelText(/username/i), user.username)
  await fireEvent.update(getByLabelText(/password/i), user.password)

  expect(getByText(messages.en.welcome)).toBeInTheDocument()

  await fireEvent.click(getByText(/submit/i))
  await wait(() => getByText(messages.en.error))

  expect(axiosMock).toHaveBeenCalledTimes(1)
  expect(axiosMock).toHaveBeenCalledWith(
    'https://backoffice.v1.backend.dev.mrjeffapp.net/user-service/v1/auth/jwt/generate',
    {
      username: expect.any(String),
      password: expect.any(String)
    }
  )

  axiosMock.mockRestore()
})

it('Step 2: Login success with spies again to check the restore', async () => {
  const { getByText, getByLabelText } = renderApp()
  const user = {
    username: 'juandiego@mrjeffapp.com',
    password: 'temporal'
  }
  const axiosMock = jest.spyOn(axios, 'post')
  const loginSpy = jest.spyOn(authService, 'login')
  await fireEvent.update(getByLabelText(/username/i), user.username)
  await fireEvent.update(getByLabelText(/password/i), user.password)

  expect(getByText(messages.en.welcome)).toBeInTheDocument()

  await fireEvent.click(getByText(/submit/i))
  await wait(() => getByText(messages.es.welcome))
  expect(loginSpy).toHaveBeenCalledTimes(1)
  expect(loginSpy).toHaveBeenCalledWith({
    username: expect.any(String),
    password: expect.any(String)
  })
  expect(axiosMock).toHaveBeenCalledTimes(1)
  expect(axiosMock).toHaveBeenCalledWith(
    'https://backoffice.v1.backend.dev.mrjeffapp.net/user-service/v1/auth/jwt/generate',
    {
      username: expect.any(String),
      password: expect.any(String)
    }
  )
  expect(getByText(messages.es.welcome)).toBeInTheDocument()
  expect(getByText(/juandiego/i)).toBeInTheDocument()
  expect(getByText(/juan diego apell/i)).toBeInTheDocument()
  expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String))
})

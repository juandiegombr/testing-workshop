import Customer from '../Customer'

describe('Customer Model', () => {
  const build = data => new Customer(data)

  it('Get name from Model', () => {
    let customerData = customerExample()

    let customer = build(customerData)

    expect(customer.name).toBe('Rafael')
  })

  it('Get Full Name from Model', () => {
    let customerData = customerExample()

    let customer = build(customerData)

    expect(customer.fullName).toBe('Rafael Vergara González')
  })

  it('Get Address from model', () => {
    let customerData = customerExample()

    let customer = build(customerData)

    expect(customer.address).toEqual({
      name: 'Cronista Carreres',
      lat: 90.90909,
      lng: -10.10101
    })
  })

  it('v2 - Get Address from model', () => {
    let customerData = customerExample()
    let customer = build(customerData)

    expect(customer.address).toMatchInlineSnapshot(`
      Object {
        "lat": 90.90909,
        "lng": -10.10101,
        "name": "Cronista Carreres",
      }
    `)
  })

  it('Get address from model if is false', () => {
    let customerData = customerExample()
    customerData.address = false
    let customer = build(customerData)

    expect(customer.address).toBeFalsy()
  })

  it('v2 - Get address from model if is false', () => {
    const customer = buildCustomer({ address: false })

    expect(customer.address).toBeFalsy()
  })

  it('v2 - Has invalid email', () => {
    const customer = buildCustomer({ email: 'invalidemail' })

    expect(customer.invalidEmail()).toBeTruthy()
  })

  it('v2 - Has invalid phone', () => {
    const customer = buildCustomer({ phone: 'invalidphone' })
    
    expect(customer.invalidPhone()).toBeTruthy()
  })
  
  it('v2 - Check customer methods', () => {
    const customer = buildCustomer()

    expect(customer.fullName).toBe(`${customerData.name} ${customerData.lastName}`)
    expect(customer.invalidEmail()).toBeFalsy()
    expect(customer.invalidPhone()).toBeFalsy()
  })
})


const customerData = {
  name: 'Rafael',
  lastName: 'Vergara González',
  active: true,
  email: 'rafael.vergara@mrjeffapp.com',
  phone: '666666666',
  address: {
    name: 'Cronista Carreres',
    lat: 90.90909,
    lng: -10.10101
  }
}

const customerExample = () => {
  return {
    name: 'Rafael',
    lastName: 'Vergara González',
    active: true,
    email: 'rafael.vergara@mrjeffapp.com',
    phone: '666666666',
    address: {
      name: 'Cronista Carreres',
      lat: 90.90909,
      lng: -10.10101
    }
  }
}



const buildCustomer = (data = {}) => {
  const customer = {
    ...customerData,
    ...data
  }
  return new Customer(customer)
}

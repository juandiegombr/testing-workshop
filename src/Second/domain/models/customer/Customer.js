import REGEXP from '@/Second/constants/regexp'

export default class Customer {
  constructor (customerData) {
    this.id = customerData.id
    this.name = customerData.name
    this.lastName = customerData.lastName
    this.active = customerData.active
    this.email = customerData.email
    this.phone = customerData.phone
    this.address = customerData.address
    this.localIdentificationNumber = customerData.localIdentificationNumber
    this.subscription = customerData.subscription
  }

  get fullName () {
    return `${this.name || ''} ${this.lastName || ''}`
  }

  invalidEmail () {
    return this.email && !this.email.match(REGEXP.email)
  }

  invalidPhone () {
    return this.phone && !this.phone.match(REGEXP.phone)
  }
}

export default class Address {
  constructor (addressData) {
    this.id = addressData.id
    this.alias = addressData.alias
    this.address = addressData.address
    this.addressNumber = addressData.addressNumber
    this.addressDetails = addressData.addressDetails
    this.countryName = addressData.countryName
    this.countryCode = addressData.countryCode
    this.postalCode = addressData.postalCode
    this.latitude = addressData.latitude
    this.longitude = addressData.longitude
  }

  get name () {
    return this.address
  }

  get lat () {
    return this.latitude
  }

  get lng () {
    return this.longitude
  }
}

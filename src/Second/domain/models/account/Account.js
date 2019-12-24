class Account {
  constructor (account) {
    this.id = account.id || ''
    this.completeName = account.completeName || ''
    this.name = account.name || ''
    this.lastName = account.lastName || ''
    this.department = account.department || ''
    this.locale = account.locale || ''
    this.enabled = account.enabled || ''
    this.creationDate = account.creationDate || ''
    this.accountAttributes = account.accountAttributes || []
    this.email = account.email || ''
    this.roles = account.roles || {}
  }
}

export default Account
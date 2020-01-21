import Account from '../Account'

it('Account', () => {
  const account = {
    id: 'id',
    completeName: 'completeName',
    name: 'name',
    lastName: 'lastName'
  }

  const accountCreated = new Account(account)

  expect(accountCreated).toMatchInlineSnapshot(`
    Account {
      "aa": "",
      "accountAttributes": Array [],
      "completeName": "completeName",
      "creationDate": "",
      "department": "",
      "email": "",
      "enabled": "",
      "id": "id",
      "lastName": "lastName",
      "locale": "",
      "name": "name",
      "roles": Object {},
    }
  `)
})

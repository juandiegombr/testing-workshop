import Account from '../Account'

it('Account', () => {
  const account = {
    id: 'id',
    completeName: 'completeName',
    name: 'name',
    lastName: 'lastName'
  }
  expect(new Account(account)).toMatchInlineSnapshot(`
    Account {
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

## Steps:

1. Run `npm i`
2. Start the server `npm start`
3. Change the yaml file:

Example:

Change the parameter `name` to be `required`

```yaml
parameters:
  name:
    name: name
    in: query
    description: 'Name to search'
    example: Tiago
    schema:
      type: string
    required: true
```

Change the schema `UserDto`, adding the `phoneNumber`, like:

```yaml
UserDto:
  type: object
  required:
    - pk
    - estado
    - login
    - nome
    - perfis
    - phoneNumber
  properties:
    pk:
      type: integer
      format: int64
    login:
      type: string
    nome:
      type: string
    email:
      type: string
    phoneNumber:
      type: string
```

4. Run `npm run generate:interfaces`

After that, the previous generated methods from implementing the old interface don't get errors or warnings saying the changes made. `src/controllers/userController.ts`

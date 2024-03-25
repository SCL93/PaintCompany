# Paint Company

Paint Store is a mobile friendly web application built with

- Frontend: React, Vite
- Backend: JS, Express, Node, MongoDB

## Local Setup

Configure ENV port + MongoDB URL.

Preload MongoDB with Default DB "Project" and collections "users".

Then add in a user based on this schema (this will be your initial login user):

```bash
{
  "username": "user",
  "password": "password",
  "role": 3
}
```

Roles are mapped to permissions in the front-end:

- 1 = view (view paints)
- 2 = view/edit (view/add/edit/delete paints)
- 3 = admin (view/add/edit/delete users)

Startup commands:

```bash
npm install

# start front end
npm run dev
# start back end
npm start
```

## Future TODOs

- JWT based authentication + session management
- Use bcrypt for password hashing/validation
- Refactor APIs
- Toasts for "success" or "error" responses

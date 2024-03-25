# Paint Company

Paint Store is a mobile friendly web application built with

- Frontend: React, Vite
- Backend: JS, Express, Node, MongoDB

Deployed using Render: https://paintcompany-frontend.onrender.com/
(configurations saved, autodeployment for every github commit)

## LOGIN

For each user story a different user was created. Please use the below logins:

John (view)
- username: john
- password: password

Jane (view/edit)
- username: jane
- password: password

Painters (view/edit)
- username: painter
- password: password

Adam (admin)
- username: adam
- password: password


## Local Setup

Configure ENV port + MongoDB URL + replace frontend axios calls with Localhost

Preload MongoDB with Default DB "Project" and collections "users".

Then add in a user based on this schema (this will be your initial login user):

```bash
{
  "username": "user",
  "password": "password",
  "role": 3
}
```


## Future TODOs

- JWT based authentication + session management
- Use bcrypt for password hashing/validation
- Refactor APIs

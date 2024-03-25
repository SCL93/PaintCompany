# Paint Company

Paint Store is a mobile friendly web application built with

- Frontend: React, Vite
- Backend: JS, Express, Node, MongoDB

Deployed using Render: https://paintcompany-frontend.onrender.com/

(env and build configurations saved on Render, set autodeployment for every github commit)

## LOGIN + STORY POINTS

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
  

Permission based page views and API use.

Dynamic background colours for Paint Cards to represent "Swim Lanes" for which product are In-stock/low-stock/out-of-stock

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

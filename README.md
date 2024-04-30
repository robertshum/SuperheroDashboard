# Superhero Dashboard 🦸‍♀️🦸‍♂️

Front-end React Dashboard that allows the administrator to add, remove, delete, update (CRUD) operations on Superheroes and any associated super powers they may have.\
\
This project is the front-end which requires the API that I have also built found here (SuperHero API): https://github.com/robertshum/SuperHeroAPI

# Youtube Demo

[![Youtube demo](https://img.youtube.com/vi/YknHs4OsbhU/0.jpg)](https://www.youtube.com/watch?v=YknHs4OsbhU)

# Features

* UI to support all CRUD operations for superheroes and powers.
* Filter powers and superheroes by their name.
* Easy toggle on/off of powers when creating/editing heroes.
* Simple analytics on the main page (dashboard).
* Responsive design (thanks to Daisy + Tailwind).
* Dark/Light mode.

## Tech Stack

- Front-end:
  - React
  - Vite
  - Daisy UI
  - Tailwind CSS
  - React Query

- Back-end:
  - .Net 8.0
  - EF Core
  - NUnit
  - Moq
  - Swagger (OpenAPI)
  - MySQL (hosted locally)
  - See here for details: https://github.com/robertshum/SuperHeroAPI

## Screenshots

Admin dashboard with simple analytics
![Dashboard](./images/dashboard1.png)
Responsive layout
![Dashboard - Responsive](./images/dashboard_responsive.png)
List all superheroes
![Superheroes](./images/heroes.png)
Create new hero
![Create new hero](./images/new_heroes.png)
List all powers
![Powers](./images/powers.png)
Responsive layout
![Superheroes - Responsive](./images/superheroes_responsive.png)
Light mode - Dashboard
![Light mode - Dashboard](./images/lightmode1.png)
Light mode - List of Heroes
![Light mode - Heroes](./images/lightmode2.png)

## Installation (Front-end)
1. Clone repo
2. Go inside project folder
3. ```npm install```
4. Configure the .env to point the API to your back-end API
5. ```npm run dev```

# License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
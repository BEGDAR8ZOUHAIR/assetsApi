# Compte rendu de l'événement Google Developers Group (DEVFEST 2022) El Jadida 17-12-2022 :

https://docs.google.com/presentation/d/1bkmuSkElq_7pLptG7KC_qn3817yDXrjGScwJo7inKmI/edit?usp=sharing

# Create a prject  MERN Stack :
- backend : Nodejs, Expressjs, MongoDB , Mongoose, Bcryptjs, Jsonwebtoken, Cors
- frontend : Reactjs, ReduxToolkit, Bootstrap, React-toastify

  <h3 align="center">README-Template</h3>




### GOALDAY




## Table of Contents

- [Certifications](#certifications)
- [Commande line ](#Commande_line )
- [Usage](#Usage)
- [Directory Structure](#Directory_Structure)
- [API Endpoints](#API_Endpoints)

 <!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
        <li>
      <a href="#certifications">certifications</a>
        </li>
        <li>
          <a href="#commandeline">commandeline</a>
      </li>
      <li>
        <a href="#built">built</a>
      </li>
   
   </ol>
 </details>

# Introduction

Create a maintainable and scalable Node.js REST API with Express and Mongoose.

The structure of the project is based on MVC and follows its basic principles but is a little different in that instead of having the logic of entities distributed in specific folders (models folder containing all models, controllers folder containing all controllers etc...).

Each entity has it's own folder containing all it's core logic . Let's take the `User` entity as an example:

```
backend
└── entities
    └── controllers
        ├── userController.js
    └── models
        ├── userModel.js 
    └── routes
         └── userRouter.js
```

Thanks to this structure, it is easier to maintain and evolve multiple entities (you will rarely have to switch from one folder to another to manage an entity).

The project comes with many built-in features, such as:

- Authentication with [JWT](https://www.npmjs.com/package/jsonwebtoken): providing both an access token and a refresh token (sent as a secure http cookie only and stored in the database).
- Unified login system to support multiple user roles.
- Validation using [nodemailer](https://nodemailer.com/).
- Error handling and custom error capture method.
- Optional population, selection of fields to fill and fields to return by GET requests.

Translated with www.DeepL.com/Translator (free version)
- Plus de détails ci-dessous...
### Certifications



### Built With
This section should list all the major frameworks/libraries used to launch your project. Leave the add-ons/plugins for the acknowledgements section. Here are some examples.

* [![express][express.js]][express-url]

### Commande line 
```sh
npm init
```

# Setup

## Usage

*By default, it uses `npm` to install dependencies.

- If you prefer another package manager you can pass it as an argument `yarn`

Then open the project folder and install the required dependencies:

```bash
npm init
```
```bash
npm install express
```


[Back to table of Contents](#table-of-contents)

## Configuration

Setup your environment variables. In your root directory, you will find a `.env`:

```
 .env
```

Then:

```bash
npm  start
```

The database must be connected and your server must be running. You can start testing and querying the API.

```bash
npm run start
```

[Back to top](#table-of-contents)

# Directory Structure

```
backend/
├──controllers/                 # Contains mostly global and reusable logic (such as auth and crud)
├── db/                         # Database, routes and server configurations
├── middlewares/                # Express middlewares
├── routes                      # Contains entity templates (default and user type)
├── models/                     # Custom/global type definitions
└── index.ts                    # App entry point (initializes database connection and express server)
```

[Back to table of Contents](#table-of-contents)


# Features

## API Endpoints

List of available routes:

**Auth routes** (public):\
`POST /api/register` - register\
`POST /api/login` - login\

**User routes** (private):\
`GET /api/users` - get all users\
`GET /api/users/:id` - get user by id\
`PATCH /api/users/:id` - update user\
`DELETE /api/users/:id` - delete user


[Back to table of Contents](#table-of-contents)

<h2 id="credits"> :scroll: Credits</h2>

 ZOUHAIR BEGDAR

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/BEGDAR8ZOUHAIR)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/zouhair-begdar//)








 

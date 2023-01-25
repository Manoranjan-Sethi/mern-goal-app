# MERN GOAL APP

## Description:

A simple goal setting application with user authentication and authorization where they can set their goals with timestamp and delete later.

## Some snapshots of the UI

# Register Page

![Screenshot_20230125_095047](https://user-images.githubusercontent.com/84295391/214479550-5052d4c9-36ad-4574-9767-a76a8a02129a.png)

# Login Page

![Screenshot_20230125_095059](https://user-images.githubusercontent.com/84295391/214479560-78d9e457-fe36-4102-b650-d0f8dc92f2e9.png)

# Dashboard Page

![Screenshot_20230125_095120](https://user-images.githubusercontent.com/84295391/214479578-58fc3f7e-1c76-4904-943a-d14413ce5d5c.png)


## Tech Stacks:

    1) Front-end:
        * React (HTML5, JS, CSS3)
        * React
        * Redux-Toolkit (redux-thunk)

    2) Back-end:
        * Node
        * Express
        * Mongoose (server-databse)
        * JWT
        * bcrypt
        * www.render.com (To Deploy Server)

    3) DataBase:
        * MongoDB (MongoDB Atlas)

## Dependencies:

### Front-end

    1) react
    2) react-dom
    3) react-scripts
    4) react-router-dom
    5) react-icons
    6) axios
    7) redux-toolkit, redux thunks

### Backend

    1) express
    2) cors
    3) dotenv
    4) mongoose
    5) nodemon
    6) JWT
    7) bcrypt

## Setting Up Project in local

### Frontend

#### 1) Setting up node environment

    1) navigate to Front-end directory
    2) use node version 16 or higher. version 18 is recommended
    3) run command npm install

#### 2) Starting frontend on localhost

(make sure you are confirming url of server)

    npm run client

#### 3) Making Production ready folder

    npm run build

### Server

#### 1) Setting up node environment

    1) navigate to Back-end directory
    2) use node version 16 or higher. version 18 is recommended
    3) run command npm install

#### 1) Starting Server in deployment

    npm start

#### 1) Starting Server with nodemon on locahost

    npm run server

### Database: MongoDB

#### 1) Atlas

    in .env file provide MONGODB_URL with proper credentials

#### 2) Local database

    if MONGODB_URL not declared in .env, by default it will connect to local data base

    in case not working try changing MONGODB_URL in Back-end/config/db.js

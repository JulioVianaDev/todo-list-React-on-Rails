# Guide to using the project

## First clone this repository

```git clone git@github.com:JulioVianaDev/todo-list-React-on-Rails.git```

# Backend

### For upload this backend, you need first have in your computer the following items

```
    * ruby 3.1.2 but you can change if you want
    * postgresql 
```

## 1 In your main directory create your database (CMD or terminal)

### Remember your postgresql username and password  in config/database.yml

``` rails db:create db:migrate ```

## 2 run your server (CMD or terminal)

``` rails s -p 3001 ```

# Frontend (CMD or terminal)

## 1 In main directory enter the folder /frontend 

``` cd frontend ```

## 2 Install dependencies

``` npm install ```

## 3 Run the frontend 

``` npm start ```

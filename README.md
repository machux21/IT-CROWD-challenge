
# Products APP

A great product listing application with the ability to log in and manage all CRUD operations.


## Features

 - Login and Register for Admin Section
 - Logout
 - Products:
      
    - List all products
    - Create new products
    - Update products
    - Delete products
    - Pagination
    - Product detail
 - Brands:
    - Create a new brand 
    - Update a new brand


## Tech Stack

**Client:** React, React Router, Vite, Styled Components, Axios

**Server:** Node, Express, JSON Web tokens, Bcrypt, Sequelize, PostgreSQL


## Deploy Links

- *Frontend*: https://friendly-khorana-d46c86.netlify.app/
- *Backend*: https://it-crowd-challenge.herokuapp.com/

## API Reference

#### Get all products

```http
  GET /products
```

| Description                |
| :------------------------- |
| **Returns all products with their respective brands**|

#### Get product by id

```http
  GET /products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Create product

```http
  POST /products
```

| Body     | Description                       |
| :------- | :-------------------------------- |
| `object` | **Authentication required**. Object must contain name, image_url, description, price, brand (name)  |

#### Update product
```http
  PUT /products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Authentication required**. Object must contain name, image_url, description, price, brand (name)|


#### Delete product
```http
  DELETE /products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Authentication required**.|

#### Get brands
```http
  GET /brands
```

| Description                       |
| :-------------------------------- |
| **Returns all brands**.|


#### Create brand
```http
  POST /brands
```

| Description                       |
| :-------------------------------- |
|**Authentication required**. You must send an object with name and logo_url properties.|

#### Update brand
```http
  PUT /brands/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Authentication required**. You must send an object with name and logo_url properties. |

#### Register Admin
```http
  POST /admin/register
```

| Description                       |
| :-------------------------------- |
| You must send an object with username and password properties. |

#### Login Admin
```http
  POST /admin/login
```

| Description                       |
| :-------------------------------- |
| You must send an object with username and password properties. **This return the authorization token**|

## Environment Variables

To run this project, first you need to create a database "ecommerce" in Postgres, then you will need to add the following environment variables to your .env file in /api folder


`DB_USER` 
`DB_PASSWORD`
`DB_HOST`
`SECRET (jsonwebtoken)`



## Run Locally

Clone the project

```bash
  git clone https://github.com/machux21/IT-CROWD-challenge.git
```

Go to the project directory

```bash
  cd IT-CROWD-challenge
```

Install dependencies on both client and api folders

```bash
  npm install
```

**api**: start the server 

```bash
  npm start
```
**client**: start the server 

```bash
  npm run dev
```


## Authors

- [@machux21](https://www.github.com/machux21)


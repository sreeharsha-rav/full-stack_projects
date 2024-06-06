# E-Commerce Backend

A simple backend for an e-commerce website. It's a monolithic backend service that has the following features:
- View all products
- View all orders
- Place an order

## Technologies

- Java 17
- Spring Boot
- H2 Database

## Development

### Data Model

#### Product

| Field      | Type   |
|------------|--------|
| id         | Long   |
| name       | String |
| pictureUrl | String |
| price      | Double |

#### Orders

| Field       | Type            |
|-------------|-----------------|
| id          | Long            |
| dateCreated | LocalDate       |
| status      | String          |

#### OrderItem

| Field     | Type    |
|-----------|---------|
| productID | Long    |
| orderID   | Long    |
| quantity  | Integer |

### Endpoints

#### Products

- `GET /api/products`: Get all products
  - Response:
    ```json
    [
      {
        "id": 1,
        "name": "Product 1",
        "pictureUrl": "https://example.com",
        "price": 100.0
      }
    ]
    ``` 
    
- `POST /api/orders`: place an order
  - Request:
    ```json
    {
      "orderItems": [
        {
          "product": {
            "id": 1,
            "name": "Product 1",
            "pictureUrl": "https://example.com",
            "price": 100.0
          },
           "quantity": 2
        },
        {
          "product": {
            "id": 2,
            "name": "Product 2",
            "pictureUrl": "https://example.com",
            "price": 50.0
          },
          "quantity": 1
        }
      ]
    }
    ``` 
    - Response:
      ```json
        {
          "orderItems":  [
            {
              "quantity": 2,
              "product": {
                "id": 1,
                "name": "Product 1",
                "pictureUrl": "https://example.com",
                "price": 100.0
              },
              "totalPrice": 200.0
            },
            {
              "quantity": 1,
              "product": {
                "id": 2,
                "name": "Product 2",
                "pictureUrl": "https://example.com",
                "price": 50.0
              },
              "totalPrice": 50.0
            }
          ],
          "id": 1,
          "dateCreated": "10/10/2021",
          "status": "PAID",
          "numberOfItems": 3,
          "totalPrice": 250.0
        }
      ```
      
- `GET /api/orders`: Get all orders
  - Response:
    ```json
    [
      {
        "orderItems":  [
          {
            "quantity": 2,
            "product": {
              "id": 1,
              "name": "Product 1",
              "pictureUrl": "https://example.com",
              "price": 100.0
            },
            "totalPrice": 200.0
          },
          {
            "quantity": 1,
            "product": {
              "id": 2,
              "name": "Product 2",
              "pictureUrl": "https://example.com",
              "price": 50.0
            },
            "totalPrice": 50.0
          }
        ],
        "id": 1,
        "dateCreated": "10/10/2021",
        "status": "PAID",
        "numberOfItems": 3,
        "totalPrice": 250.0
      }
    ]
    ```
    
## Future Improvements

- Add authentication and user management
- Add more features to products like search, filter, create etc.
- Add more features to order items like update quantity, remove etc.
- Add more features to orders like cancel, update, etc.
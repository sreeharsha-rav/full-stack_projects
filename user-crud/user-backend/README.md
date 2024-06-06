# User Backend

A simple user CRUD with a REST API. It uses Spring Boot, Spring Data JPA, and H2 database.

## Development

### Data Model

#### User

| Field | Type   | Description |
|-------|--------|-------------|
| id    | Long   | User ID     |
| name  | String | User name   |
| email | String | User email  |

### REST API

- `GET /users`: List all users
- `GET /users/{id}`: Get a user by ID
- `POST /users`: Create a new user
- `PUT /users/{id}`: Update a user by ID
- `DELETE /users/{id}`: Delete a user by ID

## Running the Application

### Prerequisites

- Java 17
- Maven
- IDE (IntelliJ IDEA, Eclipse, etc.)
- Postman or any other REST client

### Installation

1. Run the Spring Boot application
    - Use the following command to run the application:
    ```
    mvn spring-boot:run
    ```
2. Test the endpoints using Postman or any other REST client
    - List all users: `GET http://localhost:8080/users`
    - Get a user by ID: `GET http://localhost:8080/users/{id}`
    - Create a new user: `POST http://localhost:8080/users`
    - Update a user by ID: `PUT http://localhost:8080/users/{id}`
    - Delete a user by ID: `DELETE http://localhost:8080/users/{id}`

## Further Improvements

- Add validation for user fields
- Add pagination and sorting for listing users
- Add exception handling
- Test the application
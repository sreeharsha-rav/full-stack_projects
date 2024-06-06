# User CRUD

A simple full-stack CRUD application for user management. The application is built using the Angular framework for the front-end and the Spring Boot framework for the back-end. It uses H2 in-memory database for data storage. It has the following features:
- View a list of users
- Add a user
- Update a user
- Delete a user

## Technologies

- Angular 17
- TypeScript
- Java 17
- Spring Boot 3.3.0
- H2 Database

## Getting Started

### Prerequisites

- Node.js
- Angular CLI
- Java
- Maven
- pnpm (optional)
- IDE (IntelliJ IDEA, VSCode, etc.)

### Installation

1. Clone the repository
2. Open the project in your IDE
3. Navigate to `user-backend` directory and run the Spring Boot application
    - Install the dependencies using the following command:
    ```
    mvn install
    ```
    - Run the Spring Boot application:
    ```
    mvn spring-boot:run
    ```
4. Navigate to `user-frontend` directory and run the Angular application
    - Install the dependencies using the following command:
    ```
    pnpm install
    ```
    - Run the Angular application:
    ```
    ng serve
    ```
5. Open your browser and navigate to `http://localhost:4200/`
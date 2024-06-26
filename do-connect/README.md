# DoConnect

A question and answer forum where users can ask questions and get answers from other users. Users can also answer questions asked by other users.

## Features

- Users can create an account and log in.
- Users can ask questions.
- Users can answer questions.
- Users can view questions and answers.
- Questions are categorized into topics.

## Technologies Used

- Angular 17
- Java 17
- Spring Boot 3.2.4
- MySQL Workbench 8.0

## Running Environment

- IDE: IntelliJ IDEA for backend and Visual Studio Code for frontend
- Database: MySQL Workbench

## Setup Instructions

1. Clone the repository
2. Open the project in your IDE
    - Set up the MySQL database by running the `do_connect.sql` script from `do-connect-backend` in MySQL Workbench.
    - For the backend, navigate to the `do-connect` directory under `do-connect-backend` and run the `DoConnectApplication` class.
        - The backend will run on `http://localhost:8080`.
    - For the frontend, navigate to the `do-connect` directory under `do-connect-frontend` and run the following commands:
        - `pnpm install`
        - `ng serve`
3. Run the project
    - Open your browser and navigate to `http://localhost:4200`.

## Future Improvements

- Secure user authentication and authorization by defining localStorage and session storage.
- Implement user roles.
- Implement user notifications.
- Implement attaching images to questions and answers.
- Implement direct messaging between users.
- Break down the monolithic architecture into microservices.

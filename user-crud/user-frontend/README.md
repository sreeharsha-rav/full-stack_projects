# User-Frontend

A simple single-page application for user management. The application is built using the Angular 17 and Material UI. It has the following features:
- View a list of users in a table
- Add a new user through a popup form
- Update an existing user through a popup form
- Delete a user

## Development

### Project Structure

Main files and directories:
```
src/                               # Source files
├── app/                           # Application code
│   ├── features/                  # Feature modules
│   │   ├── user/                  # User module
│   │   │   ├── user-table/        # User table component
│   │   │   ├── user.model.ts      # User model
│   │   │   ├── user.service.ts    # User service
│   │   │   ├── user.component.ts  # User component
│   ├── shared/                    # User form component
│   |   ├── navbar/                # Navbar component
│   ├── app.component.ts           # Root component
│   ├── app.config.ts              # Configuration file
├── index.html                     # Main HTML file
├── main.ts                        # Main entry point
├── styles.css                     # Global styles
```

### Core Components

- `app.component.ts`: The root component of the application

### Component Map

## Further Improvements

- Pagination for the user table
- Search functionality for the user table
# User-Frontend

A simple single-page application for user management. The application is built using the Angular 17 and Material UI. It has the following features:
- View a list of users in a table
- Add a new user through a popup form
- Update an existing user through a popup form
- Delete a user

## Development

### Core Components

- `app.component.ts`: The root component of the application
- `navbar.component.ts`: The navbar component that contains the application title
- `user.component.ts`: The main component that contains the user table and the add user dialog
- `add-user-dialog.component.ts`: The add user dialog component
- `user-table.component.ts`: The user table component that displays the list of users
- `edit-user-dialog.component.ts`: The edit user dialog component

### Component Map

- `app.component.ts`:
  - `navbar.component.ts`
  - `user.component.ts`
    - `add-user-dialog.component.ts`
    - `user-table.component.ts`
      - `edit-user-dialog.component.ts`

## Further Improvements

- Pagination for the user table
- Validation for the user form
- Search functionality for the user table
- Optimize request handling for better performance
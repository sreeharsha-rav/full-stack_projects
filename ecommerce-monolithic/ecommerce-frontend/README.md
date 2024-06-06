# E-commerce Frontend

A simple frontend for an e-commerce website. It's a single page application that uses Angular and Bootstrap. It has the following features:
- Navbar with links to Home, Products, and Orders
- Home page with a welcome message
- Products page with a list of products and a cart to add products and checkout
- Orders page with a list of orders placed

## Technologies

- Angular 17
- Bootstrap 5

## Development

### Project Structure

Main files and directories:
```
e-commerce-frontend/
├── src/                            # Source files
│   ├── app/                        # Applicate specific code
│   │   ├── ecommerce/              # E-commerce specific code
│   │   │   ├── orders/             # Orders component
│   │   │   ├── products/           # Products component
|   |   |   ├── shopping-cart/      # Shopping cart component
│   │   ├── ecommerce.component.ts  # E-commerce component
│   │   ├── shared/                 # Shared code
│   │   │   |   ├── home/           # Home component
│   │   │   |   ├── navbar/         # Navbar component
│   │   ├── app.component.ts        # Root component
│   │   ├── ... etc
```

### Core Components

- `app.component.ts`: Root component that contains the navbar and the router outlet.
- `navbar.component.ts`: Navbar component that contains the links to Home, Products, and Orders.
- `home.component.ts`: Home component that displays a welcome message.
- `ecommerce.component.ts`: E-commerce component that contains the Products and Orders components.
- `products.component.ts`: Products component that displays a list of products.
- `shopping-cart.component.ts`: Shopping cart component that displays the products added to the cart.
- `orders.component.ts`: Orders component that displays a list of orders placed.

### Component Map

- **App Component**
  - **Navbar Component**
    - **Home Component**
    - **E-commerce Component**
        - **Products Component**
        - **Shopping Cart Component**
    - **Orders Component**

### Routing

- '' -> Redirects to Home component
- '/home' -> Home component
- '/shop' -> Products component
- '/orders' -> Orders component

## Further Improvements

- Add more products to the products list with pagination
- Add a product detail page
- Add a search bar to search for products
- Making Shopping Cart a separate component
- Add a checkout page
- Support for user authentication and authorization
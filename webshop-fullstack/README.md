# Fullstack Webshop Project

Welcome to our Macaron Fullstack Webshop Project! This project is designed to showcase a simple webshop application using React on the frontend and Node.js on the backend.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)


# Introduction

This fullstack webshop project served as the culmination of a comprehensive 10-month programming course. Collaboratively developed by a skilled team of four, the project spanned a focused four-week development period. Guided by the mentor's expertise, the team successfully designed and implemented a feature-rich webshop application offering a comprehensive online shopping experience. 


## Features

Users are able to:

- Browse and List Items: Users can explore a wide range of products available in the webshop. The user-friendly interface allows for easy navigation and browsing through various product categories.

- Search and Discover: A powerful search functionality enables users to quickly find specific items based on keywords, categories, or other filters. This enhances the overall shopping experience by saving time and providing relevant results.

- Shopping Cart Management: The application allows users to add items to their shopping cart, review the contents, adjust quantities, and remove items as needed. This intuitive cart management feature ensures a smooth and seamless shopping process.
  
- Upsell Functionality: Enhance user experience and increase sales potential with our dynamic upsell feature. When users navigate to the cart summary page, they are presented with carefully curated product recommendations that complement their selected items. 

- User Registration: New users can easily create an account by registering with their personal information. This step is essential for a personalized shopping experience, order tracking, and communication.

- User Profile Customization: Registered users have the option to edit and update their profile data, including contact information, shipping addresses. This contributes to a tailored and convenient shopping journey.
  
  
Administrators are able to:

- Item Management: Create, list, edit, delete products and add to categories. Create, list, edit, delete categories.

- User Management: Add, edit, or delete user accounts. View user profiles and details. Manage user roles and permissions. Reset passwords or send password reset links.

- Order Management: View a list of all orders. Filter and search for specific orders. View order details, including products, quantities, and prices. Update order statuses (e.g., pending, shipped, delivered). Process cancellations or refunds. Generate order-related reports and analytics.
  
- The Admin Dashboard also privides basic statistics and essential insights into the overall performance and activity of the webshop. Statistical data includ total items, total registered users, total orders. 
  


## Technologies Used
The webshop demonstrates the integration of React for the frontend user interface and Node.js for the backend API services.
- Frontend:
  - React
  - Javascript
- Backend:
  - Node.js
  - Express (for API routing)
  - SQLite3 (as the database)
  - Cookie-based sessions stored in serverside objects (for authentication)
- Other tools:
  - Webpack (for bundling frontend assets)
  - Babel (for transpiling JavaScript)
 

## Getting Started

### Prerequisites
- Node.js (version xx.x or higher)
- Express.js (running instance)

### Installation
1. Clone this repository: `git clone https://github.com/PauBea/demo-projects.git`
2. Navigate to the project directory: `cd webshop-fullstack`
3. Install frontend dependencies: `cd frontend && npm install`
4. Install backend dependencies: `cd ../backend && npm install`

### Running the Application
1. Start the backend server: `cd backend && node server.js`
2. Start the frontend development server: `cd frontend && npm start`

The frontend development server will start and open your web browser to `http://localhost:3000`, where you can access the webshop application.

## Project Structure
- `backend/`: Contains the Node.js backend code
    - `server.js`: Backend server entry point
    - `routes/`: API route handlers
    - `databaseInit/`: SQLite3 data models
    - `constants/`: authentication session objects
    - `connection/`: SQLite3 database function
 
- `frontend/`: Contains the React frontend code
  - `src/`: Contains the source code
    - `index.js`: Frontend entry point
    - `pages/`: React components representing distinct pages of the webshops
    - `components/`: Reusable React components
    - `containers/`: Higher-level container components
    - `context/`: React Context implementations
    - `repositories/`: API service functions
    - `utils/`: Utility functions
    - `App.js`: Main React component
    



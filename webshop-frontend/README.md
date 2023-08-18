# Serverless Webshop Project

Welcome to our Extreme Sports Webshop Project! This project showcases a delightful webshop application using React on the frontend, Firebase for authentication and database, and leverages serverless architecture for seamless scalability.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)

## Introduction
This webshop project stands as the result of a comprehensive 8-month programming course focusing on frontend development, culminating in a feature-rich online shopping experience. Developed collaboratively by a skilled team of four, the project's focus over a four-week period was guided by a mentor's expertise.

## Features
### Users are able to:
- Browse and List Items: Explore a diverse array of products across various categories in an intuitive and user-friendly interface.
- Search and Discover: Efficiently find specific items through a powerful search functionality, enhancing the overall shopping experience.
- Shopping Cart Management: Seamlessly manage the shopping cart by adding, reviewing, adjusting quantities, and removing items as needed.
- Adding Item to Favorites: Enhance user convenience by allowing items to be added to a favorites list for quick access and future reference.
- User Registration: Easily create personalized accounts to streamline the shopping experience, order tracking, and communication.
- User Profile Customization: Tailor the shopping journey by editing and updating user profile data, including contact information and shipping addresses.

### Administrators are able to:
- Item Management: Create, list, edit, and delete products, as well as manage categories.
- User Management: Administer user accounts, view profiles, manage roles and permissions, and handle password resets.
- Order Management: Monitor and process orders, manage statuses, handle cancellations, refunds, and generate insightful reports.


## Technologies Used
The webshop demonstrates the integration of React for the frontend user interface and Firebase for authentication and database management, following a serverless architecture.

Frontend:
- React
- JavaScript

Backend:
- Firebase (Authentication and Firestore)

Other tools:
- Webpack (for bundling frontend assets)
- Babel (for transpiling JavaScript)

## Getting Started

### Prerequisites
- Node.js (version xx.x or higher)

### Installation
1. Clone this repository: `git clone https://github.com/PauBea/demo-projects.git`
2. Navigate to the project directory: `cd webshop-frontend/webshop-project`
3. Install frontend dependencies: `cd frontend && npm install`


### Running the Application
1. Start the frontend development server: `cd webshop-frontend/webshop-project && npm start`

The frontend development server will start and open your web browser to http://localhost:3000, where you can access the webshop application.

## Project Structure
- `frontend/`: Contains the React frontend code
  - `src/`: Contains the source code
    - `index.js`: Frontend entry point
    - `pages/`: React components representing distinct pages of the webshop
    - `components/`: Reusable React components
    - `context/`: React Context implementations
    - `repositories/`: API service functions
    - `services/`: Custom service modules for handling specific functionality
    - `styles/`: Global and component-specific CSS styles for consistent UI design
    - `App.js`: Main React component
- `backend/`: Firebase authentication and database management (serverless architecture)
  - Authentication: Firebase Authentication services
  - Database: Firebase Firestore for data storage and retrieval

This project embodies the synergy of React and Firebase in delivering a seamless, scalable, and user-centered webshop experience.




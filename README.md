# Airbnb Clone


![App Screenshot](public/images/sample-homepage.png?raw=true "App Screenshot")

[Demo of the Airbnb-Clone](https://airbnb-nextjsproject.vercel.app/)

This is a clone of the popular Airbnb website. While not a 1-to-1 replica, it captures much of the general functionality and provides a similar user experience to the original website.

## Features

- User authentication: Sign up, login, and logout functionality with optional Google and Github Auth for both guests and hosts.
- Listings: View available listings with details like title, description, location, price.
- Search: Search for listings based on location, date range, number of guests, and other filters.
- Booking: Reserve a listing for a specific date range and number of guests.
- Dashboard: Hosts can manage their listings and view bookings.

## Tech Stack

- **Next.js**: React framework for server-side rendering and building fast and scalable web applications.
- **MongoDB**: NoSQL database for storing listing and user data.
- **Prisma**: Modern ORM (Object-Relational Mapping) tool to interact with the database.
- **Tailwind**: Utility-first CSS framework for building responsive and customizable UI components.
- **Typescript**: Typed superset of JavaScript that enhances code maintainability and productivity.
- **Vercel**: Cloud platform for deploying and hosting web applications with scalability and high performance.

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/navidali/airbnb.git

2. Install dependencies:

   ```bash
    cd airbnb
    npm install

3. Set up the environment variables:

    Fill out the sample .env file in the root directory.
    Define the necessary environment variables, such as database connection details, OAuth keys, etc.

4. Start the development server:

    ```bash
    npm run dev

Open your browser and navigate to http://localhost:3000 to see the application running locally.

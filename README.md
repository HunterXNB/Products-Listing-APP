# Product Listing Web App

## Description

This is a product listing web application built using the following technologies:

- **Next.js v15** (App Router)
- **Material UI**
- **Tailwind CSS**
- **MongoDB**

### Features

- **Home Page**: Displays a list of products with the following functionalities:
  - **Search by Name**
  - **Sorting by Price**
  - **Pagination**
  - **Seed to DB Button**: Each click generates and saves 50 random products into the database.
- **Product Page**:
  - Displays detailed information about a product, including:
    - **Name**
    - **Price**
    - **Image**
    - **Description**
  - **Modal View**: Clicking on any product link from the Home Page displays the product details inside a modal using Next.js Parallel Intercepting Routes.
  - **Full Page View**: If the product page is accessed directly (e.g., via a URL or page refresh), it will occupy the entire screen instead of appearing in a modal.

> **Note:** This project does not utilize any state management libraries. However, if you want to see a project where I used Redux, check out [this repository](https://github.com/I-Cart/Front-End).

## How to Run the Project

### Steps

1. **Download the Repository**

   - Clone or download the repository contents to your local machine.

2. **Install Dependencies**

   - Open a terminal inside the project folder and run:
     ```bash
     npm install
     ```

3. **Set Up MongoDB**

   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a database.
   - Obtain your database connection string.

4. **Configure Environment Variables**

   - Inside the project folder, find the provided `.env.example` file.
   - Rename it to `.env` and replace the placeholder with your MongoDB connection string.

5. **Start the Development Server**

   - Back in the terminal, run:
     ```bash
     npm run dev
     ```

6. **Access the Application**
   - Open your browser and navigate to:
     ```
     http://127.0.0.1:3000
     ```
   - If the port is already in use, the application might run on a different port, such as `3001`. Check your terminal for the correct URL.

### Live Demo

You can visit the [live demo]() instead .

Enjoy exploring the Product Listing Web App!

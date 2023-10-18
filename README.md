# Book Search Engine (MERN) ReadME

## Overview

The Book Search Engine is a user-friendly application that allows users to search for their favorite books and get detailed information about them. Users have the option to create an account to save books to their personal library for easy access later. The application interacts with the Google Books API to provide detailed and up-to-date information about a vast collection of books.

## Features

### Landing Page

- A menu with options **Search for Books** and **Login/Signup**.
- An input field to search for books and a submit button.

### Search for Books

- Users can search for books by entering a search term in the input field and clicking the submit button.
- The search results display each book’s title, author, description, image, and a link to the book on the Google Books site.
- Logged in users have the option to save books to their account.

### Login/Signup

- Clicking the **Login/Signup** menu option opens a modal with a toggle between the options to log in or sign up.

#### Signup

- Three input fields for username, email address, and password, and a signup button.
- After signing up, the user’s account is created, and they are logged in to the site.

#### Login

- Two input fields for email address and password, and a login button.
- Entering the correct credentials logs the user in, and the modal closes.

### User Account Features

- When logged in, menu options change to **Search for Books**, **See My Saved Books**, and **Logout**.
- Users can save books to their account from the search results.
- Users can view all saved books, each featuring the book’s title, author, description, image, and a link to the Google Books site, and a button to remove the book from their account.
- Users can log out of their account, reverting the menu back to the initial options.

## User Flow

1. Users are welcomed with a menu to search for books or login/signup.
2. Users can immediately search for books and view detailed information on the search results page.
3. Users can choose to login or signup to access personalized features.
4. After login/signup, users can save books to their account, view their saved books, and have the option to remove books from their saved list.
5. Users can log out to return to the initial state of the application.

## Technologies Used

- Frontend: (Insert frontend technology stack e.g., React, CSS)
- Backend: (Insert backend technology stack e.g., Node.js, Express)
- Database: (Insert database technology e.g., MongoDB)
- APIs: Google Books API

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm 

### Steps

1. Clone the repository to your local machine.

```bash
git clone https://github.com/your-username/book-search-engine.git
```

2. Navigate into the directory.

```bash
cd book-search-engine
```

3. Install the dependencies.

```bash
npm install
```


4. Start the development server.

```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

For contributions, you can create a fork of this repository.


Enjoy searching and saving your favorite books!

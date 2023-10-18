import gql from "graphql-tag";

// User LOGIN mutation
export const LOGIN_USER = gql`
  mutation AuthenticateUser($userEmail: String!, $userPassword: String!) {
    login(email: $userEmail, password: $userPassword) {
      token
      user {
        id
        name
      }
    }
  }
`;

// User registration mutation
export const ADD_USER = gql`
  mutation addUser($name: String!, $userEmail: String!, $userPassword: String!) {
    addUser(username: $name, email: $userEmail, password: $userPassword) {
      token
      user {
        id
        name
      }
    }
  }
`;

// Book saving mutation
export const SAVE_BOOK = gql`
  mutation saveBook($input: BookInput!) {
    saveBook(bookInput: $input) {
      id
      name
      userEmail
      savedBooks {
        bookId
        writers
        cover
        synopsis
        bookTitle
        url
      }
    }
  }
`;

// Book removal mutation
export const REMOVE_BOOK = gql`
  mutation removeBook($id: ID!) {
    removeBook(bookId: $id) {
      id
      name
      userEmail
      totalBooks
      savedBooks {
        bookId
        writers
        cover
        url
        bookTitle
        synopsis
      }
    }
  }
`;

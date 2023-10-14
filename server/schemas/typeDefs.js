// Import the necessary dependencies for setting up Apollo Server with Express
const { gql } = require('apollo-server-express');

// Define the GraphQL schema using Apollo Server's gql template literal
const typeDefs = gql`
// Define User type with necessary fields
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    // Define Auth type for authentication purposes
    type Auth {
        token: ID!
        user: User
    }

    // Define Book type with necessary fields
    type Book {
        bookId: ID!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    // Define input type for adding books
    input InputBook {
        bookId: String
        authors: [String]
        title: String
        description: String
        image: String
        link: String
    }

    // Define queries
    type Query {
        me: User
    }

    // Define mutations
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(newBook: InputBook!): User
        removeBook(bookId: ID!): User
    }
`;

// Export the GraphQL schema
module.exports = typeDefs;

// Import the necessary dependencies for setting up Apollo Server with Express
const { gql } = require('apollo-server-express');

// Define the GraphQL schema using Apollo Server's gql template literal
const typeDefs = gql`

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }


    type Auth {
        token: ID!
        user: User
    }

   
    type Book {
        bookId: ID!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    
    input InputBook {
        bookId: String
        authors: [String]
        title: String
        description: String
        image: String
        link: String
    }

    
    type Query {
        me: User
    }

   
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(newBook: InputBook!): User
        removeBook(bookId: ID!): User
    }
`;

// Export the GraphQL schema
module.exports = typeDefs;

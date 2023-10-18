const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const resolverFunctions = {
    Query: {
        me: async (parent, arguments, context) => {
            if (context.user) {
                const userInfo = await User.findOne({ _id: context.user._id }).select('-__v -password');
                return userInfo;
            }
            throw new AuthenticationError('Please log in!');
        },
    },

    Mutation: {
        addUser: async (parent, { name, emailAddress, password }) => {
            const newUser = await User.create({ username: name, email: emailAddress, password });
            const authToken = generateToken(newUser);
            return { token: authToken, user: newUser };
        },

        login: async (parent, { emailAddress, password }) => {
            const existingUser = await User.findOne({ email: emailAddress });
            
            if (!existingUser) {
                throw new AuthenticationError('No account found with this email address.');
            }

            const validPassword = await existingUser.validatePassword(password);

            if (!validPassword) {
                throw new AuthenticationError('Wrong password!');
            }

            const authToken = generateToken(existingUser);
            return { token: authToken, user: existingUser };
        },

        saveBook: async (parent, { bookInput }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: bookInput } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('Authorization needed!');
        },

        removeBook: async (parent, { id }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: id } } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('Must be logged in!');
        },
    }
};

module.exports = resolverFunctions;

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
} = require('graphql');

const users = require('./userMock');
const faker = require('faker');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        first_name: {
            type: GraphQLString,
        },
        last_name: {
            type: GraphQLString,
        },
        address: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        phone: {
            type: GraphQLString,
        },
    }),
});

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            users: {
                type: new GraphQLList(UserType),
                args: {
                    start: { type: GraphQLInt },
                    end: { type: GraphQLInt },
                },
                resolve(_parent, { start = 0, end = users.length }) {
                    return users.slice(start, end);
                },
            },
            name: {
                type: GraphQLString,
                resolve() {
                    return faker.name.findName();
                },
            },
        },
    }),
});

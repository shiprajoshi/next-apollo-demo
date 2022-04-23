const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
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
                resolve() {
                    return users;
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

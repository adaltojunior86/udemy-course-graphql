import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
    }
});

export default UserType;
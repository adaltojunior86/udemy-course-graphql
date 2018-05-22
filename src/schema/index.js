
import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt } from "graphql";
import axios from "axios";
import UserType from "./user";

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLInt } },
            resolve(parentValue, args) {
                console.log(args);
                return axios.get(`http://localhost:3000/users/${args.id}`)
                    .then(resp => resp.data);
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery
});

export default schema;

import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt } from "graphql";
import axios from "axios";
import UserType from "./user";
import CompanyType from "./company";
import Axios from "axios";

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/users/${args.id}`)
                    .then(resp => resp.data);
            }
        },
        company: {
            type: CompanyType,
            args: { id: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/companies/${args.id}`)
                    .then(resp => resp.data);
            }
        }
    }
});

const addUser = {
    type: UserType,
    args: {
        firstName: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
        companyId: {
            type: GraphQLInt
        }
    },
    resolve(parentValue, {firstName, age, companyId}) {
        return Axios.post(`http://localhost:3000/users`, {firstName, age, companyId}).then(resp => resp.data);
    }
}

const mutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        addUser
    }
});



const schema = new GraphQLSchema({
    query: RootQuery,
    mutation
});

export default schema;
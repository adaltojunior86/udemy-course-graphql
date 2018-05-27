import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from "graphql";
import UserType from "./user";
import Axios from "axios";

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                console.log(parentValue)
                return Axios.get(`http://localhost:3000/companies/${parentValue.id}/users`)
                    .then(resp => resp.data);
            }
        }
    })
});

export default CompanyType;
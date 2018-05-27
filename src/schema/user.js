import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";
import CompanyType from "./company";
import Axios from "axios";

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: {
            type: CompanyType,
            resolve(parentValue, args) {
                console.log(parentValue.companyId);
                return Axios.get(`http://localhost:3000/companies/${parentValue.companyId}`).then(resp => resp.data);
            }
        }
    })
});

export default UserType;
import express from "express";
import expressGraphQl from 'express-graphql';
import schema from "./schema/index";

const app = express();

app.use('/graphQl', expressGraphQl({
    graphiql: true,
    schema
}))

app.listen(4001, () => {
    console.log("teste5");
});

import express from "express";
import expressGraphQl from 'express-graphql';

const app = express();

app.use('/graphQl', expressGraphQl({
    graphiql: true
}))

app.listen(4000, () => {
    console.log("teste");
});

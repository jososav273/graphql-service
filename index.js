 import express from 'express'
import graphqlHTTP from 'express-graphql'
import database from './config/database'
import schema from './graphql'

database()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World, this will be a graphql app.')
})

app.use('/graphiql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true,
})))

app.listen(3000, () => {
  console.log('Graphql API Running at port 3000')
})

import express from 'express'
import graphqlHTTP from 'express-graphql'
import database from './config/database'

database()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World, this will be a graphql app.')
})

app.listen(3000, () => {
  console.log('Graphql API Running at port 3000')
})

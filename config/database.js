import mongoose from 'mongoose'

module.exports = () => {
  mongoose.connect('mongodb://jososav:spot2017!@ds129422.mlab.com:29422/spot-mongo-db')

  const db = mongoose.connection

  db.on('error', () => console.log('Failed to connect to database'))
    .once('open', () => console.log('Connected to DB'))
}

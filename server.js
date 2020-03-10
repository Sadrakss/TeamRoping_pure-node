
const express = require('express')

const server = express()

const routes = require('./routes')

// server.use(express.static('public'))


server.use(express.urlencoded({ extended: true }))

const { Pool } = require('pg')
const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'teamRoping',
  password: '08808008',
  port: 5432,

})
// db.connect(err => {
//   if (err) {
//     console.error('error connecting', err.stack)
//   } else {
//     console.log('connected')
//   }
// })

const nunjucks = require('nunjucks')
nunjucks.configure('./view', {
  express: server,
  noCache: true
})


server.use(express.json())
server.use(routes)

console.log('server in port 3333')
server.listen(3333)
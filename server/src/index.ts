import path from 'path'
import fastify from 'fastify'
import helmet from 'fastify-helmet'
import fastifyStatic from 'fastify-static'
import config from './config'

const server = fastify({ logger: config.debug })

server.register(helmet)

server.register(fastifyStatic, {
  root: path.join(__dirname, '../../client/build')
})
server.get('/', (req, res) => {
  res.sendFile('index.html')
})

server.get('/hello', (req, res) => {
  res.status(200).send(`Hello World`)
})

server.ready(() => {
  // init stuff here
})

server.listen(config.port, error => {
  if (error) {
    console.log('Something went wrong', error)
    return
  }

  console.log('Server listening on port', config.port)
})

const env = process.env.NODE_ENV || 'development'
const debug = env !== 'production'

const config = {
  env: env,
  debug: debug,
  port: process.env.PORT || env === 'production' ? 5000 : 5001
}

export default config

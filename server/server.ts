import express from 'express'
import { join } from 'node:path'

import translationRoutes from './routes/translations'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/translations', translationRoutes)

export default server

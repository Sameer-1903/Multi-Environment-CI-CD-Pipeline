import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pkg from 'pg'
const { Pool } = pkg

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8080
const databaseUrl = process.env.DATABASE_URL

const pool = new Pool({ connectionString: databaseUrl })

app.get('/api/health', async (req, res) => {
  try {
    const r = await pool.query('SELECT 1 as ok')
    res.json({ ok: r.rows[0].ok === 1 })
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message })
  }
})

app.get('/api/message', async (req, res) => {
  res.json({ message: 'Hello from backend API!' })
})

app.listen(port, () => {
  console.log(`Backend listening on http://0.0.0.0:${port}`)
})

import React, { useEffect, useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('loading...')

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/message')
      .then((r) => r.json())
      .then((d) => setMessage(d.message))
      .catch(() => setMessage('API not reachable'))
  }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, Arial', padding: 24 }}>
      <h1>Multi-Environment CI/CD Starter</h1>
      <p>Status from API: <b>{message}</b></p>
      <p>Try editing <code>frontend/src/App.jsx</code> and see hot reload.</p>
    </div>
  )
}

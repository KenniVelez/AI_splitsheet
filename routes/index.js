const router = require('express').Router()
const path = require('path')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html'))
})

router.get('/api/status', (req, res) => {
  res.status(200).json({ user: 'none' })
})

module.exports = router

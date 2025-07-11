const fs = require('fs')
fs.writeFileSync(
  './.env',
  `BASE_URL=${process.env.BASE_URL}\nBACKEND_ENDPOINT=${process.env.BACKEND_ENDPOINT}`
)

# Installation
```bash
npm install --save nodemailer nodemailer-env-transport nodemailer-stub-transport nodemailer-smtp-transport
```

# Usage:

## Write index.js
```js
const transporter = require('nodemailer').createTransport(require('nodemailer-env-transport')())
```

## Run
```bash
EMAIL_TRANSPORT=smtp EMAIL_TRANSPORT_CONFIG='{"host": "localhost", "port": 25, "auth": {"user": "username", "pass": "password"}}' node index.js
```

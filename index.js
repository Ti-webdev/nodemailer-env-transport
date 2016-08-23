module.exports = function (options) {
  let transportName = process.env.EMAIL_DISABLED ? 'stub' : process.env.EMAIL_TRANSPORT
  let transport = require(`nodemailer-${transportName}-transport`)
  if (!options && process.env.EMAIL_TRANSPORT_CONFIG) {
    options = JSON.parse(process.env.EMAIL_TRANSPORT_CONFIG)
  }
  return transport(options)
}

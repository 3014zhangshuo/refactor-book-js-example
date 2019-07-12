const playsData = require('./plays.js')
const invoice = require('./invoices.json')
const statement = require('./statement')

const result = statement(invoice, playsData)
console.log(result)
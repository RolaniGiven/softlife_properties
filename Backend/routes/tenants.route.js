const dbtenant = require('../controllers/tenant.controller')
const express = require("express");
const app = express.Router();

app.get('/tenant', dbtenant.gettenant)
app.get('/tenant/:id', dbtenant.gettenantById)
app.post('/tenant', dbtenant.createtenant)
app.put('/tenant/:id', dbtenant.updatetenant)
app.delete('/tenant/:id', dbtenant.deletetenant)

module.exports = app;
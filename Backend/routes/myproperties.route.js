const db = require('../controllers/myproperties.controller');
const express = require("express");
const app = express.Router(); //THIS TO EXPORT ALL THE ROUTES

app.get('/properties', db.getmyproperties)
app.get('/properties/:id', db.getmypropertiesById)
app.post('/properties', db.createmyproperties)
app.put('/properties/:id', db.updatemyproperties)
app.delete('/properties/:id', db.deletemyproperties)

module.exports = app;
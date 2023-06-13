const db = require('../controllers/propowner.controller');
const express = require("express");
const app = express.Router(); //THIS TO EXPORT ALL THE ROUTES

app.get('/propowners', db.getpropowner)
app.get('/propowners/:id', db.getpropownerById)
app.post('/propowners', db.createpropowner)
app.put('/propowners/:id', db.updatepropowner)
app.delete('/propowners/:id', db.deletepropowner)

module.exports = app;

/*const express = require('express');
const router = express.Router();
const propOwnerController = require('../controllers/propOwnerController');

// GET all property owners
router.get('/propowners', propOwnerController.getpropowner);

// GET property owner by ID
router.get('/propowners/:id', propOwnerController.getpropownerById);

// CREATE new property owner
router.post('/propowners', propOwnerController.createpropowner);

// UPDATE property owner by ID
router.put('/propowners/:id', propOwnerController.updatepropowner);

// DELETE property owner by ID
router.delete('/propowners/:id', propOwnerController.deletepropowner);

module.exports = router;*/
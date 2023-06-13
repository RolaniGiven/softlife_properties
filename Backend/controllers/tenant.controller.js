const pool = require('../config/dbConn');

//Tenants
const gettenant = (request, response) => {
    pool.query('SELECT * FROM tenant ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const gettenantById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM tenant WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  
  const createtenant = (request, response) => {
    const { username, email, password } = request.body
  
    pool.query('INSERT INTO tenant (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`tenant added with ID: ${results.rows[0].id}`)
    })
  }
  
  const updatetenant = (request, response) => {
    const id = parseInt(request.params.id)
    const { username, email, password} = request.body
  
    pool.query(
      'UPDATE tenant SET username = $1, email = $2, password = $3 WHERE id = $4',
      [username, email, password,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`tenant modified with ID: ${id}`)
      }
    )
  }
  
  const deletetenant = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM tenant WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`tenant deleted with ID: ${id}`)
    })
  }
  
  module.exports = {
    gettenant,
    gettenantById,
    createtenant,
    updatetenant,
    deletetenant,
  }
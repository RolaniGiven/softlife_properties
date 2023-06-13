const pool = require('../config/dbConn');

const getmyproperties = (request, response) => {
    pool.query('SELECT * FROM myproperties ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getmypropertiesById = (request, response) => {


    // console.log(request.params.id)
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM myproperties WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}


const createmyproperties = (request, response) => {
    const { address, description, price, images } = request.body
  
    pool.query('INSERT INTO myproperties (address, description, price, images) VALUES ($1, $2, $3, $4) RETURNING *', [address, description, price, images], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`property added with ID: ${results.rows[0].id}`)
    })
}

const updatemyproperties = (request, response) => {
    const id = parseInt(request.params.id)
    const { address, description, price, images} = request.body
  
    pool.query(
      'UPDATE myproperties SET address = $1, description = $2, price = $3, images = $4 WHERE id = $5',
      [address, description, price, images, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`property modified with ID: ${id}`)
      }
    )
}

const deletemyproperties= (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM myproperties WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`property deleted with ID: ${id}`)
    })
}

module.exports = {
    getmyproperties,
    getmypropertiesById,
    createmyproperties,
    updatemyproperties,
    deletemyproperties,
}
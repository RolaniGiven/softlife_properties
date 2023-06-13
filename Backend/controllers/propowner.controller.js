// const { Pool } = require('pg');
const pool = require('../config/dbConn');


const getpropowner = (request, response) => {
    pool.query('SELECT * FROM propowner ORDER BY ownerid ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getpropownerById = (request, response) => {

    // console.log(request.params.id)
    const ownerid = parseInt(request.params.id)
  
    pool.query('SELECT * FROM propowner WHERE ownerid = $1', [ownerid], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}


const createpropowner = (request, response) => {
  const { username, email, password } = request.body;

  // Input validation
  if (!username || !email || !password) {
    return response.status(400).send('Missing required fields');
  }

  // Authentication check (e.g., check if user is authorized to perform this action)

  pool.query(
    'INSERT INTO propowner (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    [username, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Landlord added with ID: ${results.rows[0].ownerid}`);
    }
  );
};


const updatepropowner = (request, response) => {
    const ownerid = parseInt(request.params.id)
    const { username, email, password} = request.body
  
    pool.query(
      'UPDATE propowner SET username = $1, email = $2, password = $3 WHERE ownerid = $4',
      [username, email, password,ownerid],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Landlord modified with ID: ${ownerid}`)
      }
    )
}

const deletepropowner = (request, response) => {
    const ownerid = parseInt(request.params.id)
  
    pool.query('DELETE FROM propowner WHERE ownerid = $1', [ownerid], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Landlord deleted with ID: ${ownerid}`)
    })
}

module.exports = {
    getpropowner,
    getpropownerById,
    createpropowner,
    updatepropowner,
    deletepropowner,
}


// const getlandlord = (request, response) => {
//     pool.query('SELECT * FROM landlord ORDER BY id ASC', (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
// }

// const getlandlordById = (request, response) => {


//     // console.log(request.params.id)
//     const id = parseInt(request.params.id)
  
//     pool.query('SELECT * FROM landlord WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
// }


// const createlandlord = (request, response) => {
//     const { username, email, password } = request.body
  
//     pool.query('INSERT INTO landlord (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`Landlord added with ID: ${results.rows[0].id}`)
//     })
// }

// const updatelandlord = (request, response) => {
//     const id = parseInt(request.params.id)
//     const { username, email, password} = request.body
  
//     pool.query(
//       'UPDATE landlord SET username = $1, email = $2, password = $3 WHERE id = $4',
//       [username, email, password,id],
//       (error, results) => {
//         if (error) {
//           throw error
//         }
//         response.status(200).send(`Landlord modified with ID: ${id}`)
//       }
//     )
// }

// const deletelandlord = (request, response) => {
//     const id = parseInt(request.params.id)
  
//     pool.query('DELETE FROM landlord WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`Landlord deleted with ID: ${id}`)
//     })
// }

// module.exports = {
//     getlandlord,
//     getlandlordById,
//     createlandlord,
//     updatelandlord,
//     deletelandlord,
// }
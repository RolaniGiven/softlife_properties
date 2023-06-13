const express = require('express')
const bodyParser = require('body-parser')
const app = express()
//const db = require('./models');


const propowner = require('./routes/propowner.route');
const tenantRoutes = require('./routes/tenants.route');
const properties = require('./routes/myproperties.route');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres APIS' })
})


//require('./routes/landlord.route')(app);
app.use('/',propowner);
app.use('/',tenantRoutes);
app.use('/',properties);

const port = 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})



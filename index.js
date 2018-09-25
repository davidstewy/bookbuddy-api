require("dotenv-safe").config({ allowEmptyValues: true });
const express = require('express')
const morgan = require("morgan");
const { Client } = require('pg');
const cors = require('cors')
const controllers = require("./Controllers")
const app = express();

app.set("port", process.env.PORT || 8000);

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors())

//app.use("/authorize", controllers.authorize);

app.get('/', (req, res) => {
     res.send('hello world')
    console.log('cors')
});

app.use("/authorize", controllers.authorize);


app.post("/authorize/login", (req, res) => {
    console.log("please work")
    //const { username, password } = req.body
    res.json({username: 'kyle', password: 'kyle'})
    })
      
app.listen(app.get("port"), () => {
    console.log('app listening on port 8000!')
});

import express from 'express';
const app = express();
import bodyParser from 'body-parser';
//import reportWebVitals from '../../myapp_frontend/src/reportWebVitals';
app.use(bodyParser.json())

//const cors = require('cors')
//app.use(cors())

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, 'market.db');
const db = new sqlite3.Database(dbPath);

app.get('/recipetest',(req, res) => {

    var errors = [];

    if(errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    
    var recipe = {
        Id: req.body.Id,
        Title:req.body.Title
    }

    var sql = `SELECT * from Recipe`
    var params = [recipe.Id, recipe.title]
    
    db.get(sql,params, (err, result) => {
        if(err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "recipes":result
        })
    });    

    
});

//db.close(); 
app.listen(3001, () => console.log('Listening on port 3001'));


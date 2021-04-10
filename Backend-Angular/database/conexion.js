var mongoose = require("mongoose");
var servidor = "localhost:27017";
var nombreBaseDatos ="codenow";

class Database{
    constructor(){
        this.conexionMongoAtlas();
    }

    conectar(){
        mongoose.connect(`mongodb://${servidor}/${nombreBaseDatos}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        .then(()=>{
            console.log("Se conecto a la base de datos...");
        })
        .catch(error=>{
            console.error(JSON.stringify(error));   
        });
    }

    conexionMongoAtlas(){
        mongoose.connect(`mongodb+srv://majoguti_21:asd.456@cluster0.cocbf.mongodb.net/codenowbe?retryWrites=true&w=majority`,  {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
      
        .then(()=>{
            console.log("Se conecto a la base de datos...");
        })
        .catch(error=>{
            
            console.error(JSON.stringify(error));   
        });
    }
}

module.exports = new Database();
var sqlDB = require("mssql")
var settings = require("../settings")

exports.exeSQL = function (sqlCommand, callback){

    var connection  = new sqlDB.connection(settings.dbConfig) //connecct using settings

    connection.connect().then(connectMethod()).catch(conCatchMethod(err)) //connect if not catch error

    connectMethod = function (){
        var req = new sqlDB.Request(connection) // new request
        req.query(sqlCommand).then(recSetMethod (recordset)).catch(conCatchMethod(err))

        recSetMethod = function (recordset){
            callback(recordset)
        }
    }
    conCatchMethod = function (err){
        console.log(err)
        callback(null,err)
    }
}
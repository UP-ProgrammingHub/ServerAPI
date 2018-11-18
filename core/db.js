var sqlDB = require("mssql")
var settings = require("../settings")

exports.exeSQL = function (sqlCommand, callback){

    var connection  = new sqlDB.ConnectionPool(settings.dbConfig) //connecct using settings
    var req = new sqlDB.Request(connection) // new request

    console.log("Command: " + sqlCommand)
    connection.connect( function (err){
        if(err){
            callback(null,err)
            return
        }
        
        req.query(sqlCommand,function (err, data){
            if(err){
                callback(null,err)
            }else{
                console.log(data.recordset)
                callback(data.recordset)
            }
            connection.close()
        })
    })
}
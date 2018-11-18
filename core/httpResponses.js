var format = require("../settings")
var constants = require("../constants")

exports.error500Occured = function(req,res,err){
    if(format.httpResponseFormat === constants.formats.json){
        res.writeHead(500,"Error 500", {"Content-Type":"application/json"})
        res.write(JSON.stringify({data:"Error details: " + err}))
    } else if(format.httpResponseFormat === constants.formats.html){
        res.writeHead(500, "error 500", {"Content-Type":"text/html"})
        res.write("<html><head><title>500</title></head><body><h1> Error Details</h1><p>"+err+"</p></body></html>")
    }
    res.end()
}

exports.status200OK = function(req,res,data){
    res.writeHead(200,"Success", {"Content-Type":"application/json"})
    res.write(JSON.stringify(data))
    res.end()
}

exports.addSuccessful = function(req,res){
    res.writeHead(200,"Success", {"Content-Type":"application/json"})
    res.end()
}
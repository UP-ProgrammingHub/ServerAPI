var http = require("http")
//require students controller
settings = require("../settings")

http.createServer(function (req, res) {
    switch(req.method){
        case "GET":
            
            if(req.url === '/'){
                console.log("Root or Home")
            } else if(req.url === ''){
                
            }
            break

        case "POST":
            break

        case "PUT":
            break

        case "DELETE":
            break

        default:
            console.log("request method not supported")
            break
    }

}).listen(settings.HTTPport, function(){
    console.log("running on port "+ settings.HTTPport)
})
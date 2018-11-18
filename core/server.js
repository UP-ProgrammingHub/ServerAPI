var http = require("http")
//require students controller
var building = require("../controllers/studentController")
settings = require("../settings")

http.createServer(function (req, res) {
    switch(req.method){
        case "GET":
            
            if(req.url === '/'){
                console.log("Root or Home")
            } else if(req.url === '/getLibraries'){
                building.getLibraries(req,res)
            }else if(req.url === '/getDiningHalls'){
                building.getDining(req,res)
            }else if(req.url === '/getExamHalls'){
                building.getExamHalls(req,res)
            }else if(req.url === '/getKuduTerminals'){
                building.getKuduTerminals(req,res)
            }else if(req.url === '/getLectureHalls'){
                building.getLectureVenues(req,res)
            } else if (req.url === '/getPersonalBuildings'){
                building.getPersonalBuildings(req,res,1043882)
            }
            break

        case "POST":
            if(req.url === '/addPersonalBuilding'){
                building.addPersonalBuilding(req,res)
            } else if (req.url === '/verifyUser'){
                building.verifyUser(req,res)
            }
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

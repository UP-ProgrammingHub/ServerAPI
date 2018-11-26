var db = require("../core/db")
var buildingType = require("../constants")
var HTMLresps = require("../core/httpResponses")


exports.getLectureVenues = function(req,res){
    db.exeSQL("SELECT * FROM Buildings\
     WHERE Buildings.BuildingType = '" + buildingType.BuildingTypes.Lecture + "'",
                function(data,err){
                    if(err){
                        HTMLresps.error500Occured(req,res,err)
                    }else{
                        HTMLresps.status200OK(req,res,data)
                    }
                })
}

exports.getLibraries = function(req,res){
    db.exeSQL("SELECT * FROM Buildings\
     WHERE Buildings.BuildingType = '" + buildingType.BuildingTypes.Lib+ "'",
     function(data,err){
         if(err){
             HTMLresps.error500Occured(req,res,err)
         }else{
             HTMLresps.status200OK(req,res,data)
         }
     })
}

exports.getExamHalls = function(req,res){
    db.exeSQL("SELECT * FROM Buildings \
    WHERE Buildings.BuildingType = '" + buildingType.BuildingTypes.exam + "'",
    function(data,err){
        if(err){
            HTMLresps.error500Occured(req,res,err)
        }else{
            HTMLresps.status200OK(req,res,data)
        }
    })
}

exports.getKuduTerminals = function(req,res){
    db.exeSQL("SELECT * FROM Buildings \
    WHERE Buildings.BuildingType =  '" + buildingType.BuildingTypes.kudu + "'",
    function(data,err){
        if(err){
            HTMLresps.error500Occured(req,res,err)
        }else{
            HTMLresps.status200OK(req,res,data)
        }
    })
}

exports.getDining = function(req,res){
    db.exeSQL("SELECT * FROM Buildings \
    WHERE Buildings.BuildingType = '" + buildingType.BuildingTypes.Dining + "'",
    function(data,err){
        if(err){
            HTMLresps.error500Occured(req,res,err)
        }else{
            HTMLresps.status200OK(req,res,data)
        }
    })
}

exports.getFavoriteBuildings = function(req,res,studentID){
    db.exeSQL("SELECT StudentVenues.StudentID, Buildings.* FROM Buildings\
    INNER JOIN StudentVenues ON StudentVenues.BuildingID = Buildings.BuildingID\
    WHERE StudentVenues.StudentID = " + studentID, function(data, err){
        if(err){
            HTMLresps.error500Occured(req,res,err)
        } else {
            HTMLresps.status200OK(req,res,data)
        }
    })
}

exports.addFavoriteBuilding = function(req,res){
    /* req.body = {
     *            "StudentID" : 1234567,
     *            "BuildingID": 123234
     * }
     */
    var obj = '';
    req.on("data", function(data){
        obj += data;
    })
    req.on("end", function(){
        console.log(obj)
        obj = JSON.parse(obj)
        try{
            if(obj){
                db.exeSQL("INSERT INTO StudentVenues\
                VALUES("+obj.StudentID + "," + obj.BuildingID + ")",
                function(data,err){
                    if(err){
                        HTMLresps.error500Occured(req,res,err)
                    } else {
                        HTMLresps.addSuccessful(req,res)
                    }
                })
            } else {
                throw new Error("Input invalid")
            }
        } catch(err){
            HTMLresps.error500Occured(req,res,err)
        }
    
    })
}

exports.verifyUser = function(req,res){
    var formBody = ''

    req.on("data", function(data){
        formBody += data
    })

    req.on("end", function(){
        try{
            if(formBody){
                formBody = JSON.parse(formBody)
                db.exeSQL("SELECT * FROM Students\
                 WHERE Students.StudentID = " + formBody.StudentID, function(data,err){
                     
                    data = data[0]
                    if(err){
                        throw new Error("Invalid data from database")
                    } else {
                        if(formBody.StudentID === data.StudentID && formBody.Password === data.Password){
                           HTMLresps.status200OK(req,res,{"authentication":true})
                        } else {
                           HTMLresps.status200OK(req,res,{"authentication":false})
                        }
                    }
                })
            } else {
                throw new Error("Invalid input")
            }
        } catch(err){
            HTMLresps.error500Occured(req,res,err)
        }
    })
}

exports.getShops = function(req,res){

}

exports.getServices = function(req,res){

}

exports.getLaboratories = function(req,res){

}

exports.getResidences = function(req,res){
    
}
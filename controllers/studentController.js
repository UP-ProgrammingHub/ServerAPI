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
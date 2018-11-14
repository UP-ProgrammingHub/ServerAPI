var db = require("../core/db")
var buildingType = require("../constants")

exports.getLectureVenues = function(req,res){
    db.exeSQL("SELECT Buildings.BuildingName FROM Buildings \
                WHERE Buildings.BuildingType = '" + buildingType.BuildingTypes.Lecture + "'")
}

exports.getLibraries = function(req,res){
    db.exeSQL("SELECT Buildings.BuildingName FROM Buildings \
    WHERE Buildings.BuildingType =" + buildingType.BuildingTypes.Lib)
}

exports.getExamHalls = function(req,res){
    db.exeSQL("SELECT Buildings.BuildingName FROM Buildings \
    WHERE Buildings.BuildingType =" + buildingType.BuildingTypes.exam)
}

exports.getKuduTerminals = function(req,res){
    db.exeSQL("SELECT Buildings.BuildingName FROM Buildings \
    WHERE Buildings.BuildingType =" + buildingType.BuildingTypes.kudu)
}

exports.getDining = function(req,res){
    db.exeSQL("SELECT Buildings.BuildingName FROM Buildings \
    WHERE Buildings.BuildingType =" + buildingType.BuildingTypes.Dining)
}
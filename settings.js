var constants = require("./constants")

exports.dbConfig = {
  server:"localhost\\MSSQLSERVER", // upappserver
  database: "up_app",
  user: "uplifted",
  password: "uplifted", //UP_lifted
  port:1433
}

exports.HTTPport = 2000
exports.httpResponseFormat = constants.formats.json
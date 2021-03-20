var json2xls = require("json2xls");
var fs = require("fs");
var json = require("./result.json");

var xls = json2xls(json.postList);

fs.writeFileSync("data.xlsx", xls, "binary");

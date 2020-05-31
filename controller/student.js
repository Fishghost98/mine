let db = require("../models/db");
exports.showIndex = (req,res)=>{
    db.getStudents(function (arr) {
        res.render("index",{"arr":arr})
    });
}

exports.add = (req,res)=>{

}
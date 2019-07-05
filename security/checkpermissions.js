/*var jwt = require ("jsonwebtoken");
const user = require('../database/schema/user');
const USER = user.model;
var rols = {
	verifytoken: function (reo, res, next){
		console.log(req.headers);
		var token = req.headers["authorization"];
		if (token == null) {
			res.status(300),json({"msn":"error no tienes acceso"});
			return;	
		}
		jwt.verifytoken,"password",async(err, auth) =>{
			if (err){
				res.status(300).json({"msn":"token invalido"});
				return;
			}
			var users = await USER.find({email: auth.nombre});
			var roles = users(0).roles;
			if (roles == null) {
				res.status(300).json({"msn":"no cuenta con permisos"});
				return;
			}
			if (roles == "list" && req["method"] == "GET"){
				next();
				return;
			}
		}
	}
}*/

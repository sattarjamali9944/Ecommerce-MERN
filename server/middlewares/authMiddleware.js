const users          = require('../models/User');
const jwt 			 = require('jsonwebtoken');
const SECRET_KEY     = 'ABCDEF';


const authMiddleware = async (req,res,next) => {
	// let token=req.headers.authorization;
	// 	if(token)
	// 	{
	// 		token=token.split(" ")[1];
	// 		try{
	// 			if(token){
	// 			const decoded=jwt.verify(token,env.process.SECRET_KEY);
	// 		    }
	// 			console.log(decoded);
	// 		}
	// 		catch(error){
	// 			throw new Error('Not Authorize token Expired,Please login again');
	// 		}

	// 	}else{
              
 //              throw new Error('There is no token attached');
	// 	}


};

module.exports = authMiddleware;
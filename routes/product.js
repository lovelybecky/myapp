var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
	var data={
		code:0,
		data:{name:'aaa',pwd:'123'},
		isSuccess:true,
		msg:"请求成功"
	}
	res.json(data);
});

router.post('/',function(req,res,next){
	var username=req.body.name;
	var password=req.body.pwd;
	if(username=='aaa'|| password=='123'){
		data={
			code:0,
			isSuccess:true,
			msg:"请求成功"
		}
		res.json(data);
		return;
	}
	else{
		data={
			code:1,
			isSuccess:false,
			msg:"请求失败"
		}
		res.json(data);
		return;
	}
});
 
module.exports = router;
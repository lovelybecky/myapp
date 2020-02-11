var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var resdata={
  	status:0,
  	data:{name:'aaa',pwd:'123',tel:'12345678',email:'1128@163.com',points:60},
  	isSuccess:true,
  	msg:"请求成功"
  }
  res.json(resdata);
});

router.post('/login',function(req,res,next){
	var username=req.body.name;
	var password=req.body.pwd;
	if(username==='aaa'&& password==='123'){
		resdata={
			status:0,
			data:{name:'aaa',pwd:'123',tel:'12345678',email:'1128@163.com',points:60},
			isSuccess:true,
			msg:"请求成功"
		}
		res.json(resdata);
		return;
	}
	else if(username==='aaa'&&password!=='123'){
		resdata={
			status:1,
			isSuccess:true,
			msg:"密码错误"
		}
		res.json(resdata);
		return;
	}
	else{
		resdata={
			status:2,
			isSuccess:false,
			msg:"用户名错误"
		}
		res.json(resdata);
		return;
	}
});

router.post('/account',function(req,res,next){
	var username=req.body.name;
	if(username==='aaa'){
		resdata={
			money:60,
			items:4,
			discounts:[
				{type:'unused',date:'2020-01-30'},
				{type:'unused',date:'2020-01-30'},
				{type:'used',date:'2020-01-30'},
				{type:'expired',date:'2019-12-30'},
			]
		}
		res.json(resdata);
		return;
	}
});

router.post('/orders',function(req,res,next){
	var username=req.body.name;
	var orderstatus=req.body.status;
	if(username==='aaa'){
		if(orderstatus==='unpaid'){
			resdata={
				name:'aaa',
				orders:[
					{
						status:'未处理',
						date:'2020-01-01',
						products:[
							{product:'橙汁',num:1,price:2.00}
						],
						allprice:2.00,
						method:'余额',
						paystatus:'未付款'
					}	
				]
			}	
		}
		else if(orderstatus==='dealing'){
			resdata={
				name:'aaa',
				orders:[
					{
						status:'处理中',
						date:'2019-12-31',
						products:[
							{product:'橙汁',num:2,price:4.00}
						],
						allprice:4.00,
						method:'信用卡',
						paystatus:'已付款'
					}
				]
			}	
		}
		else if(orderstatus==='delivery'){
			resdata={
				name:'aaa',
				orders:[
					{
						status:'配送中',
						date:'2019-12-30',
						products:[
							{product:'橙汁',num:3,price:6.00}
						],
						allprice:6.00,
						method:'余额',
						paystatus:'已付款'
					}
				]
			}	
		}
		else if(orderstatus==='service'){
			resdata={
				name:'aaa',
				orders:[
					{
						status:'售后中',
						date:'2019-12-01',
						products:[
							{product:'橙汁',num:1,price:2.00}
						],
						allprice:2.00,
						method:'余额',
						paystatus:'已付款'
					}
				]
			}	
		}
		else{
			resdata={
				name:'aaa',
				orders:[
					{
						status:'未处理',
						date:'2020-01-01',
						products:[
							{product:'橙汁',num:1,price:2.00}
						],
						allprice:2.00,
						method:'余额',
						paystatus:'未付款'
					},
					{
						status:'处理中',
						date:'2019-12-31',
						products:[
							{product:'橙汁',num:2,price:4.00}
						],
						allprice:4.00,
						method:'信用卡',
						paystatus:'已付款'
					},
					{
						status:'配送中',
						date:'2019-12-30',
						products:[
							{product:'橙汁',num:3,price:6.00}
						],
						allprice:6.00,
						method:'余额',
						paystatus:'已付款'
					},
					{
						status:'已完成',
						date:'2019-12-26',
						products:[
							{product:'橙汁',num:1,price:2.00},
							{product:'草莓汁',num:1,price:3.00},
						],
						allprice:5.00,
						method:'余额',
						paystatus:'已付款'
					},
					{
						status:'售后中',
						date:'2019-12-01',
						products:[
							{product:'橙汁',num:1,price:2.00}
						],
						allprice:2.00,
						method:'余额',
						paystatus:'已付款'
					}
				]
			}	
		}
		
		res.json(resdata);
		return;
	}
});

module.exports = router;

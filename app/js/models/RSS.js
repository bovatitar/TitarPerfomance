
let RSS = {
	news:{
		state:{
			fullRSS:false,
			countRSS: 5,
		},
		rss:[
			{
				title:"",
				rss:'https://habr.com/rss/interesting/',
				img:"https://habr.com/images/logo.png"
			},
		],
		list:[

		]
	},
	work:{
		state:{
			fullRSS:false,
			countRSS: 5,
		},
		rss:[

			{
				title:"",
				rss:'https://www.weblancer.net/rss/jobs.rss?login=bovatitar',
				img:"https://www.weblancer.net/favicon.ico"
			},
			{
				title:"",
				rss:'https://freelansim.ru/rss/tasks',
				img:"https://freelansim.ru/images/logo.png"
			},
		],
		list:[

		]
	},
	current:{
		title:"",
		Content:"",
		HtmlContent:"",
		link:"",
		date:"",
		categoryList:[],
		img:"",
		dom:[]
	}
}

module.exports = RSS;

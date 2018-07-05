m = require(t.libs+'mithril.js');
RSS = require(t.models+'RSS.js');
RSSController = require(t.controllers+'RSS.js');
const {shell} = require('electron');
feedItem = require(t.views+"Rss/Elements/Item.js");

let NewsFeedView = {
	oninit: function(vnode){
		RSSController.getNews();
		setInterval(RSSController.getNews, 10000);
	},
	view: function(){
		return [
			m("h3","RSS"),
			m("div.uk-card-default",[
				m("div.uk-card-header",[
					m("span","Последние записи")
				]),
				m("div.uk-card-body ",[
					m("ul.uk-list",[
						RSS.news.list.slice(0,5).map((item)=>{
							return m(feedItem, {item:item})
						}),
						[{}].map(()=>{
							if(RSS.news.state.fullRSS == true){
								return RSS.news.list.slice(5,RSS.news.state.countRSS).map((item)=>{
									return m(feedItem, {item:item})
								});
							}
						})
					]),
					[{}].map(()=>{
						if(RSS.news.state.countRSS > 5){
							return m("div.uk-flex uk-flex-center",[
								m("a",[
									m("span",{onclick:()=>{RSS.news.state.fullRSS = false; RSS.news.state.countRSS = 5},"uk-icon":"icon:chevron-up"})
								])
							])
						}
					}),
					[{}].map(()=>{
						if(RSS.news.state.countRSS < RSS.news.list.length){
							return m("div.uk-flex uk-flex-center",[
								m("a",[
									m("span",{onclick:()=>{RSS.news.state.fullRSS = true; RSS.news.state.countRSS += 5},"uk-icon":"icon:chevron-down"})
								])
							])
						}
					})

				]),
			]),
			m("div.uk-card-default uk-margin-small-top",[
				m("div.uk-card-header",[
					m("span","Источники")
				]),
				m("div.uk-card-body",[
					m("ul.uk-list",[
						RSS.news.rss.map((item)=>{
							return m("li",[
								m("img.uk-margin-small-right",{src:item.img, width:16, height:16}),
								m("span",[
									m("a",{onclick:()=>{RSS.current = item;}},item.title),
								]),

							])
						})
					])
				]),
			])
		]

	}
}

module.exports = NewsFeedView;

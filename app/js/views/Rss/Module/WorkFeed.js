m = require(t.libs+'mithril.js');
RSS = require(t.models+'RSS.js');
RSSController = require(t.controllers+'RSS.js');
const {shell} = require('electron');

let WorkFeedView = {
	oninit: function(vnode){
		RSSController.getWorks();
		setInterval(RSSController.getWorks, 10000);
	},
	view: function(){
		return [
			m("h3","Фриланс"),
			m("div.uk-card-default",[
				m("div.uk-card-header",[
					m("span","Последние объявления")
				]),
				m("div.uk-card-body ",[
					m("ul.uk-list",[
						RSS.work.list.slice(0,5).map((item)=>{
							return m(feedItem, {item:item})
						}),
						[{}].map(()=>{
							if(RSS.work.state.fullRSS == true){
								return RSS.work.list.slice(5,RSS.work.state.countRSS).map((item)=>{
									return m(feedItem, {item:item})
								});
							}
						})
					]),
					[{}].map(()=>{
						if(RSS.work.state.countRSS > 5){
							return m("div.uk-flex uk-flex-center",[
								m("a",[
									m("span",{onclick:()=>{RSS.work.state.fullRSS = false; RSS.work.state.countRSS = 5},"uk-icon":"icon:chevron-up"})
								])
							])
						}
					}),
					[{}].map(()=>{
						if(RSS.work.state.countRSS < RSS.work.list.length){
							return m("div.uk-flex uk-flex-center",[
								m("a",[
									m("span",{onclick:()=>{RSS.work.state.fullRSS = true; RSS.work.state.countRSS += 5},"uk-icon":"icon:chevron-down"})
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
						RSS.work.rss.map((item)=>{
							return m("li",[
								m("img.uk-margin-small-right",{src:item.img, width:16, height:16}),
								m("span",[
									m("a",{onclick:()=>{shell.openExternal(item.link)}},item.title),
								]),

							])
						})
					])
				]),
			])
		]

	}
}

module.exports = WorkFeedView;

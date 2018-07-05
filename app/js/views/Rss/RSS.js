m = require('../../libs/mithril.js');
RSS = require(t.models+'RSS.js');
RSSController = require(t.controllers+'RSS.js');
NewsFeedView = require(t.views+'RSS/Module/NewsFeed.js');
WorkFeedView = require(t.views+'RSS/Module/WorkFeed.js');
const {shell} = require('electron');

let RSSView = {
	oninit: function(vnode){
	},
	view: function(){
		return [
			m("div.uk-width-1-4 uk-padding-small",{"uk-margin":""},[
				m(NewsFeedView)
			]),
			m("div.uk-width-1-4 uk-padding-small",{"uk-margin":""},[
				m(WorkFeedView)
			]),
			m("div.uk-width-1-2 uk-padding-small",{"uk-margin":""},[
				m("h3","Статья"),
				m("div.uk-card-default",[
					m("div.uk-card-header",[
						m("span",RSS.current.title)
					]),
					m("div.uk-card-body ",[
						RSS.current.dom
					]),
					[{}].map(() => {
						if(RSS.current.link != null && RSS.current.link != ""){
							return m("div.uk-card-footer ",[
								m("button.uk-button uk-button-primary",{onclick:()=>{shell.openExternal(RSS.current.link)}},"Подробнее")
							]);
						}
					})
				]),
			]),
		]
	}
}

module.exports = RSSView;

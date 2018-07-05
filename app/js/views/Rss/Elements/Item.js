m = require(t.libs+'mithril.js');
RSS = require(t.models+'RSS.js');
RSSController = require(t.controllers+'RSS.js');
const {shell} = require('electron');

let Item = {
	oninit: function(vnode){

	},
	view: function(vnode){
		let item = vnode.attrs.item;
		let date = new Date(new Date() - new Date(item.date));
		let dateString = "";
		if(date.getUTCDate()-1 > 0){dateString += date.getUTCDate()-1 + "д "}
		if(date.getUTCHours() > 0){dateString += date.getUTCHours() + "ч "}
		if(date.getUTCMinutes() > 0){dateString += date.getUTCMinutes() + "м"}else{dateString += date.getUTCSeconds() + "с"}
		return m("li.uk-flex uk-flex-top",[
			m("div.uk-width-expand uk-flex uk-flex-middle",{},[
				m("img.uk-margin-small-right",{src:item.img, width:16, height:16}),
				m("div",{style:"white-space: nowrap; overflow: hidden; text-overflow:ellipsis;"},[
					m("a",{onclick:()=>{RSS.current = item; RSSController.parseContent(item);}},item.title)
				])
			]),
			m("div.uk-flex uk-width-auto",dateString)
		])
	}
}

module.exports = Item;

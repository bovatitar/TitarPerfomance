RSS = require(t.models+"/RSS.js");
let Parser = require('rss-parser');
let parser = new Parser();
const {shell} = require('electron');

let RSSController = {
	getNews:async ()=>{
		let temp = [];
		for(let i = 0; i < RSS.news.rss.length; i++){
			let feed = await parser.parseURL(RSS.news.rss[i].rss);
			RSS.news.rss[i].title = feed.title;
			feed.items.forEach(item => {
				temp.push({
					title:item.title,
					content:item.contentSnippet,
					HtmlContent:item.content,
					link:item.link,
					date:item.pubDate,
					img:RSS.news.rss[i].img,
					dom:[]
				})
			});
		}
		temp.sort((a,b) => {
			let dateA = new Date(a.date)
			let dateB = new Date(b.date)
			if (dateA < dateB) {
				return 1;
			}
			if (dateA > dateB) {
			    return -1;
			}
			return 0;
		})
		RSS.news.list = temp;
		m.redraw();
		//console.log(RSS.work);
	},
	getWorks:async ()=>{
		let temp = [];
		for(let i = 0; i < RSS.work.rss.length; i++){
			let feed = await parser.parseURL(RSS.work.rss[i].rss);
			RSS.work.rss[i].title = feed.title;
			feed.items.forEach(item => {
				temp.push({
					title:item.title,
					content:item.contentSnippet,
					HtmlContent:item.content,
					link:item.link,
					date:item.pubDate,
					img:RSS.work.rss[i].img,
					dom:[]
				})
			});
		}
		temp.sort((a,b) => {
			let dateA = new Date(a.date)
			let dateB = new Date(b.date)
			if (dateA < dateB) {
				return 1;
			}
			if (dateA > dateB) {
			    return -1;
			}
			return 0;
		})
		RSS.work.list = temp;
		m.redraw();
		//console.log(RSS.news);

	},
	parseContent:(item)=>{
		let parser = new DOMParser();
		let dom = parser.parseFromString(item.HtmlContent, "text/html");
		let domImageList = dom.getElementsByTagName("img");
		let imageList = [];
		let tempDom = [];
		let myDom = [];
		let myItem = {
			tag:"",
			content:"",
			link:""
		}
		for(let i = 0; i < domImageList.length; i++){
			imageList.push(domImageList[i].src);
		}
		let domLinkList = dom.getElementsByTagName("a");
		let LinkList = [];
		for(let i = 0; i < domLinkList.length; i++){
			LinkList.push(domLinkList[i].href);
		}

		tempDom = dom.body.childNodes;
		myDom = RSSController.parseNode(tempDom);

		console.log(dom.body.childNodes)
		console.log(dom.body)
		console.log(myDom)
		item.dom = RSSController.createView(myDom);
	},
	parseNode:(tempDom)=>{
		let tempList = [];
		tempDom.forEach((node) => {
			let tag = node.nodeName;
			let content = node.innerText;
			let link;
			let nodes = [];
			let src;
			if(node.nodeName == "#text"){
				tag = "span";
				content = node.data;
			}
			if(node.nodeName == "IMG"){
				tag = "img";
				src = node.src;
			}
			if(node.nodeName == "A"){
				link = node.href;
			}
			if(node.childNodes.length > 0){
				nodes = RSSController.parseNode(node.childNodes);
			}
			tempList.push({
				tag: tag,
				content: content,
				link:link,
				src:src,
				nodes:nodes,
			});
		})
		return tempList;
	},
	createView:(dom)=>{
		let view = [];
		for(let i = 0; i < dom.length; i++){
			let tempElem;
			if(dom[i].nodes.length > 0){
				 tempElem = m(dom[i].tag,{src:dom[i].src,"href":dom[i].link},RSSController.createView(dom[i].nodes));
			}else{
				tempElem = m(dom[i].tag,{src:dom[i].src,"href":dom[i].link},dom[i].content);
			}
			view[i] = tempElem;
		}
		return view;
	}
}

module.exports = RSSController;

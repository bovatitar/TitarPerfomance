m = require('../../libs/mithril.js');
MenuView = require(t.views+'App/Menu.js');
ModalView = require(t.views+'App/Modal.js');
const {shell} = require('electron');
RSS = require(t.models+'RSS.js');
Bookmark = require(t.models+'Bookmark.js');
RSSView = require(t.views+'/RSS/RSS.js');

let LayoutView = {
	date: new Date(),
	hours: 0,
	minutes: 0,
	oninit: function(vnode){
		this.minutes = this.date.getMinutes();
		this.hours = this.date.getHours();
	},
	onupdate:()=>{
	},
	view: function(){
		return [
			m("div.uk-flex uk-flex-column uk-background-muted uk-flex-between",[
				m("div.uk-flex uk-flex-row uk-width-1-1 uk-flex-between",{"uk-height-viewport":"expand: true"},[
					m("div",m(MenuView)),
					m("div.uk-width-expand uk-flex uk-flex-row",[
						m(RSSView),
						// m("div.uk-width-1-4 uk-padding-small",{"uk-margin":""},[
						// 	m("div",[
						// 		m("h3","Закладки"),
						// 		m("div.uk-card-default",[
						// 			m("div.uk-card-header",[
						// 				m("span","Закладки")
						// 			]),
						// 			m("div.uk-card-body",[
						// 				m("ul.uk-list",[
						// 					Bookmark.list.slice(0,5).map((item)=>{
						// 						return m("li",[
						// 							m("img.uk-margin-small-right",{src:item.img, width:16, height:16}),
						// 							m("span",[
						// 								m("a",{onclick:()=>{shell.openExternal(item.link)}},item.title)
						// 							])
						// 						])
						// 					})
						// 				])
						// 			]),
						// 		])
						// 	]),
						// ])
					]),
				]),
				// m("div.uk-flex uk-flex-right  uk-background-secondary uk-light",[
				// 	m("span.uk-margin-small-right uk-margin-small-left",this.hours + ":" + this.minutes)
				// ])
			]),
			m(ModalView),
		]
	}
}

module.exports = LayoutView;

// <div class="uk-flex uk-flex-column uk-background-muted uk-flex-between">
// 	<div class="uk-flex uk-flex-row uk-width-1-1" uk-height-viewport="expand: true">
// 		<div class="">
// 			<a class="uk-navbar-toggle" uk-navbar-toggle-icon uk-toggle="target: #offcanvas-nav"></a>
// 		</div>
// 		<div class="uk-width-1-3 uk-padding-small">
// 			<h3>Ежедневные задачи</h3>
// 			<span class="uk-link">Добавить <span uk-icon="icon:plus"></span></span>
// 			<ul class="uk-list">
// 				<li class="uk-flex uk-flex-between uk-flex-middle">
// 					<span class="uk-width-expand">Задача 1</span>
// 					<input type="checkbox" class="uk-checkbox">
// 				</li>
// 				<li class="uk-flex uk-flex-between uk-flex-middle">
// 					<span class="uk-width-expand">Задача 2</span>
// 					<input type="checkbox" class="uk-checkbox">
// 				</li>
// 			</ul>
// 		</div>
// 		<div class="uk-width-1-3 uk-padding-small">
// 			<h3>Список дел</h3>
// 			<span class="uk-link">Добавить <span uk-icon="icon:plus"></span></span>
// 			<ul class="uk-list">
// 				<li class="uk-flex uk-flex-between uk-flex-middle">
// 					<span class="uk-width-expand">Задача 1</span>
// 					<input type="checkbox" class="uk-checkbox">
// 				</li>
// 				<li class="uk-flex uk-flex-between uk-flex-middle">
// 					<span class="uk-width-expand">Задача 2</span>
// 					<input type="checkbox" class="uk-checkbox">
// 				</li>
// 			</ul>
// 		</div>
// 		<div class="uk-width-1-3 uk-padding-small">
// 			<h3>Расписание</h3>
// 			<span class="uk-link">Добавить <span uk-icon="icon:plus"></span></span>
// 			<ul class="uk-list">
// 				<li>
// 					<span class="uk-link">9:45-11:15</span> - Мероприятие 1 <span uk-icon="icon:bell" uk-tooltip="09h 00m"></span>
// 				</li>
// 				<li>
// 					<span class="uk-link">11:30-13:00</span> - Мероприятие 2
// 				</li>
// 			</ul>
// 		</div>
// 	</div>
// 	<div class="uk-flex uk-flex-right  uk-background-secondary uk-light">
// 		<span class="uk-margin-small-right uk-margin-small-left">09.06.2018 | 16:28</span>
// 	</div>
// </div>

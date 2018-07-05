m = require('../../libs/mithril.js');
Menu = require(t.models+'App/Menu.js');

let MenuView = {
	oninit: function(vnode){
	},
	view: function(){
		return [
			m("a.uk-navbar-toggle",{"uk-navbar-toggle-icon":"","uk-toggle":"target: #offcanvas-nav"})
		]
	}
}

module.exports = MenuView;

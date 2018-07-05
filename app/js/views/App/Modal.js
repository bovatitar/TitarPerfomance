m = require('../../libs/mithril.js');
Modal = require(t.models+'App/Modal.js');


let MenuView = {
	oninit: function(vnode){
	},
	view: function(){
		return [
			m('div.uk-flex-top',{id:"modal","uk-modal":""},[
				m("div.uk-modal-dialog uk-modal-body uk-margin-auto-vertical",[
					m("button.uk-modal-close-default",{"uk-close":""}),
					m(Modal.current)
				])
			])
		]
	}
}

module.exports = MenuView;

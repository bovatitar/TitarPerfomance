Modal = require(t.models+"App/Modal.js");


let App = {
	setModal:(modal) => {
		Modal.current = modal;
	}
}

module.exports = App;

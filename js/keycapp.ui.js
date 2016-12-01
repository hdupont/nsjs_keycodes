keycapp.ui = (function() {
	
	function appendUi(appNode, appUiContainer) {
		appNode.innerHTML = appUiContainer.innerHTML;
	}
	
	return {
		init: function(appNodeId) {
			var appNode = document.getElementById(appNodeId);
			
			// On construit l'élément DOM de l'UI.
			_appNode = this.builder.buildDomElement();
			
			// On injecte l'élément DOM de l'UI dans le dom.
			appendUi(appNode, _appNode);
		}
	};
})();
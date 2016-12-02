keycapp.ui = (function() {
	
	var _output = null;
	
	function appendUi(appNode, appUiContainer) {
		appNode.innerHTML = appUiContainer.innerHTML;
	}
	
	return {
		init: function(appNodeId, output) {
			var appNode = document.getElementById(appNodeId);
			_output = output;
			
			// On construit l'élément DOM de l'UI.
			_appNode = this.builder.buildDomElement(_output);
			
			// On injecte l'élément DOM de l'UI dans le dom.
			appendUi(appNode, _appNode);
			output.start();
		},
		/**
		 * Attache au body ses écouteurs d'événements.
		 * @param {function} keydownListener un écouteur de keydown
		 * @param {function} keyupListener un écouteur de keyup
		 */
		addBodyListeners: function(keydownListener, keyupListener) {
			document.body.addEventListener("keydown", keydownListener);
			document.body.addEventListener("keyup", keyupListener);
		},
		/**
		 * Affiche la string passé en paramètre au-dessus des string précédemment tapées.
		 * @param {string} infoString la string afficher à l'utilisateur
		 */
		outputKeyPressedInfo: function(infoString) {			
			// On insère une nouvelle ligne.
			_output.println(infoString);
		}
	};
})();
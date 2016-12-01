keycapp.ui = (function() {
	
	var _keyPressedOutput = null;
	
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
			
			// On initialise les attributs de l'UI à partir du DOM
			_keyPressedOutput = document.getElementById("output");
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
			// On supprime le prompt de la dernière ligne.
			var lastLine = _keyPressedOutput.lastChild;
			var cursorPart = lastLine.firstChild;
			cursorPart.innerHTML = "";
			
			// On insère une nouvelle ligne.
			var infoLine = this.builder.buildOutputLine(infoString);
			_keyPressedOutput.appendChild(infoLine);
			infoLine.scrollIntoView();
		}
	};
})();
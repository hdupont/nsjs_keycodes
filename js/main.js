(function(ui, keys) {

	/**
	 * Enregistre les touches tapées et affiche les informations les concernant.
	 * @param {event} event l'événement généré par l'appuie (keydown) d'une touche.
	 */
	function bodyKeydownListener(event) {
		event.preventDefault();
		
		if (keys.wasAlreadyPressed(event)) {
			return;
		}
		else {
			keys.recordKey(event)
		}
		
		var infoString = keys.buildInfoString(event, event.key, event.keyCode)
		ui.outputKeyPressedInfo(infoString);
	}
	
	/**
	 * Vide l'historique des touches tapées.
	 */
	function bodyKeyupListener() {	
		keys.clear();
	}
	
	// On initialise l'interface utilisateur
	ui.init("keycapp");
	
	// On attache les listeners à L'UI.
	ui.addBodyListeners(bodyKeydownListener, bodyKeyupListener);
	
})(keycapp.ui, keycapp.keys);

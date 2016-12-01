/**
 * L'objet keys gère l'historique des touches tapées et les informations
 * qui leurs sont associées, principalement le fait que des touches de combinaisons
 * sont associées à la touche tapée.
 * 
 * Interface:
 * - wasAlreadyPressed
 * - recordKey
 * - clear
 * - buildInfoString
 * 
 * NB. Par convention le nom "privés" commence par un underscore. 
 */
keycapp.keys = (function() {
	return {
			
		// Interface publique
		// ------------------
			
		/**
		 * @param evt {event} l'événement généré par la touche tapée.
		 * @returns {boolean} true is la touche a déjà été tapée, false sinon.
		 */
		wasAlreadyPressed: function(evt) {
			return this._pressedKeys[evt.key] ? true : false;
		},
		/**
		 * Enregistre la touche qui a généré l'événement passé en paramètre.
		 * @param evt {event} l'événement généré par la touche tapée.
		 */
		recordKey: function(evt) {
			this._pressedKeys[evt.key] = true;
		},
		/**
		 * Vide l'historique des clés tapées.
		 */
		clear: function() {
			this._pressedKeys = {};
		},
		/**
		 * Construit la chaine de caractère qui sera affichée à l'utilisateur.
		 * @param evt {event} l'événement généré par la touche tapée.
		 * @param {string} key est la chaine correspondant à la touche tapée.
		 * @param {string} code est le code correspondant à la touche tapée.
		 * @param {array[string]} modifierKeys contient les touches de modifications
		 * qui étaient enfoncées lorsque la touche
		 * @returns
		 */
		buildInfoString: function (evt, key, code) {
			var infoString = "";
			infoString += key + " = " + this._displayedCharCode(key, code);
			var additionalModifierKeys = [];
			this._getActivatedModifierKeys(evt).forEach(function(mk) {
				if (key !== mk.key) {
					additionalModifierKeys.push(mk.label);
				}
			});
			
			if (additionalModifierKeys.length > 0) {
				infoString += " [" + additionalModifierKeys.join(", ") + "]";
			}
			return infoString;
		},
		
		// Attributs privés
		// ----------------
		
		// Historique des touches tapées.
		_pressedKeys : {},
		// Liste des touches de combinaisons.
		// cf. 
		_modifierKeys: [
			{name: "altKey", key:"Alt", label: "ALT"},
			{name: "ctrlKey", key:"Control", label: "CTRL"},
			{name: "shiftKey", key:"Shift", label: "MAJ"}
		],
		
		// Méthodes privés
		// ---------------
		
		/**
		 * Cf. @returns
		 * @param evt {event} l'événement généré par la touche tapée.
		 * @returns {array[object]} un tableau contenant toutes les touches
		 * de combinaison enfoncées quand la touche qui a générée l'événement
		 * a été tapée.
		 */
		_getActivatedModifierKeys: function(evt) {
			var activatedModifierKeys = [];
			this._modifierKeys.forEach(function(mk) {
				if (evt[mk.name]) {
					activatedModifierKeys.push(mk);
				}
			});
			return activatedModifierKeys;
		},
		/**
		 * Retourne le code du caractère que l'utilisateur voit à l'écran.
		 * Par exemple, "a" + MAJ = "A" et le code affiché est celui de "A".
		 * @param {string} key est la chaine correspondant à la touche tapée. 
		 * @param {string} code est le code correspondant à la touche tapée.
		 * @return {int} Le code du caractère apparaissant effectivement à l'écran.
		 */
		_displayedCharCode: function(key, code) {
			if (key.length > 1) {
				return code;
			}
			else {
				return key.charCodeAt(0);
			}
		}
	};
})();

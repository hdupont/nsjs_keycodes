keycapp.ui.builder = (function() {
	
	function buildTitle() {
		var title = document.createElement("h1");
		var titleText = document.createTextNode("Codes des touches");
		title.appendChild(titleText);
		
		return title;
	}
	
	function buildDescription() {
		var shortDescriptionElt = document.createElement("div");
		shortDescriptionElt.innerHTML = "Format d'affichage (avec touches de combinaisons = Alt, Maj ou Ctrl) : ";
		
		var formatElt = document.createElement("div");
		formatElt.style.fontFamily = "courier";
		formatElt.innerHTML = "> touche = code [touches de combinaisons]";
		formatElt.style.marginTop = "1em";
		formatElt.style.marginBottom = "1em";
			
		var descriptionElt = document.createElement("div");
		descriptionElt.appendChild(shortDescriptionElt);
		descriptionElt.appendChild(formatElt);
		
		return descriptionElt;
	}
	
	return {
		buildDomElement: function(output) {
			var appUiContainer = document.createElement("div");
			appUiContainer.appendChild(buildTitle());
			appUiContainer.appendChild(buildDescription());
			output.appendTo("");
			
			return appUiContainer;
		}
	};
})();

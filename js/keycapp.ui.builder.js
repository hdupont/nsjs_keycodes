keycapp.ui.builder = (function() {
	
	function buildTitle() {
		var title = document.createElement("h1");
		var titleText = document.createTextNode("Codes des touches");
		title.appendChild(titleText);
		
		return title;
	}

	function buildOutputLine(text) {
		var promptElt = document.createElement("span");
		promptElt.innerHTML = "> ";
		
		var textElt = document.createElement("span");
		textElt.innerHTML = text;
		
		var outputLine = document.createElement("div");
		outputLine.appendChild(promptElt);
		outputLine.appendChild(textElt);
		
		return outputLine
	}
	
	function buildOutput() {
		
		var outputElt = document.createElement("div");
		outputElt.setAttribute("id", "output");
		outputElt.style.fontFamily = "courier";
		outputElt.style.backgroundColor = "lightgrey";
		outputElt.style.width = "100%";
		outputElt.style.height = "20em";
		outputElt.style.overflow = "scroll";
		
		outputElt.appendChild(buildOutputLine(""));

		return outputElt;
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
		buildDomElement: function() {
			var appUiContainer = document.createElement("div");
			appUiContainer.appendChild(buildTitle());
			appUiContainer.appendChild(buildDescription());
			appUiContainer.appendChild(buildOutput());
			
			return appUiContainer;
		},
		
		buildOutputLine: buildOutputLine
	};
})();

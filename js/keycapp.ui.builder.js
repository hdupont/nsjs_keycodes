keycapp.ui.builder = (function() {
	
	function buildTitle() {
		var title = document.createElement("h1");
		var titleText = document.createTextNode("Codes des touches");
		title.appendChild(titleText);
		
		return title;
	}
	
	return {
		buildDomElement: function() {
			var appUiContainer = document.createElement("div");
			appUiContainer.appendChild(buildTitle());
//			appUiContainer.appendChild(buildChronoDisplay());
//			appUiContainer.appendChild(buildDescription());
//			appUiContainer.appendChild(buildButtonsMenu());
			
			return appUiContainer;
		}
	};
})();
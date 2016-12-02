var consapp = {};

consapp.JConsole = (function() {
	
	/*
	 * Prompt line
	 */
	
	function buildPromptLineDomElt(cursorDomElt, textDomElt) {
		var promptElt = document.createElement("span");
		promptElt.innerHTML = "> ";

		var outputLine = document.createElement("div");
		outputLine.appendChild(promptElt);
		outputLine.appendChild(textDomElt);
		outputLine.appendChild(cursorDomElt);
		
		return outputLine
	}
	function buildCursorDomElt() {
		var cursor = document.createElement("span");
		cursor.innerHTML = "|";
		return cursor;
	}
	function buildTextDomElt() {
		var text = document.createElement("span");
		return text;
	}
	function PromptLine(text) {
		this._text = text ? text : "";
		this._textDomElt = null;
		this._cursorDomElt = null;
		this._domElt = null;
		this._cursorInterval = null;
	}
	PromptLine.prototype.buildDomElt = function() {
		this._cursorDomElt = buildCursorDomElt();
		this._textDomElt = buildTextDomElt();
		this._domElt = buildPromptLineDomElt(this._cursorDomElt, this._textDomElt);
		return this._domElt;
	};
	PromptLine.prototype.removeCursor = function() {
		window.clearInterval(this._cursorInterval);
		this._cursorDomElt.innerHTML = "";
	};
	PromptLine.prototype.scrollIntoView = function() {
		this._domElt.scrollIntoView();
	};
	PromptLine.prototype.addText = function(text) {
		this._textDomElt.innerHTML = text;
	};
	/**
	 * Précondition: buildDomElt() a été effectué.
	 */
	PromptLine.prototype.startCursor = function() {
		var cursor = this._cursorDomElt;
		
		this._cursorInterval = setInterval(function() {
			if (cursor.style.display === "none") {
				cursor.style.display = "";
			}
			else {
				cursor.style.display = "none";
			}
		}, 500);
	}
	
	/*
	 * JConsole
	 */
	
	function buildJConsoleDomElt(promptLine) {
		var outputElt = document.createElement("div");
		outputElt.setAttribute("id", "consapp");
		outputElt.style.fontFamily = "courier";
		outputElt.style.backgroundColor = "lightgrey";
		outputElt.style.width = "100%";
		outputElt.style.height = "20em";
		outputElt.style.overflow = "scroll";
		outputElt.appendChild(promptLine.buildDomElt(""));

		return outputElt;
	}
	
	function JConsole() {
		this._domElt = null;
		this._promptLine = null;
	}
	JConsole.prototype.appendTo = function() {
		this._promptLine = new PromptLine();
		this._cursor = buildCursorDomElt();
		this._domElt = buildJConsoleDomElt(this._promptLine);
		document.body.appendChild(this._domElt);
	};
	JConsole.prototype.start = function() {
		this._promptLine.startCursor();
	};
	JConsole.prototype.println = function(text) {	
		this._promptLine.addText(text);
		this._promptLine.removeCursor();
		
		this._promptLine = new PromptLine(text);
		var lineDomElt = this._promptLine.buildDomElt();
		this._promptLine.startCursor();
		this._domElt.appendChild(lineDomElt);
		this._promptLine.scrollIntoView();
	};
	
	return JConsole;
})();
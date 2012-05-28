function parse() {
	document.removeChild(document.documentElement);
	document.write('<h1 style="font-size: 200px;">You\'re an idiot.</h1>');
}

// Parse the HTML7
window.onload = parse;

if (document.getElementById('notificat0r') == null) {
} else {
	var document_title_text = document.title.replace('their','the');
	(document.getElementById('notificat0r').innerHTML = document_title_text);
}

var element_anchor_name_lookup = document.URL.split('#')[1];
if (element_anchor_name_lookup == undefined) {
} else if (element_anchor_name_lookup == "previously-kai") {
	document.getElementsByTagName('body')[0].setAttribute('class','highlight');
} else {
}

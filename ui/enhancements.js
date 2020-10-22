(function() {
  var doc_url, document_title_text, element_anchor_name_lookup;

  if (document.getElementById('notificat0r') === null) {

  } else {
    document_title_text = document.title.replace('their', 'the');
    (document.getElementById('notificat0r').innerHTML = document_title_text);
  }

  doc_url = document.URL;

  element_anchor_name_lookup = doc_url.split('#')[1];

  if (element_anchor_name_lookup === void 0) {

  } else if (element_anchor_name_lookup === "previously-kai") {
    document.getElementsByTagName('body')[0].setAttribute('class', 'highlight');
  }

}).call(this);

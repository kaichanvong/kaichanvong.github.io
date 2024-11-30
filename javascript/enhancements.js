var socialMediaChannelsToggleLink1 = document.getElementById('select-icons-view1'),
	socialMediaChannelsToggleLink2 = document.getElementById('select-list-view2'),
	socialMediaDiv = document.getElementById('socialMediaChannelsCompleteContent'),
	linkedContent = document.getElementById('linkedContent'),
	socialMediaChannels = { 1: 'list' , 0: 'icons'},
	huh = "<li class=\"bi horizontal-placeholder\"><em>❓</em></li>",
	instagram_huh = "<li class=\"bi bi-instagram\"><a href=\"https://www.instagram.com/kaivong_com\" id=\"instagramLinkContent\" title=\"instagram of kai\" rel=\"me\"><span><strong>instagram</strong></span></a></li>",
	more = "<li class=\"bi horizontal-placeholder\"><em>…</em></li>",
	HTML_page_optimizr_selector = document.getElementById('downpage-markedup-lols3');

select_list_icons_view = '';
select_list_icons_view += '	<option value="select-icons-view">';
select_list_icons_view += '		<a href="#digitalIdentityContent" id="select-icons-view1" data-name="view-icons">icons</a>';
select_list_icons_view += '	</option>';
select_list_icons_view += '	<option value="select-list-view">';
select_list_icons_view += '		<a href="#digitalIdentityContent" id="select-list-view2" data-name="view-list">list</a>';
select_list_icons_view += '	</option>';
document.getElementById('select-list-icons-view').innerHTML = select_list_icons_view;

document.getElementById('HTMLPageContent').setAttribute('class','has-javascript');
linkedContent.innerHTML += instagram_huh;

kaivong_com_objs = { socialMediaDiv: { views: ['view-icons','view-list'] }  }
function toggle_views(){
	index_for_view = document.getElementById('select-list-icons-view').selectedIndex,
	new_view = kaivong_com_objs['socialMediaDiv']['views'][index_for_view];
	socialMediaDiv.setAttribute('class', new_view);
	socialMediaDiv.setAttribute('data-view', new_view);
	localStorage.setItem('kaivong_com_socialmedia_view', new_view);
};
if(localStorage.key('kaivong_com_socialmedia_view')){
	viewName = localStorage['kaivong_com_socialmedia_view'],
	viewIndex = kaivong_com_objs['socialMediaDiv']['views'].indexOf(viewName);
	document.getElementById('select-list-icons-view').selectedIndex = viewIndex;
	toggle_views();
}

javascript_enabled_message = document.getElementById('off-page-markedup-lols2');
javascript_enabled_message.setAttribute('class', 'off-page--HTML-only');
	
function addHackOneLineStylesheetOnHTML(pageElement){
	read_page = "<style> #off-page-markedup-lols2, #off-page-markedup-lols3, .🐰 { position: absolute; left: -9999px; } </style>";
	pageElement.innerHTML += read_page
}
addHackOneLineStylesheetOnHTML(HTML_page_optimizr_selector);
document.getElementById('select-list-icons-view').onchange = toggle_views;

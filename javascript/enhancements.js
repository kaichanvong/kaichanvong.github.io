      var socialMediaChannelsToggleLink1 = document.getElementById('select-icons-view1'),
          socialMediaChannelsToggleLink2 = document.getElementById('select-list-view2'),
          socialMediaDiv = document.getElementById('socialMediaChannelsCompleteContent'),
          linkedContent = document.getElementById('linkedContent'),
          socialMediaChannels = { 1: 'list' , 0: 'icons'};

      document.getElementById('topOfPageContent').setAttribute('class','has-javascript');
      kaivong_com_objs = { socialMediaDiv: { views: ['view-icons','view-list'] }  }
		
      function toggle_views(){
		var index_for_view = document.getElementById('select-list-icons-view').selectedIndex,
		new_view = kaivong_com_objs['socialMediaDiv']['views'][index_for_view];
		socialMediaDiv.setAttribute('class', new_view);
		socialMediaDiv.setAttribute('data-view', new_view);
      };            
      function adjustOnlineAddy(newInnerHTML){
      document.getElementById('current_online_addy').innerHTML = newInnerHTML.replace(https[1],'').replace('/','');
      };
//           socialMediaChannelsToggleLink1.onclick = toggle_views;
//           socialMediaChannelsToggleLink2.onclick = toggle_views;

//      https = ['http://', 'https://'];
//      link_names = ['kaichanvong.github.io/', 'kaivong.com/', 'kaichanvong.online']
//      dot_com_link = https[0] + link_names[1];
//      online_link = https[1] + link_names[2];

      var huh = "<li class=\"bi horizontal-placeholder\"><em>❓</em></li>",
          instagram_huh = "<li class=\"bi bi-instagram\"><a href=\"https://www.instagram.com/kaichanvong\" id=\"instagramLinkContent\" title=\"instagram of kai\" rel=\"me\"><span><strong>instagram</strong></span></a></li>",
          more = "<li class=\"bi horizontal-placeholder\"><em>…</em></li>";
		  linkedContent.innerHTML += instagram_huh;
//       linkedContent.innerHTML += huh;
//       linkedContent.innerHTML += more;
      javascript_enabled_message = document.getElementById('off-page-markedup-lols2');
      javascript_enabled_message.setAttribute('class', 'off-page--HTML-only');

      function addHackOneLineStylesheetOnHTML(pageElement){
        read_page = "<style> #off-page-markedup-lols2, .🐰 { position: absolute; left: -9999px; } </style>";
        pageElement.innerHTML += "<style> #off-page-markedup-lols2, .🐰 { position: absolute; left: -9999px; } </style>";         
      }
      
      var HTML_page_optimizr_selector = document.getElementById('downpage-markedup-lols3');
      addHackOneLineStylesheetOnHTML(HTML_page_optimizr_selector);

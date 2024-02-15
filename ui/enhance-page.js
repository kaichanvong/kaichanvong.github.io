document.getElementById('topOfPageContent').setAttribute('class','has-javascript');

kaivong_com_objs = { linkedContent: { views: ['view-icons','view-icons'] }  }

toggle_views = function(){
  var new_view = this.getAttribute('data-name');
  linkedContent.setAttribute('class', new_view);
  linkedContent.setAttribute('data-view', new_view);
  return false;
};            

adjustOnlineAddy = function(newInnerHTML){
document.getElementById('current_online_addy').innerHTML = newInnerHTML.replace(https[1],'').replace('/','');
};
var socialMediaChannelsToggleLink1 = document.getElementById('socialMediaChannelsToggleLink1'),
    socialMediaChannelsToggleLink2 = document.getElementById('socialMediaChannelsToggleLink2'),
    linkedContent = document.getElementById('socialMediaChannelsCompleteContent');
    socialMediaChannelsToggleLink1.onclick = toggle_views;
    socialMediaChannelsToggleLink2.onclick = toggle_views;

https = ['http://', 'https://'];
link_names = ['kaichanvong.github.io/', 'kaivong.com/', 'kaichanvong.online']
dot_com_link = https[0] + link_names[1];
online_link = https[1] + link_names[2];

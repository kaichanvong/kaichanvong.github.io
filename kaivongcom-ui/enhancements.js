function showDialogNode(){
    document.getElementsByTagName('dialog')[0].showModal();    
}
var css_pictures = {'_classname': 'pictures--css' };
function addClassName(groupName){ 
    document.getElementById(groupName).className += ' ' + css_pictures['_classname']; 
}    
function closeDialogNode(){document.getElementsByTagName('dialog')[0].close() };
function showCSSpictures(){ 
    addClassName('artfinder');
    addClassName('dressipi');
    addClassName('justgiving');
}
function scrollPage(){
    document.getElementById('bio').scrollIntoView();
    console.log('scrolling happens!');
    return false;
}

/*
  OutdoorGearlab Javascript Routines 
*/   

function emailWindow(theURL) {
	emailWin = window.open(theURL,'mailWin','width=990,height=550')
    emailWin.focus()
}

/* ROUTE RELATED FUNCTIONS */
function lookupRoute() {
   newWindow = window.open('/inc/lookup_route.php', 'newWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=990,height=700');
   newWindow.focus();
  }

/* PHOTO RELATED FUNCTIONS */
function albumPicker(formname, fieldname, previewname, photoalbumid) {
   newWindow = window.open('/inc/album_picker.php?photoalbumid='+photoalbumid+'&ppform='+formname+'&ppfield='+fieldname+'&pppname='+previewname, 'newWin', 'toolbar=no,location=no,scrollbars=yes,resizable=yes,width=990,height=750');
   newWindow.focus();
  }

//was formerly called zoomPhoto(photoid, albumid). Changed 11-26-06 by rjs
function albumZoom(photoid, albumid) {
   popup_url = '/inc/zoomalbum.php?pid='+photoid+'&photoalbumid='+albumid;
   zoomWindow = window.open(popup_url, 'zoomWin', 'toolbar=no,location=no,scrollbars=yes,resizable=yes,width=990,height=700');
   zoomWindow.focus();
  }

function blogPhotoPicker(formname, fieldname, previewname) {
   newWindow = window.open('/inc/blog_photo_picker.php?ppform='+formname+'&ppfield='+fieldname, 'newWin', 'toolbar=no,location=no,scrollbars=no,width=990,height=750')
   newWindow.focus()
  }

function contactphotoZoom() {
   popup_url = '/inc/zoom.php?pid='+this.document.editform.photoid.value;
   zoomWindow = window.open(popup_url, 'zoomWin', 'toolbar=no,location=no,scrollbars=no,width=990,height=700');
   zoomWindow.focus();
  }
  
function doSave() { 
 		   document.editform.submit();
		   document.getElementById("main").innerHTML = ""; //clear the area
		   var el = document.createElement('div');
		   el.id = 'updating-msg';
		   el.innerHTML = '<p><center><br/><h2>One Moment Please...</h2><br/><br/>Your changes are now being updated...<img src="/img/working.gif"><br/><br/></center></p>';
		   document.getElementById("main").appendChild(el);
	}

function doUpload() { 
 		   document.editform.submit();
		   document.getElementById("main").innerHTML = ""; //clear the area
		   var el = document.createElement('div');
		   el.id = 'loading-msg';
		   el.innerHTML = '<p><center><br/><h2>Photo Uploading</h2><br/><br/>Your image is now being uploaded and processed...<img src="/img/working.gif"><br/><br/></center></p>';
		   document.getElementById("main").appendChild(el);
	}

function doUploadFile() { 
 		   document.editform.submit();
		   document.getElementById("main").innerHTML = ""; //clear the area
		   var el = document.createElement('div');
		   el.id = 'loading-msg';
		   el.innerHTML = '<p><center><br/><h2>File Uploading</h2><br/><br/>Your file(s) are now being uploaded...<img src="/img/working.gif"><br/><br/></center></p>';
		   document.getElementById("main").appendChild(el);
	}

function formatting_help() {
   	newWindow = window.open('/inc/formatting_help.php','helpWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=1000,height=750')
   	newWindow.focus()
	}

function imageZoom(photoid) {
   popup_url = '/inc/zoom_image.php?pid='+photoid;
   zoomWindow = window.open(popup_url, 'zoomWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=990,height=700');
   zoomWindow.focus();
  }

function insert_url(edit_field) {
   newWindow = window.open('/inc/insert_url.php?ppform=editform&ppfield='+edit_field, 'newWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=990,height=200')
   newWindow.focus()
  }

function insert_photo(edit_field, route_code) {
   newWindow = window.open('/inc/insert_photov2.php?ppform=editform&ppfield='+edit_field+'&r='+route_code, 'newWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=990,height=750')
   newWindow.focus()
  }

function changeMemberPhoto() {
   newWindow = window.open('changeMemberPhoto.php', 'newWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=990,height=750')
   newWindow.focus()
  }

function uploadMemberPhoto() {
   newWindow = window.open('uploadMemberPhoto.php', 'newWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=990,height=750')
   newWindow.focus()
  }

function insert_video(edit_field) {
   newWindow = window.open('/inc/insert_video.php?ppform=editform&ppfield='+edit_field, 'newWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=990,height=500')
   newWindow.focus()
  }

function photoPicker(formname, fieldname, previewname) {
   newWindow = window.open('/inc/photo_picker.php?ppform='+formname+'&ppfield='+fieldname+'&pppname='+previewname, 'newWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=990,height=750')
   newWindow.focus()
  }

function photoZoom(dphotoid) {
   var popupw = 1000;
   var popuph = 750;
   var popup_url = '/inc/photo_zoom.php?dpid='+dphotoid;
   if (screen.width > 1120) {
	   popupw = 1100;
   }   	
   if (screen.height > 990) {
	   popuph = 975;
   }   	
   zoomWindow = window.open(popup_url, 'zoomWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width='+popupw+',height='+popuph);
   zoomWindow.focus();
  }


function photoView(dphotoid) {
   popup_url = '/inc/photo_view.php?dpid='+dphotoid;
   zoomWindow = window.open(popup_url, 'zoomWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=1000,height=750');
   zoomWindow.focus();
  }

function photoZoomXL(photoid) {
   popup_url = '/inc/zoomxl.php?pid='+photoid;
   zoomXLWindow = window.open(popup_url, 'zoomXLWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=1200,height=1100');
   zoomXLWindow.focus();
  }

function slidePicker(formname, fieldname, previewname, slideshowid) {
   newWindow = window.open('/inc/slide_picker.php?slideshowid='+slideshowid+'&ppform='+formname+'&ppfield='+fieldname+'&pppname='+previewname, 'newWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=990,height=750');
   newWindow.focus();
  }

function slideZoom(photoid, slideshowid) {
   popup_url = '/inc/zoomslide.php?pid='+photoid+'&slideshowid='+slideshowid;
   zoomWindow = window.open(popup_url, 'zoomWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=990,height=700');
   zoomWindow.focus();
  }

function titlephotoZoom() {
   popup_url = '/inc/zoom.php?pid='+this.document.editform.titlephotoid.value;
   zoomWindow = window.open(popup_url, 'zoomWin', 'menubar=0,directories=0,toolbar=0,location=0,scrollbars=1,resizable=1,width=990,height=700');
   zoomWindow.focus();
  }
  
  
  
/* AJAX FUNCTIONS */
var xhr = false;
var eventXPos, eventYPos;

function hideHoverHelp() {
		document.getElementById("hoverHelpWin").style.visibility = "hidden";
	}

function hoverHelp(keyword) {
	eventXPos = xMousePos;
	eventYPos = yMousePos;
	if (document.getElementById("hoverHelpWin")) {
		document.getElementById("hoverHelpWin").innerHTML = '';
	}
	else {
		var el = document.createElement('div');
		el.id = 'hoverHelpWin';
		el.innerHTML = '';
		document.body.appendChild(el);
	}
	getHoverHelp(keyword);
//	setTimeout('getHoverHelp(keyword)', 500);
	return false;
}

function getHoverHelp(keyword) {
	var url = '/inc/get_help.php?keyword=' + keyword;

	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	else {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) { }
		}
	}

	if (xhr) {
		xhr.onreadystatechange = showHoverHelp;
		xhr.open("GET", url, true);
		xhr.send(null);
	}
	else {
		alert("Sorry, but I couldn't create an XMLHttpRequest");
	}
}

function showHoverHelp() {
	var prevWin = document.getElementById("hoverHelpWin");
	
	if (xhr.readyState == 4) {
		prevWin.innerHTML = (xhr.status == 200) ? xhr.responseText + "<br/>eventxpos=" + eventXPos + ", eventyPos=" + eventYPos + "<br/>xpos=" + getXPos() + ", yPos=" + getYPos()+ "<br/>maxxpos=" + xMousePosMax + ", maxyPos=" + yMousePosMax: "There was a problem with the request " + xhr.status;
		prevWin.style.top = getYPos() + "px";
		prevWin.style.left = getXPos() + "px";
		prevWin.style.visibility = "visible";
	}
}

function getXPos() {
	var offset = 10; //10 pixel offset
	var winWidth = 400;
	var winXPos = parseInt(eventXPos) + offset;
	if ((winXPos + winWidth) > xMousePosMax) {
		winXPos = winXPos - offset - offset - winWidth;
		if (winXPos < 0) { winXPos = 0; }
	}
	return winXPos;
}

function getYPos() {
	var offset = 10; //10 pixel offset
	var winHeight = 200;
	var winYPos = parseInt(eventYPos) + offset;
	if ((winYPos + winHeight) > yMousePosMax) {
		winYPos = winYPos - offset - offset - winHeight;
		if (winYPos < 0) { winYPos = 0; }
	}
	return winYPos;
}

/* Mouse Position Functions */
var xMousePos = 0;
var yMousePos = 0;
var xMousePosMax = 0;
var yMousePosMax = 0;
var IE = document.all?true:false
// If NS -- that is, !IE -- then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE)
// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

function getMouseXY(e) {
  if (IE) { // if browser is IE
    xMousePos = event.clientX + document.body.scrollLeft
    yMousePos = event.clientY + document.body.scrollTop
	xMousePosMax = document.body.clientWidth+document.body.scrollLeft;
	yMousePosMax = document.body.clientHeight+document.body.scrollTop;

} else {  // not IE
    xMousePos = e.pageX
    yMousePos = e.pageY
	xMousePosMax = window.innerWidth+window.pageXOffset;
	yMousePosMax = window.innerHeight+window.pageYOffset;
  }  
  return true
}

var hoverHelpHTML = "This is the default"; //create global variable to hold hoverHelpHTML

function hoverHelp2(keyword) {
	var url = '/inc/get_help.php?keyword=' + keyword;
	var fakeResponse = "This is a fake response string.";

	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	else {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) { }
		}
	}

	if (xhr) {
		xhr.onreadystatechange = showHoverHelp2;
		xhr.open("GET", url, true);
		xhr.send(null);
		return hoverHelpHTML;
//		tt_obj.innerHTML = hoverHelpHTML;
	}
	else {
		alert("Error: Couldn't create an XMLHttpRequest. Please report to webmaster.");
	}
}

function showHoverHelp2() {
	
	if (xhr.readyState == 4) {
		hoverHelpHTML = (xhr.status == 200) ? xhr.responseText : "There was a problem with the request " + xhr.status;
	}
}


/*
  Wiki Style Edit Javascript Routines v1.1 Jun 2009.
*/   
function tag(tag) {
	var myField = document.editform.article_text;
	//IE support
	 if (document.selection) {
		//save window scroll position
		if (document.documentElement && document.documentElement.scrollTop)
			var winScroll = document.documentElement.scrollTop
		else if (document.body)
			var winScroll = document.body.scrollTop;
		myField.focus();
		sel = document.selection.createRange();
		if (sel.text.length == 0) { 
		  sel.text = sel.text + tag;
		} else {
		  sel.text = tag + sel.text + tag;
		}
		if (document.documentElement && document.documentElement.scrollTop)
			document.documentElement.scrollTop = winScroll
		else if (document.body)
			document.body.scrollTop = winScroll;
	}
	//MOZILLA/NETSCAPE support
	else if (myField.selectionStart || myField.selectionStart == '0') {
		//save textarea scroll position
		var textScroll = myField.scrollTop;
		
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		before = myField.value.substring(0, startPos)
		sel = myField.value.substring(startPos, endPos)
		after = myField.value.substring(endPos, myField.textLength)
		if (startPos == endPos) { 
		  selText = tag;
		  shiftPos = tag.length;
		} else {
		  selText = tag + sel + tag;
		  shiftPos = tag.length * 2;
		}
		myField.value = before + selText + after;
		myField.selectionStart = endPos + shiftPos;
		myField.selectionEnd = myField.selectionStart;
		//restore textarea scroll position
		myField.scrollTop = textScroll;
	} else {
		myField.value = myField.value + tag;
	}

	myField.focus();
}

function bracketTag(tag) {
	var myField = document.editform.article_text;
	//IE support
	 if (document.selection) {
		//save window scroll position
		if (document.documentElement && document.documentElement.scrollTop)
			var winScroll = document.documentElement.scrollTop
		else if (document.body)
			var winScroll = document.body.scrollTop;
		myField.focus();
		sel = document.selection.createRange();
		sel.text = "[" + tag + "]" + sel.text + "[/" + tag + "]";
		if (document.documentElement && document.documentElement.scrollTop)
			document.documentElement.scrollTop = winScroll
		else if (document.body)
			document.body.scrollTop = winScroll;
	}
	//MOZILLA/NETSCAPE support
	else if (myField.selectionStart || myField.selectionStart == '0') {
		//save textarea scroll position
		var textScroll = myField.scrollTop;
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		before = myField.value.substring(0, startPos)
		sel = myField.value.substring(startPos, endPos)
		after = myField.value.substring(endPos, myField.textLength)
		myField.value = before + "[" + tag + "]" + sel + "[/" + tag + "]" + after;
		myField.selectionStart = endPos + 5 + (tag.length * 2);
		myField.selectionEnd = myField.selectionStart;
		//restore textarea scroll position
		myField.scrollTop = textScroll;
	} else {
		myField.value = myField.value + "[" + tag + "]" + "[/" + tag + "]";
	}

	myField.focus();
}

function insertTag(tag, editField) {
	var myField = document.editform.editField;
	//IE support
	 if (document.selection) {
		//save window scroll position
		if (document.documentElement && document.documentElement.scrollTop)
			var winScroll = document.documentElement.scrollTop
		else if (document.body)
			var winScroll = document.body.scrollTop;
		myField.focus();
		sel = document.selection.createRange();
		sel.text = sel.text + tag;
		if (document.documentElement && document.documentElement.scrollTop)
			document.documentElement.scrollTop = winScroll
		else if (document.body)
			document.body.scrollTop = winScroll;
	}
	//MOZILLA/NETSCAPE support
	else if (myField.selectionStart || myField.selectionStart == '0') {
		//save textarea scroll position
		var textScroll = myField.scrollTop;
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		before = myField.value.substring(0, startPos)
		sel = myField.value.substring(startPos, endPos)
		after = myField.value.substring(endPos, myField.textLength)
		myField.value = before + sel + tag + after;
		myField.selectionStart = endPos + tag.length;
		myField.selectionEnd = myField.selectionStart;
		//restore textarea scroll position
		myField.scrollTop = textScroll;
	} else {
		myField.value = myField.value + tag;
	}

	myField.focus();
}


function insertTags(tagOpen, tagClose, sampleText) {
	var txtarea;
	if (document.editform) {
		txtarea = document.editform.main_text;
	} else {
		// some alternate form? take the first one we can find
		var areas = document.getElementsByTagName('textarea');
		txtarea = areas[0];
	}
	var selText, isSample = false;

	if (document.selection  && document.selection.createRange) { // IE/Opera

		//save window scroll position
		if (document.documentElement && document.documentElement.scrollTop) {
			var winScroll = document.documentElement.scrollTop;
		}
		else if (document.body)
			var winScroll = document.body.scrollTop;
		//get current selection  
		txtarea.focus();
		var range = document.selection.createRange();
		selText = range.text;
		//insert tags
		checkSelectedText();
		range.text = tagOpen + selText + tagClose;
		//mark sample text as selected
		if (isSample && range.moveStart) {
			if (window.opera)
				tagClose = tagClose.replace(/\n/g,'');
			range.moveStart('character', - tagClose.length - selText.length); 
			range.moveEnd('character', - tagClose.length); 
		}
		range.select();   
		//restore window scroll position
		if (document.documentElement && document.documentElement.scrollTop) {
			document.documentElement.scrollTop = winScroll
		}
		else if (document.body)
			document.body.scrollTop = winScroll;

	} else if (txtarea.selectionStart || txtarea.selectionStart == '0') { // Mozilla

		//save textarea scroll position
		var textScroll = txtarea.scrollTop;
		//get current selection
		txtarea.focus();
		var startPos = txtarea.selectionStart;
		var endPos = txtarea.selectionEnd;
		selText = txtarea.value.substring(startPos, endPos);
		//insert tags
		checkSelectedText();
		txtarea.value = txtarea.value.substring(0, startPos)
			+ tagOpen + selText + tagClose
			+ txtarea.value.substring(endPos, txtarea.value.length);
		//set new selection
		if (isSample) {
			txtarea.selectionStart = startPos + tagOpen.length;
			txtarea.selectionEnd = startPos + tagOpen.length + selText.length;
		} else {
			txtarea.selectionStart = startPos + tagOpen.length + selText.length + tagClose.length;
			txtarea.selectionEnd = txtarea.selectionStart;
		}
		//restore textarea scroll position
		txtarea.scrollTop = textScroll;
	} 

	function checkSelectedText(){
		if (!selText) {
			selText = sampleText;
			isSample = true;
		} else if (selText.charAt(selText.length - 1) == ' ') { //exclude ending space char
			selText = selText.substring(0, selText.length - 1);
			tagClose += ' '
		} 
	}

}

// jQuery Function to Handle Default Text in Search Form
$(document).ready(function()
{
    $(".defaultText").focus(function(srcc)
    {
        if ($(this).val() == $(this)[0].title)
        {
            $(this).removeClass("defaultTextActive");
            $(this).val("");
        }
    });
    
    $(".defaultText").blur(function()
    {
        if ($(this).val() == "")
        {
            $(this).addClass("defaultTextActive");
            $(this).val($(this)[0].title);
        }
    });
    
    $(".defaultText").blur();        
});

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    addFiles(this);
    }
};
xhttp.open("GET", "files.xml", true);
xhttp.send();

function addFiles(xml) 
{
	var stuff = "";
    var xmlDoc = xml.responseXML;
	
	var title = "";
	var text = "textContent" in document ? "textContent" : "innerText"; 
	title = document.getElementsByTagName("h1")[0][text];
	title = replaceAll(title, "\n", "");
	
	var arr = xmlDoc.getElementsByTagName("file");
	var arrayLength = arr.length;
	var filesArray = [];
	for (var i = 0; i < arrayLength; i++) 
	{
		var pages = arr[i].getElementsByTagName("page");
		for(var j = 0; j < pages.length; j++)
		{
			//var test = pages[j].childNodes[0].nodeValue;
			var test = pages[j].getElementsByTagName("name")[0].childNodes[0].nodeValue;
			//if you get an error on the line above "Unable to get property 'childNodes' of undefined or null reference" this means you screwed up the files.xml!! fix it!
			test = replaceAll(test, "\n", "");
			test = replaceAll(test, "\r", "");
			test = replaceAll(test, "\t", "");
			if(test == title)
			{
				filesArray.push(arr[i]);
			}
		}
	}
	filesArray.sort(compare);
	stuff += assembleList(filesArray, title);
	
    document.getElementById("files").innerHTML = stuff;
}

function compare(a,b) 
{
	var a_pages = a.getElementsByTagName("page");
	var b_pages = b.getElementsByTagName("page");
	var a_order = 0;
	var b_order = 0;
	for(var k = 0; k < a_pages.length; k++)
	{
		for(var p = 0; p < b_pages.length; p++)
		{
			if (a_pages[k].getElementsByTagName("name")[0].childNodes[0].nodeValue == b_pages[p].getElementsByTagName("name")[0].childNodes[0].nodeValue)
			{
				a_order = Number(a_pages[k].getElementsByTagName("order")[0].childNodes[0].nodeValue);
				b_order = Number(b_pages[p].getElementsByTagName("order")[0].childNodes[0].nodeValue);
				break;
			}
			if(a_order != 0) break;
		}
	}
  if (a_order < b_order)
    return -1;
  if (a_order > b_order)
    return 1;
  return 0;
}

function assembleList(arr, title)
{
	if(arr.length == 0)
	{
		return "";
	}
	var stuff = "<ul>";
	for(var i = 0; i < arr.length; i++)
	{
		var pages = arr[i].getElementsByTagName("page");
		var label = "";
		for(var g = 0; g < pages.length; g++) //see if there is a custom label
		{
			labels = pages[g].getElementsByTagName("label");
			if(labels.length > 0)
			{
				label = labels[0].childNodes[0].nodeValue;
				//break; //make sure it works first, then uncomment this (not sure if it will break out of both or just the current one - only want to break from the current one)
			}
		}
		if(label == "") label = arr[i].getElementsByTagName("label")[0].childNodes[0].nodeValue; //if there is no custom label
		label = replaceAll(label, "\n", "");
		label = replaceAll(label, "\r", "");
		label = replaceAll(label, "\t", "");
		if(label == "~")
		{
			stuff += "<li style='list-style-type:none'>";
			stuff += label;
			stuff += "</li>";
		}
		else
		{
			var link = arr[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
			link = replaceAll(link, "\n", "");
			link = replaceAll(link, "\r", "");
			link = replaceAll(link, "\t", "");
			label = replaceAll(label, "linkhere", link);
		
			stuff += "<li>";
			stuff += label;
			morefiles = arr[i].getElementsByTagName("file");
			stuff += assembleList(morefiles);
			stuff += "</li>";
		}
	}
	stuff += "</ul>";
	return stuff;
}

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function post(path, params, method) 
{
    method = method || "post"; /* Set method to post by default if not specified.*/

    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}
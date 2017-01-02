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
	
	var arr = xmlDoc.getElementsByTagName("file");
	var arrayLength = arr.length;
	var filesArray = [];
	for (var i = 0; i < arrayLength; i++) 
	{
		var pages = arr[i].getElementsByTagName("page");
		if(pages[0].nodeValue == title)
		{
			filesArray.push(arr[i]);
		}
	}
	arrayLength = filesArray.length;
	for(i = 0; i < arrayLength; i++)
	{
		var label = filesArray[i].getElementsByTagName("label")[0];
		var link = filesArray[i].getElementsByTagName("link")[0];
		label = label.replaceAll("linkhere", link);
		stuff += label;
		stuff += "\n";
	}
    document.getElementById("files").innerHTML = stuff;
    
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
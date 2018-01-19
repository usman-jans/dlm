var surl = "";
var furl = "";
var lot = "";
var tog = true;

var inumber = -1;
var maxImages = 0;

document.getElementsByTagName("img")[0].addEventListener("click", function(){

	if (inumber<0)
	{
		maxImages = document.getElementsByTagName("p").length;
	}
    
	if (inumber<=maxImages)
	{
	
	document.title = "Displaying image " + inumber;	
	console.log("surl");
	document.getElementsByTagName("img")[0].src = document.getElementById("link"+inumber).innerText;
	
	//document.location = document.getElementById("surl").innerText;
	inumber++;
		if (inumber>maxImages)
		{
			inumber = 0;
		}
	}
	
	
});

function toggle()
{
	if (tog == true)
	{
		tog = false;
	}
	else {
		tog = true;		
	}
	return tog;
}
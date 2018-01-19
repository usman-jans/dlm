var resource_url = 'https://jjinventorysystem.com/devtest/dlm_lmt/';
var lot = "";
var tog = true;

var inumber = 0;
var maxImages = 0;






document.getElementsByTagName("img")[0].addEventListener("click", function(){


    maxImages = document.getElementsByTagName("p").length;


    if (inumber<maxImages)
    {

        document.title = "Displaying image " + inumber;
        console.log("inumber " + inumber, ", number of p tags " + maxImages);
        document.getElementById("image").src = document.getElementById("link"+inumber).innerText;

        //document.location = document.getElementById("surl").innerText;
        inumber++;
        if (inumber==maxImages)
        {
            inumber = 0;
        }
    }


});

for (var o=0;o<document.getElementsByClassName("thumb").length;o++)
{
    document.getElementsByClassName("thumb")[o].setAttribute("onmouseover","showIt(this)");



}

function showIt(t)
{


    document.getElementById("image").src = t.src;
    var images = document.getElementsByTagName("img");
    for(var i=images.length-1; i>=0;i--)
    {
        if(images[i].naturalWidth==300)
        {
            images[i].parentNode.removeChild(images[i]);

        }
    }

}




document.getElementsByName("chassis_code")[0].value = document.getElementById("chassis").innerText.substr(0, document.getElementById("chassis").innerText.indexOf("-"));
document.getElementsByName("chassis_no")[0].value = document.getElementById("chassis").innerText.substr(document.getElementById("chassis").innerText.indexOf("-")+1);
var resource_url = 'https://jjinventorysystem.com/devtest/dlm_lmt/';
document.addEventListener('DOMContentLoaded', function() {
	var link = document.getElementById('atml');
    // onClick's logic below:
    link.onclick = function() {
        addAll2mylist();
    }
	
	
});

function addAll2mylist()
{
	/*
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {message: "Hi"}, function(response) {
    console.log(tabs[0].id);
  });
});
*/
	chrome.runtime.sendMessage(
	{
		"message":"addAllTomyList"},
	function (response)
		{
			console.log(response.message);
		}
	);
}
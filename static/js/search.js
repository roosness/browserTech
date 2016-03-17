search = {
  	init: function() {

		console.log('start search.js');
	  	var searchBar = document.querySelector('nav input[type="text"]');
	  	// console.log(searchBar.value);
	  	// var request = searchBar.value;
	  	// api.listRequest(request, 'list');
	  	console.log(searchBar.value);
	  	window.location.pathname =  "&#35;" + "list-" + searchBar.value;
  	}
}

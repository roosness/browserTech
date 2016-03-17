gedrag = {
	init: function() {
		console.log('gedrag.init();');
		gedrag.navigation();

		Handlebars.registerHelper('html_decoder', function(text) {
		  var str = unescape(text).replace(/&amp;/g, '&');

		  var div = document.createElement('div');
		  div.innerHTML = str;
		  return div.firstChild.nodeValue; 
		});
		
	},
	navigation: function() {
		console.log('gedrag.navigation()');
		var nav_button = document.querySelector('.nav_button');
		var nav = document.querySelector('nav');

		if (window.innerWidth < 600) {
			nav.classList.remove('regNav');
			nav_button.classList.remove('remove');
			nav.classList.add('sideNav');
			nav_button.href = "javascript:void(0)";

			nav_button.addEventListener('click', function(){
				nav.classList.toggle('navOpen');
			});
		}

		
	}
}
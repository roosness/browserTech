template = {
  init: function(route, context, boolean) {

  	console.log('template.init');
    var main = document.querySelector("main");
    var source = document.querySelector("#"+route+"-template").innerHTML;
    var template = Handlebars.compile(source);
    main.innerHTML = template(context);
    if(boolean) {
  			
  			var links = document.querySelectorAll('#graph-container');

        [].forEach.call(links, function(link) {
            link.classList.add('remove')
        });
  			console.log('prima');
  	}
  	else {
  		console.log('niet prima');
  	}
  }
}

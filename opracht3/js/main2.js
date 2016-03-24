(function () {

	var container = document.querySelector('main');

 	var app = {
 		init: function() {
 			template.compile();
 			routie({
 				'' : function() {
 					console.log('root')
 					data.getUsers();
 				},
 				'search:id' :function(id) {
 					console.log(id);
 					data.getSingleUser(id);
 				}
 			})
 			
 		}
 	}
 	var data = {
 		getUsers: function() {
 			
 			var request = new XMLHttpRequest();
 			request.onreadystatechange = function() {
 				
			 if(request.readyState === 4) {
			    if(request.status === 200) { 
			    	
			    	var data = JSON.parse(request.responseText);

			    	var newData = data.sort( function( a, b ) {
			    	// deze functie komt van: http://stackoverflow.com/questions/19259233/sorting-json-by-specific-element-alphabetically
					    return a.user.name.last < b.user.name.last ? -1 : a.user.name.last > b.user.name.last ? 1 : 0;
					});
			      template.list(newData, 'contactList')
			    } else {
			      container.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
			    } 
			  }
			}
			request.open('GET', 'contacts.json');
			request.send();

 		},
 		getSingleUser: function(value) {
 			var request = new XMLHttpRequest();
 			request.onreadystatechange = function() {
 				
			 if(request.readyState === 4) {
			    if(request.status === 200) { 
			    	
			    	var data = JSON.parse(request.responseText);
			    	var result = [];
			    	
			    	for(var i = 0; i<data.length;i++) {
			    		
			    		if((data[i].user.name.last).indexOf(value) > -1 || (data[i].user.name.first).indexOf(value) > -1) {
			    			result.push(data[i]);
			    		}
			    		
			    		
			    	}
			    	console.log(result.length)
			    	if(result.length == 0) {
			    		console.log('niets gevonden')
			    	}
			    	template.more(result, 'result')
			      // template.list(data)
			    } else {
			      container.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
			    } 
			  }
			}
			request.open('GET', 'contacts.json', name);
			request.send();

 		}
 	}
 	
 	var template = {
 		compile : function() {
 			  var main = document.querySelector("main");
		    var source = document.querySelector("#contactList-template").innerHTML;
		    var template = Handlebars.compile(source);
		    main.innerHTML = template({data:data});
 		},

 		// list: function(data, template) {
 	 //  	console.log('template.init');
	  //   var main = document.querySelector("main");
	  //   var source = document.querySelector("#"+template+"-template").innerHTML;
	  //   var template = Handlebars.compile(source);
	  //   main.innerHTML = template({data:data});
 		
 		// },
 		// more: function(data, template) {
 	 //  	console.log('template.init');
	  //   var main = document.querySelector("main");
	  //   var source = document.querySelector("#"+template+"-template").innerHTML;
	  //   var template = Handlebars.compile(source);
	  //   main.innerHTML = template({data:data});
 		
 		// }
 	}
 	search = {
  	init: function() {

		console.log('start search.js');
	  	var searchBar = document.querySelector('input[type="text"]');
	  	window.location.hash =  "search" + searchBar.value;
	  	
  	}
}

 	app.init();
 })()

(function () {
	var app = {
		init: function() {

			router.init();
			
		}
	}
	var phone = {
		open: function() {
			console.log('list');
			var people = document.querySelectorAll('.person');
			
			var phoneBlok = document.querySelector('.phone');
			var phoneLink = document.querySelector('.phone a');
			[].forEach.call(people, function(show) {

				show.addEventListener('click', function(event) {
					console.log('som')
					phoneBlok.classList.remove('show');
					setTimeout(function() {
						phoneBlok.classList.add('show');
					}, 200)

					var tel = this.childNodes[5].innerHTML;
					console.log(tel)
					phoneLink.setAttribute('href', "tel:+"+tel+"");


				})
			})
		}
	}
	var router = {
		init: function() {
			routie({
				'' : function() {
					template.init(false, false);
					
				},
				'search:id':function(id) {
					console.log(id);
					
					
					template.init(id, true)
				}
			})
		}
	}
	var data = {
		get: function(id) {
			console.log('data.get');
			var request = new XMLHttpRequest();
			var result = request.onreadystatechange = function() {
				console.log(request.readyState)
			 if(request.readyState === 4) {
			    if(request.status === 200) { 
			    	
			    	var data = JSON.parse(request.responseText);
			    	var newData = data.sort( function( a, b ) {
			    	// deze functie komt van: http://stackoverflow.com/questions/19259233/sorting-json-by-specific-element-alphabetically
					    return a.user.name.last < b.user.name.last ? -1 : a.user.name.last > b.user.name.last ? 1 : 0;
					});
					var currentName;
					var currentLetter;
					var prevName;
					var prevLetter
					for(var i = 0; i<newData.length;i++) {
						newData[i].user.letter = false;
						if(i != 0) {
							currentName = newData[i].user.name.last.slice(0,1);
							
							currentLetter = currentName.slice(0,1);
							if(prevLetter != currentLetter) {
								newData[i].user.letter = currentLetter;
							}
							 prevName = newData[i].user.name.last;
							prevLetter = prevName.slice(0,1);
							}
						}
					
				
					
					if(id) {
						var result = [];
			    	
				    	for(var i = 0; i<data.length;i++) {
				    		
				    		if((data[i].user.name.last).indexOf(id) > -1 || (data[i].user.name.first).indexOf(id) > -1) {
				    			result.push(data[i]);
				    		}
	
				    		
				    	}

				    	newData = result;
				    	
					}
			      
			      return newData;
			      
			    } else {
			      console.log('error');
			    } 

			    return newData;
			  }

			}
			request.open('GET', 'contacts.json');
			request.send();

			
			return result
		}
	}
	var template = {
		init: function(id, bool) {
			 var main = document.querySelector("main");
			 main.innerHTML == '';
		    var source = document.querySelector("#contactList-template").innerHTML;
		    var template = Handlebars.compile(source);
		    var templateData = data.get(id);
		    
		    main.innerHTML = template({data:templateData, back: bool, search: id});
		    list.open();

		    document.addEventListener('DOMContentLoaded', function() {
		    	console.log('loaded');
		        search.init(templateData);
		    }, false);
		}

	}
	var search = {
	  	init: function(data) {

	  		console.log(data);

		  	var searchBar = document.querySelector('input[type="text"]');
		  	searchBar.onfocus = function() {
		  		console.log(data);
			  		searchBar.onkeyup = function() {
			  		console.log('search');
			  		var input = searchBar.value;
			  		console.log(data);
			  		var list = document.querySelectorAll('.person');
			  		console.log(list);
			  		for(var i = 0; i<data.length;i++) {
						    		
			    		if((data[i].user.name.last).indexOf(input) >= -1 || (data[i].user.name.first).indexOf(input) >= -1) {
			    			
			    			console.log('match')
			    		}	
			    	}
			  	}
		  	}
	  	}
	}
	
 	app.init();
 })()

(function () {
	var app = {
		init: function() {
			console.log('start app');
			var main = document.getElementsByTagName('main')[0].innerHTML ;
			main= '';
			console.log(main);

			var dataset = data.get(function(dataset) {
				console.log(dataset);
				var html = template.init(dataset, function(html) {
					search.init();
					phone.open();
				});
				return dataset
			});

			

		}
	}

	var data = {
		get: function(callback) {
			console.log('data.get');
			var request = new XMLHttpRequest();
			request.onreadystatechange = function() {
				console.log(request.readyState)
				if(request.readyState === 4) {
				    if(request.status === 200) { 
				 	
				 		var data = JSON.parse(request.responseText);
				    	var newData = data.sort( function( a, b ) {
				    	// deze functie komt van: http://stackoverflow.com/questions/19259233/sorting-json-by-specific-element-alphabetically
						    return a.user.name.first < b.user.name.first ? -1 : a.user.name.first > b.user.name.first ? 1 : 0;
						});

						var currentName;
						var currentLetter;
						var prevName;
						var prevLetter
						for(var i = 0; i<newData.length;i++) {
							newData[i].user.letter = false;
							if(i != 0) {
								currentName = newData[i].user.name.first.slice(0,1);
								currentLetter = currentName.slice(0,1);
								if(prevLetter != currentLetter) {
									newData[i].user.letter = currentLetter;

								}
								 prevName = newData[i].user.name.first;
								prevLetter = prevName.slice(0,1);
								}
							}
						
				 		callback(newData)
				 		return newData
				  	}
				}
			}
			request.open('GET', 'contacts.json');
			request.send();
			
			
		}
	}
	var search = {
		init: function() {
			var searchBar = document.getElementsByTagName('input')[0];
			searchBar.onkeyup = function() {
				var list = document.getElementsByTagName('li');
				
				var input = searchBar.value;
				for(var i=0; i<list.length;i++) {
					
					if((list[i].childNodes[3].innerHTML).indexOf(input) > -1) {
						
						list[i].setAttribute('class', '');
						
					}
					else {
						list[i].setAttribute('class', 'noResult');

					}
				}
			}
			
		}
	}	
	var template = {
		init:function (dataset, callback) {
			var main = document.getElementsByTagName("main")[0];
			main.innerHTML == '';
		    var source = document.getElementsByTagName('script')[0].innerHTML;
		    var template = Handlebars.compile(source);
		    
		    
		    main.innerHTML = template({data:dataset});
		    callback(main);
		    return main
		}
	}
	var phone = {
		open: function() {
			console.log('list');
			var people = document.getElementsByTagName('li');
			
			var phoneBlok = document.getElementById('phone');

			var phoneLink = phoneBlok.childNodes[1];
			console.log(phoneLink);
			[].forEach.call(people, function(show) {

				show.addEventListener('click', function(event) {
					console.log('som')
					phoneBlok.setAttribute('class', '');
					setTimeout(function() {
						phoneBlok.setAttribute('class', 'show');
					}, 200)

					var tel = this.childNodes[5].innerHTML;
					console.log(tel)
					phoneLink.setAttribute('href', "tel:+"+tel+"");
				})
			})
		}
	}
	
 	app.init();
 })()

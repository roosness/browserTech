(function () {
	
	var phone = {
		open: function() {
			
			var people = document.getElementsByClassName('person');
			
			var phoneBlok = document.getElementById('phone');
			
			var phoneLink = phoneBlok.childNodes[1];
			
			[].forEach.call(people, function(show) {

				show.addEventListener('click', function(event) {
					
					phoneBlok.setAttribute('class', '');
					setTimeout(function() {
						phoneBlok.setAttribute('class', 'show');
					}, 200)

					var tel = this.childNodes[5].innerHTML;
					
					phoneLink.setAttribute('href', "tel:+"+tel+"");
				})
			})
		}
	}
	
 	phone.open();
 })()

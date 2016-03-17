var api = {

	baseURL: 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/',
	detail: 'detail/',
	koop:'/koop/',
	apiKEY: 'e2d60e885b8742d4b0648300e3703bd7',
	pagination : "/&page=1&pagesize=15",
	type: '/?type=koop&zo=/',

		listRequest : function (request, route) {
		
		var requestURL = api.baseURL + api.apiKEY + api.type + request + api.pagination;
		microAjax(requestURL, function (data) {
			data = JSON.parse(data);
			data = math.init(data);
			
			var templateData = {
				objects: data[1].Objects,
				title: data[1].Metadata.Titel,
				gemidgemiddelddelde:data[0].gemiddeld,
				hoogste:data[0].hoogste,
				laagste:data[0].laagste,
				gemiddeldPerc:data[0].gemiddeldPerc
			}
			var idArray = data[0].idArray;
			var prijzenArray = data[0].prijzenArray;
			console.log(idArray, prijzenArray)
			if(!document.createElement('svg').getAttributeNS){
  				document.write('Yourwser does not support SVG!');
  				template.init(route, templateData, false);
 		 	return;
			} else {
			console.log('ok');
			graph.init(prijzenArray, idArray);
			template.init(route, templateData, true);
		
		}

			
		});
	},
	singleRequest: function(request, route) {
		
		var requestURL = api.baseURL + api.detail + api.apiKEY + api.koop + request;
		
		microAjax(requestURL, function (data) {
		
			data = JSON.parse(data);
			var a = "Media-Foto";
			var templateData = data;

		template.init(route, templateData);

		})
	},
	request : function(requestURL) {
		
		var data = microAjax(requestURL, function(data) {

			data = JSON.parse(data);
			
		})
		// return data;
		
		return data
	}
}

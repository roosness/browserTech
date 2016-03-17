router = {
  init: function() {
    
    routie({
      'list-:id' : function() {
        template.init('loading');
        var a = document.querySelector("#chart");
      	a.style="display:block";
        var id = window.location.hash;
            id = id.slice( 6 );
            console.log(id);
        api.listRequest(id, 'list');
      }, 
      'detail-:id' : function() {
      	var a = document.querySelector("#chart");
      	a.style="display:none";
        template.init('loading');
        var id = window.location.hash;
            id = id.slice( 8 );
            console.log(id);
        api.singleRequest(id, 'detail');
      }
      
      
  })
  }
}


// 'steden/:id' : function() {
//         var id = window.location.hash;
//             id = id.slice( 8 );
          
//           console.log(id)

//        api.listRequest(id, 'lijst');
//       },
//       ':id' :function() {
//        template.init('detail');
//       } 
//     })